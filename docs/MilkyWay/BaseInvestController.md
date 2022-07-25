# BaseInvestController









## Methods

### bnbAddress

```solidity
function bnbAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### claimAndBuyBack

```solidity
function claimAndBuyBack() external nonpayable
```






### factoryAddress

```solidity
function factoryAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getTokenPriceInBnb

```solidity
function getTokenPriceInBnb(address _targetToken) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _targetToken | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### invest

```solidity
function invest(uint256 _investingBnbAmount) external nonpayable returns (uint256 investingAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _investingBnbAmount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| investingAmount | uint256 | undefined |

### investedBnb

```solidity
function investedBnb() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### investedTokensByBnbPrice

```solidity
function investedTokensByBnbPrice() external view returns (uint256 priceInBnb)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| priceInBnb | uint256 | undefined |

### investingTokenAddress

```solidity
function investingTokenAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### investingTokenType

```solidity
function investingTokenType() external view returns (enum IBaseInvestController.InvestingTokenType)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | enum IBaseInvestController.InvestingTokenType | undefined |

### rewardsTokenAddress

```solidity
function rewardsTokenAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### swapFee

```solidity
function swapFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdrawalAndRefoundToMilkyWal

```solidity
function withdrawalAndRefoundToMilkyWal(uint256 _amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | undefined |

### withdrawnBnb

```solidity
function withdrawnBnb() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |




