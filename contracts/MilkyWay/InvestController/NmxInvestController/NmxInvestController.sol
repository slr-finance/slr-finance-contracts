// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "../../BaseInvestController.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "./interface/IStakingService.sol";

contract NmxInvestController is BaseInvestController {
  using SafeERC20 for IERC20;
  using SafeCast for uint256;

  address public immutable stakingServiceAddress;

  constructor(
    address _milkyWayAddress,
    address _bnbAddress,
    address _investingTokenAddress,
    InvestingTokenType _investingTokenType,
    address _rewardsTokenAddress,
    address _factoryAddress,
    address _stakingServiceAddress
  ) 
    BaseInvestController(
      _milkyWayAddress,
      _bnbAddress,
      _investingTokenAddress,
      _investingTokenType,
      _rewardsTokenAddress,
      _factoryAddress
    )
  {
    stakingServiceAddress = _stakingServiceAddress;
  }

  function stake(uint256 _investingAmount) internal override {
    IERC20(investingTokenAddress).safeApprove(stakingServiceAddress, _investingAmount);

    IStakingService(stakingServiceAddress).stake(_investingAmount.toUint128());
  }

  function claim() internal override returns(uint256 amount) {
    amount = IStakingService(stakingServiceAddress).claimReward();
  }

  function withdrawal(uint256 _amount) internal override {
    IStakingService(stakingServiceAddress).unstake(_amount.toUint128());
  }
}
