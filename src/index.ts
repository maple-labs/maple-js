// Typechain entities
import * as debtLockerV2Imports from './typechain/debtLockerV2'
import * as debtLockerV3Imports from './typechain/debtLockerV3'
import * as environmentMocksImports from './typechain/environmentMocks'
import * as fixedTermLoanImports from './typechain/fixedTermLoan'
import * as fixedTermLoanV6Imports from './typechain/fixedTermLoanV6'
import * as fixedTermLoanManagerImports from './typechain/fixedTermLoanManager'
import * as loanV1Imports from './typechain/loanV1'
import * as loanV2Imports from './typechain/loanV2'
import * as loanV3Imports from './typechain/loanV3'
import * as loanV301Imports from './typechain/loanV301'
import * as loanV4Imports from './typechain/loanV4'
import * as loanV401Imports from './typechain/loanV401'
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleGlobalsV2Imports from './typechain/mapleGlobalsV2'
import * as mapleGlobalsV201Imports from './typechain/mapleGlobalsV201'
import * as mapleGlobalsV3Imports from './typechain/mapleGlobalsV3'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as mapleStrategiesImports from './typechain/mapleStrategies'
import * as mapleTokenImports from './typechain/mapleToken'
import * as migrationHelpersImports from './typechain/migrationHelpers'
import * as openTermLoanImports from './typechain/openTermLoan'
import * as openTermLoanV2Imports from './typechain/openTermLoanV2'
import * as openTermLoanManagerImports from './typechain/openTermLoanManager'
import * as poolPermissionManagerImports from './typechain/poolPermissionManager'
import * as poolV1Imports from './typechain/poolV1'
import * as poolV2Imports from './typechain/poolV2'
import * as poolV201Imports from './typechain/poolV201'
import * as poolV3Imports from './typechain/poolV3'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as syrupUtilsImports from './typechain/syrupUtils'
import * as syrupTokenImports from './typechain/syrupToken'
import * as withdrawalManagerImports from './typechain/withdrawalManager'
import * as withdrawalManagerCyclicalImports from './typechain/withdrawalManagerCyclical'
import * as withdrawalManagerQueueImports from './typechain/withdrawalManagerQueue'
import * as xmplImports from './typechain/xmpl'

// Addresses
import baseMainnetProdAddresses from './addresses/base-mainnet-prod'
import mainnetDevAddresses from './addresses/mainnet-dev'
import mainnetProdAddresses from './addresses/mainnet-prod'
import sepoliaDevAddresses from './addresses/sepolia-dev'
import sepoliaProdAddresses from './addresses/sepolia-prod'

// utils
import {
  generateUnsignedTransactionData,
  generateSignedTransactionData,
  broadcastSignedTransaction
} from 'helpers/serialiseTransaction'

const debtLockerV2 = {
  core: debtLockerV2Imports.DebtLockerV2Abi__factory,
  factory: debtLockerV2Imports.DebtLockerV2FactoryAbi__factory
}

const debtLockerV3 = {
  core: debtLockerV3Imports.DebtLockerV3Abi__factory
}

const environmentMocks = {
  bpool: environmentMocksImports.BPoolAbi__factory,
  erc20: environmentMocksImports.ERC20Abi__factory,
  kycerc20: environmentMocksImports.KycERC20Abi__factory,
  mintSpecialToken: environmentMocksImports.MintSpecialTokenAbi__factory,
  usdt: environmentMocksImports.USDTAbi__factory
}

const fixedTermLoan = {
  core: fixedTermLoanImports.FixedTermLoanAbi__factory,
  factory: fixedTermLoanImports.FixedTermLoanFactoryV2Abi__factory,
  initializer: fixedTermLoanImports.FixedTermLoanInitializerAbi__factory,
  refinancer: fixedTermLoanImports.FixedTermLoanRefinancerAbi__factory
}

const fixedTermLoanManager = {
  core: fixedTermLoanManagerImports.FixedTermLoanManagerAbi__factory
}

const loanV1 = {
  core: loanV1Imports.LoanAbi__factory,
  factory: loanV1Imports.LoanFactoryAbi__factory
}

const loanV2 = {
  core: loanV2Imports.LoanV2Abi__factory,
  factory: loanV2Imports.LoanV2FactoryAbi__factory
}

const loanV3 = {
  core: loanV3Imports.LoanV3Abi__factory,
  initializer: loanV3Imports.LoanV3InitializerAbi__factory,
  refinancer: loanV3Imports.LoanV3RefinancerAbi__factory
}

const loanV301 = {
  core: loanV301Imports.LoanV301Abi__factory
}

const loanV4 = {
  core: loanV4Imports.LoanV4Abi__factory,
  initializer: loanV4Imports.LoanV4InitializerAbi__factory,
  refinancer: loanV4Imports.LoanV4RefinancerAbi__factory
}

const loanV401 = {
  core: loanV4Imports.LoanV4Abi__factory
}

const mapleGlobals = {
  core: mapleGlobalsImports.MapleGlobalsAbi__factory
}

const mapleGlobalsV2 = {
  core: mapleGlobalsV2Imports.MapleGlobalsV2Abi__factory
}

const mapleGlobalsV3 = {
  core: mapleGlobalsV3Imports.MapleGlobalsV3Abi__factory
}

const mapleGlobalsV201 = {
  core: mapleGlobalsV201Imports.MapleGlobalsV201Abi__factory
}

const mapleToken = {
  core: mapleTokenImports.MapleTokenAbi__factory
}

const migrationHelpers = {
  core: migrationHelpersImports.MigrationHelperAbi__factory
}

const mapleRewards = {
  core: mapleRewardsImports.MplRewardsAbi__factory,
  factory: mapleRewardsImports.MplRewardsFactoryAbi__factory
}

const openTermLoan = {
  core: openTermLoanImports.OpenTermLoanAbi__factory,
  factory: openTermLoanImports.OpenTermLoanFactoryAbi__factory,
  initializer: openTermLoanImports.OpenTermLoanInitializerAbi__factory,
  refinancer: openTermLoanImports.OpenTermLoanRefinancerAbi__factory
}

const openTermLoanManager = {
  core: openTermLoanManagerImports.OpenTermLoanManagerAbi__factory,
  factory: openTermLoanManagerImports.OpenTermLoanManagerFactoryAbi__factory
}

const poolV1 = {
  core: poolV1Imports.PoolV1Abi__factory,
  factory: poolV1Imports.PoolV1FactoryAbi__factory
}

// Pool V2 start
// --------------------
const poolV2 = {
  core: poolV2Imports.PoolV2PoolAbi__factory,
  deployer: poolV2Imports.PoolV2PoolDeployerAbi__factory
}

const loanManager = {
  core: poolV2Imports.LoanManagerAbi__factory,
  factory: poolV2Imports.LoanManagerFactoryAbi__factory
}

const poolManager = {
  core: poolV2Imports.PoolV2PoolManagerAbi__factory,
  factory: poolV2Imports.PoolV2PoolManagerFactoryAbi__factory,
  initializer: poolV2Imports.PoolV2PoolManagerInitializerAbi__factory
}
// --------------------
// Pool V2 end

// Pool V201 start
// --------------------
const poolV201 = {
  deployer: poolV201Imports.PoolV201PoolDeployerAbi__factory
}

const poolManagerV2 = {
  core: poolV201Imports.PoolV201PoolManagerAbi__factory
}
// --------------------
// Pool V201 end

// --------------------
// Pool V3 start
const poolV3 = {
  deployer: poolV3Imports.PoolDeployerV3Abi__factory
}

const poolManagerV3 = {
  core: poolV3Imports.PoolManagerV3Abi__factory,
  initializer: poolV3Imports.PoolManagerV3InitializerAbi__factory
}

// Pool V3 end
// --------------------

const poolPermissionManager = {
  core: poolPermissionManagerImports.PoolPermissionManagerAbi__factory,
  initializer: poolPermissionManagerImports.PoolPermissionManagerInitializerAbi__factory
}

const stakeLocker = {
  core: stakeLockerImports.StakeLockerAbi__factory,
  factory: stakeLockerImports.StakeLockerFactoryAbi__factory
}

const syrupUtils = {
  syrupRouter: syrupUtilsImports.SyrupRouterAbi__factory,
  mplUserActions: syrupUtilsImports.MplUserActionsAbi__factory,
  syrupDrip: syrupUtilsImports.SyrupDripAbi__factory,
  syrupUserActions: syrupUtilsImports.SyrupUserActionsAbi__factory
}

const syrupToken = {
  core: syrupTokenImports.SyrupTokenAbi__factory,
  initializer: syrupTokenImports.SyrupTokenInitializerAbi__factory,
  migrator: syrupTokenImports.SyrupTokenMigratorAbi__factory,
  recapModule: syrupTokenImports.RecapitalizationModuleAbi__factory
}

const withdrawalManager = {
  core: withdrawalManagerImports.WithdrawalManagerAbi__factory
}

const withdrawalManagerCyclical = {
  core: withdrawalManagerCyclicalImports.WithdrawalManagerCyclicalAbi__factory,
  initializer: withdrawalManagerCyclicalImports.WithdrawalManagerCyclicalInitializerAbi__factory
}

const withdrawalManagerQueue = {
  core: withdrawalManagerQueueImports.WithdrawalManagerQueueAbi__factory,
  initializer: withdrawalManagerQueueImports.WithdrawalManagerQueueInitializerAbi__factory,
  factory: withdrawalManagerQueueImports.WithdrawalManagerQueueFactoryAbi__factory
}

const xmpl = {
  factory: xmplImports.XMPLAbi__factory
}

// Delegate Initiated Loans Start
const fixedTermLoanV6 = {
  core: fixedTermLoanV6Imports.FixedTermLoanV6Abi__factory,
  initializer: fixedTermLoanV6Imports.FixedTermLoanV6InitializerAbi__factory,
  refinancer: fixedTermLoanV6Imports.FixedTermLoanV6RefinancerAbi__factory
}

const openTermLoanV2 = {
  core: openTermLoanV2Imports.OpenTermLoanV2Abi__factory,
  initializer: openTermLoanV2Imports.OpenTermLoanV2InitializerAbi__factory,
  refinancer: openTermLoanV2Imports.OpenTermLoanV2RefinancerAbi__factory
}
// Delegate Initiated Loans End

// Maple Strategies
const mapleStrategies = {
  factory: mapleStrategiesImports.MapleStrategyFactoryAbi__factory,
  aaveStrategy: mapleStrategiesImports.MapleAaveStrategyAbi__factory,
  aaveStrategyInitializer: mapleStrategiesImports.MapleAaveStrategyInitializerAbi__factory,
  basicStrategy: mapleStrategiesImports.MapleBasicStrategyAbi__factory,
  basicStrategyInitializer: mapleStrategiesImports.MapleBasicStrategyInitializerAbi__factory,
  skyStrategy: mapleStrategiesImports.MapleSkyStrategyAbi__factory,
  skyStrategyInitializer: mapleStrategiesImports.MapleSkyStrategyInitializerAbi__factory
}

type AddressKey = typeof mainnetProdAddresses

type MapleAddressMapping = {
  [K in keyof AddressKey]: AddressKey[K]
}

const addresses: Record<string, MapleAddressMapping> = {
  'base-mainnet-prod': baseMainnetProdAddresses,
  'mainnet-dev': mainnetDevAddresses,
  'mainnet-prod': mainnetProdAddresses,
  'sepolia-dev': sepoliaDevAddresses,
  'sepolia-prod': sepoliaProdAddresses
}

interface ContractTypes {
  debtLockerV2: debtLockerV2Imports.DebtLockerV2Abi
  debtLockerV2Factory: debtLockerV2Imports.DebtLockerV2FactoryAbi
  debtLockerV3: debtLockerV3Imports.DebtLockerV3Abi

  // environmentMocks
  bPool: environmentMocksImports.BPoolAbi
  erc20: environmentMocksImports.ERC20Abi
  kycerc20: environmentMocksImports.KycERC20Abi
  usdt: environmentMocksImports.USDTAbi

  // Fixed Term Loans & Managers (V1)
  fixedTermLoan: fixedTermLoanImports.FixedTermLoanAbi
  fixedTermLoanFactoryV2: fixedTermLoanImports.FixedTermLoanFactoryV2Abi
  fixedTermLoanInitializer: fixedTermLoanImports.FixedTermLoanInitializerAbi
  fixedTermLoanRefinancer: fixedTermLoanImports.FixedTermLoanRefinancerAbi
  fixedTermLoanManager: fixedTermLoanManagerImports.FixedTermLoanManagerAbi

  // Fixed Term Loans (V6 - Delegate Initiated Loans)
  fixedTermLoanV6: fixedTermLoanV6Imports.FixedTermLoanV6Abi
  fixedTermLoanV6Initializer: fixedTermLoanV6Imports.FixedTermLoanV6InitializerAbi
  fixedTermLoanV6Refinancer: fixedTermLoanV6Imports.FixedTermLoanV6RefinancerAbi

  // Loan V2
  loanV2: loanV2Imports.LoanV2Abi
  loanV2Factory: loanV2Imports.LoanV2FactoryAbi

  // Loan V3
  loanV3: loanV3Imports.LoanV3Abi
  loanV3Initializer: loanV3Imports.LoanV3InitializerAbi
  loanV3Refinancer: loanV3Imports.LoanV3RefinancerAbi

  // Loan V301
  loanV301: loanV301Imports.LoanV301Abi

  // Loan V4
  loanV4: loanV4Imports.LoanV4Abi
  loanV4Initializer: loanV4Imports.LoanV4InitializerAbi
  loanV4Refinancer: loanV4Imports.LoanV4RefinancerAbi

  // Loan V401
  loanV401: loanV401Imports.LoanV401Abi

  // Maple Globals
  mapleGlobals: mapleGlobalsImports.MapleGlobalsAbi
  mapleGlobalsV2: mapleGlobalsV2Imports.MapleGlobalsV2Abi
  mapleGlobalsV201: mapleGlobalsV201Imports.MapleGlobalsV201Abi
  mapleGlobalsV3: mapleGlobalsV3Imports.MapleGlobalsV3Abi

  // Maple Token
  mapleToken: mapleTokenImports.MapleTokenAbi

  // Migration Helpers
  migrationHelpers: migrationHelpersImports.MigrationHelperAbi

  // MplRewards
  mapleRewards: mapleRewardsImports.MplRewardsAbi
  mapleRewardsFactory: mapleRewardsImports.MplRewardsFactoryAbi

  // MapleStrategies
  mapleAaveStrategy: mapleStrategiesImports.MapleAaveStrategyAbi
  mapleAaveStrategyInitializer: mapleStrategiesImports.MapleAaveStrategyInitializerAbi
  mapleBasicStrategy: mapleStrategiesImports.MapleBasicStrategyAbi
  mapleBasicStrategyInitializer: mapleStrategiesImports.MapleBasicStrategyInitializerAbi
  mapleSkyStrategy: mapleStrategiesImports.MapleSkyStrategyAbi
  mapleSkyStrategyInitializer: mapleStrategiesImports.MapleSkyStrategyInitializerAbi
  mapleStrategyFactory: mapleStrategiesImports.MapleStrategyFactoryAbi

  // Open Term Loans & Managers (V1)
  openTermLoan: openTermLoanImports.OpenTermLoanAbi
  openTermLoanFactory: openTermLoanImports.OpenTermLoanFactoryAbi
  openTermLoanInitializer: openTermLoanImports.OpenTermLoanInitializerAbi
  openTermLoanRefinancer: openTermLoanImports.OpenTermLoanRefinancerAbi

  openTermLoanManager: openTermLoanManagerImports.OpenTermLoanManagerAbi
  openTermLoanManagerFactory: openTermLoanManagerImports.OpenTermLoanManagerFactoryAbi

  // Open Term Loans (V2 - Delegate Initiated Loans)
  openTermLoanV2: openTermLoanV2Imports.OpenTermLoanV2Abi
  openTermLoanV2Initializer: openTermLoanV2Imports.OpenTermLoanV2InitializerAbi
  openTermLoanV2Refinancer: openTermLoanV2Imports.OpenTermLoanV2RefinancerAbi

  // Pool V1
  poolV1: poolV1Imports.PoolV1Abi
  poolV1Factory: poolV1Imports.PoolV1FactoryAbi

  // PoolV2 / PoolManager / LoanManager
  poolV2: poolV2Imports.PoolV2PoolAbi
  poolDeployer: poolV2Imports.PoolV2PoolDeployerAbi

  poolManager: poolV2Imports.PoolV2PoolManagerAbi
  poolManagerFactory: poolV2Imports.PoolV2PoolManagerFactoryAbi
  poolManagerInitializer: poolV2Imports.PoolV2PoolManagerInitializerAbi

  loanManager: poolV2Imports.LoanManagerAbi
  loanManagerFactory: poolV2Imports.LoanManagerFactoryAbi

  // PoolV201 / PoolManagerV2
  poolDeployerV2: poolV201Imports.PoolV201PoolDeployerAbi

  poolManagerV2: poolV201Imports.PoolV201PoolManagerAbi

  // Pool V3
  poolDeployerV3: poolV3Imports.PoolDeployerV3Abi
  poolManagerV3: poolV3Imports.PoolManagerV3Abi
  poolManagerV3Initializer: poolV3Imports.PoolManagerV3InitializerAbi

  // Pool Permission Manager
  poolPermissionManager: poolPermissionManagerImports.PoolPermissionManagerAbi
  poolPermissionManagerInitializer: poolPermissionManagerImports.PoolPermissionManagerInitializerAbi

  // StakeLocker
  stakeLocker: stakeLockerImports.StakeLockerAbi
  stakeLockerFactory: stakeLockerImports.StakeLockerFactoryAbi

  // Syrup Utils Private
  mplUserActions: syrupUtilsImports.MplUserActionsAbi
  syrupRouter: syrupUtilsImports.SyrupRouterAbi
  syrupDrip: syrupUtilsImports.SyrupDripAbi
  syrupUserActions: syrupUtilsImports.SyrupUserActionsAbi

  // Syrup Token
  syrupToken: syrupTokenImports.SyrupTokenAbi
  syrupTokenInitializer: syrupTokenImports.SyrupTokenInitializerAbi
  syrupTokenMigrator: syrupTokenImports.SyrupTokenMigratorAbi
  recapModule: syrupTokenImports.RecapitalizationModuleAbi

  // withdrawalManager
  withdrawalManager: withdrawalManagerImports.WithdrawalManagerAbi

  // Withdrawal Manager Cyclical / Queue
  withdrawalManagerCyclical: withdrawalManagerCyclicalImports.WithdrawalManagerCyclicalAbi
  withdrawalManagerCyclicalInitializer: withdrawalManagerCyclicalImports.WithdrawalManagerCyclicalInitializerAbi

  withdrawalManagerQueue: withdrawalManagerQueueImports.WithdrawalManagerQueueAbi
  withdrawalManagerQueueInitializer: withdrawalManagerQueueImports.WithdrawalManagerQueueInitializerAbi
  withdrawalManagerQueueFactory: withdrawalManagerQueueImports.WithdrawalManagerQueueFactoryAbi

  // xMPL
  xmpl: xmplImports.XMPLAbi
}

// Utils
const utils = {
  generateUnsignedTransactionData,
  generateSignedTransactionData,
  broadcastSignedTransaction
}

export {
  addresses,
  ContractTypes,
  debtLockerV2,
  debtLockerV3,
  environmentMocks,
  fixedTermLoan,
  fixedTermLoanV6,
  fixedTermLoanManager,
  loanManager,
  loanV1,
  loanV2,
  loanV3,
  loanV301,
  loanV4,
  loanV401,
  MapleAddressMapping,
  mapleGlobals,
  mapleGlobalsV2,
  mapleGlobalsV201,
  mapleGlobalsV3,
  mapleRewards,
  mapleStrategies,
  mapleToken,
  migrationHelpers,
  openTermLoan,
  openTermLoanV2,
  openTermLoanManager,
  poolV1,
  poolV2,
  poolManager,
  poolV201,
  poolV3,
  poolManagerV2,
  poolManagerV3,
  poolPermissionManager,
  stakeLocker,
  syrupUtils,
  syrupToken,
  withdrawalManager,
  withdrawalManagerCyclical,
  withdrawalManagerQueue,
  xmpl,
  utils
}
