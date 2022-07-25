# InvestControl









## Methods

### bnb

```solidity
function bnb() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined |

### changeInvestPoolShare

```solidity
function changeInvestPoolShare(address _controller, int128 _share) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _controller | address | undefined |
| _share | int128 | undefined |

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

### setInvestController

```solidity
function setInvestController(address _address, bool _active) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _address | address | undefined |
| _active | bool | undefined |

### totalInvested

```solidity
function totalInvested() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |




