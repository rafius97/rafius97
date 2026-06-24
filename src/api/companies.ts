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

export const companiesEn: Company[] = [
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

export const companiesEs: Company[] = [
  {
    slug: 'nuklai',
    name: 'Nuklai',
    logo: NuklaiCompany,
    position: 'Desarrollador Blockchain',
    duration: 'Noviembre 2023 - Presente',
    description:
      'Una red de datos descentralizada profundamente técnica que impulsa la próxima generación de ecosistemas de IA y datos colectivos.',
    responsibilities: [
      {
        title: 'Tuberías de Datos',
        description:
          'Supervisé la integración de la funcionalidad de bases de datos Web2 en estructuras robustas y descentralizadas.',
      },
      {
        title: 'Interfaces de Alto Rendimiento',
        description:
          'Diseñé estados de aplicación reactivos masivos capaces de mapear cargas de red en vivo limpiamente.',
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
    position: 'Desarrollador Blockchain',
    duration: 'Septiembre 2021 - Mayo 2022',
    description:
      'Una plataforma que combina Web3 con programas de compromiso y lealtad del mundo real. Permitió a las marcas de consumo ofrecer activos digitales sin problemas.',
    responsibilities: [
      {
        title: 'Paneles de Lealtad',
        description:
          'Construí plataformas web de interacción altamente interactivas utilizando los paquetes frontend y Web3 más nuevos.',
      },
      {
        title: 'Abstracción de Contratos Inteligentes',
        description:
          'Trabajé extensamente en la creación de abstracciones que reducen la fricción para los usuarios no nativos de blockchain.',
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
    position: 'Desarrollador Blockchain',
    duration: 'Julio 2021 - Octubre 2023',
    description:
      'Una startup de blockchain descentralizada que construye infraestructura financiera fluida. Enfocado intensamente en la creación de puentes descentralizados, fondos de liquidez e interfaces seguras de acceso a datos.',
    responsibilities: [
      {
        title: 'Desarrollo del Ecosistema DeFi',
        description:
          'Diseñé y mantuve implementaciones integrales de Web3 en ecosistemas de Minería de Liquidez, Puentes y Datos.',
      },
      {
        title: 'Confiabilidad del Frontend',
        description:
          'Lideré actualizaciones masivas de UI a proyectos monolíticos existentes mientras establecía tipados estrictos y arquitectura limpia.',
      },
      {
        title: 'Interoperabilidad de Contratos Inteligentes',
        description:
          'Construí interfaces estándar que permiten la traducción fluida de la lógica backend de solidity en componentes visuales responsivos.',
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

export type Languages = 'en' | 'es';

export const getCompanies = (lang: Languages = 'en') => lang === 'es' ? companiesEs : companiesEn;
export const getCompanyById = (id: string, lang: Languages = 'en') =>
  (lang === 'es' ? companiesEs : companiesEn).find((company) => company.slug === id);
