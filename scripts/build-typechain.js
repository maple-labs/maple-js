// Loops through all version of all modules defined in `contract-packages` in ./config.json to determine which contracts in node_modules to run typechain against, with specific one-to-one outputs in the ./src/typechain directory.
// Note: if this cannot be done in js, then perhaps as a `./bin/build-typechain.sh` instead.
const path = require('path')
const typechain = require('typechain')
const { readFileSync, writeFileSync } = require('fs')

const artifactsOutputDir = path.join(__dirname, '../src/typechain')
const pathDir = path.join(__dirname, `../src/abis/`)

const getParsedConfig = () => {
  const configPath = path.join(__dirname, '../config.json')
  const file = readFileSync(configPath)
  return JSON.parse(file)
}

const generateTypechainBindings = async (config) => {
  const cwd = process.cwd()

  // Loop through each contract package in the config
  for (const packageName in config.contractPackages) {
    const contracts = config.contractPackages[packageName].contracts
    const fileNames = contracts.map((contractName) => `src/abis/${contractName}.abi.json`)

    const allFiles = typechain.glob(cwd, fileNames)

    // Generate TypeChain bindings for all found ABI files in the package at once
    await typechain.runTypeChain({
      cwd,
      filesToProcess: allFiles,
      allFiles,
      outDir: `${artifactsOutputDir}/${packageName}`,
      target: 'ethers-v5'
    })
  }
}

function mergeEvents({ src, dst }) {
  console.log(`🔀 Merging events from ${src} events into ${dst}`)
  const srcJson = JSON.parse(readFileSync(path.join(pathDir, `${src}`)).toString())
  const events = srcJson.filter((entry) => entry.type === 'event')
  const dstJson = JSON.parse(readFileSync(path.join(pathDir, `${dst}`)).toString())
  const eventIndexJson = dstJson.findIndex((el) => el.type !== 'event')

  dstJson.splice(eventIndexJson, 0, ...events)
  writeFileSync(path.join(pathDir, `${dst}`), JSON.stringify(dstJson, null, 2))
}

function overwriteEventParams({ alias, files, eventName, inputs }) {
  for (const src of files) {
    console.log(`✏️ Overwriting event params for ${eventName} in ${src}`)
    const filePath = path.join(pathDir, `${alias}/abis/${src}.json`)
    const json = JSON.parse(readFileSync(filePath).toString())
    const eventIndex = json.findIndex((el) => el.type === 'event' && el.name === eventName)
    json[eventIndex].inputs = inputs
    writeFileSync(filePath, JSON.stringify(json, null, 2))
  }
}

async function buildTypechain() {
  console.log('⏳ Building Typechain...')
  const config = getParsedConfig()

  console.log({ config })
  // These manual changes patch the npm packages in node-modules which need to be copied over into the abis directory
  mergeEvents({ src: 'LoanV3Refinancer.abi.json', dst: 'LoanV3.abi.json' })
  mergeEvents({ src: 'LoanV301Refinancer.abi.json', dst: 'LoanV301.abi.json' })
  mergeEvents({ src: 'LoanV302Refinancer.abi.json', dst: 'LoanV302.abi.json' })
  mergeEvents({ src: 'LoanV401Refinancer.abi.json', dst: 'LoanV401.abi.json' })
  mergeEvents({ src: 'LoanV4Refinancer.abi.json', dst: 'LoanV4.abi.json' })
  mergeEvents({ src: 'OpenTermLoanRefinancer.abi.json', dst: 'OpenTermLoan.abi.json' })
  mergeEvents({ src: 'FixedTermLoanRefinancer.abi.json', dst: 'FixedTermLoan.abi.json' })
  mergeEvents({ src: 'PoolV2PoolManagerInitializer.abi.json', dst: 'PoolV2PoolManager.abi.json' })
  mergeEvents({ src: 'PoolV201PoolManagerInitializer.abi.json', dst: 'PoolV201PoolManager.abi.json' })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'LossesRecognized',
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: 'address',
  //       name: 'by',
  //       type: 'address'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'lossesRecognized',
  //       type: 'uint256'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'totalLossesRecognized',
  //       type: 'uint256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'stakeLocker',
  //   files: ['StakeLocker'],
  //   eventName: 'LossesRecognized',
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: 'address',
  //       name: 'by',
  //       type: 'address'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'lossesRecognized',
  //       type: 'uint256'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'totalLossesRecognized',
  //       type: 'uint256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'LossesCorrectionUpdated',
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: 'address',
  //       name: 'account',
  //       type: 'address'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'int256',
  //       name: 'lossesCorrection',
  //       type: 'int256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'LossesDistributed',
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: 'address',
  //       name: 'by',
  //       type: 'address'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'lossesDistributed',
  //       type: 'uint256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'LossesPerShareUpdated',
  //   inputs: [
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'lossesPerShare',
  //       type: 'uint256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'PointsCorrectionUpdated',
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: 'address',
  //       name: 'account',
  //       type: 'address'
  //     },
  //     {
  //       indexed: false,
  //       internalType: 'int256',
  //       name: 'pointsCorrection',
  //       type: 'int256'
  //     }
  //   ]
  // })
  // overwriteEventParams({
  //   alias: 'poolV1',
  //   files: ['Pool'],
  //   eventName: 'PointsPerShareUpdated',
  //   inputs: [
  //     {
  //       indexed: false,
  //       internalType: 'uint256',
  //       name: 'pointsPerShare',
  //       type: 'uint256'
  //     }
  //   ]
  // })
  await generateTypechainBindings(config)
}

buildTypechain()
  .then(() => console.log('✅  Built Typechain'))
  .catch((e) => {
    console.error('❌ Typechain build failed!', e)
  })
