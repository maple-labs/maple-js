module.exports = [
  {
    "constant": true,
    "inputs": [],
    "name": "BONE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BPOW_PRECISION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "EXIT_FEE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "INIT_POOL_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_BOUND_TOKENS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_BPOW_BASE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_FEE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_IN_RATIO",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_OUT_RATIO",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_TOTAL_WEIGHT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_WEIGHT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MIN_BALANCE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MIN_BOUND_TOKENS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MIN_BPOW_BASE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MIN_FEE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MIN_WEIGHT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcInGivenOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcOutGivenIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolInGivenSingleOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcPoolOutGivenSingleIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleInGivenPoolOut",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountIn",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "poolAmountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSingleOutGivenPoolIn",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenAmountOut",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenBalanceIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenBalanceOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWeightOut",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "swapFee",
        "type": "uint256"
      }
    ],
    "name": "calcSpotPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "spotPrice",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getColor",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];