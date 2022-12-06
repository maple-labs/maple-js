module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "accountedInterest",
    "outputs": [
      {
        "internalType": "uint112",
        "name": "",
        "type": "uint112"
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
    "name": "allowedSlippageFor",
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
        "internalType": "bytes",
        "name": "calldata_",
        "type": "bytes"
      }
    ],
    "name": "decodeArguments",
    "outputs": [
      {
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "domainEnd",
    "outputs": [
      {
        "internalType": "uint48",
        "name": "",
        "type": "uint48"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "domainStart",
    "outputs": [
      {
        "internalType": "uint48",
        "name": "",
        "type": "uint48"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "name": "encodeArguments",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "calldata_",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fundsAsset",
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
    "name": "issuanceRate",
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
    "name": "liquidationInfo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "triggeredByGovernor",
        "type": "bool"
      },
      {
        "internalType": "uint128",
        "name": "principal",
        "type": "uint128"
      },
      {
        "internalType": "uint120",
        "name": "interest",
        "type": "uint120"
      },
      {
        "internalType": "uint256",
        "name": "lateInterest",
        "type": "uint256"
      },
      {
        "internalType": "uint96",
        "name": "platformFees",
        "type": "uint96"
      },
      {
        "internalType": "address",
        "name": "liquidator",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "loanTransferAdmin",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "minRatioFor",
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
    "name": "paymentCounter",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "",
        "type": "uint24"
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
    "name": "paymentIdOf",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "",
        "type": "uint24"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paymentWithEarliestDueDate",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "",
        "type": "uint24"
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
    "name": "payments",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "platformManagementFeeRate",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "delegateManagementFeeRate",
        "type": "uint24"
      },
      {
        "internalType": "uint48",
        "name": "startDate",
        "type": "uint48"
      },
      {
        "internalType": "uint48",
        "name": "paymentDueDate",
        "type": "uint48"
      },
      {
        "internalType": "uint128",
        "name": "incomingNetInterest",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "refinanceInterest",
        "type": "uint128"
      },
      {
        "internalType": "uint256",
        "name": "issuanceRate",
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
    "inputs": [],
    "name": "principalOut",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
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
    "name": "sortedPayments",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "previous",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "next",
        "type": "uint24"
      },
      {
        "internalType": "uint48",
        "name": "paymentDueDate",
        "type": "uint48"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unrealizedLosses",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];