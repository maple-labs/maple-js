import { BigNumberish, Contract, InterfaceAbi, parseEther, Provider, Transaction, TransactionLike } from 'ethers'

import PoolV2PoolAbi from '../abis/PoolV2Pool.abi.json'

export interface UnsignedTransactionBundle {
  txInstance: Transaction
  txBytes: string
}

async function estimateGasForFunction(contract: Contract, functionName: string, args: any[], from: string): Promise<BigNumberish> {
  const method = contract.estimateGas[functionName as keyof typeof contract.estimateGas]
  if (typeof method === 'function') {
    return await method(...args, { from })
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
    const txBytes = txInstance.serialized

    return {
      txInstance,
      txBytes
    }
  } catch (error) {
    console.error('Error in serialiseTransaction:', error)
    throw error
  }
}

interface CommonParams {
  provider: Provider
  walletAddress: string
  contractAddress: string
  chainId: number
}

interface PoolDepositParams extends CommonParams {
  type: 'poolDeposit'
  depositAmount: BigNumberish
}

interface PoolWithdrawalParams extends CommonParams {
  type: 'poolWithdrawal'
  withdrawalAmount: BigNumberish
}

type TxParams = PoolDepositParams | PoolWithdrawalParams

export const generateTransactionData = async (args: TxParams) => {
  const { provider, walletAddress, contractAddress, chainId } = args

  const getTransactionParams = (): { abi: InterfaceAbi; params: any[]; functionName: string } => {
    if (args.type === 'poolDeposit') {
      return {
        abi: PoolV2PoolAbi,
        functionName: 'deposit',
        params: [args.depositAmount]
      }
    } else if (args.type === 'poolWithdrawal') {
      return {
        abi: PoolV2PoolAbi,
        functionName: 'withdrawal',
        params: [args.withdrawalAmount]
      }
    } else {
      throw new Error('Invalid transaction type')
    }
  }

  const { abi, functionName, params } = getTransactionParams()

  return await createUnsignedTransactionBundle(provider, walletAddress, chainId, contractAddress, abi, functionName, params)
}
