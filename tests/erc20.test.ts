require('dotenv').config()
import { erc20, addresses } from '../dist'
import { ethers } from 'ethers'

const goerli = {
  name: 'Goerli',
  networkName: 'goerli',
  symbol: 'ETH',
  chainId: 5,
  RPC_URL: process.env.GOERLI_RPC_URL // will need to provide RPC_URL to run tests
}

const walletAddress = '0xa0b30De2833294C200a376B0e8205b9517bF021F'
const goerliUSDCAddress = addresses.goerli.USDC

describe('USDC contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(goerli.RPC_URL, goerli)
  const usdc = erc20.core.connect(goerliUSDCAddress, provider)

  test('Successfully calls contract method', async () => {
    const balance = await usdc.balanceOf(walletAddress)
    expect(balance.gt(1))
  })
})
