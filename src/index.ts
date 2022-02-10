import * as collateralLockerImports from './typechain/collateralLocker'
import * as debtLockerV1Imports from './typechain/debtLockerV1'
import * as debtLockerV2Imports from './typechain/debtLockerV2'
import * as fundingLockerImports from './typechain/fundingLocker'
import * as lateFeeCalcImports from './typechain/lateFeeCalculator'
import * as liquidityLockerImports from './typechain/liquidityLocker'
import * as loanV1Imports from './typechain/loanV1'
import * as loanV2Imports from './typechain/loanV2'
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as poolImports from './typechain/pool'
import * as premiumCalcImports from './typechain/premiumCalculator'
import * as repaymentCalcImports from './typechain/repaymentCalculator'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as environmentMocksImports from './typechain/environment-mocks'

const collateralLocker = {
  core: collateralLockerImports.CollateralLocker__factory,
  factory: collateralLockerImports.CollateralLockerFactory__factory
}

const debtLockerV1 = {
  factory: debtLockerV1Imports.DebtLockerFactory__factory,
  core: debtLockerV1Imports.DebtLocker__factory // ⚠️ Is this needed for webapp?
}

const debtLockerV2 = {
  factory: debtLockerV2Imports.DebtLockerFactory__factory,
  core: debtLockerV2Imports.DebtLocker__factory, // ⚠️ Is this needed for webapp?
  initializer: debtLockerV2Imports.DebtLockerInitializer__factory // ⚠️ Is this needed for webapp?
}

const fundingLocker = {
  core: fundingLockerImports.FundingLocker__factory,
  factory: fundingLockerImports.FundingLockerFactory__factory
}

const lateFeeCalc = {
  core: lateFeeCalcImports.LateFeeCalc__factory
}

const liquidityLocker = {
  core: liquidityLockerImports.LiquidityLocker__factory,
  factory: liquidityLockerImports.LiquidityLockerFactory__factory
}

const loanV1 = {
  factory: loanV1Imports.LoanFactory__factory,
  core: loanV1Imports.Loan__factory,
  lib: loanV1Imports.LoanLib__factory // ⚠️ Is this needed for webapp?
}

const loanV2 = {
  factory: loanV2Imports.MapleLoanFactory__factory,
  core: loanV2Imports.MapleLoan__factory,
  lib: loanV2Imports.MapleLoanInitializer__factory,
  refinancer: loanV2Imports.Refinancer__factory // ⚠️ Is this needed for webapp?
}

const mapleGlobals = {
  core: mapleGlobalsImports.MapleGlobals__factory
}

const mapleRewards = {
  core: mapleRewardsImports.MplRewards__factory,
  factory: mapleRewardsImports.MplRewardsFactory__factory
}

const pool = {
  core: poolImports.Pool__factory,
  factory: poolImports.PoolFactory__factory,
  lib: poolImports.PoolLib__factory
}

const premiumCalc = {
  core: premiumCalcImports.PremiumCalc__factory
}

const repaymentCalculator = {
  core: repaymentCalcImports.RepaymentCalc__factory
}

const stakeLocker = {
  core: stakeLockerImports.StakeLocker__factory,
  factory: stakeLockerImports.StakeLockerFactory__factory
}

const bPool = {
  core: environmentMocksImports.BPool__factory,
  factory: environmentMocksImports.BFactory__factory
}

const erc20 = {
  core: environmentMocksImports.MintSpecialToken__factory
}

const chainlink = {
  core: environmentMocksImports.ChainLinkEmulator__factory,
  factory: environmentMocksImports.ChainLinkEmulatorFactory__factory
}

const uniswapRouterV2 = {
  core: environmentMocksImports.UniswapV2Router02__factory
}

export {
  bPool,
  collateralLocker,
  chainlink,
  debtLockerV1,
  debtLockerV2,
  erc20,
  fundingLocker,
  lateFeeCalc,
  liquidityLocker,
  loanV1,
  loanV2,
  mapleGlobals,
  mapleRewards,
  pool,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  uniswapRouterV2
}
