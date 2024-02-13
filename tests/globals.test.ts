require('dotenv').config()
import { mapleGlobalsV3, addresses } from '../dist'
import { ethers } from 'ethers'

const sepolia = {
  name: 'Sepolia',
  networkName: 'sepolia',
  symbol: 'ETH',
  chainId: 11155111,
  RPC_URL: process.env.SEPOLIA_RPC_URL
}

const walletAddress = '0xd2d3b10f0381786592f262dba838edc7dae7a343' // valid delegate in sepolia-dev
const globalsAddress = addresses['sepolia-dev'].NonTransparentProxy

describe('Can call Globals contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(sepolia.RPC_URL, sepolia)
  const globals = mapleGlobalsV3.core.connect(globalsAddress, provider)

  test('Successfully calls contract method', async () => {
    const isDelegate = await globals.isPoolDelegate(walletAddress)
    expect(isDelegate).toBe(true)
  })
})
