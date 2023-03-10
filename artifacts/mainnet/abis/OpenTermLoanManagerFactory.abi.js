module.exports = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "globals_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "name": "DefaultVersionSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementationAddress_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "initializer_",
        "type": "address"
      }
    ],
    "name": "ImplementationRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "instance_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "initializationArguments_",
        "type": "bytes"
      }
    ],
    "name": "InstanceDeployed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "instance_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromVersion_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "migrationArguments_",
        "type": "bytes"
      }
    ],
    "name": "InstanceUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "mapleGlobals_",
        "type": "address"
      }
    ],
    "name": "MapleGlobalsSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromVersion_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      }
    ],
    "name": "UpgradePathDisabled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fromVersion_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "migrator_",
        "type": "address"
      }
    ],
    "name": "UpgradePathEnabled",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      },
      {
        "internalType": "bytes32",
        "name": "salt_",
        "type": "bytes32"
      }
    ],
    "name": "createInstance",
    "outputs": [
      {
        "internalType": "address",
        "name": "instance_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultImplementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "defaultImplementation_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultVersion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fromVersion_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      }
    ],
    "name": "disableUpgradePath",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "fromVersion_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "migrator_",
        "type": "address"
      }
    ],
    "name": "enableUpgradePath",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      },
      {
        "internalType": "bytes32",
        "name": "salt_",
        "type": "bytes32"
      }
    ],
    "name": "getInstanceAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "instanceAddress_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "name": "implementationOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "implementation_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isInstance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mapleGlobals",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "oldVersion_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newVersion_",
        "type": "uint256"
      }
    ],
    "name": "migratorForPath",
    "outputs": [
      {
        "internalType": "address",
        "name": "migrator_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "implementationAddress_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "initializer_",
        "type": "address"
      }
    ],
    "name": "registerImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "name": "setDefaultVersion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "mapleGlobals_",
        "type": "address"
      }
    ],
    "name": "setGlobals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "upgradeEnabledForPath",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "upgradeInstance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation_",
        "type": "address"
      }
    ],
    "name": "versionOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];