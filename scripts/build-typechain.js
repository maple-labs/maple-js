// Loops through all version of all modules defined in `contract-packages` in ./config.json to determine which contracts in node_modules to run typechain against, with specific one-to-one outputs in the ./src/typechain directory.
// Note: if this cannot be done in js, then perhaps as a `./bin/build-typechain.sh` instead.
const path = require('path')
const typechain = require('typechain')
const { readFileSync } = require('fs')

const artifactsOutputDir = path.join(__dirname, '../src/typechain')

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

async function buildTypechain() {
  console.log('⏳ Building Typechain...')
  const config = getParsedConfig()
  await generateTypechainBindings(config)
}

buildTypechain()
  .then(() => console.log('✅  Built Typechain'))
  .catch((e) => {
    console.error('❌ Typechain build failed!', e)
  })
