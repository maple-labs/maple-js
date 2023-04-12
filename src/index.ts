// Typechain entities
import * as collateralLockerImports from './typechain/collateralLocker'
import * as debtLockerV1Imports from './typechain/debtLockerV1'
import * as debtLockerV2Imports from './typechain/debtLockerV2'
import * as debtLockerV3Imports from './typechain/debtLockerV3'
import * as fundingLockerImports from './typechain/fundingLocker'
import * as lateFeeCalcImports from './typechain/lateFeeCalculator'
import * as liquidityLockerImports from './typechain/liquidityLocker'
import * as loanV1Imports from './typechain/loanV1'
import * as loanV2Imports from './typechain/loanV2'
import * as loanV3Imports from './typechain/loanV3'
import * as loanV301Imports from './typechain/loanV301'
import * as loanV4Imports from './typechain/loanV4'
import * as loanV5Imports from './typechain/loanV5'
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleGlobalsV2Imports from './typechain/mapleGlobalsV2'
import * as mapleGlobalsV2V2Imports from './typechain/mapleGlobalsV2V2'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as mapleTokenImports from './typechain/mapleToken'
import * as xmplImports from './typechain/xmpl'
import * as poolV1Imports from './typechain/poolV1'
import * as premiumCalcImports from './typechain/premiumCalculator'
import * as repaymentCalcImports from './typechain/repaymentCalculator'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as poolImports from './typechain/pool'
import * as poolV2Imports from './typechain/poolV2'
import * as withdrawalManagerImports from './typechain/withdrawalManager'
import * as environmentMocksImports from './typechain/environmentMocks'
import * as migrationHelpersImports from './typechain/migrationHelpers'
import * as fixedTermLoanManagerImports from './typechain/fixedTermLoanManager'
import * as openTermLoanImports from './typechain/openTermLoan'
import * as openTermLoanManagerImports from './typechain/openTermLoanManager'

// Addresses
import goerliProdAddresses from './addresses/goerli-prod'
import goerliDevAddresses from './addresses/goerli-dev'
import mainnetDevAddresses from './addresses/mainnet-dev'
import mainnetProdAddresses from './addresses/mainnet-prod'

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

const debtLockerV3 = {
  factory: debtLockerV3Imports.DebtLockerFactory__factory,
  core: debtLockerV3Imports.DebtLocker__factory,
  initializer: debtLockerV3Imports.DebtLockerInitializer__factory
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

const loanV3 = {
  factory: loanV3Imports.MapleLoanFactory__factory,
  initializer: loanV3Imports.MapleLoanInitializer__factory,
  core: loanV3Imports.MapleLoan__factory,
  refinancer: loanV3Imports.Refinancer__factory
}

const loanV301 = {
  factory: loanV301Imports.MapleLoanFactory__factory,
  initializer: loanV301Imports.MapleLoanInitializer__factory,
  core: loanV301Imports.MapleLoan__factory,
  refinancer: loanV301Imports.Refinancer__factory
}

const loanV4 = {
  core: loanV4Imports.MapleLoan__factory,
  factory: loanV4Imports.MapleLoanFactory__factory,
  initializer: loanV4Imports.MapleLoanInitializer__factory,
  migrator: loanV4Imports.MapleLoanV4Migrator__factory,
  feeManager: loanV4Imports.MapleLoanFeeManager__factory,
  refinancer: loanV4Imports.Refinancer__factory
}

const loanV5 = {
  core: loanV5Imports.MapleLoan__factory,
  factory: loanV5Imports.MapleLoanFactory__factory,
  initializer: loanV5Imports.MapleLoanInitializer__factory,
  migrator: loanV5Imports.MapleLoanV4Migrator__factory,
  feeManager: loanV5Imports.MapleLoanFeeManager__factory,
  refinancer: loanV5Imports.Refinancer__factory
}

const mapleGlobals = {
  core: mapleGlobalsImports.MapleGlobals__factory
}

const mapleGlobalsV2 = {
  core: mapleGlobalsV2Imports.MapleGlobals__factory
}

const mapleGlobalsV2V2 = {
  core: mapleGlobalsV2V2Imports.MapleGlobals__factory
}

const mapleRewards = {
  core: mapleRewardsImports.MplRewards__factory,
  factory: mapleRewardsImports.MplRewardsFactory__factory
}

const mapleToken = {
  factory: mapleTokenImports.MapleToken__factory
}

const migrationHelpers = {
  core: migrationHelpersImports.MigrationHelper__factory
}

const xmpl = {
  factory: xmplImports.XMPL__factory
}

const poolV1 = {
  core: poolV1Imports.Pool__factory,
  factory: poolV1Imports.PoolFactory__factory,
  lib: poolV1Imports.PoolLib__factory
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

const loanManager = {
  core: poolImports.LoanManager__factory,
  factory: poolImports.LoanManagerFactory__factory,
  initializer: poolImports.LoanManagerInitializer__factory
}

const pool = {
  core: poolImports.Pool__factory,
  delegateCover: poolImports.PoolDelegateCover__factory,
  deployer: poolImports.PoolDeployer__factory
}

const poolV2 = {
  core: poolV2Imports.Pool__factory,
  delegateCover: poolV2Imports.PoolDelegateCover__factory,
  deployer: poolV2Imports.PoolDeployer__factory
}

const poolManager = {
  core: poolImports.PoolManager__factory,
  factory: poolImports.PoolManagerFactory__factory,
  initializer: poolImports.PoolManagerInitializer__factory
}

const poolManagerV2 = {
  core: poolV2Imports.PoolManager__factory
}

const withdrawalManager = {
  core: withdrawalManagerImports.WithdrawalManager__factory,
  factory: withdrawalManagerImports.WithdrawalManagerFactory__factory,
  initializer: withdrawalManagerImports.WithdrawalManagerInitializer__factory,
  storage: withdrawalManagerImports.WithdrawalManagerStorage__factory
}

const openTermLoan = {
  core: openTermLoanImports.MapleLoan__factory,
  factory: openTermLoanImports.MapleLoanFactory__factory,
  initializer: openTermLoanImports.MapleLoanInitializer__factory,
  refinancer: openTermLoanImports.MapleRefinancer__factory
}

const openTermLoanManager = {
  core: openTermLoanManagerImports.LoanManager__factory,
  factory: openTermLoanManagerImports.LoanManagerFactory__factory,
  initializer: openTermLoanManagerImports.LoanManagerInitializer__factory
}

const fixedTermLoanManager = {
  core: fixedTermLoanManagerImports.LoanManager__factory,
  factory: fixedTermLoanManagerImports.LoanManagerFactory__factory,
  initializer: fixedTermLoanManagerImports.LoanManagerInitializer__factory
}

const bPool = {
  core: environmentMocksImports.BPool__factory,
  factory: environmentMocksImports.BFactory__factory
}

const chainlink = {
  core: environmentMocksImports.ChainLinkEmulator__factory,
  factory: environmentMocksImports.ChainLinkEmulatorFactory__factory
}

const erc20 = {
  core: environmentMocksImports.MintSpecialToken__factory
}

const uniswapRouterV2 = {
  core: environmentMocksImports.UniswapV2Router02__factory
}
type AddressKey = typeof mainnetProdAddresses

type MapleAddressMapping = {
  [K in keyof AddressKey]: AddressKey[K]
}

const addresses: Record<string, MapleAddressMapping> = {
  'goerli-dev': goerliDevAddresses,
  'goerli-prod': goerliProdAddresses,
  'mainnet-dev': mainnetDevAddresses,
  'mainnet-prod': mainnetProdAddresses
}

interface ContractTypes {
  debtLockerV2: debtLockerV2Imports.DebtLocker
  debtLockerV2Factory: debtLockerV2Imports.DebtLockerFactory
  debtLockerV2Initializer: debtLockerV2Imports.DebtLockerInitializer
  debtLockerV3: debtLockerV3Imports.DebtLocker
  debtLockerV3Factory: debtLockerV3Imports.DebtLockerFactory
  debtLockerV3Initializer: debtLockerV3Imports.DebtLockerInitializer
  liquidityLocker: liquidityLockerImports.LiquidityLocker
  liquidityLockerFactory: liquidityLockerImports.LiquidityLockerFactory

  loanV2: loanV2Imports.MapleLoan
  loanV2Factory: loanV2Imports.MapleLoanFactory

  loanV3: loanV3Imports.MapleLoan
  loanV3Factory: loanV3Imports.MapleLoanFactory
  loanV3Initializer: loanV3Imports.MapleLoanInitializer
  loanV3Refinancer: loanV3Imports.Refinancer

  loanV301: loanV301Imports.MapleLoan
  loanV301Factory: loanV301Imports.MapleLoanFactory
  loanV301Initializer: loanV301Imports.MapleLoanInitializer
  loanV301Refinancer: loanV301Imports.Refinancer

  loanV4: loanV4Imports.MapleLoan
  loanV4Factory: loanV4Imports.MapleLoanFactory
  loanV4Initializer: loanV4Imports.MapleLoanInitializer
  loanV4Migrator: loanV4Imports.MapleLoanV4Migrator
  loanV4FeeManager: loanV4Imports.MapleLoanFeeManager
  loanV4Refinancer: loanV4Imports.Refinancer

  loanV5: loanV5Imports.MapleLoan
  loanV5Factory: loanV5Imports.MapleLoanFactory
  loanV5Initializer: loanV5Imports.MapleLoanInitializer
  loanV5Migrator: loanV5Imports.MapleLoanV4Migrator
  loanV5FeeManager: loanV5Imports.MapleLoanFeeManager
  loanV5Refinancer: loanV5Imports.Refinancer

  // openTermLoan
  openTermLoan: openTermLoanImports.MapleLoan
  openTermLoanFactory: openTermLoanImports.MapleLoanFactory
  openTermLoanInitializer: openTermLoanImports.MapleLoanInitializer
  openTermLoanRefinancer: openTermLoanImports.MapleRefinancer

  mapleGlobals: mapleGlobalsImports.MapleGlobals
  mapleGlobalsV2: mapleGlobalsV2Imports.MapleGlobals
  mapleGlobalsV2V2: mapleGlobalsV2V2Imports.MapleGlobals
  mapleRewards: mapleRewardsImports.MplRewards
  mapleRewardsFactory: mapleRewardsImports.MplRewardsFactory
  mapleToken: mapleTokenImports.MapleToken
  xmpl: xmplImports.XMPL
  poolV1: poolV1Imports.Pool
  poolV1Factory: poolV1Imports.PoolFactory
  stakeLocker: stakeLockerImports.StakeLocker
  stakeLockerFactory: stakeLockerImports.StakeLockerFactory
  // Pool
  pool: poolImports.Pool
  poolDeployer: poolImports.PoolDeployer
  // Pool:poolManager
  poolManager: poolImports.PoolManager
  poolManagerFactory: poolImports.PoolManagerFactory
  poolManagerInitializer: poolImports.PoolManagerInitializer
  // Pool:loanManager
  loanManager: poolImports.LoanManager
  loanManagerfactory: poolImports.LoanManagerFactory
  loanManagerInitializer: poolImports.LoanManagerInitializer

  // PoolV2
  poolV2: poolV2Imports.Pool
  poolDeployerV2: poolV2Imports.PoolDeployer
  poolDelegateCoverV2: poolV2Imports.PoolDelegateCover__factory

  // PoolV2:poolManager
  poolManagerV2: poolV2Imports.PoolManager
  // PoolV2:openTermLoanManager
  openTermLoanManager: openTermLoanManagerImports.LoanManager
  openTermLoanManagerFactory: openTermLoanManagerImports.LoanManagerFactory
  openTermLoanManagerInitializer: openTermLoanManagerImports.LoanManagerInitializer
  // PoolV2:fixedTermLoanManager
  fixedTermLoanManager: fixedTermLoanManagerImports.LoanManager
  fixedTermLoanManagerFactory: fixedTermLoanManagerImports.LoanManagerFactory
  fixedTermLoanManagerInitializer: fixedTermLoanManagerImports.LoanManagerInitializer
  // withdrawalManager
  withdrawalManager: withdrawalManagerImports.WithdrawalManager
  withdrawalManagerFactory: withdrawalManagerImports.WithdrawalManagerFactory
  withdrawalManagerInitializer: withdrawalManagerImports.WithdrawalManagerInitializer
  // environmentMocks
  bPool: environmentMocksImports.BPool
  erc20: environmentMocksImports.MintSpecialToken
  // PoolV2: migrationHelper
  migrationHelpers: migrationHelpersImports.MigrationHelper
}

export {
  addresses,
  collateralLocker,
  debtLockerV1,
  debtLockerV2,
  debtLockerV3,
  fundingLocker,
  lateFeeCalc,
  liquidityLocker,
  loanV1,
  loanV2,
  loanV3,
  loanV301,
  loanV4,
  loanV5,
  openTermLoan,
  mapleGlobals,
  mapleGlobalsV2,
  mapleGlobalsV2V2,
  mapleRewards,
  mapleToken,
  migrationHelpers,
  xmpl,
  poolV1,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  pool,
  poolV2,
  poolManager,
  loanManager,
  poolManagerV2,
  openTermLoanManager,
  fixedTermLoanManager,
  withdrawalManager,
  bPool,
  chainlink,
  erc20,
  uniswapRouterV2,
  ContractTypes,
  MapleAddressMapping
}
