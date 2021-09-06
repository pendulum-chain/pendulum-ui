// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

/* eslint-disable sort-keys */
const bundle: OverrideBundleDefinition = {
  alias: {
    tokens: {
      AccountData: 'TokensAccountData'
    }
  },
  types: [{
    minmax: [0, undefined],
    types: {
      TokensAccountData: {
        free: 'Balance',
        frozen: 'Balance',
        reserved: 'Balance'
      },
      CurrencyId: {
        _enum: {
          Native: 'String',
          StellarNative: 'String',
          AlphaNum4: 'AlphaNum4',
          AlphaNum12: 'AlphaNum12'
        }
      },
      AlphaNum4: {
        code: '[u8; 4]',
        issuer: '[u8; 32]'
      },
      AlphaNum12: {
        code: '[u8; 12]',
        issuer: '[u8; 32]'
      },
      CurrencyIdOf: 'CurrencyId',
      Currency: 'CurrencyId',
      BalanceOf: 'Balance',
      Amount: 'i128',
      AmountOf: 'Amount',
      DepositPayload: {
        currency_id: 'CurrencyId',
        amount: 'Balance',
        destination: 'AccountId',
        signed_by: 'Public'
      }
    }
  }]
};

export default bundle;
