# Maple-JS

A JavaScript SDK which provides tools for interacting with Maple Protocol.

## Getting Started

```js
import { FooService } from 'maple-js'

const foo = new FooService({ network: 'mainnet' })

foo.getLoanFoo('0x0000000000000000000000000000000000000000')
```

## TypeChain

To interface directly with the contracts you can use the typechain interface.

```js
import { mapleGlobals } from 'maple-js'

const contractAddress = '0x'
const signer = null // you need to provide your signer to connect

const contract = mapleGlobals.core.connect(contractAddress, signer)
const poolDelegateAddress = '0x'
const method = await contract.isValidPoolDelegate(poolDelegateAddress)
```
