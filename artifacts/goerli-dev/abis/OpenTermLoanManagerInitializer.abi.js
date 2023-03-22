module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "accountedInterest",
    "outputs": [
      {
        "internalType": "uint112",
        "name": "",
        "type": "uint112"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "calldata_",
        "type": "bytes"
      }
    ],
    "name": "decodeArguments",
    "outputs": [
      {
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "domainStart",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "",
        "type": "uint40"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pool_",
        "type": "address"
      }
    ],
    "name": "encodeArguments",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "calldata_",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fundsAsset",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "impairmentFor",
    "outputs": [
      {
        "internalType": "uint40",
        "name": "impairedDate",
        "type": "uint40"
      },
      {
        "internalType": "bool",
        "name": "impairedByGovernor",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "issuanceRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "paymentFor",
    "outputs": [
      {
        "internalType": "uint24",
        "name": "platformManagementFeeRate",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "delegateManagementFeeRate",
        "type": "uint24"
      },
      {
        "internalType": "uint40",
        "name": "startDate",
        "type": "uint40"
      },
      {
        "internalType": "uint168",
        "name": "issuanceRate",
        "type": "uint168"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "poolManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "principalOut",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unrealizedLosses",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];