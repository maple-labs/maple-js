/**
  You need to copy the artifacts bundle that is generated from maple-deploy
  and ensure that all addresses have been updated or added accurately.
 */

const build = (network = 'mainnet') => {
  const addresses = {
    manifest: require(`../artifacts/${network}/manifest.json`),
    // Factories
    CollateralLockerFactory: require(`../artifacts/${network}/addresses/CollateralLockerFactory.address.js`),
    LiquidityLockerFactory: require(`../artifacts/${network}/addresses/LiquidityLockerFactory.address.js`),
    FundingLockerFactory: require(`../artifacts/${network}/addresses/FundingLockerFactory.address.js`),
    StakeLockerFactory: require(`../artifacts/${network}/addresses/StakeLockerFactory.address.js`),
    DebtLockerFactory: require(`../artifacts/${network}/addresses/DebtLockerFactory.address.js`),
    DebtLockerV2Factory: require(`../artifacts/${network}/addresses/DebtLockerV2Factory.address.js`),
    PoolFactory: require(`../artifacts/${network}/addresses/PoolFactory.address.js`),
    LoanFactory: require(`../artifacts/${network}/addresses/LoanFactory.address.js`),
    LoanV2Factory: require(`../artifacts/${network}/addresses/LoanV2Factory.address.js`),

    // Loans
    LoanV2: require(`../artifacts/${network}/addresses/LoanV2.address.js`),
    LoanV3: require(`../artifacts/${network}/addresses/LoanV3.address.js`),
    DebtLockerV2: require(`../artifacts/${network}/addresses/DebtLockerV2.address.js`),
    DebtLockerV3: require(`../artifacts/${network}/addresses/DebtLockerV3.address.js`),

    // Initializers
    DebtLockerV2Initializer: require(`../artifacts/${network}/addresses/DebtLockerV2Initializer.address.js`),
    DebtLockerV3Initializer: require(`../artifacts/${network}/addresses/DebtLockerV3Initializer.address.js`),
    LoanV2Initializer: require(`../artifacts/${network}/addresses/LoanV2Initializer.address.js`),
    LoanV3Initializer: require(`../artifacts/${network}/addresses/LoanV3Initializer.address.js`),
    LoanV2Refinancer: require(`../artifacts/${network}/addresses/LoanV2Refinancer.address.js`),
    LoanV3Refinancer: require(`../artifacts/${network}/addresses/LoanV3Refinancer.address.js`),

    // DAO
    MapleTreasury: require(`../artifacts/${network}/addresses/MapleTreasury.address.js`),
    MapleGlobals: require(`../artifacts/${network}/addresses/MapleGlobals.address.js`),
    MapleToken: require(`../artifacts/${network}/addresses/MapleToken.address.js`),

    // Calculators
    RepaymentCalc: require(`../artifacts/${network}/addresses/RepaymentCalc.address.js`),
    PremiumCalc: require(`../artifacts/${network}/addresses/PremiumCalc.address.js`),
    LateFeeCalc: require(`../artifacts/${network}/addresses/LateFeeCalc.address.js`),

    // Libraries
    Util: require(`../artifacts/${network}/addresses/Util.address.js`),
    PoolLib: require(`../artifacts/${network}/addresses/PoolLib.address.js`),
    LoanLib: require(`../artifacts/${network}/addresses/LoanLib.address.js`),

    // Rewards
    MplRewardsFactory: require(`../artifacts/${network}/addresses/MplRewardsFactory.address.js`),

    // external
    BFactory: require(`../artifacts/${network}/addresses/BFactory.address.js`),
    BPool: require(`../artifacts/${network}/addresses/BPool.address.js`),
    BPoolWETH: require(`../artifacts/${network}/addresses/BPoolWETH.address.js`),
    UniswapV2Router02: require(`../artifacts/${network}/addresses/UniswapV2Router02.address.js`),

    // oracles
    PriceOracleWETH: require(`../artifacts/${network}/addresses/PriceOracleWETH.address.js`),
    PriceOracleWBTC: require(`../artifacts/${network}/addresses/PriceOracleWBTC.address.js`),
    PriceOracleUSDC: require(`../artifacts/${network}/addresses/PriceOracleUSDC.address.js`),
    PriceOracleAAVE: require(`../artifacts/${network}/addresses/PriceOracleAAVE.address.js`),
    PriceOracleLINK: require(`../artifacts/${network}/addresses/PriceOracleLINK.address.js`),

    // tokens
    DAI: require(`../artifacts/${network}/addresses/DAI.address.js`),
    USDC: require(`../artifacts/${network}/addresses/USDC.address.js`),
    WETH: require(`../artifacts/${network}/addresses/WETH9.address.js`),
    WBTC: require(`../artifacts/${network}/addresses/WBTC.address.js`),
    LINK: require(`../artifacts/${network}/addresses/LINK.address.js`),
    AAVE: require(`../artifacts/${network}/addresses/AAVE.address.js`),
    xMPL: require(`../artifacts/${network}/addresses/xMPL.address.js`)
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
