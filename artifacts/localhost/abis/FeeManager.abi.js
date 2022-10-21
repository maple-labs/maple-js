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
        "indexed": false,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateOriginationFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateServiceFee_",
        "type": "uint256"
      }
    ],
    "name": "FeeTermsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateOriginationFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformOriginationFee_",
        "type": "uint256"
      }
    ],
    "name": "OriginationFeesPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "partialPlatformServiceFee_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "partialDelegateServiceFee_",
        "type": "uint256"
      }
    ],
    "name": "PartialRefinanceServiceFeesUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformServiceFee_",
        "type": "uint256"
      }
    ],
    "name": "PlatformServiceFeeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
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
        "name": "partialRefinanceDelegateServiceFee_",
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
        "internalType": "uint256",
        "name": "partialRefinancePlatformServiceFee_",
        "type": "uint256"
      }
    ],
    "name": "ServiceFeesPaid",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "delegateOriginationFee",
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
    "name": "delegateRefinanceServiceFee",
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
    "name": "delegateServiceFee",
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
        "name": "loan_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "interval_",
        "type": "uint256"
      }
    ],
    "name": "getDelegateServiceFeesForPeriod",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "delegateServiceFee_",
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
        "name": "principalRequested_",
        "type": "uint256"
      }
    ],
    "name": "getOriginationFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "originationFees_",
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
        "name": "principalRequested_",
        "type": "uint256"
      }
    ],
    "name": "getPlatformOriginationFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "platformOriginationFee_",
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
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "interval_",
        "type": "uint256"
      }
    ],
    "name": "getPlatformServiceFeeForPeriod",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "platformServiceFee_",
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
        "name": "numberOfPayments_",
        "type": "uint256"
      }
    ],
    "name": "getServiceFeeBreakdown",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "delegateServiceFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "delegateRefinanceFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "platformServiceFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "platformRefinanceFee_",
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
        "name": "numberOfPayments_",
        "type": "uint256"
      }
    ],
    "name": "getServiceFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "serviceFees_",
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
        "name": "interval_",
        "type": "uint256"
      }
    ],
    "name": "getServiceFeesForPeriod",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "serviceFee_",
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
        "name": "asset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      }
    ],
    "name": "payOriginationFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "feePaid_",
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
        "name": "asset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "numberOfPayments_",
        "type": "uint256"
      }
    ],
    "name": "payServiceFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "feePaid_",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "platformRefinanceServiceFee",
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
    "name": "platformServiceFee",
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
        "name": "delegateOriginationFee_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "delegateServiceFee_",
        "type": "uint256"
      }
    ],
    "name": "updateDelegateFeeTerms",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "paymentInterval_",
        "type": "uint256"
      }
    ],
    "name": "updatePlatformServiceFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "principalRequested_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeSinceLastDueDate_",
        "type": "uint256"
      }
    ],
    "name": "updateRefinanceServiceFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];