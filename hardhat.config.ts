import { HardhatUserConfig } from 'hardhat/config'
// import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import '@primitivefi/hardhat-dodoc'
import 'hardhat-abi-exporter'
import 'hardhat-deploy'
import { accounts, nodeUrl } from './utils/network'

const publicContracts = ['IRouter02', 'IPair', 'MilkyWay', 'Multicall', 'PresaleService', 'ReferralService', 'SolarToken', 'StakingService', 'ERC20']

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  namedAccounts: {
    deployer: 0,
    simpleERC20Beneficiary: 1,
    daiHolder: '0xf977814e90da44bfa03b6295a0616a897441acec',
  },
  networks: {
    localhost: {
      url: nodeUrl('localhost'),
      accounts: accounts(),
    },
  },
  abiExporter: {
    path: './dist/abi',
    runOnCompile: false,
    clear: true,
    flat: true,
    only: publicContracts.map((name) => `:${name}$`),
    spacing: 2,
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  dodoc: {
    runOnCompile: false,
    debugMode: false,
    outputDir: './docs',
    freshOutput: true,
    keepFileStructure: true,
    include: publicContracts,
    // More options...
  },
};

export default config;
