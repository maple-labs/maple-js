require('dotenv').config()
import { environmentMocks, addresses } from '../dist'
import { ethers } from 'ethers'

const sepolia = {
  name: 'Sepolia',
  networkName: 'sepolia',
  symbol: 'ETH',
  chainId: 11155111,
  RPC_URL: process.env.SEPOLIA_RPC_URL
}

const walletAddress = '0xd2d3b10f0381786592f262dba838edc7dae7a343'
const erc20Address = addresses['sepolia-dev'].USDC

describe('USDC contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(sepolia.RPC_URL, sepolia)
  const usdc = environmentMocks.erc20.connect(erc20Address, provider)

  test('Successfully calls contract method', async () => {
    const balance = await usdc.balanceOf(walletAddress)
    expect(balance.gt(1))
  })
})
