// import { ethers, providers } from 'ethers';

import { getFoo } from '../helpers/foo'
import { getProvider } from '../helpers/config'

export interface FooConfig {
  network: string
  injectedProvider?: string
  defaultProviderKeys?: string
  config?: any
}

export class FooService {
  readonly config: any

  constructor({ network, injectedProvider, defaultProviderKeys }: FooConfig) {
    const [provider, chainId] = getProvider(injectedProvider, defaultProviderKeys, network)

    this.config = { provider, chainId }
  }

  public async getLoanFoo(poolAddress: string, overrides?: any) {
    const balance = await getFoo({
      signer: this.config.provider,
      poolAddress,
      overrides
    })

    return balance
  }
}
