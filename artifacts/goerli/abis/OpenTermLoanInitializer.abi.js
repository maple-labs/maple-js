module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower_",
        "type": "address"
      }
    ],
    "name": "BorrowerAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "CallRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "Funded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "Impaired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "ImpairmentRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "fundsAsset_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32[3]",
        "name": "termDetails_",
        "type": "uint32[3]"
      },
      {
        "indexed": false,
        "internalType": "uint64[4]",
        "name": "rates_",
        "type": "uint64[4]"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender_",
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
        "name": "lender_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "principalPaid_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interestPaid_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lateInterestPaid_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateServiceFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformServiceFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "PaymentMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "pendingBorrower_",
        "type": "address"
      }
    ],
    "name": "PendingBorrowerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "uint256",
        "name": "principalToReturn_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "paymentDueDate_",
        "type": "uint40"
      },
      {
        "indexed": false,
        "internalType": "uint40",
        "name": "defaultDate_",
        "type": "uint40"
      }
    ],
    "name": "PrincipalCalled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "principalReturned_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "principalRemaining_",
        "type": "uint256"
      }
    ],
    "name": "PrincipalReturned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fundsRepossessed_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "destination_",
        "type": "address"
      }
    ],
    "name": "Repossessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "destination_",
        "type": "address"
      }
    ],
    "name": "Skimmed",
    "type": "event"
  },
  {
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "borrower",
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
    "name": "calledPrincipal",
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
    "name": "dateCalled",
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
    "name": "dateFunded",
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
    "name": "dateImpaired",
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
    "name": "datePaid",
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
    "inputs": [
      {
        "internalType": "bytes",
        "name": "encodedArguments_",
        "type": "bytes"
      }
    ],
    "name": "decodeArguments",
    "outputs": [
      {
        "internalType": "address",
        "name": "borrower_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lender_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "fundsAsset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "internalType": "uint32[3]",
        "name": "termDetails_",
        "type": "uint32[3]"
      },
      {
        "internalType": "uint64[4]",
        "name": "rates_",
        "type": "uint64[4]"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "delegateServiceFeeRate",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
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
        "name": "borrower_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "lender_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "fundsAsset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "internalType": "uint32[3]",
        "name": "termDetails_",
        "type": "uint32[3]"
      },
      {
        "internalType": "uint64[4]",
        "name": "rates_",
        "type": "uint64[4]"
      }
    ],
    "name": "encodeArguments",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "encodedArguments_",
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
    "name": "gracePeriod",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "interestRate",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lateFeeRate",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lateInterestPremium",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lender",
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
    "name": "noticePeriod",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paymentInterval",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingBorrower",
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
    "name": "pendingLender",
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
    "name": "platformServiceFeeRate",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "principal",
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