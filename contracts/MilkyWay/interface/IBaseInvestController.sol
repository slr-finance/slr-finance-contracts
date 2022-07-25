// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface IBaseInvestController {
  enum InvestingTokenType { TOKEN, LP }

  function invest(uint256 _investingBnbAmount) external returns(uint256 investingAmount);
  function claimAndBuyBack() external;
  function withdrawalAndRefoundToMilkyWal(uint256 _amount) external;
}