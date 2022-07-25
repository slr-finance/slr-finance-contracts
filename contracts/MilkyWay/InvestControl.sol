// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "abdk-libraries-solidity/ABDKMath64x64.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./BaseInvestController.sol";

abstract contract InvestControl { 
  using ABDKMath64x64 for int128;
  using SafeERC20 for IERC20;

  struct InvestPoolsShare {
    address controller;
    int128 share;
  }

  uint256 public totalInvested;
  function bnb() public view virtual returns(IERC20);

  InvestPoolsShare[] public investPoolShare;
  uint256 public investPoolLastIndex;
  mapping(address => uint256) investPoolIndex;
  mapping(address => bool) investControllers;
  mapping(address => int128) investControllerToShare;

  function changeInvestPoolShare(address _controller, int128 _share) external virtual {
    require(_share > 0, 'InvestControl');
    require(investControllers[_controller], 'InvestControl');
    int128 totalShare = ABDKMath64x64.fromUInt(0);

    for (uint256 index = 0; index < investPoolShare.length; index++) {
      if (investPoolShare[index].controller == _controller) {
        investPoolShare[index].share = _share;
      }

      totalShare = totalShare.add(investPoolShare[index].share);
    }

    require(totalShare <= ABDKMath64x64.fromUInt(1), 'InvestControl');
  }

  function setInvestController(address _address, bool _active)  external virtual {
    if (_active == false) {
      require(investControllerToShare[_address] == 0, 'InvestControl');
      require(investControllers[_address] == true, 'InvestControl');

      delete investControllers[_address];
      delete investControllerToShare[_address];

      uint256 currentInvestPoolIndex = investPoolIndex[_address];

      if (currentInvestPoolIndex != investPoolLastIndex) {
        InvestPoolsShare memory lastInvestPool = investPoolShare[investPoolLastIndex];
        investPoolShare[currentInvestPoolIndex] = lastInvestPool;
      }

      delete investPoolShare[investPoolLastIndex];
      investPoolLastIndex -= 1;
    } else {
      investControllers[_address] = true;
      investControllerToShare[_address] = int128(0);
      investPoolLastIndex += 1;
      investPoolShare.push(
        InvestPoolsShare(
          _address,
          int128(0)
        )
      );
    }
  }

  function investAll() external virtual {
    for (uint256 index = 0; index < investPoolShare.length; index++) {
      invest(investPoolShare[index].controller);
    }
  }

  function invest(address _controller) public virtual {
    uint256 investedBnb = BaseInvestController(_controller).investedBnb();
    uint256 poolShare = investControllerToShare[_controller].mulu(0);

    if (poolShare > investedBnb) {
      // TODO: добавить ограничение на размер инвестиции что бы не словить большой прайс импакт
      investPool(_controller, poolShare - investedBnb);
    } else {
      uint256 investedTokensByBnbPrice = BaseInvestController(_controller).investedTokensByBnbPrice();
      // TODO: добавить ограничение на размер вывода что бы не словить большой прайс импакт
      if (investedTokensByBnbPrice > poolShare) {
        withdrawalPool(_controller, investedTokensByBnbPrice);
      }
    }
  }

  function investPool(address _controller, uint256 _investingAmount) private {
    bnb().safeApprove(_controller, _investingAmount);
    BaseInvestController(_controller).invest(_investingAmount);
  }

  function withdrawalPool(address _controller, uint256 _investingAmount) private {

  }
}
