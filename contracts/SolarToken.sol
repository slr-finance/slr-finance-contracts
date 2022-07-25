// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IPair.sol";
import "./interface/IFactory.sol";
import "./lib/SwapMath.sol";
import "./ReferralService.sol";
import "./MilkyWay/MilkyWay.sol";

contract SolarToken is ERC20("SOLAR", "SLR"), AccessControlEnumerable, Ownable {
  using SafeCast for uint256;

  uint8 public referralActionTransfer = 3;
  uint8 public referralActionSell = 4;
  uint8 public referralActionBuy = 5;
  uint256 public referrerRewardDivider = 10000;
  uint256 public referrerRewardActionBuyPercent = 1500; // 15% = 1 200; 100% = 10 000
  uint256 public referrerRewardActionSellPercent = 500; // 5% = 500; 100% = 10 000
  uint256 public referrerRewardActionTransferPercent = 1000; // 10% = 10 00; 100% = 10 000
  uint256 public taxTransferFee = 1000; // 100% = 10 000
  uint256 public taxSellFee = 1500; // 100% = 10 000
  uint256 public taxBuyFee = 900; // 100% = 10 000
  uint256 public maxTxAmount = 100000 * 10 ** 18; // 100k SLR
  uint256 public minAmountToSell = 1000 * 10 ** 18; // 1k SLR
  uint256 public maxAmountToSell = 2000 * 10 ** 18; // 2k SLR
  uint256 public pairSwapFee = 200;
  address public milkyWayAddress;
  address public referralServiceAddress;
  address public pairedTokenAddress;
  uint256 public constant MIN_TX_AMOUNT_HARD_CAP = 1 * 10 ** 18;
  bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
  address public immutable mainPairAddress;
  mapping(address => bool) public pairAddresses;
  mapping(address => bool) public blackList;
  mapping(address => bool) private excludedFromFee;
  mapping(address => bool) private excludedFromAntiWhale;

  event UpdateMaxTxAmount(uint256 newAmount);
  event UpdateSellAmounts(uint256 newMinAmount, uint256 maxMinAmount);
  event SetMilkyWayAddress(address milkyWayAddress);
  event IncludeInAntiWhale(address account);
  event ExcludeFromAntiWhale(address account);
  event IncludeInFee(address account);
  event ExcludeFromFee(address account);
  event SetReferralServiceAddress(address referralServiceAddress);
  event UpdatePairSwapFee(uint256 fee);
  event UpdateTaxSellFee(uint256 fee);
  event UpdateTaxBuyFee(uint256 fee);
  event UpdateTaxTransferFee(uint256 fee);
  event SellTax(uint256 amountIn, uint256 amountOut, address indexed milkyWayAddress);
  event UpdateReferrerRewardPercents(uint256 referrerRewardActionBuyPercent, uint256 referrerRewardActionSellPercent, uint256 referrerRewardActionTransferPercent);
  event IncludeInBlackList(address account);
  event ExcludeFromBlackList(address account);
  event SetPairAddress(address pairAddress, bool val);

  constructor(address _factoryAddress, address _pairedTokenAddress) {
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setupRole(MINTER_ROLE, _msgSender());
    
    mainPairAddress = IFactory(_factoryAddress).createPair(address(this), _pairedTokenAddress);
    pairAddresses[mainPairAddress] = true;
    
    excludedFromFee[_msgSender()] = true;
    excludedFromFee[address(this)] = true;
    excludedFromAntiWhale[msg.sender] = true;
    excludedFromAntiWhale[address(this)] = true;

    pairedTokenAddress = _pairedTokenAddress;
  }

  /**
    * @dev Creates `amount` new tokens for `to`.
    *
    * See {ERC20-_mint}.
    *
    * Requirements:
    *
    * - the caller must have the `MINTER_ROLE`.
    */
  function mint(address _to, uint256 _amount) public virtual {
    require(hasRole(MINTER_ROLE, _msgSender()), "SolarToken: must have minter role to mint");

    require(blackList[_to] == false, "SolarToken: This address is blacklisted. Contact support at slr.finance");

    _mint(_to, _amount);
  }

  function milkyWay() public {    
    uint256 amountIn = balanceOf(address(this));

    if (amountIn > minAmountToSell) {
      if (amountIn > maxAmountToSell) {
        amountIn = maxAmountToSell;
      }

      if (milkyWayAddress != address(0)) {
        uint256 amountOut = SwapMath.getAmountOutByPair(
          amountIn,
          mainPairAddress,
          address(this),
          pairedTokenAddress,
          pairSwapFee
        );

        (,, uint256 amountOut0, uint256 amountOut1) = SwapMath.sortTokensAmount(
          address(this),
          pairedTokenAddress,
          uint256(0),
          amountOut
        );

        _transfer(address(this), mainPairAddress, amountIn);

        IPair(mainPairAddress).swap(amountOut0, amountOut1, milkyWayAddress, new bytes(0));

        emit SellTax(amountIn, amountOut, milkyWayAddress);
      }
    }
  }

  function transferWithFee(address _from, address _to, uint256 _amount) private returns (bool) {
    if (!isExcludedFromAntiWhale(_from) && !isExcludedFromAntiWhale(_to)) {
      require(_amount <= maxTxAmount, "SolarToken: Transfer amount exceeds the maxTxAmount");
    }

    (uint256 feeAmount, uint256 referralAmount, uint256 transferAmount, uint8 refAction) = calcFee(_from, _to, _amount);
    _transfer(_from, _to, transferAmount);

    if (feeAmount > 0) {
      _transfer(_from, referralServiceAddress, referralAmount);
      _transfer(_from, address(this), feeAmount);

      ReferralService(referralServiceAddress).saveReferrerReward(_from, referralAmount.toUint128(), refAction);
    }

    milkyWay();

    return true;
  }

  function transfer(address _to, uint256 _amount) public virtual override(ERC20) returns (bool) {
    address owner = _msgSender();
    require(blackList[owner] == false, "SolarToken: This address is blacklisted. Contact support at slr.finance");

    return transferWithFee(owner, _to, _amount);
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _amount
  ) public virtual override(ERC20) returns (bool) {
    address spender = _msgSender();
    require(blackList[_from] == false, "SolarToken: This address is blacklisted. Contact support at slr.finance");

    _spendAllowance(_from, spender, _amount);

    return transferWithFee(_from, _to, _amount);
  }

  function calculateTaxFee(address _from, address _to, uint256 _amount) internal view returns(uint256, uint8, uint256) {
    if (pairAddresses[_to]) {
      return (_amount * taxSellFee / 10000, referralActionSell, referrerRewardActionSellPercent);
    } else if (pairAddresses[_from]) {
      return (_amount * taxBuyFee / 10000, referralActionBuy, referrerRewardActionBuyPercent);
    }

    return (_amount * taxTransferFee / 10000, referralActionTransfer, referrerRewardActionTransferPercent);
  }

  function calcFee(address _from, address _to, uint256 _amount) internal view returns(uint256 feeAmount, uint256 referralAmount, uint256 transferAmount, uint8 refAction) {
    // if any account belongs to isExcludedFromFee account then remove the fee
    if (isExcludedFromFee(_from) || isExcludedFromFee(_to)) {
      transferAmount = _amount;
    } else {
      (uint256 taxFeeAmount, uint8 refAction_, uint256 referrerPercent) = calculateTaxFee(_from, _to, _amount);

      refAction = refAction_;
      referralAmount = taxFeeAmount * referrerPercent / referrerRewardDivider;
      feeAmount = taxFeeAmount - referralAmount;
      transferAmount = _amount - taxFeeAmount;
    }
  }

  function setTaxTransferFee(uint256 _fee) public onlyOwner {
    require(_fee < 10000);

    taxTransferFee = _fee;

    emit UpdateTaxTransferFee(_fee);
  }

  function setTaxSellFee(uint256 _fee) public onlyOwner {
    require(_fee < 10000);

    taxSellFee = _fee;

    emit UpdateTaxSellFee(_fee);
  }

  function setTaxBuyFee(uint256 _fee) public onlyOwner {
    require(_fee < 10000);

    taxBuyFee = _fee;

    emit UpdateTaxBuyFee(_fee);
  }

  function setMilkyWayAddress(address _address) public onlyOwner {
    milkyWayAddress = _address;

    emit SetMilkyWayAddress(_address);
  }

  function setReferralServiceAddress(address _address) public onlyOwner {
    referralServiceAddress = _address;

    emit SetReferralServiceAddress(_address);
  }

  function isExcludedFromFee(address _account) public view returns (bool) {
    return excludedFromFee[_account];
  }

  function excludeFromFee(address _account) public onlyOwner {
    excludedFromFee[_account] = true;

    emit ExcludeFromFee(_account);
  }

  function includeInFee(address _account) public onlyOwner {
    excludedFromFee[_account] = false;

    emit IncludeInFee(_account);
  }

  function isExcludedFromAntiWhale(address _account) public view returns (bool) {
    return excludedFromAntiWhale[_account];
  }

  function excludeFromAntiWhale(address _account) public onlyOwner {
    excludedFromAntiWhale[_account] = true;

    emit ExcludeFromAntiWhale(_account);
  }

  function includeInAntiWhale(address _account) public onlyOwner {
    excludedFromAntiWhale[_account] = false;

    emit IncludeInAntiWhale(_account);
  }

  function setMaxTxAmount(uint256 _maxTxAmount) external onlyOwner {
    require(_maxTxAmount >= MIN_TX_AMOUNT_HARD_CAP, "maxTxAmount have to be greater than 1 slr");
    maxTxAmount = _maxTxAmount;

    emit UpdateMaxTxAmount(_maxTxAmount);
  }

  function setAmountToSell(uint256 _minAmountToSell, uint256 _maxAmountToSell) public onlyOwner {
    require(_minAmountToSell < _maxAmountToSell, "Incorrect amounts");

    minAmountToSell = _minAmountToSell;
    maxAmountToSell = _maxAmountToSell;

    emit UpdateSellAmounts(_minAmountToSell, _maxAmountToSell);
  }

  function setPairSwapFee(uint256 _fee) public onlyOwner {
    pairSwapFee = _fee;

    emit UpdatePairSwapFee(_fee);
  }

  function setReferrerRewardPercents(uint256 _referrerRewardActionBuyPercent, uint256 _referrerRewardActionSellPercent, uint256 _referrerRewardActionTransferPercent) public onlyOwner {
    require(
      referrerRewardDivider > _referrerRewardActionBuyPercent
      && referrerRewardDivider > _referrerRewardActionSellPercent
      && referrerRewardDivider > _referrerRewardActionTransferPercent
    );

    referrerRewardActionBuyPercent = _referrerRewardActionBuyPercent;
    referrerRewardActionSellPercent = _referrerRewardActionSellPercent;
    referrerRewardActionTransferPercent = _referrerRewardActionTransferPercent;

    emit UpdateReferrerRewardPercents(referrerRewardActionBuyPercent, referrerRewardActionSellPercent, referrerRewardActionTransferPercent);
  }

  function includeInBlackList(address account) public onlyOwner {
    blackList[account] = true;

    emit IncludeInBlackList(account);
  }

  function excludeFromBlackListBlackList(address account) public onlyOwner {
    blackList[account] = false;

    emit ExcludeFromBlackList(account);
  }

  function setPairAddress(address _pairAddress, bool _val) public onlyOwner {
    require(_pairAddress != mainPairAddress, "Can not change main pair");

    pairAddresses[_pairAddress] = _val;

    emit SetPairAddress(_pairAddress, _val);
  }
}
