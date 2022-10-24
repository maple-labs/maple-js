module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "configId_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "initialCycleId_",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "initialCycleTime_",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "cycleDuration_",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "windowDuration_",
        "type": "uint64"
      }
    ],
    "name": "ConfigurationUpdated",
    "type": "event"
  },
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account_",
        "type": "address"
      }
    ],
    "name": "WithdrawalCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sharesToRedeem_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetsToWithdraw_",
        "type": "uint256"
      }
    ],
    "name": "WithdrawalProcessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lockedShares_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "windowStart_",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "windowEnd_",
        "type": "uint64"
      }
    ],
    "name": "WithdrawalUpdated",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cycleId_",
        "type": "uint256"
      }
    ],
    "name": "getConfigAtId",
    "outputs": [
      {
        "components": [
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
        "internalType": "struct IWithdrawalManagerStorage.CycleConfig",
        "name": "config_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentConfig",
    "outputs": [
      {
        "components": [
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
        "internalType": "struct IWithdrawalManagerStorage.CycleConfig",
        "name": "config_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentCycleId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "cycleId_",
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
        "name": "lockedShares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "getRedeemableAmounts",
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
      },
      {
        "internalType": "bool",
        "name": "partialLiquidity_",
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
        "name": "cycleId_",
        "type": "uint256"
      }
    ],
    "name": "getWindowAtId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "windowStart_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "windowEnd_",
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
        "name": "cycleId_",
        "type": "uint256"
      }
    ],
    "name": "getWindowStart",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "windowStart_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globals",
    "outputs": [
      {
        "internalType": "address",
        "name": "globals_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "governor",
    "outputs": [
      {
        "internalType": "address",
        "name": "governor_",
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
    "name": "poolDelegate",
    "outputs": [
      {
        "internalType": "address",
        "name": "poolDelegate_",
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
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assets_",
        "type": "uint256"
      }
    ],
    "name": "previewWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "redeemableAssets_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "resultingShares_",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
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