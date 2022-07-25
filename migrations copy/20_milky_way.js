const MilkyWay = artifacts.require('MilkyWay/MilkyWay.sol')
const SolarToken = artifacts.require('SolarToken')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(
    MilkyWay,
    getContractAddress('SolarToken'),
    //'0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc', // factory
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // wbnb
    '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3', // router
    //20 // fee * 10 000
  )

  const milkyWayInstance = await MilkyWay.deployed()

  const solarTokenInstance = await SolarToken.at(getContractAddress('SolarToken'))

  await solarTokenInstance.setMilkyWayAddress(milkyWayInstance.address)
  await solarTokenInstance.excludeFromFee(milkyWayInstance.address)
  await solarTokenInstance.excludeFromAntiWhale(milkyWayInstance.address)

  saveContractAddress('MilkyWay', milkyWayInstance.address)
}
