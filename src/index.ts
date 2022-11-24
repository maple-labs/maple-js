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
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleGlobalsV2Imports from './typechain/mapleGlobalsV2'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as mapleTokenImports from './typechain/mapleToken'
import * as xmplImports from './typechain/xmpl'
import * as poolImports from './typechain/pool'
import * as premiumCalcImports from './typechain/premiumCalculator'
import * as repaymentCalcImports from './typechain/repaymentCalculator'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as poolV2Imports from './typechain/poolV2'
import * as withdrawalManagerImports from './typechain/withdrawalManager'
import * as environmentMocksImports from './typechain/environmentMocks'

// Addresses
import goerliAddresses from './addresses/goerli'
import goerliDevAddresses from './addresses/goerli-dev'
import mainnetAddresses from './addresses/mainnet'
import mainnetStageAddresses from './addresses/mainnet-stage'
import mainnetDevAddresses from './addresses/mainnet-dev'

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

const mapleGlobals = {
  core: mapleGlobalsImports.MapleGlobals__factory
}

const mapleGlobalsV2 = {
  core: mapleGlobalsV2Imports.MapleGlobals__factory
}

const mapleRewards = {
  core: mapleRewardsImports.MplRewards__factory,
  factory: mapleRewardsImports.MplRewardsFactory__factory
}

const mapleToken = {
  factory: mapleTokenImports.MapleToken__factory
}

const xmpl = {
  factory: xmplImports.XMPL__factory
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

const poolV2 = {
  core: poolV2Imports.Pool__factory,
  delegateCover: poolV2Imports.PoolDelegateCover__factory,
  deployer: poolV2Imports.PoolDeployer__factory
}

const poolManager = {
  core: poolV2Imports.PoolManager__factory,
  factory: poolV2Imports.PoolManagerFactory__factory,
  initializer: poolV2Imports.PoolManagerInitializer__factory
}

const loanManager = {
  core: poolV2Imports.LoanManager__factory,
  factory: poolV2Imports.LoanManagerFactory__factory,
  initializer: poolV2Imports.LoanManagerInitializer__factory
}

const withdrawalManager = {
  core: withdrawalManagerImports.WithdrawalManager__factory,
  factory: withdrawalManagerImports.WithdrawalManagerFactory__factory,
  initializer: withdrawalManagerImports.WithdrawalManagerInitializer__factory,
  storage: withdrawalManagerImports.WithdrawalManagerStorage__factory
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
type AddressKey = typeof mainnetAddresses

type MapleAddressMapping = {
  [K in keyof AddressKey]: AddressKey[K]
}

const addresses: Record<string, MapleAddressMapping> = {
  goerli: goerliAddresses,
  'goerli-dev': goerliDevAddresses,
  mainnet: mainnetAddresses,
  'mainnet-stage': mainnetStageAddresses,
  'mainnet-dev': mainnetDevAddresses
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

  mapleGlobals: mapleGlobalsImports.MapleGlobals
  mapleGlobalsV2: mapleGlobalsV2Imports.MapleGlobals
  mapleRewards: mapleRewardsImports.MplRewards
  mapleRewardsFactory: mapleRewardsImports.MplRewardsFactory
  mapleToken: mapleTokenImports.MapleToken
  xmpl: xmplImports.XMPL
  pool: poolImports.Pool
  poolFactory: poolImports.PoolFactory
  stakeLocker: stakeLockerImports.StakeLocker
  stakeLockerFactory: stakeLockerImports.StakeLockerFactory
  // PoolV2:poolV2
  poolV2: poolV2Imports.Pool
  poolDeployer: poolV2Imports.PoolDeployer
  // PoolV2:poolManager
  poolManager: poolV2Imports.PoolManager
  poolManagerFactory: poolV2Imports.PoolManagerFactory
  poolManagerInitializer: poolV2Imports.PoolManagerInitializer
  // PoolV2:loanManager
  loanManager: poolV2Imports.LoanManager
  loanManagerfactory: poolV2Imports.LoanManagerFactory
  loanManagerInitializer: poolV2Imports.LoanManagerInitializer
  // withdrawalManager
  withdrawalManager: withdrawalManagerImports.WithdrawalManager
  withdrawalManagerFactory: withdrawalManagerImports.WithdrawalManagerFactory
  withdrawalManagerInitializer: withdrawalManagerImports.WithdrawalManagerInitializer
  // environmentMocks
  bPool: environmentMocksImports.BPool
  erc20: environmentMocksImports.MintSpecialToken
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
  mapleGlobals,
  mapleGlobalsV2,
  mapleRewards,
  mapleToken,
  xmpl,
  pool,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  poolV2,
  poolManager,
  loanManager,
  withdrawalManager,
  bPool,
  chainlink,
  erc20,
  uniswapRouterV2,
  ContractTypes,
  MapleAddressMapping
}
