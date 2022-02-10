require('dotenv').config()
import { mapleGlobals, addresses } from '../dist'
import { ethers } from 'ethers'

const kovan = {
  name: 'Kovan',
  networkName: 'kovan',
  symbol: 'ETH',
  chainId: 42,
  RPC_URL: process.env.KOVAN_RPC_URL // will need to provide RPC_URL to run tests
}

const walletAddress = '0x91512a024607515E57aE8ffB9d478036F20fCF0C'
const kovanMapleGlobalsAddress = addresses.kovan.MapleGlobals

describe('MapleGlobals contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(kovan.RPC_URL, kovan)
  const globals = mapleGlobals.core.connect(kovanMapleGlobalsAddress, provider)

  test('Successfully calls contract method', async () => {
    const isDelegate = await globals.isValidPoolDelegate(walletAddress)
    expect(isDelegate).toBe(false)
  })
})
