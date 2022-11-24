module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "globals_",
        "type": "address"
      }
    ],
    "name": "GlobalsSet",
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
        "indexed": true,
        "internalType": "address",
        "name": "pendingLender_",
        "type": "address"
      }
    ],
    "name": "LenderAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "LoanAddedToTransitionLoanManager",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "name": "LoanManagerUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner_",
        "type": "address"
      }
    ],
    "name": "OwnershipAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "pendingAdmin_",
        "type": "address"
      }
    ],
    "name": "PendingAdminSet",
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
        "indexed": true,
        "internalType": "address",
        "name": "pendingLender_",
        "type": "address"
      }
    ],
    "name": "PendingLenderSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolV1_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolV2_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "lp1_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lp2_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "TokensAirdropped",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "transitionLoanManager_",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "loans_",
        "type": "address[]"
      }
    ],
    "name": "addLoansToLM",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "poolV1Address_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "lpsV1_",
        "type": "address[]"
      },
      {
        "internalType": "address[]",
        "name": "lpsV2_",
        "type": "address[]"
      }
    ],
    "name": "airdropTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globalsV2",
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
    "name": "pendingAdmin",
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
        "name": "globalsV2_",
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
        "internalType": "address",
        "name": "pendingAdmin_",
        "type": "address"
      }
    ],
    "name": "setPendingAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolV1_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "poolV2ManagerAddress_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "loanFactoryAddress_",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "loans_",
        "type": "address[]"
      }
    ],
    "name": "setPendingLenders",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "transitionLoanManager_",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "loans_",
        "type": "address[]"
      }
    ],
    "name": "takeOwnershipOfLoans",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "transitionLoanManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      }
    ],
    "name": "upgradeLoanManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];