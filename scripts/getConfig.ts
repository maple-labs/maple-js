const path = require('path');
const fs = require('fs');

interface ContractsConfig {
  contractPackages: Record<ContractAlias, VersionedContract>;
}

const getParsedConfig = (): ContractsConfig => {
  const configPath = path.join(__dirname, '../config.json');
  const file = fs.readFileSync(configPath);
  return JSON.parse(file);
};

export default getParsedConfig;
