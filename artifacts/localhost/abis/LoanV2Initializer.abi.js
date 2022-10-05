module.exports = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower_',
        type: 'address'
      }
    ],
    name: 'BorrowerAccepted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'CollateralPosted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'CollateralRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'lender_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nextPaymentDueDate_',
        type: 'uint256'
      }
    ],
    name: 'Funded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'FundsClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'FundsDrawnDown',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'FundsRedirected',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'FundsReturned',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'borrower_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address[2]',
        name: 'assets_',
        type: 'address[2]'
      },
      {
        indexed: false,
        internalType: 'uint256[3]',
        name: 'termDetails_',
        type: 'uint256[3]'
      },
      {
        indexed: false,
        internalType: 'uint256[3]',
        name: 'amounts_',
        type: 'uint256[3]'
      },
      {
        indexed: false,
        internalType: 'uint256[4]',
        name: 'rates_',
        type: 'uint256[4]'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'lender_',
        type: 'address'
      }
    ],
    name: 'LenderAccepted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'principalPaid_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestPaid_',
        type: 'uint256'
      }
    ],
    name: 'LoanClosed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'refinanceCommitment_',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refinancer_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes[]',
        name: 'calls_',
        type: 'bytes[]'
      }
    ],
    name: 'NewTermsAccepted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'refinanceCommitment_',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'refinancer_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes[]',
        name: 'calls_',
        type: 'bytes[]'
      }
    ],
    name: 'NewTermsProposed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'principalPaid_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestPaid_',
        type: 'uint256'
      }
    ],
    name: 'PaymentMade',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'pendingBorrower_',
        type: 'address'
      }
    ],
    name: 'PendingBorrowerSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'pendingLender_',
        type: 'address'
      }
    ],
    name: 'PendingLenderSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralRepossessed_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fundsRepossessed_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'Repossessed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      }
    ],
    name: 'Skimmed',
    type: 'event'
  },
  {
    stateMutability: 'nonpayable',
    type: 'fallback'
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedArguments_',
        type: 'bytes'
      }
    ],
    name: 'decodeArguments',
    outputs: [
      {
        internalType: 'address',
        name: 'borrower_',
        type: 'address'
      },
      {
        internalType: 'address[2]',
        name: 'assets_',
        type: 'address[2]'
      },
      {
        internalType: 'uint256[3]',
        name: 'termDetails_',
        type: 'uint256[3]'
      },
      {
        internalType: 'uint256[3]',
        name: 'amounts_',
        type: 'uint256[3]'
      },
      {
        internalType: 'uint256[4]',
        name: 'rates_',
        type: 'uint256[4]'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'borrower_',
        type: 'address'
      },
      {
        internalType: 'address[2]',
        name: 'assets_',
        type: 'address[2]'
      },
      {
        internalType: 'uint256[3]',
        name: 'termDetails_',
        type: 'uint256[3]'
      },
      {
        internalType: 'uint256[3]',
        name: 'amounts_',
        type: 'uint256[3]'
      },
      {
        internalType: 'uint256[4]',
        name: 'rates_',
        type: 'uint256[4]'
      }
    ],
    name: 'encodeArguments',
    outputs: [
      {
        internalType: 'bytes',
        name: 'encodedArguments_',
        type: 'bytes'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
]
