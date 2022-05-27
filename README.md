# Maple-JS

A JavaScript SDK which provides tools for interacting with Maple Protocol.

## Getting Started

### Quick Start
```
npm install --save @maplelabs/maple-js

// or if using yarn

yarn add @maplelabs/maple-js
```
---
### Addresses
- Maple-JS provides you with smart contract addresses across the following networks: `Ethereum Mainnet`, `Rinkeby` & `Kovan`
    - Valid network values are: `'mainnet' | 'rinkeby' | 'kovan'`;
- You can access addresses from the `addresses` object exported from maple-js:
- You can see a list of available contracts in `src/addresses/*.ts`

#### Usage

```js
import { addresses } from '@maplelabs/maple-js';

// Returns the contract address for MapleToken on Ethereum Mainnet
const contractAddress = addresses.mainnet.MapleToken

```
---

### Connecting to a Contract

- Once you have the address you need to set up a signer.
- Please refer to the [ethers docs](https://docs.ethers.io/v5/) (or your choice of web3 library) if you require further assistance.


#### Usage

```js
import { mapleGlobals } from 'maple-js'

const contractAddress = addresses.mainnet.MapleToken
const signer = 'yourSigner';

const contract = mapleGlobals.core.connect(contractAddress, signer)
```
---

### Interacting with a contract
- Once you have connected to the contract you are then able to call any of the methods on that contract using the `contract` instance in the previous example:
- Maple-JS contracts use typechain so you can see all the available methods using intellisense in your IDE.


#### Usage for queries
- Basic queries can be called using a standard `await` pattern

```
const basicQuery = await contract.lpCooldownPeriod()
```

#### Usage for transactions
- If you are executing a transaction then it is recommended to use the `.wait()` method so that the Promise resolves when the block containing your transaction has enough confirmations to be considered final:

```
import { pool } from 'maple-js'

const poolContract = pool.core.connect(poolAddress, signer)
const method = await (await poolContract.deposit(depositAmount)).wait()
```
---


### Additional Information

- For detailed information about the methods available on Maples Smart Contracts, please consult [our gitbook](https://maplefinance.gitbook.io/maple/smart-contracts/general)
- For in depth information about Maple Protocol please visit [our maple-core wiki](https://github.com/maple-labs/maple-core/wiki)
