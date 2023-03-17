module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "closingRate_",
        "type": "uint256"
      }
    ],
    "name": "ClosingRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "collateralRequired_",
        "type": "uint256"
      }
    ],
    "name": "CollateralRequiredSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endingPrincipal_",
        "type": "uint256"
      }
    ],
    "name": "EndingPrincipalSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gracePeriod_",
        "type": "uint256"
      }
    ],
    "name": "GracePeriodSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "interestRate_",
        "type": "uint256"
      }
    ],
    "name": "InterestRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lateFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "LateFeeRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lateInterestPremium_",
        "type": "uint256"
      }
    ],
    "name": "LateInterestPremiumSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "paymentInterval_",
        "type": "uint256"
      }
    ],
    "name": "PaymentIntervalSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "paymentsRemaining_",
        "type": "uint256"
      }
    ],
    "name": "PaymentsRemainingSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "increasedBy_",
        "type": "uint256"
      }
    ],
    "name": "PrincipalIncreased",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "increasePrincipal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "closingRate_",
        "type": "uint256"
      }
    ],
    "name": "setClosingRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "collateralRequired_",
        "type": "uint256"
      }
    ],
    "name": "setCollateralRequired",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "endingPrincipal_",
        "type": "uint256"
      }
    ],
    "name": "setEndingPrincipal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "gracePeriod_",
        "type": "uint256"
      }
    ],
    "name": "setGracePeriod",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "interestRate_",
        "type": "uint256"
      }
    ],
    "name": "setInterestRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "lateFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "setLateFeeRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "lateInterestPremium_",
        "type": "uint256"
      }
    ],
    "name": "setLateInterestPremium",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "paymentInterval_",
        "type": "uint256"
      }
    ],
    "name": "setPaymentInterval",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "paymentsRemaining_",
        "type": "uint256"
      }
    ],
    "name": "setPaymentsRemaining",
    "outputs": [],
    "stateMutability": "nonpayable",
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
  }
];