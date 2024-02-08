import { BigNumberish, Contract, InterfaceAbi, parseEther, Provider, Transaction, TransactionLike } from 'ethers'

import PoolV2PoolAbi from '../abis/PoolV2Pool.abi.json'

export interface UnsignedTransactionBundle {
  txInstance: TransactionLike
  txBytes: string
}

async function estimateGasForFunction(
  contract: Contract,
  functionName: string,
  args: any[],
  from: string
): Promise<BigNumberish> {
  const method = contract[functionName]

  if (typeof method === 'function') {
    return await method.estimateGas(...args, { from })
  } else {
    throw new Error('Function not found in contract')
  }
}

// Creates unsigned transaction object for arbitrary function call
const createUnsignedTransactionBundle = async (
  provider: Provider,
  wallet: string,
  chainId: number,
  contractAddress: string,
  abi: InterfaceAbi,
  functionName: string,
  functionArgs: any[]
): Promise<UnsignedTransactionBundle> => {
  try {
    const contract = new Contract(contractAddress, abi, provider)

    // Estimate gas price and limit
    const gasPrice = (await provider.getFeeData()).gasPrice
    const gasLimit = await estimateGasForFunction(contract, functionName, functionArgs, wallet)

    // Get current nonce
    const nonce = await provider.getTransactionCount(wallet)

    // Construct the transaction
    const unsignedTx: TransactionLike = {
      to: contractAddress,
      data: contract.interface.encodeFunctionData(functionName, functionArgs),
      gasLimit,
      gasPrice,
      nonce,
      value: parseEther('0'),
      chainId
    }

    const txInstance = Transaction.from(unsignedTx)
    const txBytes = txInstance.unsignedSerialized

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
  chainId: number
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

export const generateTransactionData = async (args: TxParams) => {
  const { provider, walletAddress, contractAddress, chainId } = args

  const getTransactionParams = (): { abi: InterfaceAbi; params: any[]; functionName: string } => {
    if (args.type === 'poolDeposit') {
      const { depositAmount } = args.params
      return {
        abi: PoolV2PoolAbi,
        functionName: 'deposit',
        params: [depositAmount, walletAddress] // [assets_, receiver_]
      }
    } else if (args.type === 'poolQueueWithdrawal') {
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

  return await createUnsignedTransactionBundle(
    provider,
    walletAddress,
    chainId,
    contractAddress,
    abi,
    functionName,
    params
  )
}
