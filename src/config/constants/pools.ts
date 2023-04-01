import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 112,
    stakingToken: tokens.cake,
    earningToken: tokens.swingby,
    contractAddress: {
      97: '',
      56: '0x675434c68f2672c983e36cf10ed13a4014720b79',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.21527',
  },
  {
    sousId: 111,
    stakingToken: tokens.cake,
    earningToken: tokens.xed,
    contractAddress: {
      97: '',
      56: '0x05d6c2d1d687eacfb5e6440d5a3511e91f2201a8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3472',
  },
  {
    sousId: 109,
    stakingToken: tokens.cake,
    earningToken: tokens.cgg,
    contractAddress: {
      97: '',
      56: '0xdf75f38dbc98f9f26377414e567abcb8d57cca33',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.10918',
  },
  {
    sousId: 108,
    stakingToken: tokens.cake,
    earningToken: tokens.mix,
    contractAddress: {
      97: '',
      56: '0xce64a930884b2c68cd93fc1c7c7cdc221d427692',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.3721',
  },
]

export default pools
