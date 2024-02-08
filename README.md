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

Install the SDK using `npm`:

```
npm install @maplelabs/maple-js
```

Or, if using `yarn`:

```
yarn add @maplelabs/maple-js
```

### Addresses

`maple-js` provides smart contract addresses for the following networks: `Ethereum Mainnet`, `Sepolia` & `Goerli`.

Valid network values are: `'mainnet' | 'sepolia' | 'goerli' | 'base-mainnet' | 'base-goerli`.

Valid project values are `'mainnet-prod' | 'mainnet-dev' | 'sepolia-dev' | 'goerli-prod' | 'goerli-dev' | 'base-mainnet-prod' | 'base-goerli-dev'`.

Access addresses from the `addresses` object exported from `maple-js`. See a list of available contracts in `src/addresses/*.ts`.

**Addresses Usage**

```js
import { addresses } from '@maplelabs/maple-js'

// Returns the contract address for MapleToken on Ethereum Mainnet
const contractAddress = addresses.mainnet.MapleToken
```

### Connecting to a Contract

To connect to a contract, you'll need its address and a signer. The `signer` should be an instance of a wallet that can sign transactions. Refer to the [ethers docs](https://docs.ethers.io/v5/) (or your choice of web3 library) for further assistance.

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

## Utils

**Generating Unsigned Transaction Data**

This feature allows you to generate unsigned transaction data, facilitating the creation of transactions that can later be signed and sent to the network. This is particularly useful for offline transaction preparation or when keys are managed externally.
Usage

```
import { utils } from '@maplelabs/maple-js'

const { txBytes, txInstance } = utils.generateTransactionData(parameters)
```

The `generateTransactionData` function supports creating unsigned transactions for specific actions, currently including `poolDeposit` and `poolQueueWithdrawal`. Depending on the action, parameters must be provided accordingly:

- For `poolDeposit`, specify the deposit amount in assets.
- For `poolQueueWithdrawal`, specify the withdrawal amount in shares.

**_Parameters_**

All calls to `generateTransactionData` require the following parameters:

```
interface CommonInputs {
  provider: Provider
  walletAddress: string
  contractAddress: string
  chainId: number
  type: `poolDeposit` | `poolQueueWithdrawal`
  params: {}
}
```

`poolDeposit` requires the following `params`:

```
  params: {
    depositAmount: BigNumberish // denominated in assets
  }
```

`poolWithdrawal` requires the following `params`:

```
  params: {
    depositAmount: BigNumberish // denominated in shares
  }
```

**_Example_**

An example usage of this feature, including parameter setup and function calls, can be found in the repository at `src/helpers/serialiseExampleUse`.

## Additional Resources

For technical infomration about Maple Protocol, visit [our GitBook](https://maplefinance.gitbook.io/maple/technical-resources/protocol-overview).

## About Maple

[Maple Finance](https://maple.finance/) is a decentralized corporate credit market. Maple provides capital to institutional borrowers through globally accessible fixed-income yield opportunities.

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/44272939/196706799-fe96d294-f700-41e7-a65f-2d754d0a6eac.gif" height="100" />
</p>
