import { JsonRpcProvider, Transaction } from 'ethers'

import { UnsignedTransactionBundle, generateTransactionData } from './serialiseTransaction'

import { Wallet } from 'ethers'

const chainIds = {
  mainnet: 1,
  'base-mainnet': 8453,
  goerli: 5,
  'base-goerli': 84531,
  sepolia: 11155111,
  localhost: 31337
}

const mnemonic = ''

async function main() {
  // 🚨 1) Setup 🚨
  // 📋 Need to parametise all this
  const provider = new JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/FImNHlvh-EzuzzK02dMWi6TBt9xh6mGM')
  const wallet = Wallet.fromPhrase(mnemonic)

  const walletWithProvider = wallet.connect(provider)
  const poolAddress = '0x4ff5637548e48abaf07baf4a5769b8abbe03a322'
  // const poolAddress = '0x5d522516d9119a6e44d8d47224274e7b5b648649'
  const amount = BigInt('1000000')
  const walletAddress = '0xaA5aA072369A3F34fcA3926DDf31977fAD95022D'

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
  //   type: 'poolWithdrawal',
  //   params: {
  //     withdrawalAmount: amount
  //   }
  // })

  console.log('🚨 :::', { txBytes, txInstance })

  // Sign the transaction
  const deserializeTx = Transaction.from(txBytes)
  const signedTx = await walletWithProvider.signTransaction(deserializeTx)
  console.log('✍🏼 :::', { signedTx })

  // 🚨 4) Broadcast the transaction 🚨
  const txResponse = await provider.broadcastTransaction(signedTx)
  console.log('#️⃣ :::', { trasnactionHash: txResponse.hash })
}

main()
