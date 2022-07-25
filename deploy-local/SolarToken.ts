import {HardhatRuntimeEnvironment} from 'hardhat/types'
import {DeployFunction} from 'hardhat-deploy/types'
import {parseEther} from 'ethers/lib/utils'

const func: DeployFunction = async function ({deployments, getNamedAccounts}: HardhatRuntimeEnvironment) {
  const {deploy} = deployments

  const {deployer, simpleERC20Beneficiary} = await getNamedAccounts()

  await deploy('SolarToken', {
    from: deployer,
    args: [simpleERC20Beneficiary, parseEther('1000000000')],
    log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
  })
}

export default func

func.tags = ['SolarToken']