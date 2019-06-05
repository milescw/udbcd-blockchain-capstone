# Udacity Blockchain Capstone
This is a sample application for Udacity's Blockchain Developer course.  A decentralized house listing title marketplace service.

**Project name: udbcd-blockchain-capstone**

This project is connected to the _Blockchain Developer Nanodegree Program_ course by **Udacity**.
The project is using OpenSea to list the property tokens for sale. In order to list a property, you'll need to go to the item on your account page. On the item detail page, click "Sell". This will walk you through the steps for selling an item. Note that the first time you auction an item, you will need to complete several MetaMask transactions in order to give the exchange contracts access to your items. After you complete these initial steps, creating an auction will only require signing a MetaMask message. This means that you can auction items without paying gas.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Environment ###
This program requires **node.js**  and **npm** program envirenment 

## Prerequisites
Please make sure you've already installed 
  Tools and  used version
*   node               (v10.15.0)
*   npm                 (6.4.1)
*   Ganache CLI v6.2.5 (ganache-core: 2.3.3)
*   Truffle v5.0.13 (core: 5.0.13)
*   Solidity - 0.5.2 (solc-js)
*   MetaMask extension for browser ( 6.1.0)
*   Web3.js v1.0.0-beta.37

## Installing
A step by step series of examples that instruct you how to get a development environment running.

#### Create a local working directory and then  clone github repository:
```
mkdir workspace
cd workspace
https://github.com/milescw/udbcd-blockchain-capstone.git
```
#### Install required node packages 
Change to project folder and install all requisite npm packages (as listed in ```package.json```):

```
cd udbcd-blockchain-capstone
npm install
```

#### Open a terminal window and Launch Ganache:
If you are using ganache-cli use this command to add 40 funded accounts:
```
ganache-cli -p 8545 -m "window mixed monkey blue define six zero check rebel chicken example practice" --gasLimit 300000000 --gasPrice 20000000000 -a 40

```

#### Open a separate terminal window and  compile smart contracts:
Change to the folder ```eth-contracts``` 
cd udbcd-blockchain-capstone
cd eth-contracts
```
truffle compile
```

This will create the smart contract artifacts in folder ```./build/contracts```.

#### Migrate smart contracts to the locally running blockchain, ganache-cli:
Change to the folder ```eth-contracts``` 
```
truffle migrate --reset
```
This will :
  - deploy the smart contract artifacts to running Ganache 
 
#### Test smart contracts:
Change to the folder ```eth-contracts``` 
```
truffle test ./test/TestERC721Mintable.js 
```

![TestERC721Mintable.js](images/test1-TestERC721Mintable.png)

All 12 tests should pass.

```
truffle test ./test/TestSquareVerifier.js  
```

![TestSquareVerifier.js](images/test2-TestSquareVerifier.png)

All 2 tests should pass.

```
truffle test ./test/TestSolnSquareVerifier.js  
```

![TestSolnSquareVerifier.js](images/test3-TestSolnSquareVerifier.png)

All 8 tests should pass.


#### Deploying contracts to rinkeby
###### Following contracts are deployed to rinkeby for this project:
* Deploying 'ERC721Mintable'
```
    contract address:    0x071F0Bb69Ae0c6eC8AD311788725b53899b9cfc2
```
* Deploying 'Verifier'
```
    contract address:    0x421dDa9C4Cd5BC10866E90488849f62FF82Fa6b2
```
* Deploying 'SolnSquareVerifier'
```
    contract address:    0xe81923a8D3253a25B0A95c874046B89749BDca98
```

You can view the source code for this smart contract at rinkeby etherscan:
  [SolnSquareVerifier](https://rinkeby.etherscan.io/address/0xe81923a8D3253a25B0A95c874046B89749BDca98).
  
###### To deploy your contracts with truffle:
Set the Infura API key and MetaMask mnemonic as environment variables when running the truffle script (truffle-config.js).
Change to the folder ```eth-contracts``` 
*  get an Infura API key
*  get MetaMask mnemonic
*  Open a terminal window and run following commands
```
export INFURA_KEY="<your_infura_key>"
export MNEMONIC="<metamask>"
export NETWORK="rinkeby"
truffle migrate --network rinkeby --reset
```

#### Mint tokens
###### For this project :
```
 10 tokens are minted

1.  Minted token. Transaction:  0xa034d4b46522724da17e9cdad6ca0c2ebc162f1db7b4633dd74fb0606b4fcb8d
2.  Minted token. Transaction:  0x9ef025516e78af015ab47e20067f2d319e6d434ac600a73f537cd4e6aa4b5e6e
3.  Minted token. Transaction:  0xeabd55871ae4195da545beb968a1a3d865e7cf50b85c8ba73265b1c799337d03
4.  Minted token. Transaction:  0x6b339651ce85701cb16447db0f0d375692f0c7d8ba1d12031f58b3a373c9972e
5.  Minted token. Transaction:  0x7cc01952490a9cbc17e09c494a2231014915243da45665e834a7122737cade83
6.  Minted token. Transaction:  0xc0fef0e02b40a8083e100595268fc8eeb4eebeae397ae009b0d5d2fe0fd12049
7.  Minted token. Transaction:  0x66a422cb5f6f44901e1d68dd0e89b9d8f21e4c569e7e466d03c57feb64d7476e
8.  Minted token. Transaction:  0xfb3d9a037bc360b3146d4adad4a08bc47c8e7d9c4c0de2b2f0b12e5431127430
9.  Minted token. Transaction:  0x804ec052a2ffe6a9ab3ccc13daa9a5fe494bf82c70bbb4de130105000c5f3e40
10. Minted token. Transaction:  0x5ffdd0c798d0dbd30fee57b9ce50e5d8a25ba9482cb6e7ea894e81892ede30b2

```
Mint these assets into an account that we control to test the OpenSea auction flow for our items.
After deploying to the Rinkeby network, there will be a contract on Rinkeby that will be viewable on Rinkeby Etherscan. 
You can find the address of the deployed contract in the output of the deployment command and find it on Rinkeby Etherscan by hitting the URL:  
https://rinkeby.etherscan.io/address/<contract_address>.

###### To mint your contracts with truffle:
You should set this contract address and the address of your MetaMask account as environment variables when running the minting script:
Open a separate terminal windowChange to project folder:
```
cd udbcd-blockchain-capstone
export MNEMONIC="<MetaMask mnemonic>"
export INFURA_KEY="<>"
export NFT_CONTRACT_ADDRESS="<deplyed_contract_address>"
export OWNER_ADDRESS="<my_address>"
export NETWORK="rinkeby"
node scripts/mint.js
```

#### Generate Storefront on OpenSea marketplace:
OpenSea has a Rinkeby environment that allows developers to test their integration with OpenSea. 
This can be found at rinkeby.opensea.io. 

    https://rinkeby.opensea.io/get-listed/step-two

By using <contract_address> (SolnSquareVerifier), we should be able to use our contract on OpenSea. 
Deployed contract to rinkeby is :  'SolnSquareVerifier'
```
    contract address:    0xe81923a8D3253a25B0A95c874046B89749BDca98
```

Your terminal should look something like this:
![OpenSea submit marketplace page](images/UX-1.png)

#### Test and Verify OpenSea with SolnSquareVerifier tokens:

https://rinkeby.opensea.io/category/udacityrealestatetitle

* List 5 of your tokens on the marketplace
* Purchase those 5 tokens using a different address

**Tokens Listed**
![Udacity Real Estate Title](images/UX-2.png)

**Tokens Purchased**
![Udacity Real Estate Title](images/UX-3.png)


## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* [ZoKrates](https://github.com/Zokrates/ZoKrates) - Implement zkSnarks using ZoKrates, a toolbox for zkSNARKs on Ethereum.
* [Docker](https://docs.docker.com/install/) - Docker is the recommended way to get started with Zokrates. Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
* [OpenSea](https://docs.opensea.io/docs) - OpenSea is a decentralized marketplace that is used for selling for crypto assets
* [Infura](https://infura.io/) - Scalable Blockchain Infrastructure
* [Metamask](https://metamask.io/) - MetaMask is a bridge that allows to visit the distributed web in browser.

## Acknowledgments
* Solidity
* Ganache-cli
* Truffle
* JavaScript
* Node
* Ethereum
* Blockchain

# Project Resources
* [How does Ethereum work anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
* [OpenSea](https://docs.opensea.io/docs)
* [Infura](https://infura.io/)
* [Metamask](https://metamask.io/)