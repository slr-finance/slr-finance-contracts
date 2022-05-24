const SolarToken = artifacts.require('SolarToken')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer) => {
  await deployer.deploy(
    SolarToken,
    getContractAddress('Factory'),
    getContractAddress('BnbToken'),
  )

  const solarTokenInstance = await SolarToken.deployed()

  saveContractAddress('SolarToken', solarTokenInstance.address)

  await solarTokenInstance.excludeFromFee(getContractAddress('SwapRouter')) // Router
  await solarTokenInstance.excludeFromAntiWhale(getContractAddress('SwapRouter')) // Router

  const slrPairAddress = await solarTokenInstance.pairAddress()

  saveContractAddress('SolarPair', slrPairAddress)
}
