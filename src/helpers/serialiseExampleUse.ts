import { ethers } from 'ethers'

import { UnsignedTransactionBundle, serialiseTransaction } from 'helpers/serialiseTransaction'

type SignatureLike = {
  r: string
  s?: string
  _vs?: string
  recoveryParam?: number
  v?: number
}

const HSMSigningAPICall = (serializedTx: string): SignatureLike => ({ r: '0x', s: '0x', v: 0 })

async function main() {
  // Setup
  const provider = new ethers.providers.InfuraProvider('network-name', 'infura-api-key')
  const poolAddress = '0x00000000'
  const depositAmount = '123'
  const walletAddress = '0x00000001'

  // Serialize the transaction (unsigned)
  const { unsignedTx, serialisedString }: UnsignedTransactionBundle = await serialiseTransaction({
    provider,
    walletAddress,
    chainId: 0,
    contractAddress: poolAddress,
    type: 'poolDeposit',
    depositAmount
  })

  // Use the serialised string to get a signature from the HSM API
  const { r, s, v }: SignatureLike = HSMSigningAPICall(serialisedString)

  // 🚨 Combine the signature with the unsigned TX object to create the serialised signed TX
  const signedTx = ethers.utils.serializeTransaction(unsignedTx, { r, s, v })

  // Execute the signed transaction
  const txReceipt = provider.sendTransaction(signedTx)
  console.log('Transaction receipt:', txReceipt)
}

main()
