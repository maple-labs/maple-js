import { BigNumber } from '@ethersproject/bignumber'
import { joinSignature } from '@ethersproject/bytes'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { parseTransaction } from 'ethers/lib/utils'
import * as dotenv from 'dotenv'

import {
  UnsignedTransactionBundle,
  generateUnsignedTransactionData,
  generateSignedTransactionData,
  broadcastSignedTransaction
} from './serialiseTransaction'

import addresses from '../addresses/sepolia-prod'

dotenv.config()

// Amounts
const AMOUNT = BigNumber.from(1e6) // 1 USDC / micro eth amount

// Addresses
const poolAddress = '0x722da756e3f615dc1fc8d84061e25bf0f181bdfb' // example pool in sepolia-prod
const walletAddress = '0xfoo'
const usdcAddress = addresses.USDC

async function main() {
  // 🚨 1) Setup 🚨
  const provider = new JsonRpcProvider(process.env.RPC_URL)
  const mnemonic = process.env.WALLET_MNEMONIC as string

  if (!mnemonic) {
    throw new Error('WALLET_MNEMONIC is not defined in environment variables.')
  }

  const wallet = Wallet.fromMnemonic(mnemonic)
  const walletWithProvider = wallet.connect(provider)

  // 🚨 2) Serialize the transaction (unsigned) 🚨
  const { txBytes }: UnsignedTransactionBundle = await generateUnsignedTransactionData({
    provider,
    walletAddress,
    contractAddress: usdcAddress, // Asset to approve spending by pool (eg: usdc or weth)
    type: 'poolApprove',
    params: {
      amount: AMOUNT,
      spender: poolAddress
    }
  })

  // const { txBytes }: UnsignedTransactionBundle = await generateUnsignedTransactionData({
  //   provider,
  //   walletAddress,
  //   contractAddress: poolAddress, // address of the pool contract for depositing funds
  //   type: 'poolDeposit',
  //   params: {
  //     depositAmount: AMOUNT
  //   }
  // })

  // const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
  //   provider,
  //   walletAddress,
  //   contractAddress: poolAddress,
  //   type: 'poolQueueWithdrawal',
  //   params: {
  //     withdrawalAmount: AMOUNT
  //   }
  // })

  // 🚨 3) Sign the transaction 🚨
  const deserializeTx = parseTransaction(txBytes)
  const { nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, chainId, accessList, type } =
    deserializeTx

  if (!type) return

  const transactionRequest = {
    nonce,
    maxPriorityFeePerGas,
    maxFeePerGas,
    gasLimit,
    to,
    value: value.toHexString(),
    data,
    chainId,
    accessList,
    type
  }

  const signedTx = await walletWithProvider.signTransaction(transactionRequest)
  const transactionParsed = parseTransaction(signedTx)
  const { r, s, v } = transactionParsed
  if (!r) return

  const joinedSignature = joinSignature({ r, s, v })
  const signedTxData = await generateSignedTransactionData({ txBytes, signature: joinedSignature })

  // 🚨 4) Broadcast the transaction 🚨
  const rpcUrl = process.env.RPC_URL as string
  const txReceipt = await broadcastSignedTransaction(signedTxData, rpcUrl)
  console.log({ txReceipt })
}

main()
