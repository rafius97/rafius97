import type { ImageMetadata } from 'astro';
import { getTechnologyByName, type Technology } from './technologies';

// Automatically import all images in src/assets/projects/
// We use eager: true to stay synchronous with the current API structure
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const projectVideos = import.meta.glob<{ default: string }>(
  '/src/assets/projects/**/*.{mp4,webm}',
  { eager: true, query: '?url' },
);

export interface ProjectAchievement {
  title: string;
  description: string;
}

export interface ProjectView {
  resource: string;
  type: 'image' | 'video';
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  companySlug: string;
  title: string;
  description: string;
  repo?: string;
  link?: string;
  shortDescription: string;
  achievements: ProjectAchievement[];
  technologies: Technology[];
  headerImage: string;
  featured?: boolean;
  views?: ProjectView[];
  show?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'nexus',
    companySlug: 'nuklai',
    title: 'Nexus',
    description:
      'A flagship AI-native query engine acting as a unified virtual data lake. By bridging fragmented data sources and integrating the Model Context Protocol (MCP), it eliminates AI hallucinations to provide traceable, accurate, and seamless data retrieval.',
    link: 'https://nexus.nukl.ai/',
    shortDescription:
      'An AI-native query engine that unifies fragmented data sources, providing verifiable and hallucination-free data retrieval for modular AI agents.',
    achievements: [
      {
        title: 'AI & Blockchain Integration',
        description:
          'Expanded the existing AI backend by developing a new MCP tool for blockchain data retrieval, and seamlessly integrated it into the frontend interface.',
      },
      {
        title: 'Platform Optimization',
        description:
          'Resolved critical Web3 bugs and implemented comprehensive UI/UX improvements to ensure platform stability and performance.',
      },
      {
        title: 'Dynamic Data Dashboards',
        description:
          'Led the frontend implementation of a fully customizable dashboard, integrating ECharts to render dynamic and interactive data visualizations.',
      },
      {
        title: 'Data Connector Integrations',
        description:
          "Expanded the frontend ecosystem by integrating new data source connectors—including Google Cloud, MS SQL, and AlloyDB—enhancing the platform's data retrieval capabilities.",
      },
    ],
    technologies: [
      getTechnologyByName('HTML5'),
      getTechnologyByName('CSS3'),
      getTechnologyByName('Vite'),
      getTechnologyByName('Vue'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('Python'),
      getTechnologyByName('FastAPI'),
      getTechnologyByName('Echarts'),
    ],
    headerImage: 'src/assets/projects/nexus/nexus-header-image.png',
    featured: true,
    views: [
      {
        resource: 'src/assets/projects/nexus/workspace-select-connectors.png',
        type: 'image',
        title: 'Data Connectors Selection',
        description:
          'Interface for selecting and integrating various data source connectors.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-tab-widgets-empty.jpeg',
        type: 'image',
        title: 'Empty Dashboard Tab',
        description:
          'The initial state of a customizable dashboard tab before adding widgets.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-widget-first-step.jpeg',
        type: 'image',
        title: 'Widget Creation - Choose Mode',
        description: 'First step in creating a dynamic data widget.',
      },
      {
        resource:
          'src/assets/projects/nexus/dashboard-widget-second-step-chart.jpeg',
        type: 'image',
        title: 'Widget Creation - Choose Chart',
        description:
          'Second step focusing on chart selection and configuration.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-define-sql-step.jpeg',
        type: 'image',
        title: 'Widget Creation - Define SQL',
        description:
          'Third step defining the SQL query for the widget data source.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-playground-step.jpeg',
        type: 'image',
        title: 'Widget Creation - Playground',
        description:
          'Last step is a playground interface for testing and visualizing the widget data.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-all-widget-charts.jpeg',
        type: 'image',
        title: 'Populated Dashboard',
        description:
          'A fully populated dashboard displaying multiple interactive ECharts widgets.',
      },
      {
        resource: 'src/assets/projects/nexus/settings-ai-mcp-selection.png',
        type: 'image',
        title: 'AI MCP Selection',
        description:
          'Settings interface for selecting and configuring AI Model Context Protocol tools.',
      },
    ],
  },
  {
    slug: 'alliancebridge',
    companySlug: 'allianceblock',
    title: 'AllianceBridge',
    description:
      'A decentralized, chain-agnostic cross-chain interoperability platform designed by the Nexera ecosystem. It enables users to seamlessly and securely transfer tokens and NFTs across major blockchain networks like Ethereum, BNB Chain, Polygon, and Avalanche.',
    link: 'https://bridge.nexera.network/',
    shortDescription:
      'Seamless cross-chain interoperability platform for transferring tokens and NFTs.',
    achievements: [
      {
        title: 'Project Optimization',
        description:
          'Proactively identified and resolved critical frontend bugs in V1, significantly improving dApp stability and performance.',
      },
      {
        title: 'Interface Evolution',
        description:
          'Led the comprehensive V2 design migration, delivering a modernized user experience aligned with decentralized standards.',
      },
      {
        title: 'Web3 Architecture',
        description:
          'Integrated robust Web3 features, ensuring seamless interoperability across multiple blockchain environments.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Wagmi'),
    ],
    headerImage:
      'src/assets/projects/alliancebridge/alliancebridge-header-image.png',
    featured: true,
    views: [
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebridge-connect-wallet.png',
        type: 'image',
        title: 'Connect Wallet',
        description: 'Wallet connection interface for cross-chain transfers.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebrid-transfer-tokens.png',
        type: 'image',
        title: 'Transfer Tokens',
        description:
          'Interface for transferring tokens across different blockchain networks.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebridge-transfer-tokens-messages.png',
        type: 'image',
        title: 'Transfer Messages',
        description:
          'Transaction status and messaging during cross-chain transfers.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebridge-claim-tokens.png',
        type: 'image',
        title: 'Claim Tokens',
        description:
          'Interface for claiming bridged tokens on the destination network.',
      },
    ],
  },
  {
    slug: 'lmaas',
    companySlug: 'allianceblock',
    title: 'LMaaS',
    description:
      'Collaborated with a team to maintain and enhance the frontend, SDK, backend, and Web3 functionalities of Liquidity Mining dApp.',
    link: '#',
    shortDescription:
      'Comprehensive Liquidity Mining ecosystem for DeFi liquidity providers.',
    achievements: [
      {
        title: 'Full-Stack Maintenance',
        description:
          'Managed and enhanced the frontend, backend, and SDK components, ensuring a reliable ecosystem for liquidity providers.',
      },
      {
        title: 'Web3 Scaling',
        description:
          'Optimized core Web3 functionalities to handle high-frequency interactions within the Liquidity Mining dApp.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Wagmi'),
    ],
    headerImage: 'src/assets/projects/lmaas/header-image.png',
  },

  {
    slug: 'nuklai-marketplace',
    companySlug: 'nuklai',
    title: 'Nuklai Marketplace',
    description:
      'A collaborative decentralized data ecosystem marketplace (formerly DataTunnel).',
    link: 'https://app.nukl.ai/',
    shortDescription:
      'Innovative decentralized data ecosystem marketplace with secure Web3 integrations.',
    achievements: [
      {
        title: 'Smart Contract Deployment',
        description:
          'Developed robust unit tests and securely deployed V2 smart contracts to production.',
      },
      {
        title: 'Frontend Coordination',
        description:
          'Coordinated with the frontend team to execute new designs and features.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Vite'),
      getTechnologyByName('Viem'),
      getTechnologyByName('Wagmi'),
    ],
    headerImage: 'src/assets/projects/marketplace/header-image.svg',
    featured: true,
  },
  {
    slug: 'nuklai-bitcoin-campaign',
    companySlug: 'nuklai',
    title: 'Bitcoin Sentiment Research Campaign',
    description:
      'Full-stack Web3 platform for tracking Bitcoin sentiment. Implemented the frontend from Figma designs, integrated Web3 capabilities, and engineered custom smart contracts using Chainlink Automation for secure on-chain price fetching.',
    repo: 'https://github.com/Nuklai?q=bitcoin-form',
    link: 'https://winner.nukl.ai/',
    shortDescription:
      'Full-stack Web3 sentiment platform leveraging custom smart contracts and Chainlink Oracles.',
    achievements: [
      {
        title: 'Frontend Implementation & Web3 Integration',
        description:
          'Translated complex Figma designs into a fully functional frontend and seamlessly integrated Web3 capabilities to handle blockchain interactions.',
      },
      {
        title: 'Smart Contract Architecture',
        description:
          'Independently developed the core smart contracts using Solidity and Hardhat to securely manage campaign data on-chain.',
      },
      {
        title: 'Chainlink Automation',
        description:
          'Successfully integrated Chainlink Data Feeds and Time-based Upkeep to reliably trigger and fetch automated BTC price updates exactly at required timestamps.',
      },
    ],
    technologies: [
      getTechnologyByName('Vite'),
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Ethers'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('Viem'),
    ],
    headerImage: 'src/assets/projects/nuklai/image.png',
    featured: true,
    views: [
      {
        resource: 'src/assets/projects/bitcoin-campaign/landing-page.jpeg',
        type: 'image',
        title: 'Campaign Landing Page',
        description:
          'The main landing page for the Bitcoin Sentiment Research Campaign.',
      },
      {
        resource: 'src/assets/projects/bitcoin-campaign/btc-survey-form.png',
        type: 'image',
        title: 'Survey Form',
        description: 'The initial state of the Bitcoin sentiment survey form.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-filled.png',
        type: 'image',
        title: 'Filled Survey Form',
        description: 'A completed survey form ready for submission.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-blockchain.png',
        type: 'image',
        title: 'Blockchain Transaction Processing',
        description: 'Web3 transaction pending state during survey submission.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-completed.jpeg',
        type: 'image',
        title: 'Survey Completed',
        description:
          'Confirmation screen after successful survey submission on the blockchain.',
      },
      {
        resource: 'src/assets/projects/bitcoin-campaign/winner-page.png',
        type: 'image',
        title: 'Campaign Winner Page',
        description:
          'The final page displaying the campaign results and the selected winner.',
      },
    ],
  },
  {
    slug: 'nuklai-wallet',
    companySlug: 'nuklai',
    title: 'Nuklai VM Frontend & Wallet',
    description:
      'The comprehensive frontend wallet and VM for the Nuklai Avalanche subnet. Led the frontend integration for a Cosmos-based blockchain, encompassing essential validator staking, funds redelegation, and reward claiming logic.',
    link: '#',
    shortDescription:
      'Feature-rich wallet and staking interface for the Nuklai blockchain ecosystem.',
    achievements: [
      {
        title: 'Frontend Leadership',
        description:
          'Led the frontend development for the VM interface, successfully mapping designs to a fully functional Web3 dApp.',
      },
      {
        title: 'Advanced Staking Features',
        description:
          'Integrated complex features like staking/unstaking to validators, funds redelegation, and reward tracking.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
    ],
    headerImage:
      'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2000',
    show: false,
  },
  {
    slug: 'def-leppard-puzzle-game',
    companySlug: 'cub3',
    title: 'Def Leppard Puzzle Game',
    description:
      'A uniquely tailored Web3 puzzle game developed for a renowned music artist. Managed both blockchain and backend development in a highly cross-functional environment to ensure a seamless consumer experience.',
    link: '#',
    shortDescription:
      'Tailored Web3 puzzle game experience built for a mainstream music artist.',
    achievements: [
      {
        title: 'Full-Stack Web3',
        description:
          'Contributed heavily to both the blockchain architecture and backend services supporting the game.',
      },
      {
        title: 'Mainstream Adoption',
        description:
          'Helped bridge the gap between entertainment and Web3 by delivering a high-profile, consumer-ready application.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Express.js'),
      getTechnologyByName('Ethers'),
      getTechnologyByName('Shopify'),
    ],
    headerImage:
      'src/assets/projects/defleppard-puzzle/defleppard-header-image.jpg',
    featured: true,
    views: [
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-landing-page.jpg',
        type: 'image',
        title: 'Landing Page',
        description: 'The main entry point for the Def Leppard puzzle game.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-cover-image.jpg',
        type: 'image',
        title: 'Cover Image',
        description: 'Main promotional cover for the Def Leppard puzzle game.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-puzzle-fragment.jpg',
        type: 'image',
        title: 'Puzzle Fragment',
        description: 'Users collect puzzle fragments as NFTs.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-fragment-missing.png',
        type: 'image',
        title: 'Missing Fragment',
        description: 'UI state showing missing puzzle fragments.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-fragments-claimed.jpg',
        type: 'image',
        title: 'Fragments Claimed',
        description:
          'Reward screen when a user successfully claims their fragments.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-shopify-testing.jpg',
        type: 'image',
        title: 'Shopify Integration',
        description:
          'Testing the Shopify store integration for purchasing NFTs.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-wyre-payments.mp4',
        type: 'video',
        title: 'Wyre Payments Integration',
        description:
          'Seamless fiat-to-crypto payments integration for mainstream users.',
      },
    ],
  },
  {
    slug: 'cub3-nft-marketplace',
    companySlug: 'cub3',
    title: 'E-commerce NFT Marketplace',
    description:
      'An innovative NFT marketplace featuring robust Shopify integrations for NFT purchases. Conducted deep research on cross-chain migrations (Flow blockchain) while advancing both blockchain and the core backend.',
    link: '#',
    shortDescription:
      'E-commerce integrated NFT marketplace featuring direct Shopify Web3 solutions.',
    achievements: [
      {
        title: 'Shopify Integration',
        description:
          'Researched and integrated Shopify frameworks, enabling traditional fiat and mainstream approaches to NFT purchasing.',
      },
      {
        title: 'Blockchain Research',
        description:
          'Contributed critical research towards migrating the current smart contracts onto the Flow blockchain for better scalability.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
    ],
    headerImage:
      'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2000',
    show: false,
  },
];

export const getProjects = () =>
  projects
    .filter((project) => project.show !== false)
    .map((project) => {
      let resolvedHeaderImage = project.headerImage;
      if (
        typeof project.headerImage === 'string' &&
        project.headerImage.startsWith('src/assets/')
      ) {
        const path = `/${project.headerImage}`;
        if (projectImages[path]) {
          resolvedHeaderImage = projectImages[path].default.src;
        }
      }

      const resolvedViews = project.views?.map((view) => {
        let resolvedResource = view.resource;
        if (
          typeof view.resource === 'string' &&
          view.resource.startsWith('src/assets/')
        ) {
          const path = `/${view.resource}`;
          if (view.type === 'image' && projectImages[path]) {
            resolvedResource = projectImages[path].default.src;
          } else if (view.type === 'video' && projectVideos[path]) {
            resolvedResource = projectVideos[path].default;
          }
        }
        return { ...view, resource: resolvedResource };
      });

      return {
        ...project,
        headerImage: resolvedHeaderImage,
        views: resolvedViews || [],
      };
    });

export const getProjectById = (id: string) =>
  getProjects().find((project) => project.slug === id);

export const getProjectsByCompanyId = (id: string) =>
  getProjects().filter((project) => project.companySlug === id);
