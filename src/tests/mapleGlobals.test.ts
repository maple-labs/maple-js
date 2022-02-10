import { mapleGlobals } from 'maple-js'
import { ethers } from 'ethers'

const kovan = {
  name: 'Kovan',
  networkName: 'kovan',
  symbol: 'ETH',
  chainId: 42,
  RPC_URL: undefined // will need to provide RPC_URL to run tests
}

const walletAddress = '0x91512a024607515E57aE8ffB9d478036F20fCF0C'
const kovanMapleGlobalsAddress = '0x4283F570Ea2525430d9D264CEC3F68ae472F8769'

const getSigner = () => {
  const provider = new ethers.providers.JsonRpcProvider(kovan.RPC_URL, kovan)
  const signer = provider.getSigner(walletAddress)
  return signer
}

describe('MapleGlobals contract', () => {
  test('Connects to contract', async () => {
    const signer = getSigner()
    const globals = await mapleGlobals.core.connect(kovanMapleGlobalsAddress, signer)
    expect(globals).toBeDefined()
  })
  test('Successfully calls contract method', async () => {
    const signer = getSigner()
    const globals = await mapleGlobals.core.connect(kovanMapleGlobalsAddress, signer)

    const isDelegate = await globals.isValidPoolDelegate(walletAddress)

    expect(isDelegate).toBe(false)
  })
})
