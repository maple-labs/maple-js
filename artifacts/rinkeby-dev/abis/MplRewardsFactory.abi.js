module.exports = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_globals',
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
        indexed: true,
        internalType: 'address',
        name: 'rewardsToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'stakingToken',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'mplRewards',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'MplRewardsCreated',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rewardsToken',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'stakingToken',
        type: 'address'
      }
    ],
    name: 'createMplRewards',
    outputs: [
      {
        internalType: 'address',
        name: 'mplRewards',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'isMplRewards',
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
        internalType: 'address',
        name: '_globals',
        type: 'address'
      }
    ],
    name: 'setGlobals',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
