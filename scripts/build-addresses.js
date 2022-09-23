/**
  You need to copy the artifacts bundle that is generated from maple-deploy
  and ensure that all addresses have been updated or added accurately.
 */

const build = (project = 'mainnet') => {
  const addresses = {
    manifest: require(`../artifacts/${project}/manifest.json`),
    // Pool v1 Factories
    CollateralLockerFactory: require(`../artifacts/${project}/addresses/CollateralLockerFactory.address.js`),
    FundingLockerFactory: require(`../artifacts/${project}/addresses/FundingLockerFactory.address.js`),
    LiquidityLockerFactory: require(`../artifacts/${project}/addresses/LiquidityLockerFactory.address.js`),
    PoolFactory: require(`../artifacts/${project}/addresses/PoolFactory.address.js`),
    StakeLockerFactory: require(`../artifacts/${project}/addresses/StakeLockerFactory.address.js`),

    // Pool v2 Factories
    LoanManagerFactory: require(`../artifacts/${project}/addresses/LoanManagerFactory.address.js`),
    PoolDeployer: require(`../artifacts/${project}/addresses/PoolDeployer.address.js`),
    PoolManagerFactory: require(`../artifacts/${project}/addresses/PoolManagerFactory.address.js`),
    WithdrawalManagerFactory: require(`../artifacts/${project}/addresses/WithdrawalManagerFactory.address.js`),

    // Pool v2 implementation contracts
    LoanManager: require(`../artifacts/${project}/addresses/LoanManager.address.js`),
    PoolManager: require(`../artifacts/${project}/addresses/PoolManager.address.js`),
    WithdrawalManager: require(`../artifacts/${project}/addresses/WithdrawalManager.address.js`),

    // Loan v4 fixed contracts
    FeeManager: require(`../artifacts/${project}/addresses/FeeManager.address.js`),

    // DebtLocker Factories
    DebtLockerFactory: require(`../artifacts/${project}/addresses/DebtLockerFactory.address.js`),
    DebtLockerV2Factory: require(`../artifacts/${project}/addresses/DebtLockerV2Factory.address.js`),

    // Loan Factories
    LoanFactory: require(`../artifacts/${project}/addresses/LoanFactory.address.js`),
    LoanV2Factory: require(`../artifacts/${project}/addresses/LoanV2Factory.address.js`),

    // Rewards Factory
    MplRewardsFactory: require(`../artifacts/${project}/addresses/MplRewardsFactory.address.js`),

    // Loan & DebtLocker Implementation
    LoanV2: require(`../artifacts/${project}/addresses/LoanV2.address.js`),
    LoanV3: require(`../artifacts/${project}/addresses/LoanV3.address.js`),
    LoanV4: require(`../artifacts/${project}/addresses/LoanV4.address.js`),
    DebtLockerV2: require(`../artifacts/${project}/addresses/DebtLockerV2.address.js`),
    DebtLockerV3: require(`../artifacts/${project}/addresses/DebtLockerV3.address.js`),

    // Initializers
    DebtLockerV2Initializer: require(`../artifacts/${project}/addresses/DebtLockerV2Initializer.address.js`),
    DebtLockerV3Initializer: require(`../artifacts/${project}/addresses/DebtLockerV3Initializer.address.js`),
    LoanV2Initializer: require(`../artifacts/${project}/addresses/LoanV2Initializer.address.js`),
    LoanV3Initializer: require(`../artifacts/${project}/addresses/LoanV3Initializer.address.js`),
    LoanV4Initializer: require(`../artifacts/${project}/addresses/LoanV4Initializer.address.js`),
    LoanV2Refinancer: require(`../artifacts/${project}/addresses/LoanV2Refinancer.address.js`),
    LoanV3Refinancer: require(`../artifacts/${project}/addresses/LoanV3Refinancer.address.js`),
    LoanManagerInitializer: require(`../artifacts/${project}/addresses/LoanManagerInitializer.address.js`),
    PoolManagerInitializer: require(`../artifacts/${project}/addresses/PoolManagerInitializer.address.js`),
    WithdrawalManagerInitializer: require(`../artifacts/${project}/addresses/WithdrawalManagerInitializer.address.js`),

    // DAO
    MapleGlobals: require(`../artifacts/${project}/addresses/MapleGlobals.address.js`),
    MapleGlobalsV2: require(`../artifacts/${project}/addresses/MapleGlobalsV2.address.js`),
    MapleToken: require(`../artifacts/${project}/addresses/MapleToken.address.js`),
    MapleTreasury: require(`../artifacts/${project}/addresses/MapleTreasury.address.js`),
    NonTransparentProxy: require(`../artifacts/${project}/addresses/NonTransparentProxy.address.js`),

    // Loan v1 Calculators
    LateFeeCalc: require(`../artifacts/${project}/addresses/LateFeeCalc.address.js`),
    PremiumCalc: require(`../artifacts/${project}/addresses/PremiumCalc.address.js`),
    RepaymentCalc: require(`../artifacts/${project}/addresses/RepaymentCalc.address.js`),

    // Libraries
    LoanLib: require(`../artifacts/${project}/addresses/LoanLib.address.js`),
    PoolLib: require(`../artifacts/${project}/addresses/PoolLib.address.js`),
    Util: require(`../artifacts/${project}/addresses/Util.address.js`),

    // external
    BFactory: require(`../artifacts/${project}/addresses/BFactory.address.js`),
    BPool: require(`../artifacts/${project}/addresses/BPool.address.js`),
    BPoolWETH: require(`../artifacts/${project}/addresses/BPoolWETH.address.js`),
    UniswapV2Router02: require(`../artifacts/${project}/addresses/UniswapV2Router02.address.js`),

    // oracles
    PriceOracleWETH: require(`../artifacts/${project}/addresses/PriceOracleWETH.address.js`),
    PriceOracleWBTC: require(`../artifacts/${project}/addresses/PriceOracleWBTC.address.js`),
    PriceOracleUSDC: require(`../artifacts/${project}/addresses/PriceOracleUSDC.address.js`),
    PriceOracleAAVE: require(`../artifacts/${project}/addresses/PriceOracleAAVE.address.js`),
    PriceOracleLINK: require(`../artifacts/${project}/addresses/PriceOracleLINK.address.js`),

    // tokens
    DAI: require(`../artifacts/${project}/addresses/DAI.address.js`),
    USDC: require(`../artifacts/${project}/addresses/USDC.address.js`),
    WBTC: require(`../artifacts/${project}/addresses/WBTC.address.js`),
    WETH9: require(`../artifacts/${project}/addresses/WETH9.address.js`),
    AAVE: require(`../artifacts/${project}/addresses/AAVE.address.js`),
    LINK: require(`../artifacts/${project}/addresses/LINK.address.js`),
    xMPL: require(`../artifacts/${project}/addresses/xMPL.address.js`)
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
