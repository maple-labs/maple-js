import { ethers, ContractInterface, providers, UnsignedTransaction } from 'ethers'

import PoolV2PoolAbi from '../abis/PoolV2Pool.abi.json'

export interface UnsignedTransactionBundle {
  unsignedTx: UnsignedTransaction
  serialisedString: string
}

// Creates unsigned transaction object for arbitrary function call
const createUnsignedTransactionObject = async (
  provider: providers.Provider,
  wallet: string,
  chainId: number,
  contractAddress: string,
  abi: ContractInterface,
  functionName: string,
  functionArgs: any[]
): Promise<UnsignedTransactionBundle> => {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider)

    // Estimate gas price and limit
    const gasPrice = await provider.getGasPrice()
    const gasLimit = await contract.estimateGas[functionName](...functionArgs, { from: wallet })

    // Get current nonce
    const nonce = await provider.getTransactionCount(wallet)

    // Construct the transaction
    const unsignedTx: ethers.utils.UnsignedTransaction = {
      to: contractAddress,
      data: contract.interface.encodeFunctionData(functionName, functionArgs),
      gasLimit,
      gasPrice,
      nonce,
      value: ethers.utils.parseEther('0'), // temp,
      chainId
    }

    const serialisedString = ethers.utils.serializeTransaction(unsignedTx)

    return {
      unsignedTx,
      serialisedString
    }
  } catch (error) {
    console.error('Error in serialiseTransaction:', error)
    throw error
  }
}

interface CommonParams {
  provider: providers.Provider
  walletAddress: string
  contractAddress: string
  chainId: number
}

interface PoolDepositParams extends CommonParams {
  type: 'poolDeposit'
  depositAmount: ethers.BigNumberish
}

interface PoolWithdrawalParams extends CommonParams {
  type: 'poolWithdrawal'
  withdrawalAmount: ethers.BigNumberish
}

type TxParams = PoolDepositParams | PoolWithdrawalParams

export const serialiseTransaction = async (args: TxParams) => {
  const { provider, walletAddress, contractAddress, chainId } = args

  const getTransactionParams = (): { abi: ContractInterface; params: any[]; functionName: string } => {
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

  return await createUnsignedTransactionObject(provider, walletAddress, chainId, contractAddress, abi, functionName, params)
}
