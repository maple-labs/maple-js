require('dotenv').config()
import { mapleGlobals, addresses } from '../dist'
import { ethers } from 'ethers'

const goerli = {
  name: 'Goerli',
  networkName: 'goerli',
  symbol: 'ETH',
  chainId: 5,
  RPC_URL: process.env.GOERLI_RPC_URL // will need to provide RPC_URL to run tests
}

const walletAddress = '0xD3305377FdCDD5203018B67316D7E2E93613de04'
const goerliMapleGlobalsAddress = addresses.goerli.MapleGlobals

describe('MapleGlobals contract', () => {
  const provider = new ethers.providers.JsonRpcProvider(goerli.RPC_URL, goerli)
  const globals = mapleGlobals.core.connect(goerliMapleGlobalsAddress, provider)

  test('Successfully calls contract method', async () => {
    const isDelegate = await globals.isValidPoolDelegate(walletAddress)
    expect(isDelegate).toBe(false)
  })
})
