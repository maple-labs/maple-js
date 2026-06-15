# maple-js

TypeScript SDK for Maple Protocol's smart contracts. Ships contract ABIs, generated ethers v5 typings (typechain), and deployed addresses per network. Published to npm as `@maplelabs/maple-js` and consumed by Maple's offchain apps and bots.

> **Convention**: `AGENTS.md` is canonical. Edit this file for repo context; `CLAUDE.md`, `.cursorrules`, and `GEMINI.md` all point here. See the workspace-level `AGENTS.md` for the full file convention used across Maple repos.

## Stack

- **Node** — version pinned in `.nvmrc` (enforced via `package.json` `engines`)
- **Yarn 4** — run `corepack enable` to activate the pinned version
- **TypeScript** strict mode
- **ethers v5** + **typechain** for generated contract typings
- **rollup** (build), **jest** (tests), **eslint** + **prettier**

## Commands

```bash
corepack enable            # activate the pinned Yarn
yarn install --immutable   # install dependencies
yarn build-typechain       # generate src/typechain from src/abis (run before build)
yarn build                 # rollup bundle -> dist/
yarn lint                  # tsc --noEmit + eslint
yarn format                # prettier --write
yarn test                  # jest — integration tests that hit live contracts over RPC (not run in CI)
```

## Structure

```text
src/
├── abis/        # Contract ABI JSON — source of truth, committed
├── addresses/   # Deployed addresses per project: {network}-{env}.ts
├── helpers/     # Unsigned/signed transaction serialisation utils
├── typechain/   # Generated ethers v5 typings — gitignored, built from abis/
└── index.ts     # Public API — contract factories, addresses, utils
scripts/build-typechain.js   # ABI -> typechain codegen
config.json                  # typechain generation config
```

## Releasing

See the [Releasing](README.md#releasing) section in the README.

## Domain

Smart-contract terms are **canonical** — never rename them in code (Pool not "vault", Pool Delegate not "manager", Lender/LP not "depositor", `requestRedeem`/`redeem` not "withdraw"). This SDK is the contract-facing layer, so names here must match the contracts exactly. The protocol's headline metric is **AUM** (not TVL).
