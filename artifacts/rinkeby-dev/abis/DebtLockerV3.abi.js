module.exports = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newSlippage_',
        type: 'uint256'
      }
    ],
    name: 'AllowedSlippageSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newAuctioneer_',
        type: 'address'
      }
    ],
    name: 'AuctioneerSet',
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
    name: 'FundsToCaptureSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'LiquidationStopped',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMinRatio_',
        type: 'uint256'
      }
    ],
    name: 'MinRatioSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toVersion_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'arguments_',
        type: 'bytes'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'refinancer_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'deadline_',
        type: 'uint256'
      },
      {
        internalType: 'bytes[]',
        name: 'calls_',
        type: 'bytes[]'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'acceptNewTerms',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'allowedSlippage',
    outputs: [
      {
        internalType: 'uint256',
        name: 'allowedSlippage_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'amountRecovered',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountRecovered_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'claim',
    outputs: [
      {
        internalType: 'uint256[7]',
        name: 'details_',
        type: 'uint256[7]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'address',
        name: 'factory_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'fundsToCapture',
    outputs: [
      {
        internalType: 'uint256',
        name: 'fundsToCapture_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'swapAmount_',
        type: 'uint256'
      }
    ],
    name: 'getExpectedAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'returnAmount_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'liquidator',
    outputs: [
      {
        internalType: 'address',
        name: 'liquidator_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'loan',
    outputs: [
      {
        internalType: 'address',
        name: 'loan_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'migrator_',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'arguments_',
        type: 'bytes'
      }
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'minRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: 'minRatio_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'poolDelegate',
    outputs: [
      {
        internalType: 'address',
        name: 'poolDelegate_',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'principalRemainingAtLastClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: 'principalRemainingAtLastClaim_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'liquidator_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'token_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'destination_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'pullFundsFromLiquidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'refinancer_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'deadline_',
        type: 'uint256'
      },
      {
        internalType: 'bytes[]',
        name: 'calls_',
        type: 'bytes[]'
      }
    ],
    name: 'rejectNewTerms',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'repossessed',
    outputs: [
      {
        internalType: 'bool',
        name: 'repossessed_',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'allowedSlippage_',
        type: 'uint256'
      }
    ],
    name: 'setAllowedSlippage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'auctioneer_',
        type: 'address'
      }
    ],
    name: 'setAuctioneer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'setFundsToCapture',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation_',
        type: 'address'
      }
    ],
    name: 'setImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minRatio_',
        type: 'uint256'
      }
    ],
    name: 'setMinRatio',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'stopLiquidation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'triggerDefault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'toVersion_',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: 'arguments_',
        type: 'bytes'
      }
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
