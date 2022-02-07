// Loops through all version of all modules defined in `contract-packages` in ./config.json to determine which contracts in node_modules to run typechain against, with specific one-to-one outputs in the ./src/typechain directory.
// Note: if this cannot be done in js, then perhaps as a `./bin/build-typechain.sh` instead.
const path = require('path');
const shell = require('shelljs');
const typechain = require('typechain');
const path = require('path');
const fs = require('fs');

const artifactsOutputDir = path.join(__dirname, '../src/typechain');

const getParsedConfig = () => {
  const configPath = path.join(__dirname, '../config.json');
  const file = fs.readFileSync(configPath);
  return JSON.parse(file);
};

const installPackages = async (config) => {
  for (const key in config.contractPackages) {
    const { repo, versions, alias } = config.contractPackages[key];
    for (let i = 0; i < versions.length; i++) {
      await shell.exec(`yarn add --dev @maplelabs/${alias[i]}@npm:${repo}@${versions[i]}`);
    }
  }
};

const generateTypechainBindings = async (config) => {
  const cwd = process.cwd();
  const aliases = [];
  for (const key in config.contractPackages) {
    aliases.push(...config.contractPackages[key].alias);
  }

  // If doing without for loop then need => @(aliases.join('|'))/artifacts
  // But different versioned contracts with same name get overwritten

  for (let i = 0; i < aliases.length; i++) {
    const allFiles = typechain.glob(
      cwd,
      [`node_modules/@maplelabs/${aliases[i]}/artifacts/+([a-zA-Z0-9_]).json`],
      false
    );

    console.log(`${aliases[i]} contracts`, allFiles);
    await typechain.runTypeChain({
      cwd,
      filesToProcess: allFiles,
      allFiles,
      outDir: `${artifactsOutputDir}/${aliases[i]}`,
      target: 'ethers-v5',
    });
  }
};

async function buildTypechain() {
  const config = getParsedConfig();
  await installPackages(config);
  await generateTypechainBindings(config);
}

buildTypechain()
  .then(() => console.log('buildTypechain:done'))
  .catch((e) => {
    console.error('buildTypechain', e);
  });
