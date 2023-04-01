// eslint-disable-next-line import/no-unresolved
import { MenuEntry } from 'uikit/index'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: '/images/menu/home.png',
    href: '/',
  },
  {
    label: 'Trade',
    icon: '/images/menu/trade.png',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.seaswap.trade/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.seaswap.trade/#/pool',
      },
    ],
  },
  {
    label: 'Salmon Farms',
    icon: '/images/menu/farm.png',
    href: '/farms',
  },
  {
    label: 'Shark Pools',
    icon: '/images/menu/pools.png',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: '/images/menu/info.png',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Sea-Swap',
        target: '_blank',
      },
      {
        label: 'WhitePaper',
        href: 'https://seaswap.gitbook.io/sea-swap/',
        target: '_blank'
      },
    ],
  },
]

export default config
