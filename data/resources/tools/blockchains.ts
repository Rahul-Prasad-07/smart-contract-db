export interface Blockchains {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const blockchains: Blockchains[] = [
  {
    id: 'ethereum',
    title: 'Ethereum',
    description:
      'Ethereum is a global, decentralized platform for money and new kinds of applications. On Ethereum, you can write code that controls money, and build applications accessible anywhere in the world.',
    link: 'https://ethereum.org/en/',
    src: '/img/blockchains/ethereum.png',
  },
  {
    id: 'bsc',
    title: 'BSC',
    description:
      'BscScan allows you to explore and search the Binance blockchain for transactions, addresses, tokens, prices and other activities taking place on Binance (BNB).',
    link: 'https://bscscan.com/',
    src: '/img/blockchains/bscScan.png',
  },
  {
    id: 'polygon',
    title: 'Polygon',
    description:
      'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
    link: 'https://polygon.technology/',
    src: '/img/blockchains/polygon.jpg',
  },
  {
    id: 'avalanche',
    title: 'Avalanche',
    description:
      'The fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.',
    link: 'https://www.avax.network/',
    src: '/img/blockchains/avalanche.jpg',
  },
  {
    id: 'fantom',
    title: 'Fantom',
    description: 'Fantom is a highly scalable blockchain platform for DeFi, crypto dApps, and enterprise applications.',
    link: 'https://fantom.foundation/',
    src: '/img/blockchains/fantom.png',
  },
  {
    id: 'heco',
    title: 'HECO',
    description:
      'HecoInfo allows you to explore and search the HecoInfo blockchain for transactions, addresses, tokens, prices and other activities taking place on HecoInfo (HT).',
    link: 'https://hecoinfo.com/',
    src: '/img/blockchains/heco.jpg',
  },
  {
    id: 'xdai',
    title: 'xDai',
    description: 'The first-ever USD stable blockchain and multi-chain staking token.',
    link: 'https://www.xdaichain.com/',
    src: '/img/blockchains/xdai.jpg',
  },
  {
    id: 'arbitrum',
    title: 'Arbitrum',
    description: 'Offchain Labs - Building Arbitrum for Secure Ethereum Dapps.',
    link: 'https://offchainlabs.com/',
    src: '/img/blockchains/arbitrum.svg',
  },
  {
    id: 'optimism',
    title: 'Optimism',
    description: `Optimistic Ethereum is an EVM compatible Optimistic Rollup chain. It's designed to be fast, simple, and secure. We support one-click deploys with all of the Ethereum developer tooling you know and love.`,
    link: 'https://www.optimism.io/',
    src: '/img/blockchains/optimism.jpg',
  },
];
