const NmxInvestController = artifacts.require('MilkyWay/InvestController/NmxInvestController/NmxInvestController.sol')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
    console.log(network)
    await deployer.deploy(
      NmxInvestController,
      getContractAddress('MilkyWay'),
      getContractAddress('BnbToken'),
      '0xea62868e68d1Ac0c9d312C9f00a81B5295da5ebD', //_investingTokenAddress,
      0,
      '0xea62868e68d1Ac0c9d312C9f00a81B5295da5ebD', //_rewardsTokenAddress,
      '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc', // factory
      '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc', // _stakingServiceAddress
    )
    const nmxInvestControllerInstance = await NmxInvestController.deployed()
    saveContractAddress('NMX_INVEST', nmxInvestControllerInstance.address)
  }
  