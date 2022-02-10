# Maple-JS

A JavaScript SDK which provides tools for interacting with Maple Protocol.

## Getting Started

For testing, you'll need to copy `.env.example` as `.env` and add the RPC urls.

```
yarn
yarn build
```

To interface directly with the contracts you can use the typechain interface.

```js
import { mapleGlobals } from 'maple-js'

const contractAddress = '0x'
const signer = null // you need to provide your signer to connect

const contract = mapleGlobals.core.connect(contractAddress, signer)
const poolDelegateAddress = '0x'
const method = await contract.isValidPoolDelegate(poolDelegateAddress)
```
