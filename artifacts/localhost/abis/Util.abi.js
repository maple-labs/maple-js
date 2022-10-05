module.exports = [
  {
    inputs: [
      {
        internalType: 'contract IMapleGlobals',
        name: 'globals',
        type: 'IMapleGlobals'
      },
      {
        internalType: 'address',
        name: 'fromAsset',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'toAsset',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'swapAmt',
        type: 'uint256'
      }
    ],
    name: 'calcMinAmount',
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
