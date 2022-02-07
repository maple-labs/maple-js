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
import { loanV2 } from 'maple-js'

const loanFactory = new loanV2.MapleLoan__factory()

loanFactory.contractName
```
