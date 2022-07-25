# StakingService









## Methods

### earningToken

```solidity
function earningToken() external view returns (address)
```



*earning token address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getApy

```solidity
function getApy(uint128 apr, uint128 times) external pure returns (uint128)
```



*For ui*

#### Parameters

| Name | Type | Description |
|---|---|---|
| apr | uint128 | undefined |
| times | uint128 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### getReward

```solidity
function getReward(address _owner) external view returns (uint128)
```



*For ui*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### getStaker

```solidity
function getStaker(address _owner) external view returns (uint16 poolId, uint128 amount, uint32 lock, uint32 startStaking, uint32 timestamp, uint128 reward)
```



*For uiReturns staker state*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| poolId | uint16 | undefined |
| amount | uint128 | undefined |
| lock | uint32 | undefined |
| startStaking | uint32 | undefined |
| timestamp | uint32 | undefined |
| reward | uint128 | undefined |

### getStakerHistory

```solidity
function getStakerHistory(address _owner, uint16 _poolId) external view returns (uint16 poolId, uint128 amount, uint128 earned, uint32 lock)
```



*For ui*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | undefined |
| _poolId | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| poolId | uint16 | undefined |
| amount | uint128 | undefined |
| earned | uint128 | undefined |
| lock | uint32 | undefined |

### migrate

```solidity
function migrate(uint16 _poolId, uint128 _amount, uint32 _lock) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint16 | undefined |
| _amount | uint128 | undefined |
| _lock | uint32 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### referralActionClaim

```solidity
function referralActionClaim() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### referralContract

```solidity
function referralContract() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### referrerRewardDivider

```solidity
function referrerRewardDivider() external view returns (uint128)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### referrerRewardPercent

```solidity
function referrerRewardPercent() external view returns (uint128)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### secPerDay

```solidity
function secPerDay() external view returns (uint32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint32 | undefined |

### setReferralContract

```solidity
function setReferralContract(address _referralContract) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _referralContract | address | undefined |

### setReferrerRewardPercent

```solidity
function setReferrerRewardPercent(uint128 _referrerRewardPercent) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _referrerRewardPercent | uint128 | undefined |

### slrTokenAddress

```solidity
function slrTokenAddress() external view returns (address)
```



*staking token address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### stake

```solidity
function stake(uint16 _poolId, uint128 _amount, uint32 _lock, address _referrer) external nonpayable
```



*function to stake permitted amount of LP tokens from uniswap contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint16 | undefined |
| _amount | uint128 | of NMXLP to be staked in the service |
| _lock | uint32 | undefined |
| _referrer | address | undefined |

### stakers

```solidity
function stakers(address) external view returns (uint16 poolId, uint128 initalAmount, uint128 amount, uint32 lock, uint32 startStaking)
```



*mapping of pool id to mapping of staker&#39;s address to its state*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| poolId | uint16 | undefined |
| initalAmount | uint128 | undefined |
| amount | uint128 | undefined |
| lock | uint32 | undefined |
| startStaking | uint32 | undefined |

### state

```solidity
function state(uint16) external view returns (uint128 totalStaked, uint16 id, uint128 apr, uint32 minLock, uint32 maxLock, uint128 withdrawalFees)
```



*mapping of pool id to its state*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| totalStaked | uint128 | undefined |
| id | uint16 | undefined |
| apr | uint128 | undefined |
| minLock | uint32 | undefined |
| maxLock | uint32 | undefined |
| withdrawalFees | uint128 | undefined |

### totalStaked

```solidity
function totalStaked(uint16 _poolId) external view returns (uint128 amount)
```



*For ui*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint16 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amount | uint128 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unstake

```solidity
function unstake(uint16 _poolId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint16 | undefined |

### unstakeWithFee

```solidity
function unstakeWithFee(uint16 _poolId) external nonpayable
```



*function to unstake LP tokens from the service and transfer to uniswap contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _poolId | uint16 | undefined |



## Events

### Migrate

```solidity
event Migrate(address indexed owner, uint128 migratedAmount, uint128 amount, uint16 poolId)
```



*someone is staked tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| migratedAmount  | uint128 | undefined |
| amount  | uint128 | undefined |
| poolId  | uint16 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### Staked

```solidity
event Staked(address indexed owner, uint128 amount, uint16 poolId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| amount  | uint128 | undefined |
| poolId  | uint16 | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### Unstaked

```solidity
event Unstaked(address indexed owner, uint128 amount, uint128 reward, uint128 fee)
```



*someone is migrated tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| amount  | uint128 | undefined |
| reward  | uint128 | undefined |
| fee  | uint128 | undefined |

### UpdateReferralContract

```solidity
event UpdateReferralContract(address referralContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| referralContract  | address | undefined |

### UpdateReferrerRewardPercent

```solidity
event UpdateReferrerRewardPercent(uint128 percent)
```



*someone unstaked tokens*

#### Parameters

| Name | Type | Description |
|---|---|---|
| percent  | uint128 | undefined |



