import { JsonRpcProvider, Transaction } from 'ethers'
import { Wallet } from 'ethers'

import { UnsignedTransactionBundle, generateTransactionData } from './serialiseTransaction'

const chainIds = {
  mainnet: 1,
  'base-mainnet': 8453,
  goerli: 5,
  'base-goerli': 84531,
  sepolia: 11155111,
  localhost: 31337
}

async function main() {
  // 🚨 1) Setup 🚨

  // 📋 Need to parametise all this
  const provider = new JsonRpcProvider(process.env.RPC_URL)
  const wallet = Wallet.fromPhrase(process.env.WALLET_MNEMONIC as string)

  const walletWithProvider = wallet.connect(provider)
  const poolAddress = ''
  const amount = BigInt('1000000')
  const walletAddress = ''

  // 🚨 2) Serialize the transaction (unsigned) 🚨
  const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
    provider,
    walletAddress,
    chainId: chainIds.goerli,
    contractAddress: poolAddress,
    type: 'poolDeposit',
    params: {
      depositAmount: amount
    }
  })

  // const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
  //   provider,
  //   walletAddress,
  //   chainId: chainIds.goerli,
  //   contractAddress: poolAddress,
  //   type: 'poolQueueWithdrawal',
  //   params: {
  //     withdrawalAmount: amount
  //   }
  // })

  // 🚨 3) Sign the transaction 🚨
  const deserializeTx = Transaction.from(txBytes)
  const signedTx = await walletWithProvider.signTransaction(deserializeTx)
  console.log('✍🏼 :::', { signedTx })

  // 🚨 4) Broadcast the transaction 🚨
  const txResponse = await provider.broadcastTransaction(signedTx)
  console.log('#️⃣ :::', { transactionHash: txResponse.hash })
}

main()
