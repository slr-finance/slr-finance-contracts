// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "../interface/IPair.sol";
import "../interface/IFactory.sol";

library SwapMath {
  uint256 constant internal k = 10000;

  function addLiquidity(
    address pair,
    address tokenA,
    address tokenB,
    uint amountADesired,
    uint amountBDesired,
    uint amountAMin,
    uint amountBMin
  ) view internal returns (uint256 amountA, uint256 amountB) {
    (uint256 reserveA, uint256 reserveB) = getReserves(pair, tokenA, tokenB);
    if (reserveA == 0 && reserveB == 0) {
      (amountA, amountB) = (amountADesired, amountBDesired);
    } else {
      uint256 amountBOptimal = quote(amountADesired, reserveA, reserveB);
      if (amountBOptimal <= amountBDesired) {
        require(amountBOptimal >= amountBMin, 'SwapMath: INSUFFICIENT_B_AMOUNT');
        (amountA, amountB) = (amountADesired, amountBOptimal);
      } else {
        uint256 amountAOptimal = quote(amountBDesired, reserveB, reserveA);
        assert(amountAOptimal <= amountADesired);
        require(amountAOptimal >= amountAMin, 'SwapMath: INSUFFICIENT_A_AMOUNT');
        (amountA, amountB) = (amountAOptimal, amountBDesired);
      }
    }
  }

  function getAmountOutByPair(uint256 amountIn, address pair, address tokenIn, address tokenOut, uint256 fee) internal view returns (uint256 amountOut) {
    (uint256 reserveIn, uint256 reserveOut) = getReserves(pair, tokenIn, tokenOut);
    amountOut = getAmountOut(amountIn, reserveIn, reserveOut, fee);
  }

  function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut, uint256 fee) internal pure returns (uint256 amountOut) {
    require(amountIn > 0, 'SwapMath: INSUFFICIENT_INPUT_AMOUNT');
    require(reserveIn > 0 && reserveOut > 0, 'SwapMath: INSUFFICIENT_LIQUIDITY');
    uint256 amountInWithFee = amountIn * (k - fee);
    uint256 numerator = amountInWithFee * reserveOut;
    uint256 denominator = reserveIn * k + amountInWithFee;
    amountOut = numerator / denominator;
  }

  function getReserves(address pair, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB) {
    (address token0,) = sortTokens(tokenA, tokenB);
    (uint112 reserve0, uint112 reserve1,) = IPair(pair).getReserves();
    (reserveA, reserveB) = tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);
  }

  function getReservesByFactory(address _factoryAddress, address _tokenA, address _tokenB) internal view returns (uint256 reserveA, uint256 reserveB) {
    (address token0, address token1) = sortTokens(_tokenA, _tokenB);
    address pair = IFactory(_factoryAddress).getPair(token0, token1);
    (uint112 reserve0, uint112 reserve1,) = IPair(pair).getReserves();
    (reserveA, reserveB) = _tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);
  }

  function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {
    require(tokenA != tokenB, 'SwapMath: IDENTICAL_ADDRESSES');
    (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
    require(token0 != address(0), 'SwapMath: ZERO_ADDRESS');
  }

  function sortTokensAmount(address tokenA, address tokenB, uint256 amountA, uint256 amountB) internal pure returns(address token0, address token1, uint256 amount0, uint256 amount1) {
    (token0, token1, amount0, amount1) = tokenA < tokenB ? (tokenA, tokenB, amountA, amountB) : (tokenB, tokenA, amountB, amountA);
  }

  // given some amount of an asset and pair reserves, returns an equivalent amount of the other asset
  function quote(uint256 amountA, uint256 reserveA, uint256 reserveB) internal pure returns (uint256 amountB) {
    require(amountA > 0, 'SwapMath: INSUFFICIENT_AMOUNT');
    require(reserveA > 0 && reserveB > 0, 'SwapMath: INSUFFICIENT_LIQUIDITY');
    amountB = amountA * reserveB / reserveA;
  }
}