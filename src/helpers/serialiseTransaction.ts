import { BigNumber, BigNumberish, Contract, ContractInterface, UnsignedTransaction } from 'ethers'
import { serialize } from '@ethersproject/transactions'
import { Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import { parseTransaction, serializeTransaction, splitSignature } from 'ethers/lib/utils'

import PoolV2PoolAbi from '../abis/PoolV2Pool.abi.json'

export interface UnsignedTransactionBundle {
  txInstance: UnsignedTransaction
  txBytes: string
}

async function estimateGasForFunction(
  contract: Contract,
  functionName: string,
  args: any[],
  from: string
): Promise<BigNumber> {
  // Ensure the contract has the function
  if (typeof contract.functions[functionName] !== 'function') {
    throw new Error('Function not found in contract')
  }

  // Estimate gas for the function call
  const estimateGas = await contract.estimateGas[functionName](...args, { from })

  return estimateGas
}

// Creates unsigned transaction object for arbitrary function call
const createUnsignedTransactionBundle = async (
  provider: Provider,
  wallet: string,
  contractAddress: string,
  abi: ContractInterface,
  functionName: string,
  functionArgs: any[]
): Promise<UnsignedTransactionBundle> => {
  try {
    const contract = new Contract(contractAddress, abi, provider)

    // Estimate gas price and limit
    const gasPrice = await provider.getGasPrice()
    const gasLimit = await estimateGasForFunction(contract, functionName, functionArgs, wallet)

    // Get current nonce
    const nonce = await provider.getTransactionCount(wallet)

    const { chainId } = await provider.getNetwork()

    // Construct the transaction
    const unsignedTx: UnsignedTransaction = {
      to: contractAddress,
      data: contract.interface.encodeFunctionData(functionName, functionArgs),
      gasLimit: gasLimit.toHexString(),
      gasPrice: gasPrice.toHexString(),
      nonce,
      value: parseEther('0').toHexString(),
      chainId
    }

    const txBytes = serialize(unsignedTx)

    return {
      txInstance: unsignedTx,
      txBytes
    }
  } catch (error) {
    console.error('Error in serialiseTransaction:', error)
    throw error
  }
}

interface CommonInputs {
  provider: Provider
  walletAddress: string
  contractAddress: string
}

interface PoolDepositParams {
  depositAmount: BigNumberish
}
export interface PoolDepositInputs extends CommonInputs {
  type: 'poolDeposit'
  params: PoolDepositParams
}

interface PoolQueueWithdrawalParams {
  withdrawalAmount: BigNumberish
}
export interface PoolQueueWithdrawalInputs extends CommonInputs {
  type: 'poolQueueWithdrawal'
  params: PoolQueueWithdrawalParams
}

type TxParams = PoolDepositInputs | PoolQueueWithdrawalInputs

export const generateUnsignedTransactionData = async (args: TxParams) => {
  const { provider, walletAddress, contractAddress, type } = args

  const getTransactionParams = (): { abi: ContractInterface; params: any[]; functionName: string } => {
    if (type === 'poolDeposit') {
      const { depositAmount } = args.params
      return {
        abi: PoolV2PoolAbi,
        functionName: 'deposit',
        params: [depositAmount, walletAddress] // [assets_, receiver_]
      }
    } else if (type === 'poolQueueWithdrawal') {
      const { withdrawalAmount } = args.params
      return {
        abi: PoolV2PoolAbi,
        functionName: 'requestRedeem',
        params: [withdrawalAmount, walletAddress] // [sharesToRequestRedeem, account]
      }
    } else {
      throw new Error('Invalid transaction type')
    }
  }

  const { abi, functionName, params } = getTransactionParams()

  return await createUnsignedTransactionBundle(provider, walletAddress, contractAddress, abi, functionName, params)
}

interface GenerateSignedTransactionInput {
  txBytes: string // Serialized unsigned transaction
  signature: string
  // signature: Uint8Array // Signature in byte format
}

export function generateSignedTransactionData({ txBytes, signature }: GenerateSignedTransactionInput) {
  const decodedTx = parseTransaction(txBytes)

  const splitSig = splitSignature(signature)

  console.log('🚨 generateSignedTransactionData :::', { decodedTx, splitSig })

  const theTxBytes: UnsignedTransaction = {
    ...decodedTx,
    type: 1,
    accessList: []
  }

  theTxBytes.data = '0x'

  // console.log({ theTxBytes })

  // const siggg = {
  //   r: '0x74cacbb340e16754b06d90d2f2b548bd04b4c481618b770a85aa9bfe7d3a1b33',
  //   s: '0x63d45752113f627e66e074c5a028628e665324fbba37ebde90a160f5eaee6c57',
  //   v: 62709
  // }

  // Serialize the signed transaction
  const serializedSignedTx = serializeTransaction(theTxBytes, splitSig) // theSignature
  return serializedSignedTx
}
