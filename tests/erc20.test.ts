require('dotenv').config()
import { erc20 } from '../dist'
import { ethers } from 'ethers'

const kovan = {
  name: 'Kovan',
  networkName: 'kovan',
  symbol: 'ETH',
  chainId: 42,
  RPC_URL: process.env.KOVAN_RPC_URL // will need to provide RPC_URL to run tests
}

const walletAddress = '0xF6270fd9940D8F25c639764A26344379C503A7B8'
const kovanUSDCAddress = '0xa3F92B469D45492F787594F8E41De5e4CbCc096E'

const getSigner = () => {
  const provider = new ethers.providers.JsonRpcProvider(kovan.RPC_URL, kovan)
  const signer = provider.getSigner(walletAddress)
  return signer
}

describe('USDC contract', () => {
  const signer = getSigner()
  const usdc = erc20.core.connect(kovanUSDCAddress, signer)

  test('Connects to contract', async () => {
    expect(usdc).toBeDefined()
  })

  test('Successfully calls contract method', async () => {
    const balance = await usdc.balanceOf(walletAddress)
    expect(balance.gt(1))
  })
})
