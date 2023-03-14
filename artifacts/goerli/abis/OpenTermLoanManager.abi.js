module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "issuanceRate_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint112",
        "name": "accountedInterest_",
        "type": "uint112"
      }
    ],
    "name": "AccountingStateUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "principal_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "netInterest_",
        "type": "uint256"
      }
    ],
    "name": "FundsDistributed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateManagementFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformManagementFee_",
        "type": "uint256"
      }
    ],
    "name": "ManagementFeesPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformManagementFeeRate_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateManagementFeeRate_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "paymentDueDate_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "issuanceRate_",
        "type": "uint256"
      }
    ],
    "name": "PaymentAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "PaymentRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "principalOut_",
        "type": "uint128"
      }
    ],
    "name": "PrincipalOutUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "unrealizedLosses_",
        "type": "uint128"
      }
    ],
    "name": "UnrealizedLossesUpdated",
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
    "inputs": [],
    "name": "HUNDRED_PERCENT",
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
    "name": "PRECISION",
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
    "inputs": [],
    "name": "accruedInterest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "accruedInterest_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "assetsUnderManagement",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assetsUnderManagement_",
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
        "name": "loan_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "principal_",
        "type": "uint256"
      }
    ],
    "name": "callPrincipal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "principal_",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "interest_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "delegateServiceFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "platformServiceFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint40",
        "name": "nextPaymentDueDate_",
        "type": "uint40"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "domainStart",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "",
        "type": "uint40"
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
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "fund",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "impairLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "impairmentFor",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "impairedDate",
        "type": "uint40"
      },
      {
        "internalType": "bool",
        "name": "impairedByGovernor",
        "type": "bool"
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
    "inputs": [],
    "name": "mapleTreasury",
    "outputs": [
      {
        "internalType": "address",
        "name": "treasury_",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "paymentFor",
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
        "internalType": "uint40",
        "name": "startDate",
        "type": "uint40"
      },
      {
        "internalType": "uint168",
        "name": "issuanceRate",
        "type": "uint168"
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
        "name": "pool_",
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
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "refinancer_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline_",
        "type": "uint256"
      },
      {
        "internalType": "bytes[]",
        "name": "calls_",
        "type": "bytes[]"
      }
    ],
    "name": "proposeNewTerms",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "removeCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "removeLoanImpairment",
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
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidatorFactory_",
        "type": "address"
      }
    ],
    "name": "triggerDefault",
    "outputs": [
      {
        "internalType": "bool",
        "name": "liquidationComplete_",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "remainingLosses_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "platformFees_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "triggerDefault",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "remainingLosses_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "platformFees_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
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