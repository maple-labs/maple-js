require('dotenv').config()
import { erc20, addresses } from '../dist'
import { ethers } from 'ethers'

const kovan = {
  name: 'Kovan',
  networkName: 'kovan',
  symbol: 'ETH',
  chainId: 42,
  RPC_URL: process.env.KOVAN_RPC_URL // will need to provide RPC_URL to run tests
}

const walletAddress = '0xF6270fd9940D8F25c639764A26344379C503A7B8'
const kovanUSDCAddress = addresses.kovan.USDC

describe('USDC contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(kovan.RPC_URL, kovan)
  const usdc = erc20.core.connect(kovanUSDCAddress, provider)

  test('Successfully calls contract method', async () => {
    const balance = await usdc.balanceOf(walletAddress)
    expect(balance.gt(1))
  })
})
