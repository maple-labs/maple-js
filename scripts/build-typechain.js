// Loops through all version of all modules defined in `contract-packages` in ./config.json to determine which contracts in node_modules to run typechain against, with specific one-to-one outputs in the ./src/typechain directory.
// Note: if this cannot be done in js, then perhaps as a `./bin/build-typechain.sh` instead.
const path = require('path')
const typechain = require('typechain')
const { readFileSync, writeFileSync } = require('fs')

const artifactsOutputDir = path.join(__dirname, '../src/typechain')
const pathDir = path.join(__dirname, `../node_modules/@maplelabs/`)

const getParsedConfig = () => {
  const configPath = path.join(__dirname, '../config.json')
  const file = readFileSync(configPath)
  return JSON.parse(file)
}

const generateTypechainBindings = async (config) => {
  const cwd = process.cwd()
  const aliases = []
  for (const key in config.contractPackages) {
    aliases.push(...config.contractPackages[key].alias)
  }

  for (let i = 0; i < aliases.length; i++) {
    const allFiles = typechain.glob(
      cwd,
      [`node_modules/@maplelabs/${aliases[i]}/artifacts/+([a-zA-Z0-9_]).json`],
      false
    )

    console.log(`${aliases[i]} contracts`, allFiles)
    await typechain.runTypeChain({
      cwd,
      filesToProcess: allFiles,
      allFiles,
      outDir: `${artifactsOutputDir}/${aliases[i]}`,
      target: 'ethers-v5'
    })
  }
}

function mergeEvents({ src, dst, srcOutput }) {
  console.log(`🔀 Merging events from ${src} events into ${dst}`)
  const srcJson = JSON.parse(readFileSync(path.join(pathDir, `${src}`)).toString())
  const events = srcJson.filter((entry) => entry.type === 'event')
  const dstJson = JSON.parse(readFileSync(path.join(pathDir, `${dst}`)).toString())
  const eventIndexJson = dstJson.findIndex((el) => el.type !== 'event')
  dstJson.splice(eventIndexJson, 0, ...events)
  const updatedAbi = JSON.stringify(dstJson, null, 2)
  // Write abi with merged events into node_modules
  const nodeModulesPath = path.join(pathDir, `${dst}`)
  writeFileSync(nodeModulesPath, updatedAbi)
  // Write new abi with merged events into src/abis
  const srcAbisPath = path.join(__dirname, `../src/abis/${srcOutput}`)
  writeFileSync(srcAbisPath, updatedAbi)
}

function overwriteEventParams({ files, eventName, inputs }) {
  for (const src of files) {
    console.log(`✏️ Overwriting event params for ${eventName} in ${src}`)
    const filePath = path.join(pathDir, `${src.toLowerCase()}/abis/${src}.json`)
    const json = JSON.parse(readFileSync(filePath).toString())
    const eventIndex = json.findIndex((el) => el.type === 'event' && el.name === eventName)
    json[eventIndex].inputs = inputs
    writeFileSync(filePath, JSON.stringify(json, null, 2))
  }
}

async function buildTypechain() {
  console.log('⏳ Building Typechain...')
  const config = getParsedConfig()
  // These manual changes augment the npm packages. src/abis/ contains the updates already.
  mergeEvents({ src: 'loanV4/abis/Refinancer.json', dst: 'loanV4/abis/MapleLoan.json', srcOutput: 'LoanV4.abi.json' })
  mergeEvents({ src: 'loanV301/abis/Refinancer.json', dst: 'loanV301/abis/MapleLoan.json', srcOutput: 'LoanV301.abi.json' })
  mergeEvents({ src: 'loanV3/abis/Refinancer.json', dst: 'loanV3/abis/MapleLoan.json', srcOutput: 'LoanV3.abi.json' })
  mergeEvents({ src: 'poolV2/abis/PoolManagerInitializer.json', dst: 'poolV2/abis/PoolManager.json', srcOutput: 'PoolManager.abi.json' })
  overwriteEventParams({
    files: ['Pool', 'StakeLocker'],
    eventName: 'LossesRecognized',
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lossesRecognized',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalLossesRecognized',
        type: 'uint256'
      }
    ]
  })
  overwriteEventParams({
    files: ['Pool'],
    eventName: 'LossesCorrectionUpdated',
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'lossesCorrection',
        type: 'int256'
      }
    ]
  })
  overwriteEventParams({
    files: ['Pool'],
    eventName: 'LossesDistributed',
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'by',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lossesDistributed',
        type: 'uint256'
      }
    ]
  })
  overwriteEventParams({
    files: ['Pool'],
    eventName: 'LossesPerShareUpdated',
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lossesPerShare',
        type: 'uint256'
      }
    ]
  })
  overwriteEventParams({
    files: ['Pool'],
    eventName: 'PointsCorrectionUpdated',
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'pointsCorrection',
        type: 'int256'
      }
    ]
  })
  overwriteEventParams({
    files: ['Pool'],
    eventName: 'PointsPerShareUpdated',
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pointsPerShare',
        type: 'uint256'
      }
    ]
  })
  await generateTypechainBindings(config)
}

buildTypechain()
  .then(() => console.log('✅  Built Typechain'))
  .catch((e) => {
    console.error('❌ Typechain build failed!', e)
  })
