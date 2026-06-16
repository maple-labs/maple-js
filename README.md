# maple-js

A JavaScript SDK for interacting with Maple Protocol's smart contracts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Addresses](#addresses)
  - [Connecting to a Contract](#connecting-to-a-contract)
  - [Interacting with a Contract](#interacting-with-a-contract)
- [Utils](#utils)
  - [Generating Unsigned Transaction Data](#generating-unsigned-transaction-data)
  - [Generating Signed Transaction Data](#generating-signed-transaction-data)
  - [Broadcasting Signed Transactions](#broadcasting-signed-transactions)
- [Development](#development)
- [Releasing](#releasing)
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

`maple-js` ships deployed contract addresses keyed by project. Valid projects are `'mainnet-prod' | 'mainnet-dev' | 'sepolia-prod' | 'sepolia-dev' | 'base-mainnet-prod'` (Base Mainnet is deprecated). See the available contracts per project in `src/addresses/*.ts`.

**Addresses Usage**

```js
import { addresses } from '@maplelabs/maple-js'

// Returns the contract address for MapleToken on Ethereum Mainnet (prod)
const contractAddress = addresses['mainnet-prod'].MapleToken
```

### Connecting to a Contract

To connect to a contract, you'll need its address and a signer. The `signer` should be an instance of a wallet that can sign transactions. Refer to the [ethers docs](https://docs.ethers.io/v5/) (or your choice of web3 library) for further assistance.

**Connecting to a Contract Usage**

```js
import { addresses, mapleGlobals } from '@maplelabs/maple-js'

const contractAddress = addresses['mainnet-prod'].MapleToken
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

### Generating Unsigned Transaction Data

This utility allows you to generate unsigned transaction data, facilitating the creation of transactions that can later be signed and sent to the network. This is particularly useful for offline transaction preparation or when keys are managed externally.
Usage

```
import { utils } from '@maplelabs/maple-js'

const { txBytes, txInstance } = utils.generateUnsignedTransactionData(parameters)
```

The `generateUnsignedTransactionData` function supports creating unsigned transactions for specific actions, currently including `poolDeposit` and `poolQueueWithdrawal`. Depending on the action, parameters must be provided accordingly:

- For `poolApprove`, specify the spender address and approve amount in assets.
- For `poolDeposit`, specify the deposit amount in assets.
- For `poolQueueWithdrawal`, specify the withdrawal amount in shares.

**Parameters**

All calls to `generateUnsignedTransactionData` require the following parameters:

```
interface CommonInputs {
  provider: Provider
  walletAddress: string
  contractAddress: string
  type: poolApprove | poolDeposit | poolQueueWithdrawal
  params: {}
}
```

`poolApprove` requires the following `params`:

```
  params: {
    spender: string // address
    amount: BigNumberish // denominated in assets
  }
```

`poolDeposit` requires the following `params`:

```
  params: {
    depositAmount: BigNumberish // denominated in assets
  }
```

`poolQueueWithdrawal` requires the following `params`:

```
  params: {
    withdrawalAmount: BigNumberish // denominated in shares
  }
```

### Generating Signed Transaction Data

This utility provides the functionality to combine unsigned transaction with a signature to create a signed transaction string. This is crucial for scenarios where transactions are prepared offline or in secure environments.

```
import { utils } from '@maplelabs/maple-js'

const signedTxData = utils.generateSignedTransactionData({
  txBytes: 'unsignedTransactionBytes',
  signature: 'signature'
})
```

**Parameters**

- `txBytes`: The serialized unsigned transaction data.
- `signature`: The signature obtained from signing the transaction hash.

This function returns the serialized signed transaction data, ready for broadcasting to the Ethereum network.

### Broadcasting Signed Transactions

This utility allows you to broadcast a signed transaction to the Ethereum network. This step is the final stage in submitting transactions, where the transaction is sent to a node in the network for processing and inclusion in the blockchain.

```
import { utils } from '@maplelabs/maple-js'

const txReceipt = await utils.broadcastSignedTransaction(
  'signedTransactionData',
  'rpcUrl'
)
```

**Parameters**

- `signedTxData`: The serialized signed transaction data.
- `rpcUrl`: The URL of the Ethereum JSON-RPC endpoint to which you are broadcasting the transaction.

This function sends the signed transaction to the network and returns the transaction receipt once the transaction has been processed.

**Utils Example**

An example usage of these utilities, including parameter setup and function calls, can be found in the repository at `src/helpers/serialiseExampleUse`.

## Development

Use the Node version pinned in `.nvmrc` (also enforced via `engines` in `package.json`); the repo uses Yarn 4 via corepack.

```bash
corepack enable            # activate the pinned Yarn
yarn install --immutable   # install dependencies
yarn build-typechain       # generate src/typechain from src/abis (run before build)
yarn build                 # rollup bundle -> dist/
yarn lint                  # tsc --noEmit + eslint
yarn format                # prettier --write
```

`yarn test` runs the jest suites, which are integration tests that call live contracts over an RPC endpoint — they are not run in CI.

## Releasing

Releases publish to npm as `@maplelabs/maple-js` via [OIDC trusted publishing](https://docs.npmjs.com/trusted-publishers) — no long-lived npm tokens.

1. Bump `version` in `package.json` on a branch, then merge to `main`.
2. Create a GitHub Release tagged `vX.Y.Z` (the tag must match `package.json`).
3. The **Publish Release** workflow runs in the `npm` environment.
4. A different member of the `offchain` team approves the deployment.
5. The package is published with `npm publish --provenance` (SLSA provenance); the workflow then re-installs the published version and verifies its attestation.

The `npm` environment requires a `v*` tag, `offchain` team approval, prevent-self-review, and no admin bypass. Prereleases run a dry-run publish only.

## Additional Resources

For technical information about Maple Protocol, visit: [our GitBook](https://maplefinance.gitbook.io/maple/technical-resources/protocol-overview).

## About Maple

[Maple Finance](https://maple.finance/) is a decentralized corporate credit market. Maple provides capital to institutional borrowers through globally accessible fixed-income yield opportunities.

---

<p align="center">
  <img src="https://user-images.githubusercontent.com/44272939/196706799-fe96d294-f700-41e7-a65f-2d754d0a6eac.gif" height="100" />
</p>
