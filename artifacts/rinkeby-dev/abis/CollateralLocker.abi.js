module.exports = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collateralAsset',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_loan',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'collateralAsset',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
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
        name: 'dst',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amt',
        type: 'uint256'
      }
    ],
    name: 'pull',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
