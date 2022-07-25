// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract ReferralService is Context, Ownable, AccessControlEnumerable, ReentrancyGuard, Pausable {
  using SafeCast for uint256;
  using SafeERC20 for IERC20;

  struct ReferrerReward {
    uint256 reward;
    uint256 rewarded;
  }

  struct AccrualHistory {
    uint128 amount;
    address from;
    uint32 timestamp;
    uint8 action;
  }

  struct Referral {
    address account;
    uint32 timestamp;
  }

  /**
    * @dev earning token address
    */
  address public referrerRewardToken;

  /**
    * @dev referrer to referrals
    */
  mapping(address => Referral[]) public referrals;

  /**
    * @dev referral to referrer
    */
  mapping(address => address) public referrers;

  /**
    * @dev referrer to reward
    */
  mapping(address => ReferrerReward) public referrersRewards;

  /**
    * @dev referrer to accrual history
    */
  mapping(address => AccrualHistory[]) public accrualHistory;

  bytes32 public constant REFERRAL_UPDATER_ROLE = keccak256("REFERRAL_UPDATER_ROLE");
  bytes32 public constant SET_REWARD_TOKEN = keccak256("SET_REWARD_TOKEN");
  bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

  /**
   * @dev Total pending rewards
   */
  uint256 public totalPendingRewards;

  constructor() {
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setupRole(SET_REWARD_TOKEN, _msgSender());
    _setupRole(PAUSER_ROLE, _msgSender());

    _pause();
  }

  /**
   * @dev For ui
   * @dev Returns number of referrals
   */
  function referralsLength(address _referrer) public view returns(uint256) {
    return referrals[_referrer].length;
  }

  /**
   * @dev For ui
   * @dev Returns number of accrual history items
   */
  function accrualHistoryLength(address _referrer) public view returns(uint256) {
    return accrualHistory[_referrer].length;
  }

  function addReferral(address _referrer, address _referral) external onlyRole(REFERRAL_UPDATER_ROLE) {
    if (referrers[_referral] == address(0)) {
      if (_referrer == address(0) || _referrer == _referral) {
        _referrer = owner();
      }

      referrers[_referral] = _referrer;
      referrals[_referrer].push(
        Referral(
          _referral,
          block.timestamp.toUint32()
        )
      );
    }
  }

  function saveReferrerReward(address _refferal, uint128 _amount, uint8 _action) external onlyRole(REFERRAL_UPDATER_ROLE) {
    address referrer = referrers[_refferal];

    if (referrer == address(0)) {
      referrer = owner();
    }

    totalPendingRewards += _amount;

    require(totalPendingRewards <= IERC20(referrerRewardToken).balanceOf(address(this)), 'ReferralService: NOT_ENOUGH_BALANCE');

    referrersRewards[referrer].reward += _amount;
    accrualHistory[referrer].push(
      AccrualHistory(
        _amount,
        _refferal,
        block.timestamp.toUint32(),
        _action
      )
    );
  }

  function referrerClaim() public whenNotPaused nonReentrant {
    ReferrerReward storage referrerReward = referrersRewards[_msgSender()];

    require(referrerReward.reward > referrerReward.rewarded, "ReferralService: NOT_ENOUGH_REWARD");

    uint256 amount = referrerReward.reward - referrerReward.rewarded;
    
    IERC20(referrerRewardToken).safeTransfer(_msgSender(), amount);
    totalPendingRewards -= amount;

    referrerReward.rewarded = referrerReward.reward;
  }

  function setReferrerRewardToken(address _referrerRewardToken) public onlyRole(SET_REWARD_TOKEN) {
    referrerRewardToken = _referrerRewardToken;
  }

  /**
    * @dev Pauses all token transfers.
    *
    * See {ERC20Pausable} and {Pausable-_pause}.
    *
    * Requirements:
    *
    * - the caller must have the `PAUSER_ROLE`.
    */
  function pause() public {
    require(hasRole(PAUSER_ROLE, _msgSender()), "ReferralService: must have pauser role to pause");
    _pause();
  }

  /**
    * @dev Unpauses all token transfers.
    *
    * See {ERC20Pausable} and {Pausable-_unpause}.
    *
    * Requirements:
    *
    * - the caller must have the `PAUSER_ROLE`.
    */
  function unpause() public {
    require(hasRole(PAUSER_ROLE, _msgSender()), "ReferralService: must have pauser role to unpause");
    _unpause();
  }
}
