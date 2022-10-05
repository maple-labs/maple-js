module.exports = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_governor',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'int256',
        name: 'current',
        type: 'int256'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'roundId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256'
      }
    ],
    name: 'AnswerUpdated',
    type: 'event'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'description',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
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
    name: 'price',
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
    inputs: [
      {
        internalType: 'int256',
        name: '_price',
        type: 'int256'
      }
    ],
    name: 'setPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
