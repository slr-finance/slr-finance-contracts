const SolarToken = artifacts.require('SolarToken')
const ReferralService = artifacts.require('ReferralService')
const PresaleService = artifacts.require('PresaleService')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(
    PresaleService,
    getContractAddress('ReferralService'),
    getContractAddress('SolarToken'),
    getContractAddress('SwapRouter'),
  )
  const presaleServiceInstance = await PresaleService.deployed()

  saveContractAddress('PresaleService', presaleServiceInstance.address)

  const solarTokenInstance = await SolarToken.at(getContractAddress('SolarToken'))
  const referralServiceInstance = await ReferralService.at(getContractAddress('ReferralService'))
  const MINTER_ROLE = await solarTokenInstance.MINTER_ROLE()
  const REFERRAL_UPDATER_ROLE = await referralServiceInstance.REFERRAL_UPDATER_ROLE()

  await solarTokenInstance.grantRole(MINTER_ROLE, getContractAddress('PresaleService'))
  await referralServiceInstance.grantRole(REFERRAL_UPDATER_ROLE, getContractAddress('PresaleService'))
}
