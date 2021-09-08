export interface Consultant {
  title: string;
  description: string;
  link: string;
}

export const consultants: { [id: string]: Consultant } = {
  'applied-blockchain': {
    title: 'Applied Blockchain',
    description: '',
    link: 'https://appliedblockchain.com/',
  },
  'block-42': {
    title: 'Block42',
    description: '',
    link: 'https://block42.tech/',
  },
  chainsafe: {
    title: 'Chainsafe',
    description: '',
    link: 'https://chainsafe.io/',
  },
  'hack-bg': {
    title: 'Hack',
    description: '',
    link: 'https://hack.bg',
  },
  protofire: {
    title: 'Protofire',
    description: '',
    link: 'https://protofire.io/',
  },
  'this-dot-labs': {
    title: 'This Dot Labs',
    description: '',
    link: 'https://www.thisdot.co/',
  },
};
