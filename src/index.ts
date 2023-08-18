// Typechain entities

import * as debtLockerV2Imports from './typechain/debtLockerV2'
import * as debtLockerV3Imports from './typechain/debtLockerV3'
import * as environmentMocksImports from './typechain/environmentMocks'
import * as fixedTermLoanImports from './typechain/fixedTermLoan'
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
import * as mapleRewardsImports from './typechain/mplRewards'
import * as mapleTokenImports from './typechain/mapleToken'
import * as mapleTokenV2Imports from './typechain/mapleTokenV2'
import * as migrationHelpersImports from './typechain/migrationHelpers'
import * as openTermLoanImports from './typechain/openTermLoan'
import * as openTermLoanManagerImports from './typechain/openTermLoanManager'
import * as poolV1Imports from './typechain/poolV1'
import * as poolV2Imports from './typechain/poolV2'
import * as poolV201Imports from './typechain/poolV201'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as withdrawalManagerImports from './typechain/withdrawalManager'
import * as xmplImports from './typechain/xmpl'

// Addresses
import goerliProdAddresses from './addresses/goerli-prod'
import goerliDevAddresses from './addresses/goerli-dev'
import mainnetDevAddresses from './addresses/mainnet-dev'
import mainnetProdAddresses from './addresses/mainnet-prod'

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

const mapleGlobalsV201 = {
  core: mapleGlobalsV201Imports.MapleGlobalsV201Abi__factory
}

const mapleToken = {
  core: mapleTokenImports.MapleTokenAbi__factory
}

const mapleTokenV2 = {
  core: mapleTokenV2Imports.MapleTokenV2Abi__factory,
  recapModule: mapleTokenV2Imports.RecapitalizationModuleAbi__factory
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
  core: poolV2Imports.PoolV2PoolAbi__factory
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

const stakeLocker = {
  core: stakeLockerImports.StakeLockerAbi__factory,
  factory: stakeLockerImports.StakeLockerFactoryAbi__factory
}

const withdrawalManager = {
  core: withdrawalManagerImports.WithdrawalManagerAbi__factory
}

const xmpl = {
  factory: xmplImports.XMPLAbi__factory
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
  debtLockerV2: debtLockerV2Imports.DebtLockerV2Abi
  debtLockerV2Factory: debtLockerV2Imports.DebtLockerV2FactoryAbi
  debtLockerV3: debtLockerV3Imports.DebtLockerV3Abi

  // environmentMocks
  bPool: environmentMocksImports.BPoolAbi
  erc20: environmentMocksImports.ERC20Abi
  kycerc20: environmentMocksImports.KycERC20Abi
  usdt: environmentMocksImports.USDTAbi

  // Fixed Term Loans & Managers
  fixedTermLoan: fixedTermLoanImports.FixedTermLoanAbi
  fixedTermLoanInitializer: fixedTermLoanImports.FixedTermLoanInitializerAbi
  fixedTermLoanRefinancer: fixedTermLoanImports.FixedTermLoanRefinancerAbi

  fixedTermLoanManager: fixedTermLoanManagerImports.FixedTermLoanManagerAbi

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

  // Maple Token
  mapleToken: mapleTokenImports.MapleTokenAbi
  mapleTokenV2: mapleTokenV2Imports.MapleTokenV2Abi
  recapModule: mapleTokenV2Imports.RecapitalizationModuleAbi

  // Migration Helpers
  migrationHelpers: migrationHelpersImports.MigrationHelperAbi

  // MplRewards
  mapleRewards: mapleRewardsImports.MplRewardsAbi
  mapleRewardsFactory: mapleRewardsImports.MplRewardsFactoryAbi

  // Open Term Loans & Managers
  openTermLoan: openTermLoanImports.OpenTermLoanAbi
  openTermLoanFactory: openTermLoanImports.OpenTermLoanFactoryAbi
  openTermLoanInitializer: openTermLoanImports.OpenTermLoanInitializerAbi
  openTermLoanRefinancer: openTermLoanImports.OpenTermLoanRefinancerAbi

  openTermLoanManager: openTermLoanManagerImports.OpenTermLoanManagerAbi
  openTermLoanManagerFactory: openTermLoanManagerImports.OpenTermLoanManagerFactoryAbi

  // Pool V1
  poolV1: poolV1Imports.PoolV1Abi
  poolV1Factory: poolV1Imports.PoolV1FactoryAbi

  // PoolV2 / PoolManager / LoanManager
  poolV2: poolV2Imports.PoolV2PoolAbi

  poolManager: poolV2Imports.PoolV2PoolManagerAbi
  poolManagerFactory: poolV2Imports.PoolV2PoolManagerFactoryAbi
  poolManagerInitializer: poolV2Imports.PoolV2PoolManagerInitializerAbi

  loanManager: poolV2Imports.LoanManagerAbi
  loanManagerFactory: poolV2Imports.LoanManagerFactoryAbi

  // PoolV201 / PoolManagerV2
  poolDeployerV2: poolV201Imports.PoolV201PoolDeployerAbi

  poolManagerV2: poolV201Imports.PoolV201PoolManagerAbi

  // StakeLocker
  stakeLocker: stakeLockerImports.StakeLockerAbi
  stakeLockerFactory: stakeLockerImports.StakeLockerFactoryAbi

  // withdrawalManager
  withdrawalManager: withdrawalManagerImports.WithdrawalManagerAbi

  // xMPL
  xmpl: xmplImports.XMPLAbi
}

export {
  addresses,
  ContractTypes,
  debtLockerV2,
  debtLockerV3,
  environmentMocks,
  fixedTermLoan,
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
  mapleRewards,
  mapleToken,
  mapleTokenV2,
  migrationHelpers,
  openTermLoan,
  openTermLoanManager,
  poolV1,
  poolV2,
  poolManager,
  poolV201,
  poolManagerV2,
  stakeLocker,
  withdrawalManager,
  xmpl
}
