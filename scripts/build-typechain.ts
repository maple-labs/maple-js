// Loops through all version of all modules defined in `contract-packages` in ./config.json to determine which contracts in node_modules to run typechain against, with specific one-to-one outputs in the ./src/typechain directory.
// Note: if this cannot be done in js, then perhaps as a `./bin/build-typechain.sh` instead.
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const typechain = require('typechain');

const getConfig = require('./getConfig');

interface VersionedContract {
  repo: string;
  alias: string[];
  versions: string[];
}

enum ContractAlias {
  debtLockerV1 = 'debtLockerV1',
  debtLockerV2 = 'debtLockerV2',
  LoanV1 = 'LoanV1',
  LoanV2 = 'LoanV2',
}
interface ContractsConfig {
  contractPackages: Record<ContractAlias, VersionedContract>;
}

const artifactsOutputDir = path.join(__dirname, '../src/typechain');

const installPackages = async (config: ContractsConfig) => {
  for (const key in config.contractPackages) {
    const { repo, versions, alias }: VersionedContract = config.contractPackages[key as ContractAlias];
    for (let i = 0; i < versions.length; i++) {
      await shell.exec(`yarn add --dev @maplelabs/${alias[i]}@npm:${repo}@${versions[i]}`);
    }
  }
};

const generateTypechainBindings = async (config: ContractsConfig) => {
  const cwd = process.cwd();
  const aliases = [];
  for (const key in config.contractPackages) {
    aliases.push(...config.contractPackages[key as ContractAlias].alias);
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
  const config: ContractsConfig = getConfig();
  await installPackages(config);
  await generateTypechainBindings(config);
}

buildTypechain()
  .then(() => console.log('buildTypechain:done'))
  .catch((e) => {
    console.error('buildTypechain', e);
  });
