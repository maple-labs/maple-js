import { utils } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import * as dotenv from 'dotenv'

import { UnsignedTransactionBundle, generateTransactionData } from './serialiseTransaction'

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
  const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
    provider,
    walletAddress,
    contractAddress: poolAddress,
    type: 'poolDeposit',
    params: {
      depositAmount: amount
    }
  })

  // const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
  //   provider,
  //   walletAddress,
  //   contractAddress: poolAddress,
  //   type: 'poolQueueWithdrawal',
  //   params: {
  //     withdrawalAmount: amount
  //   }
  // })

  // 🚨 3) Sign the transaction 🚨
  const deserializeTx = utils.parseTransaction(txBytes)
  const { nonce, gasPrice, gasLimit, to, value, data, chainId } = deserializeTx

  const transactionRequest = {
    nonce,
    gasPrice,
    gasLimit,
    to,
    value: value.toHexString(),
    data,
    chainId
  }

  const signedTx = await walletWithProvider.signTransaction(transactionRequest)

  console.log('✍🏼 :::', { signedTx })

  // 🚨 4) Broadcast the transaction 🚨
  const txResponse = await provider.sendTransaction(signedTx)
  console.log('#️⃣ :::', { transactionHash: txResponse.hash })
}

main()
