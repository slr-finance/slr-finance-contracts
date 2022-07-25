# IStakingService









## Methods

### claimReward

```solidity
function claimReward() external nonpayable returns (uint256)
```



*updates current reward and transfers it to the caller&#39;s address*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimRewardTo

```solidity
function claimRewardTo(address to) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimRewardToWithoutUpdate

```solidity
function claimRewardToWithoutUpdate(address to) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### claimWithAuthorization

```solidity
function claimWithAuthorization(address owner, uint128 nmxAmount, uint128 signedAmount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| nmxAmount | uint128 | undefined |
| signedAmount | uint128 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### getReward

```solidity
function getReward() external nonpayable returns (uint256 unclaimedReward)
```



*updates state and returns unclaimed reward amount. Is supposed to be invoked as call from metamask to display current amount of Nmx available*


#### Returns

| Name | Type | Description |
|---|---|---|
| unclaimedReward | uint256 | undefined |

### stake

```solidity
function stake(uint128 amount) external nonpayable
```



*function to stake permitted amount of LP tokens from uniswap contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint128 | of NMXLP to be staked in the service |

### stakeFrom

```solidity
function stakeFrom(address owner, uint128 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| amount | uint128 | undefined |

### stakeWithPermit

```solidity
function stakeWithPermit(uint128 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint128 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |

### totalStaked

```solidity
function totalStaked() external view returns (uint128)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### unstake

```solidity
function unstake(uint128 amount) external nonpayable
```



*function to unstake LP tokens from the service and transfer to uniswap contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint128 | of NMXLP to be unstaked from the service |

### unstakeTo

```solidity
function unstakeTo(address to, uint128 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| amount | uint128 | undefined |

### unstakeWithAuthorization

```solidity
function unstakeWithAuthorization(address owner, uint128 amount, uint128 signedAmount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| amount | uint128 | undefined |
| signedAmount | uint128 | undefined |
| deadline | uint256 | undefined |
| v | uint8 | undefined |
| r | bytes32 | undefined |
| s | bytes32 | undefined |



## Events

### Rewarded

```solidity
event Rewarded(address indexed from, address indexed to, uint128 amount)
```



*someone unstaked NMXLP*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint128 | undefined |

### Staked

```solidity
event Staked(address indexed owner, uint128 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| amount  | uint128 | undefined |

### StakingBonusAccrued

```solidity
event StakingBonusAccrued(address indexed staker, uint128 amount)
```



*someone transferred Nmx from the service*

#### Parameters

| Name | Type | Description |
|---|---|---|
| staker `indexed` | address | undefined |
| amount  | uint128 | undefined |

### Unstaked

```solidity
event Unstaked(address indexed from, address indexed to, uint128 amount)
```



*someone is staked NMXLP*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| amount  | uint128 | undefined |



