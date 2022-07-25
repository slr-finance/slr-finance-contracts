const Migrations = artifacts.require('Migrations.sol')
const { saveContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Migrations)

  saveContractAddress('BnbToken', '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd')
  saveContractAddress('SwapRouter', '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3')
}
