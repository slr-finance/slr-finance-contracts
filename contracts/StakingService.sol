// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./SolarToken.sol";
import "./ReferralService.sol";
import "./MilkyWay/MilkyWay.sol";
import "./lib/Apy.sol";

contract StakingService is Context, Pausable, Ownable, ReentrancyGuard {
  using SafeCast for uint256;
  using SafeERC20 for IERC20;

  event Staked(address indexed owner, uint128 amount, uint16 poolId); /// @dev someone is staked tokens
  event Migrate(address indexed owner, uint128 migratedAmount, uint128 amount, uint16 poolId); /// @dev someone is migrated tokens
  event Unstaked(address indexed owner, uint128 amount, uint128 reward, uint128 fee); /// @dev someone unstaked tokens
  event UpdateReferrerRewardPercent(uint128 percent);
  event UpdateReferralContract(address referralContract);

  /**
    * @param totalStaked amount of NMXLP currently staked in the service
    * @param historicalRewardRate how many NMX minted per one NMXLP (<< 40). Never decreases.
    */
  struct State {
    uint128 totalStaked;
    uint16 id;
    uint128 apr;
    uint32 minLock;
    uint32 maxLock;
    uint128 withdrawalFees;
  }

  struct StakingHistory {
    uint16 poolId;
    uint128 amount;
    uint128 earned;
    uint32 lock;
  }

  /**
    * @param amount of staked tokens currently staked by the staker
    * @param reward total amount of Nmx accrued to the staker
    */
  struct Staker {
    uint16 poolId;
    uint128 initalAmount;
    uint128 amount;
    uint32 lock;
    uint32 startStaking;
  }

  /**
    * @dev earning token address
    */
  address immutable public earningToken;

  /**
    * @dev staking token address
    */
  address immutable public slrTokenAddress;

  /**
    *
    */
  address public referralContract;

  /**
    * @dev mapping of pool id to its state
    */ 
  mapping (uint16 => State) public state;

  /**
    * @dev mapping of pool id to mapping of staker's address to its state
    */ 
  mapping(address => Staker) public stakers; 

  mapping(address => mapping(uint16 => StakingHistory)) stakersHistory;

  uint8 public constant referralActionClaim = 2;
  uint128 public constant referrerRewardDivider = 10000;
  uint128 public referrerRewardPercent = 100; // 1% = 100; 100% = 10 000

  uint128 feeDenominator = 1000000; 

  uint32 maxPoolId;

  uint32 constant public secPerDay = 1 days;

  constructor(
    address _earningToken,
    address _slrTokenAddress,
    // 100% = 1000000
    uint128[] memory _aprs,
    uint32[] memory _minLock,
    uint32[] memory _maxLock,
    // 100% = 1000000
    uint128[] memory _withdrawalFees
  ) {
    require(
      _earningToken != address(0)
      && _slrTokenAddress != address(0)
      && _aprs.length > 0
      && _minLock.length == _aprs.length
      && _maxLock.length == _aprs.length
      && _withdrawalFees.length == _aprs.length
      , 'Invalid params'
    );

    earningToken = _earningToken;
    slrTokenAddress = _slrTokenAddress;
    maxPoolId = uint32(_aprs.length);

    for (uint16 index = 0; index < _aprs.length; index++) {
      require(_withdrawalFees[index] <= feeDenominator, 'Invalid fee');
      require(_minLock[index] <= _maxLock[index] , 'Invalid time lock');

      uint16 poolId = index + 1;

      state[poolId] = State(
        0,
        poolId,
        _aprs[index],
        _minLock[index],
        _maxLock[index],
        _withdrawalFees[index]
      );
    }
  }

  function migrate(uint16 _poolId, uint128 _amount, uint32 _lock) public nonReentrant {
    Staker storage staker = stakers[_msgSender()];
    require(_poolId > 1 && _poolId <= maxPoolId && staker.poolId + 1 == _poolId, 'Invalid pool id');
    require(staker.lock + staker.startStaking <= block.timestamp, 'Timelock error');

    State storage pool = state[_poolId];
    require(pool.minLock <= _lock && pool.maxLock >= _lock, 'Invalid time lock');

    uint32 lockPerSec = _lock * secPerDay;
    uint128 rewardAmount = getRewardByStaker(staker);
    uint128 totalStakerAmount = staker.amount + rewardAmount;

    if (rewardAmount > 0) {
      SolarToken(slrTokenAddress).mint(address(this), rewardAmount);
    }

    uint128 stakedAmount;
    if (_amount > 0) {
      stakedAmount = transferDepositToContract(_amount);
    }

    stakersHistory[_msgSender()][staker.poolId] = StakingHistory(staker.poolId, staker.amount, rewardAmount, staker.lock);
    state[staker.poolId].totalStaked -= staker.amount;
    staker.amount = totalStakerAmount + stakedAmount;
    staker.poolId = _poolId;
    staker.lock = lockPerSec;
    staker.startStaking = block.timestamp.toUint32();
    state[_poolId].totalStaked += staker.amount;

    emit Migrate(_msgSender(), totalStakerAmount, stakedAmount, _poolId);
  }

  /**
    @dev function to stake permitted amount of LP tokens from uniswap contract
    @param _amount of NMXLP to be staked in the service
    */
  function stake(uint16 _poolId, uint128 _amount, uint32 _lock, address _referrer) external nonReentrant {
    Staker storage staker = stakers[_msgSender()];

    require((staker.poolId == 0 && _poolId == 1) || staker.poolId == _poolId, 'Invalid pool id');
    require((staker.lock + staker.startStaking > block.timestamp) || staker.poolId == 0, 'Timelock error');
    
    State storage pool = state[_poolId];
    uint32 lockPerSec = _lock * secPerDay;

    require(
      (pool.minLock <= _lock && pool.maxLock >= _lock)
      && (
        staker.poolId == 0 || staker.lock <= lockPerSec
      )
      , 'Invalid time lock'
    );

    require(_amount > 0, 'Not enough amount');
    require(staker.poolId == 0 || _amount <= staker.initalAmount, 'Not enough amount');

    if (_poolId == 1 && referralContract != address(0)) {
      ReferralService(referralContract).addReferral(_referrer, _msgSender());
      staker.initalAmount = _amount;
    }

    uint128 rewardAmount = getRewardByStaker(staker);
    uint128 totalStakerAmount = staker.amount + rewardAmount;

    if (rewardAmount > 0) {
      SolarToken(slrTokenAddress).mint(address(this), rewardAmount);
    }

    uint128 stakedAmount = transferDepositToContract(_amount);

    state[_poolId].totalStaked -= staker.amount;
    staker.amount = totalStakerAmount + stakedAmount;
    staker.poolId = _poolId;
    state[_poolId].totalStaked += staker.amount;

    staker.lock = lockPerSec;
    staker.startStaking = block.timestamp.toUint32();

    emit Staked(_msgSender(), stakedAmount, _poolId);
  }

  /**
    * @dev function to unstake LP tokens from the service and transfer to uniswap contract
    */
  function unstakeWithFee(uint16 _poolId) public nonReentrant {
    Staker storage staker = stakers[_msgSender()];

    require(staker.poolId == _poolId, 'Incorrect pool id');
    require(staker.startStaking + staker.lock > block.timestamp, 'Time lock period has expired');

    State storage pool = state[_poolId];
    uint128 rewardAmount = getRewardByStaker(staker); // 1
    uint128 stakerAmountAndReward = rewardAmount + staker.amount; // 101
    uint128 totalFeeAmount = stakerAmountAndReward * pool.withdrawalFees / feeDenominator; // 101 * 37600 / 100000 = 3.7976
    uint128 stakerAmountAndRewardWithFee = stakerAmountAndReward - totalFeeAmount; // 97.2024

    SolarToken(slrTokenAddress).mint(address(this), rewardAmount); // 1
    IERC20(slrTokenAddress).safeTransfer(slrTokenAddress, totalFeeAmount); // 3.7976
    IERC20(slrTokenAddress).safeTransfer(_msgSender(), stakerAmountAndRewardWithFee); // 97.2024
    SolarToken(slrTokenAddress).milkyWay();

    if (stakerAmountAndRewardWithFee > staker.amount && referralContract != address(0)) {
      uint128 referrerRewardAmount = (stakerAmountAndRewardWithFee - staker.amount) * referrerRewardPercent / referrerRewardDivider;

      SolarToken(slrTokenAddress).mint(referralContract, referrerRewardAmount);
      ReferralService(referralContract).saveReferrerReward(_msgSender(), referrerRewardAmount, referralActionClaim);
    }

    emit Unstaked(_msgSender(), staker.amount, rewardAmount, totalFeeAmount);

    state[_poolId].totalStaked -= staker.amount;
    delete stakers[_msgSender()];
  }

  function unstake(uint16 _poolId) public nonReentrant {
    Staker storage staker = stakers[_msgSender()];

    require(staker.poolId == _poolId, 'Incorrect pool id');
    require(staker.startStaking + staker.lock <= block.timestamp, "Time lock period has not expired");

    uint128 rewardAmount = getRewardByStaker(staker);

    SolarToken(slrTokenAddress).mint(_msgSender(), rewardAmount);

    uint128 referrerRewardAmount = rewardAmount * referrerRewardPercent / referrerRewardDivider;

    if (referrerRewardAmount > 0 && referralContract != address(0)) {
      SolarToken(slrTokenAddress).mint(referralContract, referrerRewardAmount);
      ReferralService(referralContract).saveReferrerReward(_msgSender(), referrerRewardAmount, referralActionClaim);
    }

    IERC20(slrTokenAddress).safeTransfer(
      _msgSender(),
      uint256(staker.amount)
    );    

    emit Unstaked(_msgSender(), staker.amount, rewardAmount, 0);

    state[_poolId].totalStaked -= staker.amount;
    delete stakers[_msgSender()];
  }

  function getRewardByStaker(Staker storage staker) internal view returns (uint128) {
    State storage pool = state[staker.poolId];

    if (staker.amount == 0) {
      return 0;
    }

    uint32 timestamp = block.timestamp.toUint32();
    uint32 stakingTime = timestamp - staker.startStaking;

    if (stakingTime > staker.lock) {
      stakingTime = staker.lock;
    }

    uint128 apy = Apy.calc(pool.apr, stakingTime);
    
    return staker.amount * apy / Apy.aprDenominator;
  }

  function transferDepositToContract(uint256 _amount) private returns (uint128 deposit) {
    uint256 prevBalance = IERC20(slrTokenAddress).balanceOf(address(this));
    IERC20(slrTokenAddress).safeTransferFrom(
      _msgSender(),
      address(this),
      uint256(_amount)
    );
    deposit = (IERC20(slrTokenAddress).balanceOf(address(this)) - prevBalance).toUint128();
  }

  /**
   * @dev For ui
   */
  function getReward(address _owner) public view returns (uint128) {
    Staker storage staker = stakers[_owner];

    return getRewardByStaker(staker);
  }

  /**
   * @dev For ui
   * @dev Returns staker state
   */
  function getStaker(address _owner) public view returns(
    uint16 poolId,
    uint128 amount,
    uint32 lock,
    uint32 startStaking,
    uint32 timestamp,
    uint128 reward
  ) {
    Staker storage staker = stakers[_owner];

    poolId = staker.poolId;
    amount = staker.amount;
    lock = staker.lock;
    startStaking = staker.startStaking;
    timestamp = block.timestamp.toUint32();
    reward = getRewardByStaker(staker);
  }

  /**
   * @dev For ui
   */
  function getStakerHistory(address _owner, uint16 _poolId) public view returns(
    uint16 poolId,
    uint128 amount,
    uint128 earned,
    uint32 lock
  ) {
    StakingHistory storage history = stakersHistory[_owner][_poolId];
    poolId = history.poolId;
    amount = history.amount;
    earned = history.earned;
    lock = history.lock;
  }

  /**
   * @dev For ui
   */
  function getApy(uint128 apr, uint128 times) public pure returns (uint128) {
    return Apy.calc(apr, times);
  }

  /**
   * @dev For ui
   */
  function totalStaked(uint16 _poolId) external view returns (uint128 amount) {
    if (_poolId == 0) {
      for (uint16 poolId = 1; poolId <= maxPoolId; poolId++) {
        amount += state[poolId].totalStaked;
      }
    } else {
      amount = state[_poolId].totalStaked;
    }
  }

  function setReferrerRewardPercent(uint128 _referrerRewardPercent) public onlyOwner {
    referrerRewardPercent = _referrerRewardPercent;

    emit UpdateReferrerRewardPercent(_referrerRewardPercent);
  }

  function setReferralContract(address _referralContract) public onlyOwner {
    referralContract = _referralContract;

    emit UpdateReferralContract(_referralContract);
  }
}
