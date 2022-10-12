module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "dataHash_",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp_",
        "type": "uint256"
      }
    ],
    "name": "CallScheduled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "dataHash_",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp_",
        "type": "uint256"
      }
    ],
    "name": "CallUnscheduled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousDelay_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "currentDelay_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "previousDuration_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "currentDuration_",
        "type": "uint256"
      }
    ],
    "name": "DefaultTimelockParametersSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousGovernor_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "currentGovernor_",
        "type": "address"
      }
    ],
    "name": "GovernorshipAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price_",
        "type": "uint256"
      }
    ],
    "name": "ManualOverridePriceSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousMapleTreasury_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "currentMapleTreasury_",
        "type": "address"
      }
    ],
    "name": "MapleTreasurySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxCoverLiquidationPercent_",
        "type": "uint256"
      }
    ],
    "name": "MaxCoverLiquidationPercentSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousMigrationAdmin_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "nextMigrationAdmin_",
        "type": "address"
      }
    ],
    "name": "MigrationAdminSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minCoverAmount_",
        "type": "uint256"
      }
    ],
    "name": "MinCoverAmountSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "pendingGovernor_",
        "type": "address"
      }
    ],
    "name": "PendingGovernorSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformManagementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "PlatformManagementFeeRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformOriginationFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "PlatformOriginationFeeRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformServiceFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "PlatformServiceFeeRateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolDelegate_",
        "type": "address"
      }
    ],
    "name": "PoolManagerActivated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "fromPoolDelegate_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "toPoolDelegate_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      }
    ],
    "name": "PoolManagerOwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "oracle_",
        "type": "address"
      }
    ],
    "name": "PriceOracleSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "securityAdmin_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "protocolPaused_",
        "type": "bool"
      }
    ],
    "name": "ProtocolPauseSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousSecurityAdmin_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "currentSecurityAdmin_",
        "type": "address"
      }
    ],
    "name": "SecurityAdminSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "delay_",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "duration_",
        "type": "uint128"
      }
    ],
    "name": "TimelockWindowSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "ValidBorrowerSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "factoryKey_",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "factory_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "ValidFactorySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolAsset_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "ValidPoolAssetSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "ValidPoolDelegateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolDeployer_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "ValidPoolDeployerSet",
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
    "name": "acceptGovernor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      }
    ],
    "name": "activatePoolManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "admin_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultTimelockParameters",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "delay",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "duration",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset_",
        "type": "address"
      }
    ],
    "name": "getLatestPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "latestPrice_",
        "type": "uint256"
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
    "name": "isBorrower",
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isFactory",
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
    "name": "isPoolAsset",
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
        "name": "account_",
        "type": "address"
      }
    ],
    "name": "isPoolDelegate",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isPoolDelegate_",
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
    "name": "isPoolDeployer",
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
        "name": "caller_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "callData_",
        "type": "bytes"
      }
    ],
    "name": "isValidScheduledCall",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isValid_",
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
    "name": "manualOverridePrice",
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
    "name": "mapleTreasury",
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
    "name": "maxCoverLiquidationPercent",
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
    "name": "migrationAdmin",
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
    "name": "minCoverAmount",
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
    "name": "oracleFor",
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
        "name": "account_",
        "type": "address"
      }
    ],
    "name": "ownedPoolManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pendingGovernor",
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
    "name": "platformManagementFeeRate",
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
    "name": "platformOriginationFeeRate",
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
    "name": "platformServiceFeeRate",
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
    "name": "poolDelegates",
    "outputs": [
      {
        "internalType": "address",
        "name": "ownedPoolManager",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isPoolDelegate",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "protocolPaused",
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
        "name": "contract_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "callData_",
        "type": "bytes"
      }
    ],
    "name": "scheduleCall",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "scheduledCalls",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "dataHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "securityAdmin",
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
        "internalType": "uint128",
        "name": "defaultTimelockDelay_",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "defaultTimelockDuration_",
        "type": "uint128"
      }
    ],
    "name": "setDefaultTimelockParameters",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "price_",
        "type": "uint256"
      }
    ],
    "name": "setManualOverridePrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "mapleTreasury_",
        "type": "address"
      }
    ],
    "name": "setMapleTreasury",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "maxCoverLiquidationPercent_",
        "type": "uint256"
      }
    ],
    "name": "setMaxCoverLiquidationPercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "migrationAdmin_",
        "type": "address"
      }
    ],
    "name": "setMigrationAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minCoverAmount_",
        "type": "uint256"
      }
    ],
    "name": "setMinCoverAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "pendingGovernor_",
        "type": "address"
      }
    ],
    "name": "setPendingGovernor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "platformManagementFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "setPlatformManagementFeeRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "platformOriginationFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "setPlatformOriginationFeeRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolManager_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "platformServiceFeeRate_",
        "type": "uint256"
      }
    ],
    "name": "setPlatformServiceFeeRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "oracle_",
        "type": "address"
      }
    ],
    "name": "setPriceOracle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "protocolPaused_",
        "type": "bool"
      }
    ],
    "name": "setProtocolPause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "securityAdmin_",
        "type": "address"
      }
    ],
    "name": "setSecurityAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "uint128",
        "name": "delay_",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "duration_",
        "type": "uint128"
      }
    ],
    "name": "setTimelockWindow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "internalType": "bytes32[]",
        "name": "functionIds_",
        "type": "bytes32[]"
      },
      {
        "internalType": "uint128[]",
        "name": "delays_",
        "type": "uint128[]"
      },
      {
        "internalType": "uint128[]",
        "name": "durations_",
        "type": "uint128[]"
      }
    ],
    "name": "setTimelockWindows",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "borrower_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setValidBorrower",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "factoryKey_",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "factory_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setValidFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolAsset_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setValidPoolAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setValidPoolDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolDeployer_",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isValid_",
        "type": "bool"
      }
    ],
    "name": "setValidPoolDeployer",
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
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "timelockParametersOf",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "delay",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "duration",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "fromPoolDelegate_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "toPoolDelegate_",
        "type": "address"
      }
    ],
    "name": "transferOwnedPoolManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "caller_",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "contract_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "callData_",
        "type": "bytes"
      }
    ],
    "name": "unscheduleCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "caller_",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "functionId_",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "callData_",
        "type": "bytes"
      }
    ],
    "name": "unscheduleCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];