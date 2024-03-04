import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { joinSignature, parseTransaction } from 'ethers/lib/utils'
import * as dotenv from 'dotenv'

import {
  UnsignedTransactionBundle,
  generateUnsignedTransactionData,
  generateSignedTransactionData,
  broadcastSignedTransaction
} from './serialiseTransaction'

dotenv.config()

const poolAddress = '0x4ff5637548e48abaf07baf4a5769b8abbe03a322'
const amount = BigInt('1000000')
const walletAddress = '0xaA5aA072369A3F34fcA3926DDf31977fAD95022D'

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
    contractAddress: poolAddress,
    type: 'poolDeposit',
    params: {
      depositAmount: amount
    }
  })
  console.log({ txBytes })

  // const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
  //   provider,
  //   walletAddress,
  //   contractAddress: poolAddress,
  //   type: 'poolQueueWithdrawal',
  //   params: {
  //     withdrawalAmount: amount
  //   }
  // })

  // console.log({ txBytes })

  // 🚨 3) Sign the transaction 🚨
  const deserializeTx = parseTransaction(txBytes)
  const { nonce, gasPrice, gasLimit, to, value, data, chainId, accessList, type } = deserializeTx

  if (!type) return

  const transactionRequest = {
    nonce,
    // maxPriorityFeePerGas,
    // maxFeePerGas,
    gasPrice,
    gasLimit,
    to,
    value: value.toHexString(),
    data,
    chainId,
    accessList,
    type
  }

  console.log('🐶 :::', { transactionRequest })

  const signedTx = await walletWithProvider.signTransaction(transactionRequest)
  const transactionParsed = parseTransaction(signedTx)
  const { r, s, v } = transactionParsed

  if (!r) return

  const joinedSignature = joinSignature({ r, s, v })

  const signedTxData = await generateSignedTransactionData({ txBytes, signature: joinedSignature })

  console.log({ signedTxData })

  // 🚨 4) Broadcast the transaction 🚨
  const rpcUrl = process.env.RPC_URL as string
  const txReceipt = await broadcastSignedTransaction(signedTxData, rpcUrl)
  console.log({ txReceipt })
}

main()
