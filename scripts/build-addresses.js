/**
  You need to copy the artifacts bundle that is generated from maple-deploy
  and ensure that all addresses have been updated or added accurately.
 */

const getAddress = (path) => {
  try {
    return require(path)
  } catch (e) {
    return '0x0000000000000000000000000000000000000000'
  }
}

const build = (project = 'mainnet') => {
  const addresses = {
    // Pool v1 Factories
    CollateralLockerFactory: getAddress(`../artifacts/${project}/addresses/CollateralLockerFactory.address.js`),
    FundingLockerFactory: getAddress(`../artifacts/${project}/addresses/FundingLockerFactory.address.js`),
    LiquidityLockerFactory: getAddress(`../artifacts/${project}/addresses/LiquidityLockerFactory.address.js`),
    PoolFactory: getAddress(`../artifacts/${project}/addresses/PoolFactory.address.js`),
    StakeLockerFactory: getAddress(`../artifacts/${project}/addresses/StakeLockerFactory.address.js`),

    // Pool v2 Factories
    LoanManagerFactory: getAddress(`../artifacts/${project}/addresses/LoanManagerFactory.address.js`),
    PoolDeployer: getAddress(`../artifacts/${project}/addresses/PoolDeployer.address.js`),
    PoolManagerFactory: getAddress(`../artifacts/${project}/addresses/PoolManagerFactory.address.js`),
    WithdrawalManagerFactory: getAddress(`../artifacts/${project}/addresses/WithdrawalManagerFactory.address.js`),

    // Pool v2 implementation contracts
    LoanManager: getAddress(`../artifacts/${project}/addresses/LoanManager.address.js`),
    PoolManager: getAddress(`../artifacts/${project}/addresses/PoolManager.address.js`),
    WithdrawalManager: getAddress(`../artifacts/${project}/addresses/WithdrawalManager.address.js`),

    // Loan v4 fixed contracts
    FeeManager: getAddress(`../artifacts/${project}/addresses/FeeManager.address.js`),

    // DebtLocker Factories
    DebtLockerFactory: getAddress(`../artifacts/${project}/addresses/DebtLockerFactory.address.js`),
    DebtLockerV2Factory: getAddress(`../artifacts/${project}/addresses/DebtLockerV2Factory.address.js`),

    // Loan Factories
    LoanFactory: getAddress(`../artifacts/${project}/addresses/LoanFactory.address.js`),
    LoanV2Factory: getAddress(`../artifacts/${project}/addresses/LoanV2Factory.address.js`),

    // Rewards Factory
    MplRewardsFactory: getAddress(`../artifacts/${project}/addresses/MplRewardsFactory.address.js`),

    // Loan & DebtLocker Implementation
    LoanV2: getAddress(`../artifacts/${project}/addresses/LoanV2.address.js`),
    LoanV3: getAddress(`../artifacts/${project}/addresses/LoanV3.address.js`),
    LoanV4: getAddress(`../artifacts/${project}/addresses/LoanV4.address.js`),
    DebtLockerV2: getAddress(`../artifacts/${project}/addresses/DebtLockerV2.address.js`),
    DebtLockerV3: getAddress(`../artifacts/${project}/addresses/DebtLockerV3.address.js`),

    // Initializers
    DebtLockerV2Initializer: getAddress(`../artifacts/${project}/addresses/DebtLockerV2Initializer.address.js`),
    DebtLockerV3Initializer: getAddress(`../artifacts/${project}/addresses/DebtLockerV3Initializer.address.js`),
    LoanV2Initializer: getAddress(`../artifacts/${project}/addresses/LoanV2Initializer.address.js`),
    LoanV3Initializer: getAddress(`../artifacts/${project}/addresses/LoanV3Initializer.address.js`),
    LoanV4Initializer: getAddress(`../artifacts/${project}/addresses/LoanV4Initializer.address.js`),
    LoanV2Refinancer: getAddress(`../artifacts/${project}/addresses/LoanV2Refinancer.address.js`),
    LoanV3Refinancer: getAddress(`../artifacts/${project}/addresses/LoanV3Refinancer.address.js`),
    LoanV4Refinancer: getAddress(`../artifacts/${project}/addresses/LoanV4Refinancer.address.js`),
    LoanManagerInitializer: getAddress(`../artifacts/${project}/addresses/LoanManagerInitializer.address.js`),
    PoolManagerInitializer: getAddress(`../artifacts/${project}/addresses/PoolManagerInitializer.address.js`),
    WithdrawalManagerInitializer: getAddress(
      `../artifacts/${project}/addresses/WithdrawalManagerInitializer.address.js`
    ),

    // DAO
    MapleGlobals: getAddress(`../artifacts/${project}/addresses/MapleGlobals.address.js`),
    MapleGlobalsV2: getAddress(`../artifacts/${project}/addresses/MapleGlobalsV2.address.js`),
    MapleToken: getAddress(`../artifacts/${project}/addresses/MapleToken.address.js`),
    MapleTreasury: getAddress(`../artifacts/${project}/addresses/MapleTreasury.address.js`),
    NonTransparentProxy: getAddress(`../artifacts/${project}/addresses/NonTransparentProxy.address.js`),

    // Loan v1 Calculators
    LateFeeCalc: getAddress(`../artifacts/${project}/addresses/LateFeeCalc.address.js`),
    PremiumCalc: getAddress(`../artifacts/${project}/addresses/PremiumCalc.address.js`),
    RepaymentCalc: getAddress(`../artifacts/${project}/addresses/RepaymentCalc.address.js`),

    // Libraries
    LoanLib: getAddress(`../artifacts/${project}/addresses/LoanLib.address.js`),
    PoolLib: getAddress(`../artifacts/${project}/addresses/PoolLib.address.js`),
    Util: getAddress(`../artifacts/${project}/addresses/Util.address.js`),

    // external
    BFactory: getAddress(`../artifacts/${project}/addresses/BFactory.address.js`),
    BPool: getAddress(`../artifacts/${project}/addresses/BPool.address.js`),
    BPoolWETH: getAddress(`../artifacts/${project}/addresses/BPoolWETH.address.js`),
    UniswapV2Router02: getAddress(`../artifacts/${project}/addresses/UniswapV2Router02.address.js`),

    // oracles
    PriceOracleWETH: getAddress(`../artifacts/${project}/addresses/PriceOracleWETH.address.js`),
    PriceOracleWBTC: getAddress(`../artifacts/${project}/addresses/PriceOracleWBTC.address.js`),
    PriceOracleUSDC: getAddress(`../artifacts/${project}/addresses/PriceOracleUSDC.address.js`),
    PriceOracleAAVE: getAddress(`../artifacts/${project}/addresses/PriceOracleAAVE.address.js`),
    PriceOracleLINK: getAddress(`../artifacts/${project}/addresses/PriceOracleLINK.address.js`),

    // tokens
    DAI: getAddress(`../artifacts/${project}/addresses/DAI.address.js`),
    USDC: getAddress(`../artifacts/${project}/addresses/USDC.address.js`),
    WBTC: getAddress(`../artifacts/${project}/addresses/WBTC.address.js`),
    WETH9: getAddress(`../artifacts/${project}/addresses/WETH9.address.js`),
    AAVE: getAddress(`../artifacts/${project}/addresses/AAVE.address.js`),
    LINK: getAddress(`../artifacts/${project}/addresses/LINK.address.js`),
    xMPL: getAddress(`../artifacts/${project}/addresses/xMPL.address.js`),

    // manifest
    manifest: require(`../artifacts/${project}/manifest.json`)
  }
  return addresses
}

const ordered = (unordered) =>
  Object.keys(unordered)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unordered[key]
      return obj
    }, {})

try {
  console.log(ordered(build(process.argv[2])))
} catch (err) {
  console.log(err)
}
