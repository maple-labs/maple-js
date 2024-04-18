import { BigNumber, BigNumberish, Contract, ContractInterface, UnsignedTransaction } from 'ethers'
import { serialize } from '@ethersproject/transactions'
import { Provider } from '@ethersproject/providers'
import { parseEther } from '@ethersproject/units'
import { parseTransaction, splitSignature } from 'ethers/lib/utils'
import { JsonRpcProvider } from '@ethersproject/providers'

import PoolV2PoolAbi from '../abis/PoolV2Pool.abi.json'

const ZERO = BigNumber.from(0)

export interface UnsignedTransactionBundle {
  txInstance: UnsignedTransaction
  txBytes: string
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

    const feeData = await provider.getFeeData()
    const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas || ZERO
    const maxFeePerGas = feeData.maxFeePerGas || ZERO

    const gasLimit = await contract.estimateGas[functionName](...functionArgs, { from: wallet })

    // Get current nonce
    const nonce = await provider.getTransactionCount(wallet)

    const { chainId } = await provider.getNetwork()

    // Construct the transaction
    const unsignedTx: UnsignedTransaction = {
      to: contractAddress,
      data: contract.interface.encodeFunctionData(functionName, functionArgs),
      maxPriorityFeePerGas: maxPriorityFeePerGas.toHexString(),
      maxFeePerGas: maxFeePerGas.toHexString(),
      nonce,
      value: parseEther('0').toHexString(),
      chainId,
      type: 2,
      gasLimit
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

interface PoolApproveParams {
  spender: string
  amount: BigNumberish
}

export interface PoolApproveInputs extends CommonInputs {
  type: 'approve'
  params: PoolApproveParams
}

interface PoolQueueWithdrawalParams {
  withdrawalAmount: BigNumberish
}
export interface PoolQueueWithdrawalInputs extends CommonInputs {
  type: 'poolQueueWithdrawal'
  params: PoolQueueWithdrawalParams
}

type TxParams = PoolDepositInputs | PoolApproveInputs | PoolQueueWithdrawalInputs

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
    } else if (type === 'approve') {
      const { spender, amount } = args.params
      return {
        abi: PoolV2PoolAbi,
        functionName: 'approve',
        params: [spender, amount] // [spender, amount]
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
  signature: string // Hexidecimal string
}

export function generateSignedTransactionData({ txBytes, signature }: GenerateSignedTransactionInput) {
  const decodedTx = parseTransaction(txBytes)
  const splitSig = splitSignature(signature)

  // Serialize the signed transaction
  const serializedSignedTx = serialize(decodedTx, splitSig)
  return serializedSignedTx
}

export async function broadcastSignedTransaction(signedTxData: string, rpcUrl: string) {
  const provider = new JsonRpcProvider(rpcUrl)

  const txResponse = await provider.sendTransaction(signedTxData)

  console.log({ txResponse })

  const txReceipt = await txResponse.wait()

  console.log({ txReceipt })

  return txReceipt
}
