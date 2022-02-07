// Builds ./dist from ./src
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const getConfig = require('./getConfig');


interface ContractsConfig {
  contractPackages: Record<ContractAlias, VersionedContract>;
}


async function buildDistributable() {
  const config: ContractsConfig = getConfig();
  console.log("build-dist:getConfig", config);
}

buildDistributable()
  .then(() => console.log('buildDistributable:done'))
  .catch((e) => {
    console.error('buildDistributable', e);
  });
