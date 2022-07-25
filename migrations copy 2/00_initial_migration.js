const Migrations = artifacts.require('Migrations.sol')
const { saveContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Migrations)

  saveContractAddress('BnbToken', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
  saveContractAddress('SwapRouter', '0x10ED43C718714eb63d5aA57B78B54704E256024E')
  saveContractAddress('Factory', '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73')
}
