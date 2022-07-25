import { HardhatUserConfig } from 'hardhat/config'
// import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import '@primitivefi/hardhat-dodoc'
import 'hardhat-abi-exporter'

const publickContracts = ['IPair', 'MilkyWay', 'Multicall', 'PresaleService', 'ReferralService', 'SolarToken', 'StakingService', 'ERC20']

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  abiExporter: {
    path: './dist/abi',
    runOnCompile: false,
    clear: true,
    flat: true,
    only: publickContracts.map((name) => `:${name}$`),
    spacing: 2,
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  dodoc: {
    runOnCompile: true,
    debugMode: true,
    outputDir: './docs',
    freshOutput: true,
    keepFileStructure: true,
    include: publickContracts,
    // More options...
  },
};

export default config;
