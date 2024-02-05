import { JsonRpcProvider } from 'ethers'

import { UnsignedTransactionBundle, generateTransactionData } from './serialiseTransaction'

// type SignatureLike = {
//   r: string
//   s?: string
//   _vs?: string
//   recoveryParam?: number
//   v?: number
// }

// const HSMSigningAPICall = (serializedTx: string): SignatureLike => ({ r: '0x', s: '0x', v: 0 })

const chainIds = {
  mainnet: 1,
  'base-mainnet': 8453,
  goerli: 5,
  'base-goerli': 84531,
  sepolia: 11155111,
  localhost: 31337
}

async function main() {
  // Setup
  // 📋 Need to parametise all this
  const provider = new JsonRpcProvider(rpcURL)
  const poolAddress = '0x5d522516d9119a6e44d8d47224274e7b5b648649'
  const depositAmount = BigInt('1')
  const walletAddress = '0xaa5aa072369a3f34fca3926ddf31977fad95022d'

  // Serialize the transaction (unsigned)
  const { txBytes, txInstance }: UnsignedTransactionBundle = await generateTransactionData({
    provider,
    walletAddress,
    chainId: chainIds.goerli,
    contractAddress: poolAddress,
    type: 'poolDeposit',
    depositAmount
  })

  console.log('😡', { txBytes, txInstance })

  // // Use the serialised string to get a signature from the HSM API
  // const { r, s, v }: SignatureLike = HSMSigningAPICall(serialisedString)

  // // 🚨 Combine the signature with the unsigned TX object to create the serialised signed TX
  // const signedTx = ethers.utils.serializeTransaction(unsignedTx, { r, s, v })

  // // Execute the signed transaction
  // const txReceipt = provider.sendTransaction(signedTx)
  // console.log('Transaction receipt:', txReceipt)
}

main()
