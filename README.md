# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```



## Running stand-alone in order to support wallets and other software
Alternatively, Hardhat Network can run in a stand-alone fashion so that external clients can connect to it. This could be MetaMask, your Dapp front-end, or a script. To run Hardhat Network in this way, run:


```bash
$ yarn local-node
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

```
Accounts
========
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
...
```
This will start Hardhat Network, and expose it as a JSON-RPC and WebSocket server.

Then, just connect your wallet or application to http://127.0.0.1:8545.

If you want to connect Hardhat to this node, you just need to run using --network localhost.

WARNING

Do not send mainnet Ether to the account addresses shown by hardhat node. Those addresses and private keys are deterministic: they are the same for all Hardhat users. Accordingly, those private keys are well known, so there are probably bots monitoring these addresses on mainnet, waiting to withdraw any funds sent to them. If you add any of those accounts to a wallet (eg Metamask), be very careful to avoid sending any mainnet Ether to them: consider naming the account something like "Hardhat - Unsafe" in order to prevent any mistakes.

# 