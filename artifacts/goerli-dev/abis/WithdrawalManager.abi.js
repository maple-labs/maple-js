module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "addShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "admin_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "asset",
    "outputs": [
      {
        "internalType": "address",
        "name": "asset_",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "cycleConfigs",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "initialCycleId",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "initialCycleTime",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "cycleDuration",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "windowDuration",
        "type": "uint64"
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
    "name": "exitCycleId",
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
    "inputs": [],
    "name": "factory",
    "outputs": [
      {
        "internalType": "address",
        "name": "factory_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "implementation",
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
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "isInExitWindow",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isInExitWindow_",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "latestConfigId",
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
    "inputs": [],
    "name": "lockedLiquidity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "lockedLiquidity_",
        "type": "uint256"
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
    "name": "lockedShares",
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
        "internalType": "address",
        "name": "migrator_",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "migrate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pool",
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
    "inputs": [],
    "name": "poolManager",
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
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "name": "previewRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "requestedShares_",
        "type": "uint256"
      }
    ],
    "name": "processExit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "removeShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "sharesReturned_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cycleDuration_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "windowDuration_",
        "type": "uint256"
      }
    ],
    "name": "setExitConfig",
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
    "name": "setImplementation",
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
      }
    ],
    "name": "totalCycleShares",
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
        "name": "version_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "upgrade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];