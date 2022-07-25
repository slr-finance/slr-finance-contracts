// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interface/IRouter02.sol";
import "../interface/IPair.sol";
import "../utils/Recoverable.sol";
import "../lib/SwapMath.sol";
import "./InvestControl.sol";
import "../SolarToken.sol";

contract MilkyWay is InvestControl, Ownable {
  using SafeERC20 for IERC20;
  using SafeCast for uint256;

  // uint256 public minAmaoutToBuyBack = 50*10**18;
  // uint256 public milkyWaySwapFee = 100;
  // uint256 public buyBackAmount;
  // uint256 public lpAmount;
  address public immutable slrAddress;
  address public immutable bnbAddress;
  // address public immutable factoryAddress;
  // address public immutable pairedTokenAddress;
  address public immutable slrPairAddress;
  // address public slrRouterAddress = 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3;

  struct InvestInfo {
    uint128 amount;
    uint32 timestamp;
  }

  struct BaybackInfo {
    uint128 bnbAmount;
    uint128 slrAmount;
    uint128 lpMinted;
    uint32 timestamp;
  }

  IRouter02 slrRouter;
  InvestInfo[] public investStat;

  uint256 public totalBayback;
  BaybackInfo[] public baybackStat;

  event Bayback(uint128 bnbAmount, uint256 slrAmount);

  constructor(address _slrAddress, address _bnbAddress, address _slrRouterAddress) {
    require(
      (
        _slrAddress != address(0)
        && _slrRouterAddress != address(0)
      ),
      'Invalid params'
    );

    slrRouter = IRouter02(_slrRouterAddress);
    slrAddress = _slrAddress;
    bnbAddress = _bnbAddress;
    slrPairAddress = SolarToken(slrAddress).mainPairAddress();
  }

  // todo: Проверить расчет calcAmountToBayback и calcAmountToInvest, не уверен что не упадет с ошибкой при каком-то состояние
  function calcAmountToBayback() public view returns(uint256 amountToBayback) {
    uint256 bnbBalance = IERC20(bnbAddress).balanceOf(address(this));
    amountToBayback = (totalInvested + totalBayback + bnbBalance) / 2 - totalBayback;
  }

  function calcAmountToInvest() public view returns(uint256 amountToInvest) {
    uint256 bnbBalance = IERC20(bnbAddress).balanceOf(address(this));
    amountToInvest = (totalInvested + totalBayback + bnbBalance) / 2 - totalInvested;
  }

  function buyBackFromRewards(uint256 _amount) public {
    IERC20(bnbAddress).safeTransfer(address(this), _amount);
    _bayBack(_amount.toUint128());
  }

  function doBuyBack() public onlyOwner{
    uint128 amountToBayback = calcAmountToBayback().toUint128();

    _bayBack(amountToBayback);
  }

  function _bayBack(uint128 _amountToBayback) private {
    uint128 bnbToBuySlr = _amountToBayback / 2;
    uint256 slrSwapAmounOut = SwapMath.getAmountOutByPair(bnbToBuySlr, slrPairAddress, bnbAddress, slrAddress, 200);

    (,, uint256 amountOut0, uint256 amountOut1) = SwapMath.sortTokensAmount(
      slrAddress,
      bnbAddress,
      slrSwapAmounOut,
      uint256(0)
    );

    IERC20(bnbAddress).safeTransfer(slrPairAddress, bnbToBuySlr);

    IPair(slrPairAddress).swap(amountOut0, amountOut1, address(this), new bytes(0));

    (uint256 bnbToLiquidityAmount, uint256 slrToLiquidityAmount) = SwapMath.addLiquidity(
      slrPairAddress,
      bnbAddress,
      slrAddress,
      _amountToBayback / 2,
      slrSwapAmounOut,
      0,
      0
    );
    
    IERC20(bnbAddress).safeTransfer(slrPairAddress, bnbToLiquidityAmount);
    IERC20(slrAddress).safeTransfer(slrPairAddress, slrToLiquidityAmount);

    uint256 liquidity = IPair(slrPairAddress).mint(address(this));

    baybackStat.push(
      BaybackInfo(
        bnbToBuySlr,
        slrSwapAmounOut.toUint128(),
        liquidity.toUint128(),
        block.timestamp.toUint32()
      )
    );
    totalBayback += _amountToBayback;

    emit Bayback(_amountToBayback, slrSwapAmounOut);
  }

  function baybackStatLength() public view returns(uint256) {
    return baybackStat.length;
  }

  function bnb() public view override returns(IERC20) {
    return IERC20(bnbAddress);
  }

  // function starBorning() public {
  //   uint256 pairedBalance = IERC20(pairedTokenAddress).balanceOf(address(this));
  //   require(pairedBalance > 0, "StakerImpl: BALANCE_TOO_LOW");

  //   /* sorted addresses are usdt, nmx (usdt address less than nmx) */
  //   (uint112 reserve0, uint112 reserve1,) = IPair(pairAddress).getReserves();

  //   (
  //     uint256 pairedReserve,
  //     uint256 slrReserve
  //   ) = slrAddress < pairedTokenAddress ? (reserve1, reserve0) : (reserve0, reserve1);

  //   uint256 pairedToSwap = getUsdtToSwap(pairedBalance, pairedReserve);
  //   uint256 slrAfterSwap = getAmountOut(pairedToSwap, pairedReserve, slrReserve);

  //   buyBack(pairedToSwap, slrAfterSwap);
  //   addLiquidity(pairedBalance - pairedToSwap, slrAfterSwap);
  // }

  // function getUsdtToSwap(uint256 usdtBalance, uint256 pairedReserve) private view returns (uint256) {
  //   /*
  //   u - usdt amount to be staked
  //   n - nmx amount to be staked
  //   u2n - usdt amount that should be converted to nmx
  //   b0 - usdtBalance
  //   ru0 - usdt reserve before swap
  //   rn0 - nmx reserve before swap

  //   | u + u2n = b0
  //   | 0.998*(u2n-1)*(rn0 - n) = ru0*n
  //   | u/n = (ru0 + u2n)/(rn0 - n)

  //   u/n = (ru0 + u2n)/(rn0 - n) =>
  //   u*(rn0-n) = n*(ru0+u2n) =>
  //   u*rn0 - n*u = n*ru0 + n*u2n =>
  //   u*rn0 - n*u = n*ru0 + n * (b0-u)
  //   u*rn0 = n*ru0 + n*b0
  //   u*rn0 = n*(ru0 + b0) =>
  //   n = u*rn0 / (ru0 + b0)

  //   0.998*(b0 - u - 1)*(rn0 - n) = ru0*n =>
  //   0.998*(b0 - u - 1)*(rn0 - u*rn0 / (ru0 + b0)) = ru0*u*rn0 / (ru0 + b0) =>
  //   0.998*(b0 - u - 1)*(rn0 - u*rn0 / (ru0 + b0)) * (ru0 + b0) = ru0*u*rn0  =>
  //   0.998*(b0 - u - 1)*(rn0 * (ru0 + b0) - u*rn0 ) = ru0*u*rn0  =>
  //   k = rn0 * ru0
  //   0.998*(b0 - u - 1)*(k + rn0 * b0 - u*rn0 ) = k*u  =>

  //   0.998*(b0-1)*k + 0.998*(b0-1)*rn0*b0-0.998*(b0-1)*u*rn0 - 0.998*u*k - 0.998*u*rn0*b0 + 0.998 * u * u * rn0 = k*u
  //   (b0-1)*k + (b0-1)*rn0*b0 - (b0-1)*u*rn0 - u*rn0*b0 + u * u * rn0 = 1.998 / 0.998 * k*u

  //   rn0*u*u - (2*b0*rn0 - rn0 + 1.998 / 0.998*k) * u + (b0-1)*k + (b0-1)*rn0*b0 = 0

  //   rn0*u*u - (2*b0*rn0 - rn0 + 1.998 / 0.998* rn0 * ru0) * u + (b0-1)* rn0 * ru0 + (b0-1)*rn0*b0 = 0
  //   u*u - (2*b0 - 1 + 1.998 / 0.998 * ru0) * u + (b0-1) * ru0 + (b0-1)*b0 = 0
  //   u*u - (2*b0 - 1 + 1.998 / 0.998 * ru0) * u + (b0-1)*(b0+ru0) = 0

  //   A = 1
  //   B = - (2*b0 - 1 + 1.998 / 0.998 * ru0)
  //   mB = -B;
  //   C = (b0-1)*(b0+ru0)

  //   u = (-B - sqrt(B*B - 4*C)) / 2 = (mB - sqrt(mB*mB - 4*C))/2

  //   */

  //   uint ru0 = pairedReserve;
  //   uint b0 = usdtBalance;

  //   uint mB = 2*b0 - 1 + (20000-milkyWaySwapFee) * ru0 / (10000-milkyWaySwapFee);
  //   uint C = (b0 - 1) * (b0 + ru0);

  //   uint u = (mB - sqrt(mB * mB - 4 * C))/2;

  //   require(b0 > u + 1, "MilkyMay: SWAPPED_BALANCE_TOO_LOW");
  //   return b0 - u - 1;
  // }

  // function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal view returns (uint amountOut) {
  //   require(amountIn > 0, 'NomiswapLibrary: INSUFFICIENT_INPUT_AMOUNT');
  //   require(reserveIn > 0 && reserveOut > 0, 'NomiswapLibrary: INSUFFICIENT_LIQUIDITY');
  //   uint amountInWithFee = amountIn * (10000 - milkyWaySwapFee);
  //   uint numerator = amountInWithFee * reserveOut;
  //   uint denominator = reserveIn * 10000 + amountInWithFee;
  //   amountOut = numerator / denominator;
  // }

  // function buyBack(uint256 pairedAmount, uint256 slrAmount) public {
  //   require(pairedAmount > 0, "MilkyMay: USDT BALANCE_TOO_LOW");

  //   IERC20(pairedTokenAddress).safeTransfer(pairAddress, pairedAmount);
  //   (uint256 amount0, uint256 amount1) = slrAddress < pairedTokenAddress ? (slrAmount, uint256(0)) : (uint256(0), slrAmount)
  //   ;    
  //   IPair(pairAddress).swap(amount0, amount1, address(this), "");
  //   buyBackAmount += slrAmount;
  // }

  // function addLiquidity(uint256 pairedAmount, uint256 slrAmount) private {
  //   IERC20(pairedTokenAddress).safeTransfer(pairAddress, slrAmount);
  //   IERC20(pairedTokenAddress).safeTransfer(pairAddress, pairedAmount);

  //   lpAmount += IPair(pairAddress).mint(address(this));
  // }

  // function sqrt(uint256 y) internal pure returns (uint256 z) {
  //   if (y > 3) {
  //     z = y;
  //     uint256 x = y / 2 + 1;
  //     while (x < z) {
  //       z = x;
  //       x = (y / x + x) / 2;
  //     }
  //   } else if (y != 0) {
  //     z = 1;
  //   }
  // }






  // event MilkyWaySlr(uint256 slrAmount, uint256 pairedAmount);


  // function sortTokens(address tokenA, address tokenB) internal pure returns(address token0, address token1) {
  //   (token0, token1) = tokenA > tokenB ? (tokenB, tokenA) : (tokenA, tokenB);
  // }

  // function sortTokensAmount(address tokenA, address tokenB, uint256 amountA, uint256 amountB) internal pure returns(address token0, address token1, uint256 amount0, uint256 amount1) {
  //   (token0, token1, amount0, amount1) = tokenA > tokenB ? (tokenB, tokenA, amountB, amountA) : (tokenA, tokenB, amountA, amountB);
  // }

  // function addLiquidity(
  //   address _pairAddress,
  //   address _token0Address,
  //   address _token1Address,
  //   uint256 _amount0,
  //   uint256 _amount1,
  //   uint256 _minLpAmount
  // ) internal returns(uint256 mintedLpAmount) {
  //   IERC20(_token0Address).safeTransfer(_pairAddress, _amount0);
  //   IERC20(_token1Address).safeTransfer(_pairAddress, _amount1);

  //   mintedLpAmount = IPair(_pairAddress).mint(address(this));

  //   require(_minLpAmount <= mintedLpAmount, '');
  // }

  // function removeLiquidity(
  //   address _pairAddress,
  //   uint256 _lpAmount,
  //   uint256 _minAmount0,
  //   uint256 _minAmount1
  // ) internal returns(uint256 amount0, uint256 amount1) {
  //   IERC20(_pairAddress).safeTransfer(_pairAddress, _lpAmount);

  //   (amount0, amount1) = IPair(_pairAddress).burn(address(this));

  //   require(_minAmount0 <= amount0 && _minAmount1 < amount1, '');
  // }

  // function addSlrLiquidityAndBurn(uint256 slrAmount, uint256 pairedTokenAmount) internal {
  //   (address token0, address token1, uint256 amount0, uint256 amount1) = sortTokensAmount(
  //     slrAddress,
  //     pairedTokenAddress,
  //     slrAmount,
  //     pairedTokenAmount
  //   );

  //   uint256 mintedLpAmount = addLiquidity(
  //     slrPairAddress,
  //     token0,
  //     token1,
  //     amount0,
  //     amount1,
  //     0
  //   );

  //   IERC20(slrPairAddress).safeTransfer(address(0), mintedLpAmount);
  // }

  // function sellSlr(uint256 amountIn, uint256 minAmountOut) private returns(uint256 outAmount) {
  //   // generate the uniswap pair path of slr token -> paired token
  //   address[] memory path = new address[](2);
  //   path[0] = slrAddress;
  //   path[1] = pairedTokenAddress;

  //   IERC20(slrAddress).approve(slrRouterAddress, amountIn);

  //   uint256 prevBalance = IERC20(pairedTokenAddress).balanceOf(address(this));
  //   // make the swap
  //   IRouter02(slrRouterAddress).swapExactTokensForTokensSupportingFeeOnTransferTokens(
  //     amountIn,
  //     minAmountOut, // accept any amount of ETH
  //     path,
  //     address(this), // The contract
  //     block.timestamp
  //   );
  //   outAmount = IERC20(pairedTokenAddress).balanceOf(address(this)) - prevBalance;
  // }

  // function sell(address _pairAddress, address _soldTokenAddress, address _buyableTokenAddress, uint256 _amount, uint256 _minAmountOut) internal returns(uint256 outAmount) {    
  //   uint256 prevBalance = IERC20(_buyableTokenAddress).balanceOf(address(this));

  //   (,, uint256 amount0, uint256 amount1) = sortTokensAmount(
  //     _soldTokenAddress,
  //     _buyableTokenAddress,
  //     uint256(0),
  //     _amount
  //   );

  //   IERC20(_soldTokenAddress).safeTransfer(_pairAddress, _amount);
  //   IPair(_pairAddress).swap(amount0, amount1, address(this), new bytes(0));

  //   outAmount = IERC20(_buyableTokenAddress).balanceOf(address(this)) - prevBalance;

  //   require(outAmount <= _minAmountOut, '');

  //   return outAmount;
  // }

  // function buy(address _pairAddress, address _soldTokenAddress, address _buyableTokenAddress, uint256 _amount, uint256 _minAmountOut) internal returns(uint256 outAmount) {
  //   uint256 prevBalance = IERC20(_buyableTokenAddress).balanceOf(address(this));

  //   (,, uint256 amount0, uint256 amount1) = sortTokensAmount(
  //     _soldTokenAddress,
  //     _buyableTokenAddress,
  //     uint256(0),
  //     _amount
  //   );

  //   IERC20(_soldTokenAddress).safeTransfer(_pairAddress, _amount);
  //   IPair(_pairAddress).swap(amount0, amount1, address(this), new bytes(0));

  //   outAmount = IERC20(_buyableTokenAddress).balanceOf(address(this)) - prevBalance;

  //   require(outAmount <= _minAmountOut, '');

  //   return outAmount;
  // }


  // function milkyWay() public {
  //   uint256 balance = IERC20(slrAddress).balanceOf(address(this));
  //   uint256 amount;

  //   if (balance > 0) {
  //     amount = sellSlr(balance, 0);
  //   }

  //   emit MilkyWaySlr(balance, amount);
  // }
}
