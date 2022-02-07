export const NETWORKS: Record<
  string,
  {
    name: string
    networkName: string
    symbol: string
    chainId: number
    RPC_URL: string
  }
> = {
  mainnet: {
    name: 'Ethereum Mainnet',
    networkName: 'mainnet',
    symbol: 'ETH',
    chainId: 1,
    RPC_URL: process.env.REACT_APP_MAINNET_URL || 'https://main-light.eth.linkpool.io'
  },
  kovan: {
    name: 'Kovan',
    networkName: 'kovan',
    symbol: 'ETH',
    chainId: 42,
    RPC_URL:
      process.env.REACT_APP_KOVAN_URL ||
      'https://eth-kovan.alchemyapi.io/v2/2a0pSjnWnouFOf6eYV3n87xVhv7r9WDW'
  },
  rinkeby: {
    name: 'Rinkeby',
    networkName: 'rinkeby',
    symbol: 'ETH',
    chainId: 4,
    RPC_URL: process.env.REACT_APP_RINKEBY_URL || 'https://rinkeby-light.eth.linkpool.io'
  },
  localhost: {
    name: 'Localhost',
    networkName: 'localhost',
    symbol: 'ETH',
    chainId: 31337,
    RPC_URL: 'http://localhost:8545'
  }
}
