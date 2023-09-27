# maple-js

A JavaScript SDK for interacting with Maple Protocol's smart contracts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Addresses](#addresses)
    - [Usage](#addresses-usage)
  - [Connecting to a Contract](#connecting-to-a-contract)
    - [Usage](#connecting-to-a-contract-usage)
  - [Interacting with a Contract](#interacting-with-a-contract)
    - [Usage for Queries](#usage-for-queries)
    - [Usage for Transactions](#usage-for-transactions)
- [Additional Resources](#additional-resources)

## Getting Started

### Installation

Install the SDK using npm or yarn:

```
npm install --save @maplelabs/maple-js

// or if using yarn

yarn add @maplelabs/maple-js
```

### Addresses

`maple-js` provides smart contract addresses for the following networks: `Ethereum Mainnet` & `Goerli`. Valid network values are: `'mainnet' | 'goerli' | 'base-goerli`. Valid project values are `'mainnet-prod' | 'mainnet-dev' | 'goerli-prod' | 'goerli-dev' | 'base-goerli-dev'`.

Access addresses from the `addresses` object exported from `maple-js`. See a list of available contracts in `src/addresses/*.ts`.

**Addresses Usage**

```js
import { addresses } from '@maplelabs/maple-js'

// Returns the contract address for MapleToken on Ethereum Mainnet
const contractAddress = addresses.mainnet.MapleToken
```

### Connecting to a Contract

To connect to a contract, you'll need its address and a signer. Refer to the [ethers docs](https://docs.ethers.io/v5/) (or your choice of web3 library) for further assistance.

**Connecting to a Contract Usage**

```js
import { mapleGlobals } from '@maplelabs/maple-js'

const contractAddress = addresses.mainnet.MapleToken
const signer = 'yourSigner'

const contract = mapleGlobals.core.connect(contractAddress, signer)
```

### Interacting with a Contract

Once connected to a contract, you can call any available methods using the `contract` instance. `maple-js` contracts use typechain, so you can see all available methods using intellisense in your IDE.

**Usage for Queries**

Basic queries can be called using the standard `await` pattern:

```js
const basicQuery = await contract.lpCooldownPeriod()
```

**Usage for Transactions**

When executing a transaction, use the `.wait()` method to resolve the Promise once the block containing your transaction has enough confirmations to be considered final:

```js
import { pool } from '@maplelabs/maple-js'

const poolContract = pool.core.connect(poolAddress, signer)
const method = await (await poolContract.deposit(depositAmount)).wait()
```

## Additional Resources

- For technical infomration about Maple Protocol, visit [our GitBook](https://maplefinance.gitbook.io/maple/technical-resources/protocol-overview).
