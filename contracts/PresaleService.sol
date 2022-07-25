// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ReferralService.sol";
import "./SolarToken.sol";
import "./interface/IRouter02.sol";

contract PresaleService is ERC20PresetMinterPauser("PresaleSLR", "PresaleSLR"), ReentrancyGuard, Ownable {
  using SafeCast for uint256;
  using SafeERC20 for IERC20;

  /**
   * На этот адрес будет отправлена ликвидность после листинга
   */
  address public constant deadAddress = 0x000000000000000000000000000000000000dEaD;
  mapping(address => bool) public joined;

  /**
   * @dev Discount for discount for ITO members
   */
  mapping(address => uint256) public discount;
  uint256 public constant discountDivider = 10000;

  address public immutable referralContractAddress;
  address public tokenAddress;
  address public routerAddress;
  uint8 public constant referralActionBuy = 1;
  uint256 public constant referrerRewardDivider = 10000;
  uint256 public constant referrerRewardPercent = 100;
  bool public isLaunched;
  uint256[4] public phasesTime;
  uint256[3] private phasesAmount;
  uint256[3] private phasesPrices;
  uint256[2] private phasesMaxAmount;
  uint256 public launchingTokenPrice = 1 wei;

  event SetPhases(uint256[4] phasesTime, uint256[3] phasesPrices, uint256[2] phasesMaxAmount, uint256 launchingPrice);
  event AddLiquidity(uint256 tokenAmount, uint256 ethAmount);
  event Burn(uint256 amount, address indexed owner);
  event Buy(uint256 amountIn, uint256 amountOut, uint8 phase, address indexed owner);
  event Join(address owner);
  event SetDiscount(address indexed owner, uint256 discount);
  event UpdateTokenAddress(address tokenAddress);
  event UpdateRouterAddress(address tokenAddress);
  event TryTransfer(address from, address to, uint256 amount);

  constructor(address _referralContractAddress) {
    referralContractAddress = _referralContractAddress;
  }

  function getPhaseAmountOut(address owner, uint256 amountIn, uint8 phase) public view returns(uint256) {
    require(phase > 0 && phase < 4);

    uint256 phasePrice = phasesPrices[phase - 1];

    return (amountIn * 10**18) / (phasePrice * (discountDivider - discount[owner]) / discountDivider);
  }

  function getPhase() public view returns (uint8 phase) {
    if (phasesTime[0] < block.timestamp) {
      phase = 1;
      if (phasesTime[1] < block.timestamp || phasesAmount[0] >= phasesMaxAmount[0]) {
        phase = 2;
        if (phasesTime[2] < block.timestamp || phasesAmount[1] >= phasesMaxAmount[1]) {
          phase = 3;
          if (phasesTime[3] < block.timestamp) {
            phase = 4;
          }
        }
      }
    }
  }

  function getPrices() public view returns (uint256[3] memory prises) {
    prises = phasesPrices;
  }

  function getPhasesMaxAmount() public view returns (uint256[2] memory phases) {
    phases = phasesMaxAmount;
  }

  function getPhasesAmount() public view returns (uint256[3] memory phases) {
    phases = phasesAmount;
  }

  function getPhasesTime() public view returns (uint256[4] memory phases) {
    phases = phasesTime;
  }

  function getCurrentPhaseEndTime() public view returns (uint32 endTime) {
    uint8 currentPhase = getPhase();

    if (currentPhase == 4) {
      return 0;
    }

    endTime = phasesTime[currentPhase].toUint32();
  }

  function getCurrentPhaseCountdown() public view returns (uint32 countdown) {
    uint8 currentPhase = getPhase();

    if (currentPhase == 4) {
      return 0;
    }

    countdown = (phasesTime[currentPhase] - block.timestamp).toUint32();
  }

  function getMyDiscount() public view returns (uint256 myDiscount) {
    address owner = _msgSender();

    myDiscount = discount[owner];
  }

  function join(address _referrer) public nonReentrant {
    require(getPhase() == 0, "PresaleService: White list is closed");

    address owner = _msgSender();

    ReferralService(referralContractAddress).addReferral(_referrer, owner);

    joined[owner] = true;

    emit Join(owner);
  }

  function buy(uint256 _amountOut, address _referrer) public payable nonReentrant {
    address owner = _msgSender();
    require(joined[owner], "PresaleService: not on the white list");

    uint8 phase = getPhase();
    require(phase > 0 && phase < 4, "PresaleService: Presale is closed");
    uint256 amountIn = msg.value;
    require(amountIn >= 0, "PresaleService: zero emount");
    
    uint256 presaleTokenAmount = getPhaseAmountOut(owner, amountIn, phase);

    require(_amountOut == presaleTokenAmount, "PresaleService: error A");

    _mint(owner, presaleTokenAmount);
    phasesAmount[phase - 1] += presaleTokenAmount;

    uint128 referrerReward = (presaleTokenAmount * referrerRewardPercent / referrerRewardDivider).toUint128();

    ReferralService(referralContractAddress).addReferral(_referrer, owner);
    SolarToken(tokenAddress).mint(referralContractAddress, referrerReward);
    ReferralService(referralContractAddress).saveReferrerReward(
      owner,
      referrerReward,
      referralActionBuy
    );

    emit Buy(amountIn, _amountOut, phase, owner);
  }

  function transfer(address to, uint256 amount) public override returns (bool) {
    emit TryTransfer(_msgSender(), to, amount);

    revert('');
  }

  function transferFrom(
    address from,
    address to,
    uint256 amount
  ) public virtual override returns (bool) {
    emit TryTransfer(from, to, amount);

    revert('');
  }

  /**
    * @dev Allow a user to burn a number of presale tokens and withdraw the corresponding number of real tokens.
    */
  function burn(uint256 _amount) public override nonReentrant {
    require(getPhase() == 4, "PresaleService: Presale is not closed");

    if (isLaunched == false) {
      addLiquidity();
    }

    address owner = _msgSender();

    _burn(owner, _amount);
    SolarToken(tokenAddress).mint(owner, _amount);

    emit Burn(_amount, owner);
  }

  function burnAll() public {
    uint256 amount = balanceOf(_msgSender());

    burn(amount);
  }

  function addLiquidity() private {
    require(getPhase() == 4, "PresaleService: Presale is not closed");
    require(isLaunched == false, "PresaleService: Liquidity alredy added");

    uint256 amountETH = address(this).balance;
    uint256 amountToken = (amountETH * 10**18) / launchingTokenPrice;

    SolarToken(tokenAddress).mint(address(this), amountToken);

    IERC20(tokenAddress).safeApprove(routerAddress, amountToken);
    IRouter02(routerAddress).addLiquidityETH{value: amountETH}(
      tokenAddress,
      amountToken,
      amountToken,
      amountETH,
      deadAddress,
      block.timestamp
    );

    isLaunched = true;

    emit AddLiquidity(amountToken, amountETH);
  }

  function setDiscount(address _owner, uint256 _discount) public onlyOwner {
    require(_discount < discountDivider, "Incorrect discount");

    discount[_owner] = _discount;

    emit SetDiscount(_owner, _discount);
  }

  function setPhases(uint256[4] memory _phasesTime, uint256[3] memory _phasesPrices, uint256[2] memory _phasesMaxAmount, uint256 _launchingPrice) public onlyOwner {
    require(phasesTime[3] < block.timestamp || phasesTime[3] == 0, "Presale ended");

    require(
      _phasesPrices[0] < _phasesPrices[1]
      && _phasesPrices[1] < _phasesPrices[2]
      && _phasesPrices[2] < _launchingPrice,
      "Invalid prises"
    );

    require(
      _phasesTime[0] < _phasesTime[1]
      && _phasesTime[1] < _phasesTime[2]
      && _phasesTime[2] < _phasesTime[3],
      "Invalid time"
    );

    phasesTime = _phasesTime;
    phasesMaxAmount = _phasesMaxAmount;
    phasesPrices = _phasesPrices;
    launchingTokenPrice = _launchingPrice;

    emit SetPhases(_phasesTime, _phasesPrices, _phasesMaxAmount, _launchingPrice);
  }

  function setTokenAddress(address _tokenAddress) public onlyOwner {
    tokenAddress = _tokenAddress;

    emit UpdateTokenAddress(_tokenAddress);
  }

  function setRouterAddress(address _routerAddress) public onlyOwner {
    routerAddress = _routerAddress;

    emit UpdateRouterAddress(_routerAddress);
  }
}
