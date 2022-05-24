// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

interface IStakingService {
  event Staked(address indexed owner, uint128 amount); /// @dev someone is staked NMXLP
  event Unstaked(address indexed from, address indexed to, uint128 amount); /// @dev someone unstaked NMXLP
  event Rewarded(address indexed from, address indexed to, uint128 amount); /// @dev someone transferred Nmx from the service
  event StakingBonusAccrued(address indexed staker, uint128 amount); /// @dev Nmx accrued to the staker

  /**
    @dev function to stake permitted amount of LP tokens from uniswap contract
    @param amount of NMXLP to be staked in the service
    */
  function stake(uint128 amount) external;

  function stakeWithPermit(
    uint128 amount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external;

  function stakeFrom(address owner, uint128 amount) external;

  /**
    @dev function to unstake LP tokens from the service and transfer to uniswap contract
    @param amount of NMXLP to be unstaked from the service
    */
  function unstake(uint128 amount) external;

  function unstakeTo(address to, uint128 amount) external;

  function unstakeWithAuthorization(
    address owner,
    uint128 amount,
    uint128 signedAmount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external;

  /**
    * @dev updates current reward and transfers it to the caller's address
    */
  function claimReward() external returns (uint256);

  function claimRewardTo(address to) external returns (uint256);

  function claimRewardToWithoutUpdate(address to) external returns (uint256);

  function claimWithAuthorization(
    address owner,
    uint128 nmxAmount,
    uint128 signedAmount,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external;

  /**
    * @dev updates state and returns unclaimed reward amount. Is supposed to be invoked as call from metamask to display current amount of Nmx available
    */
  function getReward() external returns (uint256 unclaimedReward);
  function totalStaked() external view returns (uint128);
}
