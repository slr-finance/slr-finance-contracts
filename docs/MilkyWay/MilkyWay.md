# MilkyWay









## Methods

### baybackStat

```solidity
function baybackStat(uint256) external view returns (uint128 bnbAmount, uint128 slrAmount, uint128 lpMinted, uint32 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| bnbAmount | uint128 | undefined |
| slrAmount | uint128 | undefined |
| lpMinted | uint128 | undefined |
| timestamp | uint32 | undefined |

### baybackStatLength

```solidity
function baybackStatLength() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### bnb

```solidity
function bnb() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### bnbAddress

```solidity
function bnbAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### buyBackFromRewards

```solidity
function buyBackFromRewards(uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |

### calcAmountToBayback

```solidity
function calcAmountToBayback() external view returns (uint256 amountToBayback)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| amountToBayback | uint256 | undefined |

### calcAmountToInvest

```solidity
function calcAmountToInvest() external view returns (uint256 amountToInvest)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| amountToInvest | uint256 | undefined |

### changeInvestPoolShare

```solidity
function changeInvestPoolShare(address _controller, int128 _share) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _controller | address | undefined |
| _share | int128 | undefined |

### doBuyBack

```solidity
function doBuyBack() external nonpayable
```






### invest

```solidity
function invest(address _controller) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _controller | address | undefined |

### investAll

```solidity
function investAll() external nonpayable
```






### investPoolLastIndex

```solidity
function investPoolLastIndex() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### investPoolShare

```solidity
function investPoolShare(uint256) external view returns (address controller, int128 share)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| controller | address | undefined |
| share | int128 | undefined |

### investStat

```solidity
function investStat(uint256) external view returns (uint128 amount, uint32 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| amount | uint128 | undefined |
| timestamp | uint32 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setInvestController

```solidity
function setInvestController(address _address, bool _active) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _address | address | undefined |
| _active | bool | undefined |

### slrAddress

```solidity
function slrAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### slrPairAddress

```solidity
function slrPairAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### totalBayback

```solidity
function totalBayback() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalInvested

```solidity
function totalInvested() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### Bayback

```solidity
event Bayback(uint128 bnbAmount, uint256 slrAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| bnbAmount  | uint128 | undefined |
| slrAmount  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



