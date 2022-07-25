const SolarToken = artifacts.require('SolarToken')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  console.log(1)
  await deployer.deploy(
    SolarToken,
    '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc', // factory
    getContractAddress('BnbToken'),
  )

  const solarTokenInstance = await SolarToken.deployed()

  saveContractAddress('SolarToken', solarTokenInstance.address)

  await solarTokenInstance.excludeFromFee(getContractAddress('SwapRouter')) // Router
  await solarTokenInstance.excludeFromAntiWhale(getContractAddress('SwapRouter')) // Router

  const slrPairAddress = await solarTokenInstance.pairAddress()

  saveContractAddress('SolarPair', slrPairAddress)
}
