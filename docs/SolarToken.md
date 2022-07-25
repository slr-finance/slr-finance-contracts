# SolarToken









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### MINTER_ROLE

```solidity
function MINTER_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### MIN_TX_AMOUNT_HARD_CAP

```solidity
function MIN_TX_AMOUNT_HARD_CAP() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*See {IERC20-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### blackList

```solidity
function blackList(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```



*Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```



*Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| subtractedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### excludeFromAntiWhale

```solidity
function excludeFromAntiWhale(address _account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

### excludeFromBlackListBlackList

```solidity
function excludeFromBlackListBlackList(address account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

### excludeFromFee

```solidity
function excludeFromFee(address _account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address)
```



*Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256)
```



*Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### includeInAntiWhale

```solidity
function includeInAntiWhale(address _account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

### includeInBlackList

```solidity
function includeInBlackList(address account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

### includeInFee

```solidity
function includeInFee(address _account) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```



*Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| addedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isExcludedFromAntiWhale

```solidity
function isExcludedFromAntiWhale(address _account) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isExcludedFromFee

```solidity
function isExcludedFromFee(address _account) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### mainPairAddress

```solidity
function mainPairAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### maxAmountToSell

```solidity
function maxAmountToSell() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxTxAmount

```solidity
function maxTxAmount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### milkyWay

```solidity
function milkyWay() external nonpayable
```






### milkyWayAddress

```solidity
function milkyWayAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### minAmountToSell

```solidity
function minAmountToSell() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(address _to, uint256 _amount) external nonpayable
```



*Creates `amount` new tokens for `to`. See {ERC20-_mint}. Requirements: - the caller must have the `MINTER_ROLE`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pairAddresses

```solidity
function pairAddresses(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### pairSwapFee

```solidity
function pairSwapFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### pairedTokenAddress

```solidity
function pairedTokenAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### referralActionBuy

```solidity
function referralActionBuy() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### referralActionSell

```solidity
function referralActionSell() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### referralActionTransfer

```solidity
function referralActionTransfer() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### referralServiceAddress

```solidity
function referralServiceAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### referrerRewardActionBuyPercent

```solidity
function referrerRewardActionBuyPercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### referrerRewardActionSellPercent

```solidity
function referrerRewardActionSellPercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### referrerRewardActionTransferPercent

```solidity
function referrerRewardActionTransferPercent() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### referrerRewardDivider

```solidity
function referrerRewardDivider() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### setAmountToSell

```solidity
function setAmountToSell(uint256 _minAmountToSell, uint256 _maxAmountToSell) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _minAmountToSell | uint256 | undefined |
| _maxAmountToSell | uint256 | undefined |

### setMaxTxAmount

```solidity
function setMaxTxAmount(uint256 _maxTxAmount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _maxTxAmount | uint256 | undefined |

### setMilkyWayAddress

```solidity
function setMilkyWayAddress(address _address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _address | address | undefined |

### setPairAddress

```solidity
function setPairAddress(address _pairAddress, bool _val) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _pairAddress | address | undefined |
| _val | bool | undefined |

### setPairSwapFee

```solidity
function setPairSwapFee(uint256 _fee) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |

### setReferralServiceAddress

```solidity
function setReferralServiceAddress(address _address) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _address | address | undefined |

### setReferrerRewardPercents

```solidity
function setReferrerRewardPercents(uint256 _referrerRewardActionBuyPercent, uint256 _referrerRewardActionSellPercent, uint256 _referrerRewardActionTransferPercent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _referrerRewardActionBuyPercent | uint256 | undefined |
| _referrerRewardActionSellPercent | uint256 | undefined |
| _referrerRewardActionTransferPercent | uint256 | undefined |

### setTaxBuyFee

```solidity
function setTaxBuyFee(uint256 _fee) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |

### setTaxSellFee

```solidity
function setTaxSellFee(uint256 _fee) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |

### setTaxTransferFee

```solidity
function setTaxTransferFee(uint256 _fee) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fee | uint256 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### taxBuyFee

```solidity
function taxBuyFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### taxSellFee

```solidity
function taxSellFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### taxTransferFee

```solidity
function taxTransferFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address _to, uint256 _amount) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | undefined |
| _amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _amount) external nonpayable returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | undefined |
| _to | address | undefined |
| _amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### ExcludeFromAntiWhale

```solidity
event ExcludeFromAntiWhale(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### ExcludeFromBlackList

```solidity
event ExcludeFromBlackList(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### ExcludeFromFee

```solidity
event ExcludeFromFee(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### IncludeInAntiWhale

```solidity
event IncludeInAntiWhale(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### IncludeInBlackList

```solidity
event IncludeInBlackList(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### IncludeInFee

```solidity
event IncludeInFee(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### SellTax

```solidity
event SellTax(uint256 amountIn, uint256 amountOut, address indexed milkyWayAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amountIn  | uint256 | undefined |
| amountOut  | uint256 | undefined |
| milkyWayAddress `indexed` | address | undefined |

### SetMilkyWayAddress

```solidity
event SetMilkyWayAddress(address milkyWayAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| milkyWayAddress  | address | undefined |

### SetPairAddress

```solidity
event SetPairAddress(address pairAddress, bool val)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| pairAddress  | address | undefined |
| val  | bool | undefined |

### SetReferralServiceAddress

```solidity
event SetReferralServiceAddress(address referralServiceAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| referralServiceAddress  | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |

### UpdateMaxTxAmount

```solidity
event UpdateMaxTxAmount(uint256 newAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newAmount  | uint256 | undefined |

### UpdatePairSwapFee

```solidity
event UpdatePairSwapFee(uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fee  | uint256 | undefined |

### UpdateReferrerRewardPercents

```solidity
event UpdateReferrerRewardPercents(uint256 referrerRewardActionBuyPercent, uint256 referrerRewardActionSellPercent, uint256 referrerRewardActionTransferPercent)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| referrerRewardActionBuyPercent  | uint256 | undefined |
| referrerRewardActionSellPercent  | uint256 | undefined |
| referrerRewardActionTransferPercent  | uint256 | undefined |

### UpdateSellAmounts

```solidity
event UpdateSellAmounts(uint256 newMinAmount, uint256 maxMinAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newMinAmount  | uint256 | undefined |
| maxMinAmount  | uint256 | undefined |

### UpdateTaxBuyFee

```solidity
event UpdateTaxBuyFee(uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fee  | uint256 | undefined |

### UpdateTaxSellFee

```solidity
event UpdateTaxSellFee(uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fee  | uint256 | undefined |

### UpdateTaxTransferFee

```solidity
event UpdateTaxTransferFee(uint256 fee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fee  | uint256 | undefined |



