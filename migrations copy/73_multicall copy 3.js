const Multicall = artifacts.require('Multicall')
const { saveContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Multicall)
  const multicallServiceInstance = await Multicall.deployed()

  saveContractAddress('Multicall', multicallServiceInstance.address)
}
