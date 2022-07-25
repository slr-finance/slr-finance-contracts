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
      1000000,
      1240000,
      1432000,
      1585600,
      1708480,
      1806784,
      1885427,
      1948342,
      1998673,
    ],
    // _minLock
    [
      4,
      8,
      12,
      18,
      25,
      35,
      48,
      66,
      89,
    ],
    // _maxLock
    [
      7,
      11,
      16,
      23,
      32,
      44,
      61,
      83,
      112,
    ],
    // _withdrawalFees
    [
      9600,
      31000,
      70600,
      137200,
      237600,
      373800,
      538600,
      706100,
      844900,
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
