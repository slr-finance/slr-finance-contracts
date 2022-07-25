const StakingService = artifacts.require('StakingService')
const ReferralService = artifacts.require('ReferralService')
const SolarToken = artifacts.require('SolarToken')
const { saveContractAddress, getContractAddress } = require('../utils/saveContractAddress')

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(
    StakingService,
    getContractAddress('SolarToken'),
    getContractAddress('SolarToken'),
    // apr
    [
      1300000,
      1500000,
      1700000,
      1900000,
      2020000,
      2150000,
      2250000,
      2350000,
      2450540,
    ],
    // _minLock
    [
      4,
      8,
      13,
      21,
      34,
      54,
      86,
      136,
      215,
    ],
    // _maxLock
    [
      7,
      12,
      20,
      32,
      51,
      81,
      129,
      204,
      323,
    ],
    // _withdrawalFees
    [
      24600,
      71500,
      153900,
      283400,
      459200,
      664000,
      847900,
      959000,
      995300,
    ],
  )
  const stakingServiceInstance = await StakingService.deployed()

  saveContractAddress('StakingService', stakingServiceInstance.address)

  const referralServiceInstance = await ReferralService.at(getContractAddress('ReferralService'))
  const REFERRAL_UPDATER_ROLE = await referralServiceInstance.REFERRAL_UPDATER_ROLE()
  await referralServiceInstance.grantRole(REFERRAL_UPDATER_ROLE, getContractAddress('StakingService'))
  await stakingServiceInstance.setReferralContract(getContractAddress('ReferralService'))

  const solarTokenInstance = await SolarToken.at(getContractAddress('SolarToken'))
  const MINTER_ROLE = await solarTokenInstance.MINTER_ROLE()

  await solarTokenInstance.grantRole(MINTER_ROLE, getContractAddress('StakingService'))
}
