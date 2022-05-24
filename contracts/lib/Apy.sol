// SPDX-License-Identifier: BSD-4-Clause

pragma solidity ^0.8.0;
import "abdk-libraries-solidity/ABDKMath64x64.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

library Apy {
  using ABDKMath64x64 for int128;
  using SafeCast for uint256;

  uint128 constant internal aprDenominator = 1000000;
  uint128 constant internal secPerYear = 365 days;
  uint128 constant internal secPerDay = 1 days;

  function calcApy(int128 apr, uint128 times) internal pure returns (int128) {
    return apr
      .add(ABDKMath64x64.fromUInt(1))
      .pow(times)
      .sub(ABDKMath64x64.fromUInt(1))
    ;
  }

  function calc(uint128 apr, uint128 times) internal pure returns (uint128) {
    int128 perDay = ABDKMath64x64.divu(apr, aprDenominator * 365);
    uint128 remainder = times % secPerDay;
    uint128 stakingDays = (times - remainder) / secPerDay;

    int128 d = 0;
    int128 ddd = 0;

    if (stakingDays > 0) {
      d = calcApy(perDay, stakingDays);
    }

    if (remainder > 0) {
      int128 dd = calcApy(perDay, stakingDays + 1);

      ddd = dd
        .sub(d)
        .mul(ABDKMath64x64.fromUInt(remainder))
        .div(ABDKMath64x64.fromUInt(secPerDay))
      ;
    }

    uint64 apy = d
      .add(ddd)
      .mul(ABDKMath64x64.fromUInt(aprDenominator))
      .toUInt();

    return uint128(apy);
  }
}