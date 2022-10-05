module.exports = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_aggregator',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_assetAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_newMedianizer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_oldMedianizer',
        type: 'address'
      }
    ],
    name: 'ChangeAggregatorFeed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: '_override',
        type: 'bool'
      }
    ],
    name: 'SetManualOverride',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int256',
        name: '_oldPrice',
        type: 'int256'
      },
      {
        indexed: false,
        internalType: 'int256',
        name: '_newPrice',
        type: 'int256'
      }
    ],
    name: 'SetManualPrice',
    type: 'event'
  },
  {
    inputs: [],
    name: 'assetAddress',
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
        internalType: 'address',
        name: 'aggregator',
        type: 'address'
      }
    ],
    name: 'changeAggregator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAssetAddress',
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
    inputs: [],
    name: 'getDenomination',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getLatestPrice',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'globals',
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
    inputs: [],
    name: 'manualOverride',
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
    inputs: [],
    name: 'manualPrice',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
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
    inputs: [],
    name: 'priceFeed',
    outputs: [
      {
        internalType: 'contract IChainlinkAggregatorV3',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_override',
        type: 'bool'
      }
    ],
    name: 'setManualOverride',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: '_price',
        type: 'int256'
      }
    ],
    name: 'setManualPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
