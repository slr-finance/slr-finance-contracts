const ReferralService = artifacts.require('ReferralService')
const SolarToken = artifacts.require('SolarToken')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer) => {
  const solarTokenInstance = await SolarToken.at(getContractAddress('SolarToken'))
  
  await deployer.deploy(ReferralService)
  const referralServiceInstance = await ReferralService.deployed()

  referralServiceInstance.setReferrerRewardToken(solarTokenInstance.address)

  await solarTokenInstance.setReferralServiceAddress(referralServiceInstance.address)
  await solarTokenInstance.excludeFromFee(referralServiceInstance.address)
  await solarTokenInstance.excludeFromAntiWhale(referralServiceInstance.address)

  const REFERRAL_UPDATER_ROLE = await referralServiceInstance.REFERRAL_UPDATER_ROLE()
  await referralServiceInstance.grantRole(REFERRAL_UPDATER_ROLE, solarTokenInstance.address)

  saveContractAddress('ReferralService', referralServiceInstance.address)
}
