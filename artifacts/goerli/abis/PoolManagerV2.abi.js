module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "AllowedLenderSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "unrealizedLosses_",
        "type": "uint256"
      }
    ],
    "name": "CollateralLiquidationFinished",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "CollateralLiquidationTriggered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "CoverDeposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "CoverWithdrawn",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "managementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "DelegateManagementFeeRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isLoanManager_",
        "type": "bool"
      }
    ],
    "name": "IsLoanManagerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "liquidityCap_",
        "type": "uint256"
      }
    ],
    "name": "LiquidityCapSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      }
    ],
    "name": "LoanManagerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "OpenToPublic",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousDelegate_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newDelegate_",
        "type": "address"
      }
    ],
    "name": "PendingDelegateAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousDelegate_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newDelegate_",
        "type": "address"
      }
    ],
    "name": "PendingDelegateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "withdrawalManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "liquidityCap_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "delegateManagementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "PoolConfigured",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "name": "RedeemProcessed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "name": "RedeemRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "active_",
        "type": "bool"
      }
    ],
    "name": "SetAsActive",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "name": "SharesRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "toVersion_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawalManager_",
        "type": "address"
      }
    ],
    "name": "WithdrawalManagerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "name": "WithdrawalProcessed",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "HUNDRED_PERCENT",
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
    "inputs": [],
    "name": "acceptPendingPoolDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "active",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loanManagerFactory_",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "addLoanManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "asset",
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
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data_",
        "type": "bytes"
      }
    ],
    "name": "canCall",
    "outputs": [
      {
        "internalType": "bool",
        "name": "canCall_",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "errorMessage_",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "withdrawalManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "liquidityCap_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "delegateManagementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "configure",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "configured",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets_",
        "type": "uint256"
      }
    ],
    "name": "convertToExitShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "delegateManagementFeeRate",
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
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }
    ],
    "name": "depositCover",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "factory",
    "outputs": [
      {
        "internalType": "address",
        "name": "factory_",
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
        "name": "loan_",
        "type": "address"
      }
    ],
    "name": "finishCollateralLiquidation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "name": "getEscrowParams",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "escrowShares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "destination_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globals",
    "outputs": [
      {
        "internalType": "address",
        "name": "globals_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "governor",
    "outputs": [
      {
        "internalType": "address",
        "name": "governor_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "hasSufficientCover",
    "outputs": [
      {
        "internalType": "bool",
        "name": "hasSufficientCover_",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "implementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "implementation_",
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
    "name": "isLoanManager",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
    "name": "isValidLender",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidityCap",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loanManagerList",
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
        "name": "receiver_",
        "type": "address"
      }
    ],
    "name": "maxDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "maxAssets_",
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
        "name": "receiver_",
        "type": "address"
      }
    ],
    "name": "maxMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "maxShares_",
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
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "maxRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "maxShares_",
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
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "maxWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "maxAssets_",
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
        "name": "migrator_",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "migrate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "openToPublic",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingPoolDelegate",
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
    "name": "pool",
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
    "name": "poolDelegate",
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
    "name": "poolDelegateCover",
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
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "name": "previewRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assets_",
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
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assets_",
        "type": "uint256"
      }
    ],
    "name": "previewWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "sender_",
        "type": "address"
      }
    ],
    "name": "processRedeem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assets_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "sender_",
        "type": "address"
      }
    ],
    "name": "processWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "redeemableShares_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "resultingAssets_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "removeShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "sharesReturned_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destination_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "principal_",
        "type": "uint256"
      }
    ],
    "name": "requestFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "sender_",
        "type": "address"
      }
    ],
    "name": "requestRedeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "shares_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assets_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "sender_",
        "type": "address"
      }
    ],
    "name": "requestWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "active_",
        "type": "bool"
      }
    ],
    "name": "setActive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lender_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setAllowedLender",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "collateralAsset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowedSlippage_",
        "type": "uint256"
      }
    ],
    "name": "setAllowedSlippage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "delegateManagementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "setDelegateManagementFeeRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation_",
        "type": "address"
      }
    ],
    "name": "setImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isLoanManager_",
        "type": "bool"
      }
    ],
    "name": "setIsLoanManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "liquidityCap_",
        "type": "uint256"
      }
    ],
    "name": "setLiquidityCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "loanManager_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "collateralAsset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minRatio_",
        "type": "uint256"
      }
    ],
    "name": "setMinRatio",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setOpenToPublic",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pendingPoolDelegate_",
        "type": "address"
      }
    ],
    "name": "setPendingPoolDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "withdrawalManager_",
        "type": "address"
      }
    ],
    "name": "setWithdrawalManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalAssets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalAssets_",
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
        "name": "loan_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "liquidatorFactory_",
        "type": "address"
      }
    ],
    "name": "triggerDefault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unrealizedLosses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "unrealizedLosses_",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "version_",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "arguments_",
        "type": "bytes"
      }
    ],
    "name": "upgrade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "recipient_",
        "type": "address"
      }
    ],
    "name": "withdrawCover",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawalManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];