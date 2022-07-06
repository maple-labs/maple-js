// const path = require('path');
const path = require('path')
/**
  You need to copy the artifacts bundle that is generated from maple-deploy
  and ensure that all addresses have been updated or added accurately.
 */

const buildAddresses = (network = 'mainnet', customPath) => {
  if (customPath) {
    console.log('buildAddresses', {
      network,
      customPath,
      dirname: __dirname,
      resolvedPath: path.resolve(__dirname),
      joinedPath: path.join(__dirname, customPath),
      cwd: process.cwd()
    })
  }

  let thePath = `../artifacts/${network}`

  if (network === 'localhost' && customPath) {
    thePath = customPath
  }

  const addresses = {
    manifest: require(`${thePath}/manifest.json`),
    // Factories
    CollateralLockerFactory: require(`${thePath}/addresses/CollateralLockerFactory.address.js`),
    LiquidityLockerFactory: require(`${thePath}/addresses/LiquidityLockerFactory.address.js`),
    FundingLockerFactory: require(`${thePath}/addresses/FundingLockerFactory.address.js`),
    StakeLockerFactory: require(`${thePath}/addresses/StakeLockerFactory.address.js`),
    DebtLockerFactory: require(`${thePath}/addresses/DebtLockerFactory.address.js`),
    DebtLockerV2Factory: require(`${thePath}/addresses/DebtLockerV2Factory.address.js`),
    PoolFactory: require(`${thePath}/addresses/PoolFactory.address.js`),
    LoanFactory: require(`${thePath}/addresses/LoanFactory.address.js`),
    LoanV2Factory: require(`${thePath}/addresses/LoanV2Factory.address.js`),

    // Initializers
    DebtLockerV2Initializer: require(`${thePath}/addresses/DebtLockerV2Initializer.address.js`),
    LoanV2Initializer: require(`${thePath}/addresses/LoanV2Initializer.address.js`),
    LoanV2Refinancer: require(`${thePath}/addresses/LoanV2Refinancer.address.js`),
    // DAO
    MapleTreasury: require(`${thePath}/addresses/MapleTreasury.address.js`),
    MapleGlobals: require(`${thePath}/addresses/MapleGlobals.address.js`),
    MapleToken: require(`${thePath}/addresses/MapleToken.address.js`),

    // Calculators
    RepaymentCalc: require(`${thePath}/addresses/RepaymentCalc.address.js`),
    PremiumCalc: require(`${thePath}/addresses/PremiumCalc.address.js`),
    LateFeeCalc: require(`${thePath}/addresses/LateFeeCalc.address.js`),

    // Libraries
    Util: require(`${thePath}/addresses/Util.address.js`),
    PoolLib: require(`${thePath}/addresses/PoolLib.address.js`),
    LoanLib: require(`${thePath}/addresses/LoanLib.address.js`),

    // Rewards
    MplRewardsFactory: require(`${thePath}/addresses/MplRewardsFactory.address.js`),

    // external
    BFactory: require(`${thePath}/addresses/BFactory.address.js`),
    BPool: require(`${thePath}/addresses/BPool.address.js`),
    BPoolWETH: require(`${thePath}/addresses/BPoolWETH.address.js`),
    UniswapV2Router02: require(`${thePath}/addresses/UniswapV2Router02.address.js`),

    // oracles
    PriceOracleWETH: require(`${thePath}/addresses/PriceOracleWETH.address.js`),
    PriceOracleWBTC: require(`${thePath}/addresses/PriceOracleWBTC.address.js`),
    PriceOracleUSDC: require(`${thePath}/addresses/PriceOracleUSDC.address.js`),
    PriceOracleAAVE: require(`${thePath}/addresses/PriceOracleAAVE.address.js`),
    PriceOracleLINK: require(`${thePath}/addresses/PriceOracleLINK.address.js`),

    // tokens
    DAI: require(`${thePath}/addresses/DAI.address.js`),
    USDC: require(`${thePath}/addresses/USDC.address.js`),
    WETH: require(`${thePath}/addresses/WETH9.address.js`),
    WBTC: require(`${thePath}/addresses/WBTC.address.js`),
    LINK: require(`${thePath}/addresses/LINK.address.js`),
    AAVE: require(`${thePath}/addresses/AAVE.address.js`),
    xMPL: require(`${thePath}/addresses/xMPL.address.js`)
  }

  // if (network === 'localhost') {
  //   addresses.DebtLockerV2 = require(`../artifacts/${network}/addresses/DebtLockerV2.address.js`)
  //   addresses.DebtLockerV2Initializer = require(`../artifacts/${network}/addresses/DebtLockerV2Initializer.address.js`)
  //   addresses.DebtLockerV3 = require(`../artifacts/${network}/addresses/DebtLockerV3.address.js`)
  //   addresses.DebtLockerV3Initializer = require(`../artifacts/${network}/addresses/DebtLockerV3Initializer.address.js`)
  //   addresses.LoanV3 = require(`../artifacts/${network}/addresses/LoanV3.address.js`)
  //   addresses.LoanV3Initializer = require(`../artifacts/${network}/addresses/LoanV3Initializer.address.js`)
  // }

  return addresses
}

// const ordered = (unordered) =>
//   Object.keys(unordered)
//     .sort()
//     .reduce((obj, key) => {
//       obj[key] = unordered[key]
//       return obj
//     }, {})

// try {
//   console.log(ordered(buildAddresses(process.argv[2])))
// } catch (err) {
//   console.log(err)
// }

module.exports = {
  buildAddresses
}
