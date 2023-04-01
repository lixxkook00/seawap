import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SSG-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 76,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
    },
    token: tokens.swingby,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 135,
    lpSymbol: 'BTCD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x718d3baa161e1a38758bb0f1fe751e401f431ac4',
    },
    token: tokens.xed,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 134,
    lpSymbol: 'LMT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x56bc8de6e90a8454cb2614b33e750d960aecdf12',
    },
    token: tokens.hakka,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'DFD-BUSD LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
