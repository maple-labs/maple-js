module.exports = [
  {
    inputs: [],
    name: 'UNISWAP_ROUTER',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nextPaymentDue',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'defaultGracePeriod',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'superFactory',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256'
      }
    ],
    name: 'canTriggerDefault',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20Details',
        name: 'collateralAsset',
        type: 'IERC20Details'
      },
      {
        internalType: 'contract IERC20Details',
        name: 'liquidityAsset',
        type: 'IERC20Details'
      },
      {
        internalType: 'uint256',
        name: 'collateralRatio',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'superFactory',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      }
    ],
    name: 'collateralRequiredForDrawdown',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
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
        name: 'repaymentCalc',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'nextPaymentDue',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'lateFeeCalc',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'premiumCalc',
        type: 'address'
      }
    ],
    name: 'getFullPayment',
    outputs: [
      {
        internalType: 'uint256',
        name: 'total',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'interest',
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
        name: 'repaymentCalc',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'nextPaymentDue',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'lateFeeCalc',
        type: 'address'
      }
    ],
    name: 'getNextPayment',
    outputs: [
      {
        internalType: 'uint256',
        name: 'total',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'principal',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'interest',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_nextPaymentDue',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'paymentLate',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IMapleGlobals',
        name: 'globals',
        type: 'IMapleGlobals'
      },
      {
        internalType: 'address',
        name: 'liquidityAsset',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'collateralAsset',
        type: 'address'
      },
      {
        internalType: 'uint256[5]',
        name: 'specs',
        type: 'uint256[5]'
      }
    ],
    name: 'loanSanityChecks',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  }
]
