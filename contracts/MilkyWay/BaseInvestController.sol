// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "./interface/IBaseInvestController.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../lib/SwapMath.sol";
import "../interface/IPair.sol";
import "../interface/IFactory.sol";
import "./MilkyWay.sol";

abstract contract BaseInvestController is IBaseInvestController {
  using SafeERC20 for IERC20;

  address public bnbAddress;
  address public investingTokenAddress;
  address public rewardsTokenAddress;
  address public factoryAddress;
  uint256 public investedBnb;
  uint256 public withdrawnBnb;
  InvestingTokenType public investingTokenType;
  uint256 public swapFee = 200;

  MilkyWay immutable milkyWay;

  constructor(address _milkyWayAddress, address _bnbAddress, address _investingTokenAddress, InvestingTokenType _investingTokenType, address _rewardsTokenAddress, address _factoryAddress) {
    bnbAddress = _bnbAddress;
    investingTokenAddress = _investingTokenAddress;
    investingTokenType = _investingTokenType;
    rewardsTokenAddress = _rewardsTokenAddress;
    factoryAddress = _factoryAddress;

    milkyWay = MilkyWay(_milkyWayAddress);
  }

  function claim() internal virtual returns(uint256);
  function stake(uint256 _amount) internal virtual;
  function withdrawal(uint256 _amount) internal virtual;

  function investedTokensByBnbPrice() public view returns (uint256 priceInBnb) {
    if (investingTokenType == InvestingTokenType.LP) {
      priceInBnb = 0;
    } else {
      priceInBnb = getTokenPriceInBnb(investingTokenAddress);
    }
  }

  function getTokenPriceInBnb(address _targetToken) public view returns (uint256) {
    (uint256 reserveBnb, uint256 reserveInvestingToken) = SwapMath.getReservesByFactory(factoryAddress, bnbAddress, _targetToken);
    
    return reserveBnb / reserveInvestingToken;
  }

  function invest(uint256 _investingBnbAmount) external returns(uint256 investingAmount) {
    claimAndBuyBack();

    if (investingTokenType == InvestingTokenType.LP) {
      investingAmount = 0;
    } else {
      investingAmount = swapTokens(_investingBnbAmount, bnbAddress, investingTokenAddress);
    }
    investedBnb += _investingBnbAmount;

    stake(investingAmount);
  }

  function claimAndBuyBack() public {
    uint256 amount = claim();
    uint256 bnbAmount = sellRewards(amount);

    milkyWay.buyBackFromRewards(bnbAmount);
  }

  function withdrawalAndRefoundToMilkyWal(uint256 _amount) external {
    uint256 claimedAmount = claim();
    withdrawal(_amount);

    uint256 bnbAmount;

    if (investingTokenType == InvestingTokenType.LP) {
      bnbAmount = 0;
    } else {
      if (rewardsTokenAddress == investingTokenAddress) {
        bnbAmount = sellRewards(claimedAmount + _amount);
      } else {
        bnbAmount = sellRewards(claimedAmount);
        bnbAmount += swapTokens(_amount, investingTokenAddress, bnbAddress);
      }
    }

    withdrawnBnb += bnbAmount;
  }

  function sellRewards(uint256 _amount) internal returns (uint256 amountOut) {
    amountOut = swapTokens(_amount, rewardsTokenAddress, bnbAddress);
  }

  function mintLiquidity(uint256 _amountIn) internal returns(uint256 amountOut) {
    
  }

  function swapTokens(uint256 _amountIn, address tokenIn, address tokenOut) internal returns(uint256 amountOut) {
    if (tokenIn == tokenOut || _amountIn == 0) {
      return _amountIn;
    }

    (address token0, address token1) = SwapMath.sortTokens(tokenIn, tokenOut);
    address pairAddress = IFactory(factoryAddress).getPair(token0, token1);

    amountOut = SwapMath.getAmountOutByPair(_amountIn, pairAddress, tokenIn, tokenOut, swapFee);

    (,, uint256 amountOut0, uint256 amountOut1) = SwapMath.sortTokensAmount(
      tokenOut,
      tokenIn,
      amountOut,
      uint256(0)
    );

    IERC20(bnbAddress).safeTransfer(pairAddress, _amountIn);
    IPair(pairAddress).swap(amountOut0, amountOut1, address(this), new bytes(0));
  }
}
