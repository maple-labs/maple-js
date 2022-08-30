// Typechain entities
import * as collateralLockerImports from './typechain/collateralLocker'
import * as debtLockerV1Imports from './typechain/debtLockerV1'
import * as debtLockerV2Imports from './typechain/debtLockerV2'
import * as debtLockerV3Imports from './typechain/debtLockerV3'
import * as fundingLockerImports from './typechain/fundingLocker'
import * as globalsV2Imports from './typechain/globalsV2'
import * as lateFeeCalcImports from './typechain/lateFeeCalculator'
import * as liquidityLockerImports from './typechain/liquidityLocker'
import * as loanV1Imports from './typechain/loanV1'
import * as loanV2Imports from './typechain/loanV2'
import * as loanV3Imports from './typechain/loanV3'
import * as loanV4Imports from './typechain/loanV4'
import * as mapleTokenImports from './typechain/mapleToken'
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as poolImports from './typechain/pool'
import * as poolV2Imports from './typechain/poolV2'
import * as premiumCalcImports from './typechain/premiumCalculator'
import * as repaymentCalcImports from './typechain/repaymentCalculator'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as withdrawalManagerImports from './typechain/withdrawal-manager'
import * as xmplImports from './typechain/xmpl'
import * as environmentMocksImports from './typechain/environmentMocks'

// Addresses
import goerliDevAddresses from './addresses/goerli-dev'
import kovanAddresses from './addresses/kovan'
import kovanDevAddresses from './addresses/kovan-dev'
import rinkebyAddresses from './addresses/rinkeby'
import rinkebyDevAddresses from './addresses/rinkeby-dev'
import mainnetAddresses from './addresses/mainnet'
import mainnetStageAddresses from './addresses/mainnet-stage'

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

const globalsV2 = {
  core: globalsV2Imports.MapleGlobals__factory
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

const mapleRewards = {
  core: mapleRewardsImports.MplRewards__factory,
  factory: mapleRewardsImports.MplRewardsFactory__factory
}

const mapleToken = {
  factory: mapleTokenImports.MapleToken__factory
}

const pool = {
  core: poolImports.Pool__factory,
  factory: poolImports.PoolFactory__factory,
  lib: poolImports.PoolLib__factory
}

const poolV2 = {
  core: poolV2Imports.Pool__factory,
  delegateCover: poolV2Imports.PoolDelegateCover__factory,
  deployer: poolV2Imports.PoolDeployer__factory,
}

const poolV2Manager = {
  core: poolV2Imports.PoolManager__factory,
  factory: poolV2Imports.PoolManagerFactory__factory,
  initializer: poolV2Imports.PoolManagerInitializer__factory,
  storage: poolV2Imports.PoolManagerStorage__factory,
}

const loanManager = {
  core: poolV2Imports.LoanManager__factory,
  factory: poolV2Imports.LoanManagerFactory__factory,
  initializer: poolV2Imports.LoanManagerInitializer__factory,
  storage: poolV2Imports.LoanManagerStorage__factory,
  transition: poolV2Imports.TransitionLoanManager__factory
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

const withdawalManager = {
  core: withdrawalManagerImports.WithdrawalManager__factory,
  factory: withdrawalManagerImports.WithdrawalManagerFactory__factory,
  initializer: withdrawalManagerImports.WithdrawalManagerInitializer__factory,
  storage: withdrawalManagerImports.WithdrawalManagerStorage__factory
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

const xmpl = {
  factory: xmplImports.XMPL__factory
}

type AddressKey = typeof mainnetAddresses

type MapleAddressMapping = {
  [K in keyof AddressKey]: AddressKey[K]
}

const addresses: Record<string, MapleAddressMapping> = {
  goerli: goerliDevAddresses, // TODO - deploy goerli-prod
  'goerli-dev': goerliDevAddresses,
  kovan: kovanAddresses,
  'kovan-dev': kovanDevAddresses,
  rinkeby: rinkebyAddresses,
  'rinkeby-dev': rinkebyDevAddresses,
  mainnet: mainnetAddresses,
  'mainnet-stage': mainnetStageAddresses
}

interface ContractTypes {
  bPool: environmentMocksImports.BPool
  debtLockerV3: debtLockerV3Imports.DebtLocker
  debtLockerV3Factory: debtLockerV3Imports.DebtLockerFactory
  debtLockerV3Initializer: debtLockerV3Imports.DebtLockerInitializer
  debtLockerV2: debtLockerV2Imports.DebtLocker
  debtLockerV2Factory: debtLockerV2Imports.DebtLockerFactory
  debtLockerV2Initializer: debtLockerV2Imports.DebtLockerInitializer
  globalsV2: globalsV2Imports.MapleGlobals__factory
  liquidityLocker: liquidityLockerImports.LiquidityLocker
  liquidityLockerFactory: liquidityLockerImports.LiquidityLockerFactory
  loanV2: loanV2Imports.MapleLoan
  loanV2Factory: loanV2Imports.MapleLoanFactory
  loanV3: loanV3Imports.MapleLoan
  loanV3Factory: loanV3Imports.MapleLoanFactory
  loanV3Initializer: loanV3Imports.MapleLoanInitializer
  loanV3Refinancer: loanV3Imports.Refinancer
  loanV4: loanV4Imports.MapleLoan__factory
  loanV4Factory: loanV4Imports.MapleLoanFactory__factory
  loanV4Initializer: loanV4Imports.MapleLoanInitializer__factory
  loanV4Migrator: loanV4Imports.MapleLoanV4Migrator__factory
  loanV4FeeManager: loanV4Imports.MapleLoanFeeManager__factory
  loanV4Refinancer: loanV4Imports.Refinancer__factory
  mapleToken: mapleTokenImports.MapleToken
  mapleGlobals: mapleGlobalsImports.MapleGlobals
  mapleRewards: mapleRewardsImports.MplRewards
  mapleRewardsFactory: mapleRewardsImports.MplRewardsFactory
  stakeLocker: stakeLockerImports.StakeLocker
  stakeLockerFactory: stakeLockerImports.StakeLockerFactory
  xmpl: xmplImports.XMPL
  pool: poolImports.Pool
  poolFactory: poolImports.PoolFactory
  // PoolV2:poolV2
  poolV2Factory: poolV2Imports.Pool__factory
  delegateCover: poolV2Imports.PoolDelegateCover__factory
  poolV2deployer: poolV2Imports.PoolDeployer__factory
  // PoolV2:poolV2Manager
  poolV2Manager: poolV2Imports.PoolManager__factory
  poolV2ManagerFactory: poolV2Imports.PoolManagerFactory__factory
  poolV2ManagerInitializer: poolV2Imports.PoolManagerInitializer__factory
  poolV2ManagerStorage: poolV2Imports.PoolManagerStorage__factory
  // PoolV2:loanManager
  loanManager: poolV2Imports.LoanManager__factory
  loanManagerfactory: poolV2Imports.LoanManagerFactory__factory
  loanManagerInitializer: poolV2Imports.LoanManagerInitializer__factory
  loanManagerStorage: poolV2Imports.LoanManagerStorage__factory
  loanManagerTransition: poolV2Imports.TransitionLoanManager__factory

  withdrawalManager: withdrawalManagerImports.WithdrawalManager__factory
  withdrawalManagerFactory: withdrawalManagerImports.WithdrawalManagerFactory__factory
  withdrawalManagerInitializer: withdrawalManagerImports.WithdrawalManagerInitializer__factory
  withdrawalManagerStorage: withdrawalManagerImports.WithdrawalManagerStorage__factory

  erc20: environmentMocksImports.MintSpecialToken
}

export {
  addresses,
  bPool,
  collateralLocker,
  chainlink,
  debtLockerV1,
  debtLockerV2,
  debtLockerV3,
  erc20,
  fundingLocker,
  globalsV2,
  lateFeeCalc,
  liquidityLocker,
  loanV1,
  loanV2,
  loanV3,
  loanV4,
  loanManager,
  mapleGlobals,
  mapleRewards,
  mapleToken,
  pool,
  poolV2,
  poolV2Manager,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  withdawalManager,
  uniswapRouterV2,
  xmpl,
  ContractTypes,
  MapleAddressMapping
}
