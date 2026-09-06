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

export const projectsEn: Project[] = [
  {
    slug: 'nexus',
    companySlug: 'nuklai',
    title: 'Nexus',
    description:
      'AI-native query engine and virtual data lake. Engineered scalable backend microservices with Python and FastAPI, integrating Model Context Protocol (MCP) tools for verifiable, hallucination-free data retrieval in AI query workflows. Architected the frontend analytics dashboard using Vue, TypeScript, and Apache ECharts, integrating enterprise connectors for Google Cloud, MS SQL, and AlloyDB.',
    link: 'https://nexus.nukl.ai/',
    shortDescription:
      'AI-native query engine featuring Python/FastAPI backend, MCP tools for verifiable data queries, and Apache ECharts analytics dashboards.',
    achievements: [
      {
        title: 'AI & MCP Backend Services',
        description:
          'Engineered scalable backend microservices using Python and FastAPI, developing custom MCP tools for verifiable, hallucination-free data retrieval in AI query engines.',
      },
      {
        title: 'Frontend Analytics Architecture',
        description:
          'Led the frontend architecture using Vue, TypeScript, and Apache ECharts to build an interactive, fully customizable analytics dashboard.',
      },
      {
        title: 'Enterprise Data Connectors',
        description:
          'Engineered frontend connectors for multiple enterprise data sources (including Google Cloud, MS SQL, and AlloyDB) to streamline data ingestion.',
      },
      {
        title: 'Performance & State Optimization',
        description:
          'Optimized complex reactive states and data hydration pipelines, resolving critical rendering bottlenecks and ensuring high performance.',
      },
    ],
    technologies: [
      getTechnologyByName('HTML5'),
      getTechnologyByName('CSS3'),
      getTechnologyByName('Vite'),
      getTechnologyByName('Vue'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Python'),
      getTechnologyByName('FastAPI'),
      getTechnologyByName('Echarts'),
      getTechnologyByName('Wagmi'),
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
      'A cross-chain bridge and interoperability platform enabling seamless asset transfers across blockchain ecosystems. Led the complete architectural migration from legacy V1 to V2, implementing a modular React and TypeScript frontend, abstracting complex distributed protocols into intuitive user flows, and enabling secure token and NFT transfers across Ethereum, BNB Chain, Polygon, and Avalanche.',
    link: 'https://bridge.nexera.network/',
    shortDescription:
      'Cross-chain bridge platform built with React and TypeScript, delivering secure multi-chain token and NFT transfers.',
    achievements: [
      {
        title: 'Full Architectural Migration (V1 to V2)',
        description:
          'Spearheaded the complete frontend migration to a modular, type-safe architecture in React and TypeScript, vastly improving performance and code maintainability.',
      },
      {
        title: 'Modular Component Architecture',
        description:
          'Developed reusable UI and multi-chain abstractions that streamlined complex cryptographic interactions into clear, user-friendly workflows.',
      },
      {
        title: 'Cross-Chain Transaction Pipelines',
        description:
          'Implemented reliable transaction pipelines with real-time status messaging for token and NFT transfers across Ethereum, BNB Chain, Polygon, and Avalanche.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Node.js'),
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
    title: 'LMaaS (Liquidity Mining as a Service)',
    description:
      'A distributed Liquidity Mining platform providing automated DeFi yield farming infrastructure. Maintained and scaled full-stack components across frontend interfaces, backend services, and client SDKs, optimizing transactional throughput and data synchronization under heavy network concurrency.',
    link: '#',
    shortDescription:
      'Distributed Liquidity Mining infrastructure optimized for high-throughput DeFi interactions and real-time state synchronization.',
    achievements: [
      {
        title: 'Full-Stack Architecture & SDKs',
        description:
          'Maintained and improved core frontend interfaces, backend microservices, and SDK packages, ensuring high reliability for liquidity providers.',
      },
      {
        title: 'High-Concurrency Scaling',
        description:
          'Optimized state caching, API responses, and blockchain communication to smoothly handle high-frequency interactions during peak market loads.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('TypeScript'),
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
      'A collaborative data marketplace enabling organizations and individuals to discover, monetize, and query structured datasets. Coordinated full-stack application development, authored robust unit test suites with Hardhat, securely deployed production V2 smart contracts, and integrated dynamic frontend state management for real-time data flows.',
    link: 'https://app.nukl.ai/',
    shortDescription:
      'Decentralized data marketplace with production-grade smart contracts, comprehensive unit testing, and reactive data flows.',
    achievements: [
      {
        title: 'Smart Contract Engineering & Testing',
        description:
          'Authored and tested production V2 smart contracts using Hardhat and Solidity, establishing automated unit test coverage to ensure transactional security.',
      },
      {
        title: 'Full-Stack Delivery & Reactive UI',
        description:
          'Coordinated with design and product teams to deliver responsive interfaces with reactive state management tailored to dynamic data streaming.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Vite'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Viem'),
      getTechnologyByName('Wagmi'),
    ],
    headerImage: 'src/assets/projects/marketplace/header-image.png',
    featured: true,
  },
  {
    slug: 'nuklai-bitcoin-campaign',
    companySlug: 'nuklai',
    title: 'Bitcoin Sentiment Research Campaign',
    description:
      'A full-stack research platform built to track and record public sentiment data on Bitcoin. Developed responsive user interfaces, implemented automated on-chain data storage using Solidity and Hardhat, and integrated Chainlink Automation and Data Feeds to automatically fetch and synchronize real-time BTC/USD pricing at scheduled intervals.',
    repo: 'https://github.com/Nuklai?q=bitcoin-form',
    link: 'https://winner.nukl.ai/',
    shortDescription:
      'Full-stack research platform featuring automated on-chain data persistence and Chainlink-powered market price feeds.',
    achievements: [
      {
        title: 'Full-Stack Web & Interface Implementation',
        description:
          'Built interactive, accessible user interfaces with seamless client-side state handling and form validation.',
      },
      {
        title: 'On-Chain Data Storage & Smart Contracts',
        description:
          'Engineered Solidity smart contracts using Hardhat to securely record and verify survey submissions directly on-chain.',
      },
      {
        title: 'Chainlink Automation & Price Feeds',
        description:
          'Integrated Chainlink Data Feeds with time-based Upkeep automation to fetch and synchronize live BTC/USD market pricing at exact timestamps without manual intervention.',
      },
    ],
    technologies: [
      getTechnologyByName('Vite'),
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Solidity'),
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
      'A full-stack gamified web platform and digital puzzle experience created for rock band Def Leppard. Developed backend API services, blockchain architecture, and Shopify store integrations with fiat payment rails (Wyre), allowing mainstream audiences to collect and claim digital puzzle fragments using standard credit and debit cards.',
    link: '#',
    shortDescription:
      'Gamified full-stack web platform connecting Shopify APIs, fiat payment processing, and digital collectible puzzle mechanics.',
    achievements: [
      {
        title: 'Backend Services & Session Architecture',
        description:
          'Developed backend services with Node.js and Express to manage gameplay sessions, fragment tracking, and transactional validation.',
      },
      {
        title: 'Shopify E-Commerce & Fiat On-Ramp',
        description:
          'Connected Shopify APIs with payment processing rails (Wyre), enabling mainstream users without crypto wallets to acquire digital collectibles with fiat currency.',
      },
      {
        title: 'Interactive Gamified UI',
        description:
          'Built dynamic frontend game interfaces in React, providing smooth animations and real-time visual feedback for collected puzzle fragments.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Express.js'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
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
      'An e-commerce marketplace platform bridging mainstream retail with Web3 digital assets. Integrated Shopify framework APIs with crypto gateways (Wyre) to process fiat payments, and performed technical research on migrating smart contracts to the Flow blockchain for improved transaction speed and reduced gas costs.',
    link: '#',
    shortDescription:
      'NFT marketplace bridging mainstream e-commerce with Web3 through Shopify integration and fiat payment gateways.',
    achievements: [
      {
        title: 'Shopify Integration & Fiat Rails',
        description:
          'Researched and integrated Shopify frameworks, enabling traditional fiat and mainstream payment approaches to NFT purchasing.',
      },
      {
        title: 'Blockchain Scalability Research',
        description:
          'Contributed critical research towards migrating existing smart contracts onto the Flow blockchain for better throughput and gas efficiency.',
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

export const projectsEs: Project[] = [
  {
    slug: 'nexus',
    companySlug: 'nuklai',
    title: 'Nexus',
    description:
      'Motor de consultas nativo de IA y lago de datos virtual. Diseñé microservicios backend con Python y FastAPI, integrando herramientas del Protocolo de Contexto de Modelos (MCP) para permitir a modelos de IA realizar consultas verificables y sin alucinaciones sobre conjuntos de datos distribuidos. Diseñé la arquitectura del panel de analíticas frontend utilizando Vue, TypeScript y Apache ECharts, con conectores empresariales para Google Cloud, MS SQL y AlloyDB.',
    link: 'https://nexus.nukl.ai/',
    shortDescription:
      'Motor de consultas nativo de IA con backend en Python/FastAPI, integración MCP para datos verificables y paneles de analíticas con Apache ECharts.',
    achievements: [
      {
        title: 'Servicios Backend de IA y MCP',
        description:
          'Desarrollé microservicios backend escalables en Python/FastAPI y herramientas MCP personalizadas para la recuperación de datos verificables y precisa en flujos de IA.',
      },
      {
        title: 'Arquitectura Frontend de Analíticas',
        description:
          'Lideré la arquitectura frontend con Vue, TypeScript y Apache ECharts para construir un panel de analíticas interactivo y totalmente configurable.',
      },
      {
        title: 'Conectores de Datos Empresariales',
        description:
          'Construí conectores frontend para fuentes de datos empresariales, incluyendo Google Cloud, MS SQL y AlloyDB, agilizando la ingesta de datos.',
      },
      {
        title: 'Optimización de Rendimiento y Estado',
        description:
          'Optimizé estados reactivos complejos y flujos de datos dinámicos, resolviendo cuellos de botella de renderizado y asegurando alto rendimiento.',
      },
    ],
    technologies: [
      getTechnologyByName('HTML5'),
      getTechnologyByName('CSS3'),
      getTechnologyByName('Vite'),
      getTechnologyByName('Vue'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Python'),
      getTechnologyByName('FastAPI'),
      getTechnologyByName('Echarts'),
      getTechnologyByName('Wagmi'),
    ],
    headerImage: 'src/assets/projects/nexus/nexus-header-image.png',
    featured: true,
    views: [
      {
        resource: 'src/assets/projects/nexus/workspace-select-connectors.png',
        type: 'image',
        title: 'Selección de Conectores de Datos',
        description:
          'Interfaz para seleccionar e integrar varios conectores de fuentes de datos.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-tab-widgets-empty.jpeg',
        type: 'image',
        title: 'Pestaña de Panel Vacía',
        description:
          'El estado inicial de una pestaña de panel personalizable antes de agregar widgets.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-widget-first-step.jpeg',
        type: 'image',
        title: 'Creación de Widget - Elegir Modo',
        description: 'Primer paso en la creación de un widget de datos dinámico.',
      },
      {
        resource:
          'src/assets/projects/nexus/dashboard-widget-second-step-chart.jpeg',
        type: 'image',
        title: 'Creación de Widget - Elegir Gráfico',
        description:
          'Segundo paso enfocado en la selección y configuración del gráfico.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-define-sql-step.jpeg',
        type: 'image',
        title: 'Creación de Widget - Definir SQL',
        description:
          'Tercer paso definiendo la consulta SQL para la fuente de datos del widget.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-playground-step.jpeg',
        type: 'image',
        title: 'Creación de Widget - Patio de Juegos',
        description:
          'El último paso es una interfaz de patio de juegos para probar y visualizar los datos del widget.',
      },
      {
        resource: 'src/assets/projects/nexus/dashboard-all-widget-charts.jpeg',
        type: 'image',
        title: 'Panel Poblado',
        description:
          'Un panel completamente poblado mostrando múltiples widgets de ECharts interactivos.',
      },
      {
        resource: 'src/assets/projects/nexus/settings-ai-mcp-selection.png',
        type: 'image',
        title: 'Selección de IA MCP',
        description:
          'Interfaz de configuración para seleccionar y configurar herramientas del Protocolo de Contexto de Modelos de IA.',
      },
    ],
  },
  {
    slug: 'alliancebridge',
    companySlug: 'allianceblock',
    title: 'AllianceBridge',
    description:
      'Plataforma de interoperabilidad y puente cross-chain para transferencias fluidas de activos entre ecosistemas blockchain. Lideré la migración arquitectónica completa de la versión legacy V1 a V2, implementando un frontend modular con React y TypeScript, abstrayendo protocolos distribuidos complejos en flujos de usuario intuitivos y permitiendo transferencias seguras de tokens y NFTs a través de Ethereum, BNB Chain, Polygon y Avalanche.',
    link: 'https://bridge.nexera.network/',
    shortDescription:
      'Plataforma de puente cross-chain desarrollada con React y TypeScript para transferencias seguras de tokens y NFTs.',
    achievements: [
      {
        title: 'Migración Arquitectónica Integral (V1 a V2)',
        description:
          'Lideré la migración completa del frontend hacia una arquitectura modular con tipado estricto en React y TypeScript, mejorando drásticamente el rendimiento y mantenibilidad.',
      },
      {
        title: 'Arquitectura de Componentes Modulares',
        description:
          'Desarrollé abstracciones reutilizables de UI que simplificaron interacciones criptográficas complejas en flujos de usuario intuitivos.',
      },
      {
        title: 'Tuberías de Transacciones Cross-Chain',
        description:
          'Implementé flujos de transacciones confiables con mensajería de estado en tiempo real para transferencias en Ethereum, BNB Chain, Polygon y Avalanche.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Node.js'),
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
        title: 'Conectar Billetera',
        description:
          'Interfaz de conexión de billetera para transferencias entre cadenas.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebrid-transfer-tokens.png',
        type: 'image',
        title: 'Transferir Tokens',
        description:
          'Interfaz para transferir tokens a través de diferentes redes de blockchain.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebridge-transfer-tokens-messages.png',
        type: 'image',
        title: 'Transferir Mensajes',
        description:
          'Estado de transacción y mensajería durante transferencias entre cadenas.',
      },
      {
        resource:
          'src/assets/projects/alliancebridge/alliancebridge-claim-tokens.png',
        type: 'image',
        title: 'Reclamar Tokens',
        description:
          'Interfaz para reclamar tokens puenteados en la red de destino.',
      },
    ],
  },
  {
    slug: 'lmaas',
    companySlug: 'allianceblock',
    title: 'LMaaS (Minería de Liquidez como Servicio)',
    description:
      'Plataforma distribuida de Minería de Liquidez que proporciona infraestructura automatizada para yield farming en DeFi. Mantuve y escalé los componentes full-stack a través del frontend, servicios backend y SDKs, optimizando el rendimiento transaccional y la sincronización de datos bajo alta concurrencia.',
    link: '#',
    shortDescription:
      'Infraestructura distribuida de Minería de Liquidez optimizada para interacciones DeFi de alta frecuencia y sincronización en tiempo real.',
    achievements: [
      {
        title: 'Arquitectura Full-Stack y SDKs',
        description:
          'Mantuve y optimicé interfaces frontend, microservicios backend y paquetes SDK, asegurando alta confiabilidad para proveedores de liquidez.',
      },
      {
        title: 'Escalado de Alta Concurrencia',
        description:
          'Optimizé el almacenamiento en caché de estados, respuestas de APIs y comunicación blockchain para manejar interacciones de alta frecuencia bajo picos de carga.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('TypeScript'),
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
      'Mercado colaborativo de datos que permite a organizaciones e individuos descubrir, monetizar y consultar conjuntos de datos estructurados. Coordiné el desarrollo de la aplicación full-stack, desarrollé pruebas unitarias exhaustivas con Hardhat, desplegué de forma segura contratos inteligentes V2 en producción e integré gestión reactiva de estados en frontend para flujos de datos en tiempo real.',
    link: 'https://app.nukl.ai/',
    shortDescription:
      'Mercado de datos descentralizado con contratos inteligentes de nivel producción, pruebas unitarias exhaustivas y flujos reactivos.',
    achievements: [
      {
        title: 'Desarrollo de Smart Contracts y Pruebas Unitarias',
        description:
          'Diseñé y probé contratos inteligentes V2 con Hardhat y Solidity, estableciendo cobertura de pruebas automatizadas para garantizar confiabilidad transaccional.',
      },
      {
        title: 'Entrega Full-Stack y UI Reactiva',
        description:
          'Coordiné con equipos de diseño y producto para entregar interfaces responsivas con gestión reactiva de estados para flujos de datos dinámicos.',
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
    headerImage: 'src/assets/projects/marketplace/header-image.png',
    featured: true,
  },
  {
    slug: 'nuklai-bitcoin-campaign',
    companySlug: 'nuklai',
    title: 'Campaña de Investigación de Sentimiento de Bitcoin',
    description:
      'Plataforma de investigación full-stack desarrollada para recopilar y registrar el sentimiento público sobre Bitcoin. Desarrollé interfaces de usuario responsivas, implementé almacenamiento de datos on-chain con Solidity y Hardhat, e integré Chainlink Automation y Data Feeds para obtener y sincronizar automáticamente precios de mercado BTC/USD en intervalos programados.',
    repo: 'https://github.com/Nuklai?q=bitcoin-form',
    link: 'https://winner.nukl.ai/',
    shortDescription:
      'Plataforma de investigación full-stack con persistencia on-chain automatizada y feeds de precios de mercado con Chainlink.',
    achievements: [
      {
        title: 'Implementación Web e Interfaces Full-Stack',
        description:
          'Construí interfaces de usuario interactivas y accesibles con manejo fluido de estado del lado del cliente y validación de formularios.',
      },
      {
        title: 'Almacenamiento On-Chain y Smart Contracts',
        description:
          'Diseñé contratos inteligentes en Solidity utilizando Hardhat para registrar y verificar envíos de encuestas directamente on-chain.',
      },
      {
        title: 'Automatización y Feeds de Precios de Chainlink',
        description:
          'Integré Chainlink Data Feeds con mantenimiento automatizado por tiempo (Upkeep) para consultar y sincronizar precios BTC/USD en marcas de tiempo exactas.',
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
        title: 'Página de Inicio de la Campaña',
        description:
          'La página de inicio principal para la Campaña de Investigación de Sentimiento de Bitcoin.',
      },
      {
        resource: 'src/assets/projects/bitcoin-campaign/btc-survey-form.png',
        type: 'image',
        title: 'Formulario de Encuesta',
        description:
          'El estado inicial del formulario de encuesta sobre el sentimiento de Bitcoin.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-filled.png',
        type: 'image',
        title: 'Formulario de Encuesta Lleno',
        description:
          'Un formulario de encuesta completo listo para ser enviado.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-blockchain.png',
        type: 'image',
        title: 'Procesamiento de Transacción Blockchain',
        description:
          'Estado pendiente de transacción Web3 durante el envío de la encuesta.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-completed.jpeg',
        type: 'image',
        title: 'Encuesta Completada',
        description:
          'Pantalla de confirmación tras el envío exitoso de la encuesta en la blockchain.',
      },
      {
        resource: 'src/assets/projects/bitcoin-campaign/winner-page.png',
        type: 'image',
        title: 'Página de Ganador de la Campaña',
        description:
          'La página final mostrando los resultados de la campaña y el ganador seleccionado.',
      },
    ],
  },
  {
    slug: 'nuklai-wallet',
    companySlug: 'nuklai',
    title: 'Nuklai VM Frontend & Billetera',
    description:
      'La billetera integral de frontend y la máquina virtual (VM) para la subred de Avalanche de Nuklai. Lideré la integración frontend para una blockchain basada en Cosmos, abarcando el replanteo esencial a validadores, la redelegación de fondos y la lógica de reclamo de recompensas.',
    link: '#',
    shortDescription:
      'Billetera rica en características e interfaz de staking para el ecosistema blockchain de Nuklai.',
    achievements: [
      {
        title: 'Liderazgo de Frontend',
        description:
          'Lideré el desarrollo del frontend para la interfaz VM, logrando mapear diseños a una dApp Web3 completamente funcional.',
      },
      {
        title: 'Características Avanzadas de Staking',
        description:
          'Integré funciones complejas como hacer/deshacer staking a validadores, redelegación de fondos y seguimiento de recompensas.',
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
    title: 'Juego de Rompecabezas Def Leppard',
    description:
      'Plataforma web gamificada full-stack y experiencia de rompecabezas digital desarrollada para la banda de rock Def Leppard. Desarrollé servicios de APIs backend, arquitectura blockchain e integraciones de tienda Shopify con pasarelas de pago fiat (Wyre), permitiendo a audiencias mainstream recolectar y reclamar fragmentos de rompecabezas digitales mediante tarjetas tradicionales.',
    link: '#',
    shortDescription:
      'Plataforma web gamificada full-stack que conecta APIs de Shopify, pagos fiat y mecánicas de rompecabezas de coleccionables digitales.',
    achievements: [
      {
        title: 'Servicios Backend y Arquitectura de Sesiones',
        description:
          'Desarrollé servicios backend con Node.js y Express para gestionar sesiones de juego, seguimiento de fragmentos y validación transaccional.',
      },
      {
        title: 'E-Commerce con Shopify y Pagos Fiat',
        description:
          'Conecté APIs de Shopify con pasarelas de pago (Wyre), permitiendo a usuarios tradicionales sin billeteras cripto adquirir coleccionables digitales con moneda local.',
      },
      {
        title: 'UI Gamificada e Interactiva',
        description:
          'Construí interfaces de juego dinámicas en React, ofreciendo animaciones fluidas y retroalimentación visual en tiempo real para los fragmentos recolectados.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Express.js'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
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
        title: 'Página de Aterrizaje',
        description:
          'El punto de entrada principal para el juego de rompecabezas Def Leppard.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-cover-image.jpg',
        type: 'image',
        title: 'Imagen de Portada',
        description:
          'Portada promocional principal para el juego de rompecabezas Def Leppard.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-puzzle-fragment.jpg',
        type: 'image',
        title: 'Fragmento de Rompecabezas',
        description: 'Los usuarios recolectan fragmentos del rompecabezas como NFTs.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-fragment-missing.png',
        type: 'image',
        title: 'Fragmento Faltante',
        description:
          'Estado de la UI mostrando fragmentos de rompecabezas faltantes.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-fragments-claimed.jpg',
        type: 'image',
        title: 'Fragmentos Reclamados',
        description:
          'Pantalla de recompensa cuando un usuario reclama exitosamente sus fragmentos.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-shopify-testing.jpg',
        type: 'image',
        title: 'Integración Shopify',
        description:
          'Probando la integración de la tienda Shopify para la compra de NFTs.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-wyre-payments.mp4',
        type: 'video',
        title: 'Integración de Pagos Wyre',
        description:
          'Integración de pagos fiat a cripto sin problemas para usuarios convencionales.',
      },
    ],
  },
  {
    slug: 'cub3-nft-marketplace',
    companySlug: 'cub3',
    title: 'Mercado E-commerce de NFT',
    description:
      'Mercado NFT innovador que permite a usuarios la compra directa de NFTs utilizando métodos de pago tradicionales y pasarelas fiat-a-cripto (Wyre). Investigué e integré el core de Shopify con Web3, y llevé a cabo la investigación técnica y viabilidad de migración de contratos inteligentes hacia la blockchain Flow para optimizar la escalabilidad y reducir costos de gas.',
    link: '#',
    shortDescription:
      'Mercado NFT que conecta e-commerce con Web3 mediante integración Shopify y pasarelas de pago fiat.',
    achievements: [
      {
        title: 'Integración Shopify y Pasarelas Fiat',
        description:
          'Investigué e integré los marcos de Shopify, habilitando enfoques tradicionales de fiat a la compra de NFTs.',
      },
      {
        title: 'Investigación de Escalabilidad Blockchain',
        description:
          'Contribuí investigación crítica para la migración de los contratos inteligentes actuales a la blockchain Flow para una mejor escalabilidad y reducción de costos.',
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

export const getProjects = (lang: 'en' | 'es' = 'en') =>
  (lang === 'es' ? projectsEs : projectsEn)
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

export const getProjectById = (id: string, lang: 'en' | 'es' = 'en') =>
  getProjects(lang).find((project) => project.slug === id);

export const getProjectsByCompanyId = (id: string, lang: 'en' | 'es' = 'en') =>
  getProjects(lang).filter((project) => project.companySlug === id);
