export interface Deploy {
  id: string;
  title: string;
  description: string;
  link: string;
  src?: string;
}

export const deploy: Deploy[] = [
  {
    id: 'etherscan',
    title: 'Etherscan',
    description:
      'Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities taking place on Ethereum (ETH)',
    link: 'https://etherscan.io/',
    src: '/img/deploy/etherscan.jpg',
  },
  {
    id: 'open-zeppelin-supernode',
    title: 'Open Zeppelin Supernode',
    description:
      'OpenZeppelin provides a complete suite of security products to build, manage, and inspect all aspects of software development and operations for Ethereum projects.',
    link: 'https://docs.openzeppelin.com/openzeppelin/',
    src: '/img/libraries/open-zepplin.jpg',
  },
  {
    id: 'infura',
    title: 'Infura',
    description: `Infura's development suite provides instant, scalable API access to the Ethereum and IPFS networks. Connect your app to Ethereum and IPFS now, for free!`,
    link: 'https://infura.io/',
    src: '/img/deploy/infura.jpg',
  },
  {
    id: 'chainstack',
    title: 'Chainstack',
    description:
      'Chainstack is making it simple to launch and scale decentralized networks and applications, with an intuitive user interface and seamless orchestration.',
    link: 'https://chainstack.com/',
    src: '/img/deploy/chainstack.jpg',
  },
  {
    id: 'quicknode',
    title: 'Quicknode',
    description: `The fastest way to build on the world's most popular blockchains: Ethereum, Polygon, Bitcoin, Optimism, Fantom, Solana, Celo, BSC & xDai. Access MainNet or TestNet instantly via our API, for free!`,
    link: 'https://www.quicknode.com/',
    src: '/img/deploy/quicknode.jpg',
  },
  {
    id: 'linkPool-naaS',
    title: 'LinkPool NaaS',
    description:
      'LinkPool is a chainlink node service provider that creates tools and infrastructure for Chainlink nodes and other services such as staking and the Chainlink Marketplace.',
    link: 'https://linkpool.io/',
    src: '/img/deploy/linkpool.png',
  },
  {
    id: 'openSea',
    title: 'OpenSea',
    description:
      'A peer-to-peer marketplace for NFTs, rare digital items and crypto collectibles. Buy, sell, auction, and discover CryptoKitties, Decentraland, Gods Unchained cards, blockchain game items, and more. Over 100,000 collectibles on sale now!',
    link: 'https://opensea.io/',
    src: '/img/deploy/opensea.png',
  },
  {
    id: 'truffle',
    title: 'Truffle Suite',
    description:
      'World class development environment for blockchain dapps (decentralized applications) and smart contracts. Learn blockchain programming with our training courses & seminars. Trusted by Microsoft, Shapeshift and more!',
    link: 'https://www.trufflesuite.com/',
    src: '/img/deploy/truffle.png',
  },
  {
    id: 'hardhat',
    title: 'Hardhat',
    description: 'Ethereum development environment for professionals.',
    link: 'https://hardhat.org/',
    src: '/img/libraries/Hardhat-color-logotype-vertical.svg',
  },
  {
    id: 'dapp-tools',
    title: 'Dapp Tools',
    description: 'Command line tools and smart contract libraries for Ethereum smart contract development',
    link: 'https://dapp.tools/',
    src: '',
  },
];
