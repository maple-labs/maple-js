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
import * as mapleTokenImports from './typechain/mapleToken'
import * as mapleGlobalsImports from './typechain/mapleGlobals'
import * as mapleRewardsImports from './typechain/mplRewards'
import * as poolImports from './typechain/pool'
import * as premiumCalcImports from './typechain/premiumCalculator'
import * as repaymentCalcImports from './typechain/repaymentCalculator'
import * as stakeLockerImports from './typechain/stakeLocker'
import * as xmplImports from './typechain/xmpl'
import * as environmentMocksImports from './typechain/environmentMocks'

// Addresses
import kovanAddresses from './addresses/kovan'
import kovanDevAddresses from './addresses/kovan-dev'
import rinkebyAddresses from './addresses/rinkeby'
import rinkebyDevAddresses from './addresses/rinkeby-dev'
import mainnetAddresses from './addresses/mainnet'

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
  initializer: loanV3Imports.MapleLoanInitializer__factory,
  core: loanV3Imports.MapleLoan__factory,
  refinancer: loanV3Imports.Refinancer__factory
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

const xmpl = {
  factory: xmplImports.XMPL__factory
}

const allContracts = {
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
  mapleGlobals,
  mapleRewards,
  mapleToken,
  pool,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  bPool,
  erc20,
  chainlink,
  uniswapRouterV2,
  xmpl
}

type KnownOptions<T> = T extends {
  [k in keyof T]: {
    [k: string]: infer OptionValue
  }
}
  ? OptionValue
  : never

type TypeChainContract = KnownOptions<typeof allContracts>

type AddressKey = typeof mainnetAddresses

type MapleAddressMapping = {
  [K in keyof AddressKey]: AddressKey[K]
}

const addresses: Record<string, MapleAddressMapping> = {
  kovan: kovanAddresses,
  kovanDev: kovanDevAddresses,
  rinkeby: rinkebyAddresses,
  rinkebyDev: rinkebyDevAddresses,
  mainnet: mainnetAddresses
}

interface ContractTypes {
  debtLockerV3: debtLockerV3Imports.DebtLocker
  debtLockerV3Initializer: debtLockerV3Imports.DebtLockerInitializer
  debtLockerV2: debtLockerV2Imports.DebtLocker
  debtLockerV2Factory: debtLockerV2Imports.DebtLockerFactory
  debtLockerV2Initializer: debtLockerV2Imports.DebtLockerInitializer
  loanV2: loanV2Imports.MapleLoan
  loanV2Factory: loanV2Imports.MapleLoanFactory
  loanV3: loanV3Imports.MapleLoan
  loanV3Initializer: loanV3Imports.MapleLoanInitializer
  loanV3Refinancer: loanV3Imports.Refinancer
  mapleToken: mapleTokenImports.MapleToken
  mapleGlobals: mapleGlobalsImports.MapleGlobals
  stakeLocker: stakeLockerImports.StakeLocker
  xmpl: xmplImports.XMPL
  pool: poolImports.Pool
  mapleRewards: mapleRewardsImports.MplRewards
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
  lateFeeCalc,
  liquidityLocker,
  loanV1,
  loanV2,
  loanV3,
  mapleGlobals,
  mapleRewards,
  mapleToken,
  pool,
  premiumCalc,
  repaymentCalculator,
  stakeLocker,
  uniswapRouterV2,
  xmpl,
  ContractTypes,
  MapleAddressMapping,
  TypeChainContract
}
