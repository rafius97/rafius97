import AllianceBlockCompany from '@assets/companies/allianceblock.png';
import Cub3Company from '@assets/companies/cub3.jpg';
import NuklaiCompany from '@assets/companies/nuklai.svg';
import EthersIcon from '@assets/tech/ethersjs.png';
import NodeIcon from '@assets/tech/node.svg';
import ReactIcon from '@assets/tech/react.svg';
import SolidityIcon from '@assets/tech/solidity.svg';
import TailwindIcon from '@assets/tech/tailwindcss.svg';
import TypescriptIcon from '@assets/tech/typescript.svg';
import WagmiIcon from '@assets/tech/wagmi.svg';

export interface Company {
  slug: string;
  name: string;
  logo: any;
  position: string;
  duration: string;
  description: string;
  responsibilities: { title: string; description: string }[];
  technologies: { name: string; image: string }[];
}

export const companies: Company[] = [
  {
    slug: 'nuklai',
    name: 'Nuklai',
    logo: NuklaiCompany,
    position: 'Blockchain Developer',
    duration: 'November 2023 - Present',
    description:
      'A deeply technical decentralized data network powering the next generation of AI and collective data ecosystems.',
    responsibilities: [
      {
        title: 'Data Pipelines',
        description:
          'Oversaw the bridging of Web2 database functionality into robust, decentralized structures.',
      },
      {
        title: 'High-Performance Interfaces',
        description:
          'Designed massive reactive application states capable of mapping live network loads cleanly.',
      },
    ],
    technologies: [
      { name: 'React', image: ReactIcon.src },
      { name: 'Node.js', image: NodeIcon.src },
      { name: 'TypeScript', image: TypescriptIcon.src },
      { name: 'Solidity', image: SolidityIcon.src },
    ],
  },
  {
    slug: 'cub3',
    name: 'CUB3',
    logo: Cub3Company,
    position: 'Blockchain Developer',
    duration: 'September 2021 - May 2022',
    description:
      'A platform blending Web3 with real-world engagement and loyalty programs. Enabled consumer brands to seamlessly offer digital assets.',
    responsibilities: [
      {
        title: 'Loyalty Dashboards',
        description:
          'Built heavily interactive engagement web platforms utilizing the newest frontend and Web3 packages.',
      },
      {
        title: 'Smart Contract Abstraction',
        description:
          'Worked extensively on creating abstractions reducing friction for non-blockchain-native users.',
      },
    ],
    technologies: [
      { name: 'React', image: ReactIcon.src },
      { name: 'TypeScript', image: TypescriptIcon.src },
      { name: 'Tailwind CSS', image: TailwindIcon.src },
      { name: 'Solidity', image: SolidityIcon.src },
      { name: 'Web3', image: EthersIcon.src },
    ],
  },
  {
    slug: 'allianceblock',
    name: 'AllianceBlock',
    logo: AllianceBlockCompany,
    position: 'Blockchain Developer',
    duration: 'July 2021 - October 2023',
    description:
      'A decentralized blockchain startup building seamless financial infrastructure. Focused intensely on crafting decentralized bridges, liquidity pools, and secure data access interfaces.',
    responsibilities: [
      {
        title: 'DeFi Ecosystem Development',
        description:
          'Architected and maintained comprehensive Web3 implementations across Liquidity Mining, Bridging, and Data ecosystems.',
      },
      {
        title: 'Frontend Reliability',
        description:
          'Spearheaded massive UI upgrades to existing monolithic projects while establishing strict typings and clean architecture.',
      },
      {
        title: 'Smart Contract Interoperability',
        description:
          'Built standard interfaces enabling the seamless translation of deep backend solidity logic into responsive visual components.',
      },
    ],
    technologies: [
      { name: 'React', image: ReactIcon.src },
      { name: 'TypeScript', image: TypescriptIcon.src },
      { name: 'Node.js', image: NodeIcon.src },
      { name: 'Solidity', image: SolidityIcon.src },
      { name: 'Web3', image: EthersIcon.src },
      { name: 'Wagmi', image: WagmiIcon.src },
    ],
  },
];

export const getCompanies = () => companies;
export const getCompanyById = (id: string) =>
  companies.find((company) => company.slug === id);
