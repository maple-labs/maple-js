module.exports = [
  {
    "stateMutability": "nonpayable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "encodedArguments_",
        "type": "bytes"
      }
    ],
    "name": "decodeArguments",
    "outputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
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
    "inputs": [
      {
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
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
        "name": "encodedArguments_",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];