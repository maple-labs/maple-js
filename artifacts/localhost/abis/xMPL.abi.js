module.exports = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string'
      },
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'asset_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'precision_',
        type: 'uint256'
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
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    name: 'Deposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'freeAssets_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'issuanceRate_',
        type: 'uint256'
      }
    ],
    name: 'IssuanceParamsUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'MigrationCancelled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'fromAsset_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toAsset_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'MigrationPerformed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'fromAsset_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toAsset_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'migrator_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'migrationTime_',
        type: 'uint256'
      }
    ],
    name: 'MigrationScheduled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner_',
        type: 'address'
      }
    ],
    name: 'OwnershipAccepted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pendingOwner_',
        type: 'address'
      }
    ],
    name: 'PendingOwnerSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vestingPeriodFinish_',
        type: 'uint256'
      }
    ],
    name: 'VestingScheduleUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    name: 'Withdraw',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'domainSeparator_',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'MINIMUM_MIGRATION_DELAY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: 'success_',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'asset',
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
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account_',
        type: 'address'
      }
    ],
    name: 'balanceOfAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balanceOfAssets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cancelMigration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    name: 'convertToAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    name: 'convertToShares',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
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
    inputs: [
      {
        internalType: 'address',
        name: 'spender_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'subtractedAmount_',
        type: 'uint256'
      }
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: 'success_',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      }
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'deadline_',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v_',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r_',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's_',
        type: 'bytes32'
      }
    ],
    name: 'depositWithPermit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'freeAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'addedAmount_',
        type: 'uint256'
      }
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: 'success_',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'issuanceRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lastUpdated',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      }
    ],
    name: 'maxDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxAssets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      }
    ],
    name: 'maxMint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxShares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      }
    ],
    name: 'maxRedeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxShares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      }
    ],
    name: 'maxWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxAssets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      }
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'maxAssets_',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline_',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v_',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r_',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's_',
        type: 'bytes32'
      }
    ],
    name: 'mintWithPermit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
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
    name: 'pendingOwner',
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
    name: 'performMigration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'spender_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline_',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v_',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r_',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's_',
        type: 'bytes32'
      }
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'precision',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    name: 'previewDeposit',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    name: 'previewMint',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    name: 'previewRedeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    name: 'previewWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      }
    ],
    name: 'redeem',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'migrator_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'newAsset_',
        type: 'address'
      }
    ],
    name: 'scheduleMigration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'scheduledMigrationTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'scheduledMigrator',
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
    name: 'scheduledNewAsset',
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
        name: 'pendingOwner_',
        type: 'address'
      }
    ],
    name: 'setPendingOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
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
    name: 'totalAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalManagedAssets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: 'success_',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'recipient_',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: 'success_',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vestingPeriod_',
        type: 'uint256'
      }
    ],
    name: 'updateVestingSchedule',
    outputs: [
      {
        internalType: 'uint256',
        name: 'issuanceRate_',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'freeAssets_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vestingPeriodFinish',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'assets_',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'receiver_',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'owner_',
        type: 'address'
      }
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'shares_',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
