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
    "stateMutability": "nonpayable",
    "type": "fallback"
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
  }
];