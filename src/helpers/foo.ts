import { Loan__factory } from '../typechain/LoanV1/factories/Loan__factory'
import { CallOverrides, Signer } from 'ethers'

interface GetFoo {
  signer: Signer
  poolAddress: string
  overrides?: CallOverrides
}

const getFoo = async ({ signer, poolAddress }: GetFoo) => {
  const loan = Loan__factory.connect(poolAddress, signer)

  const amountLiquidated = loan.amountLiquidated()

  return amountLiquidated
}

export { getFoo }
