/**
  You need to copy the artifacts bundle that is generated from maple-deploy
  and ensure that all addresses have been updated or added accurately.
 */

const build = (project = 'mainnet') => {
  const addresses = {
    manifest: require(`../artifacts/${project}/manifest.json`),
    // Factories
    CollateralLockerFactory: require(`../artifacts/${project}/addresses/CollateralLockerFactory.address.js`),
    LiquidityLockerFactory: require(`../artifacts/${project}/addresses/LiquidityLockerFactory.address.js`),
    FundingLockerFactory: require(`../artifacts/${project}/addresses/FundingLockerFactory.address.js`),
    StakeLockerFactory: require(`../artifacts/${project}/addresses/StakeLockerFactory.address.js`),
    DebtLockerFactory: require(`../artifacts/${project}/addresses/DebtLockerFactory.address.js`),
    DebtLockerV2Factory: require(`../artifacts/${project}/addresses/DebtLockerV2Factory.address.js`),
    PoolFactory: require(`../artifacts/${project}/addresses/PoolFactory.address.js`),
    LoanFactory: require(`../artifacts/${project}/addresses/LoanFactory.address.js`),
    LoanV2Factory: require(`../artifacts/${project}/addresses/LoanV2Factory.address.js`),

    // Loans
    LoanV2: require(`../artifacts/${project}/addresses/LoanV2.address.js`),
    LoanV3: require(`../artifacts/${project}/addresses/LoanV3.address.js`),
    DebtLockerV2: require(`../artifacts/${project}/addresses/DebtLockerV2.address.js`),
    DebtLockerV3: require(`../artifacts/${project}/addresses/DebtLockerV3.address.js`),

    // Initializers
    DebtLockerV2Initializer: require(`../artifacts/${project}/addresses/DebtLockerV2Initializer.address.js`),
    DebtLockerV3Initializer: require(`../artifacts/${project}/addresses/DebtLockerV3Initializer.address.js`),
    LoanV2Initializer: require(`../artifacts/${project}/addresses/LoanV2Initializer.address.js`),
    LoanV3Initializer: require(`../artifacts/${project}/addresses/LoanV3Initializer.address.js`),
    LoanV2Refinancer: require(`../artifacts/${project}/addresses/LoanV2Refinancer.address.js`),
    LoanV3Refinancer: require(`../artifacts/${project}/addresses/LoanV3Refinancer.address.js`),

    // DAO
    MapleTreasury: require(`../artifacts/${project}/addresses/MapleTreasury.address.js`),
    MapleGlobals: require(`../artifacts/${project}/addresses/MapleGlobals.address.js`),
    MapleToken: require(`../artifacts/${project}/addresses/MapleToken.address.js`),

    // Calculators
    RepaymentCalc: require(`../artifacts/${project}/addresses/RepaymentCalc.address.js`),
    PremiumCalc: require(`../artifacts/${project}/addresses/PremiumCalc.address.js`),
    LateFeeCalc: require(`../artifacts/${project}/addresses/LateFeeCalc.address.js`),

    // Libraries
    Util: require(`../artifacts/${project}/addresses/Util.address.js`),
    PoolLib: require(`../artifacts/${project}/addresses/PoolLib.address.js`),
    LoanLib: require(`../artifacts/${project}/addresses/LoanLib.address.js`),

    // Rewards
    MplRewardsFactory: require(`../artifacts/${project}/addresses/MplRewardsFactory.address.js`),

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
    WETH9: require(`../artifacts/${project}/addresses/WETH9.address.js`),
    WBTC: require(`../artifacts/${project}/addresses/WBTC.address.js`),
    LINK: require(`../artifacts/${project}/addresses/LINK.address.js`),
    AAVE: require(`../artifacts/${project}/addresses/AAVE.address.js`),
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
