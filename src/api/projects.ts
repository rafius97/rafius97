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
      'A flagship AI-native query engine acting as a unified virtual data lake. Expanded backend capabilities by developing and integrating MCP (Model Context Protocol) tools for verifiable, hallucination-free blockchain data retrieval in AI query engines, while leading the frontend implementation of a fully customizable analytics dashboard with Apache ECharts and multiple data source connectors.',
    link: 'https://nexus.nukl.ai/',
    shortDescription:
      'AI-native query engine with MCP integration for verifiable, hallucination-free blockchain data retrieval and customizable analytics dashboards.',
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
      'A decentralized, chain-agnostic cross-chain interoperability platform by the Nexera ecosystem. Led the comprehensive frontend migration from V1 to V2, translating complex Solidity logic into type-safe, responsive TypeScript interfaces. Ensured seamless cross-chain interoperability for secure token and NFT transfers across Ethereum, BNB Chain, Polygon, and Avalanche.',
    link: 'https://bridge.nexera.network/',
    shortDescription:
      'Cross-chain interoperability platform enabling secure token and NFT transfers across major blockchain networks.',
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
      'Maintained and optimized full-stack components (Frontend, Backend, and SDK) of a Liquidity Mining dApp, scaling the infrastructure to smoothly handle high-frequency Web3 interactions under intense network loads.',
    link: '#',
    shortDescription:
      'Full-stack Liquidity Mining infrastructure optimized for high-frequency DeFi interactions.',
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
      'A collaborative decentralized data ecosystem marketplace (formerly DataTunnel). Developed robust unit tests and securely deployed V2 smart contracts to production, while coordinating with the frontend team to implement new designs and integrate reactive state management for Web3 data flows.',
    link: 'https://app.nukl.ai/',
    shortDescription:
      'Decentralized data marketplace with production-grade smart contracts and reactive Web3 integrations.',
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
      'Full-stack Web3 platform for tracking Bitcoin sentiment. Engineered core smart contracts using Solidity and Hardhat to securely manage and store campaign survey data directly on-chain. Successfully integrated Chainlink Automation and Data Feeds to trigger and fetch real-time automated BTC price updates at precise timestamps.',
    repo: 'https://github.com/Nuklai?q=bitcoin-form',
    link: 'https://winner.nukl.ai/',
    shortDescription:
      'Full-stack Web3 sentiment platform with on-chain data storage and Chainlink-powered automated price feeds.',
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
      'Developed the core blockchain architecture and supporting backend services for a Web3 puzzle game built for a renowned music artist, delivering a seamless web gaming experience for a massive mainstream audience to collect NFT puzzle fragments.',
    link: '#',
    shortDescription:
      'Web3 puzzle game delivering a seamless NFT collectible experience for a massive mainstream audience.',
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
      'An innovative NFT marketplace enabling mainstream users to purchase NFTs via traditional fiat payment rails and crypto gateways (Wyre). Researched and integrated Shopify frameworks with Web3 features, and conducted critical feasibility analysis to migrate existing smart contracts to the Flow blockchain for scalability and gas optimization.',
    link: '#',
    shortDescription:
      'NFT marketplace bridging mainstream e-commerce with Web3 through Shopify integration and fiat payment gateways.',
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

export const projectsEs: Project[] = [
  {
    slug: 'nexus',
    companySlug: 'nuklai',
    title: 'Nexus',
    description:
      'Motor de consultas nativo de IA que funciona como un lago de datos virtual unificado. Amplié las capacidades del backend desarrollando e integrando herramientas MCP (Model Context Protocol) para la recuperación de datos blockchain verificables y sin alucinaciones en motores de consulta de IA, liderando a su vez la implementación frontend de un panel de analíticas totalmente personalizable con Apache ECharts y múltiples conectores de fuentes de datos.',
    link: 'https://nexus.nukl.ai/',
    shortDescription:
      'Motor de consultas con integración MCP para recuperación de datos blockchain verificable, sin alucinaciones, y paneles de analíticas personalizables.',
    achievements: [
      {
        title: 'Integración de IA y Blockchain',
        description:
          'Amplié el backend de IA existente desarrollando una nueva herramienta MCP para la recuperación de datos blockchain y la integré perfectamente en la interfaz del frontend.',
      },
      {
        title: 'Optimización de Plataforma',
        description:
          'Resolví errores críticos de Web3 e implementé mejoras integrales de UI/UX para asegurar la estabilidad y rendimiento de la plataforma.',
      },
      {
        title: 'Paneles de Datos Dinámicos',
        description:
          'Lideré la implementación del frontend de un panel totalmente personalizable, integrando ECharts para renderizar visualizaciones de datos dinámicas e interactivas.',
      },
      {
        title: 'Integración de Conectores de Datos',
        description:
          "Amplié el ecosistema frontend integrando nuevos conectores de fuentes de datos, incluyendo Google Cloud, MS SQL y AlloyDB, mejorando las capacidades de recuperación de datos de la plataforma.",
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
      'Plataforma de interoperabilidad cross-chain descentralizada del ecosistema Nexera. Lideré la migración completa del frontend de V1 a V2, traduciendo lógica compleja de Solidity a interfaces TypeScript con tipado estricto y responsivas. Aseguré la interoperabilidad fluida para la transferencia segura de tokens y NFTs a través de Ethereum, BNB Chain, Polygon y Avalanche.',
    link: 'https://bridge.nexera.network/',
    shortDescription:
      'Plataforma de interoperabilidad cross-chain para la transferencia segura de tokens y NFTs a través de redes blockchain principales.',
    achievements: [
      {
        title: 'Optimización del Proyecto',
        description:
          'Identifiqué y resolví proactivamente errores críticos del frontend en V1, mejorando significativamente la estabilidad y el rendimiento de la dApp.',
      },
      {
        title: 'Evolución de la Interfaz',
        description:
          'Lideré la migración completa del diseño de V2, ofreciendo una experiencia de usuario modernizada alineada con los estándares descentralizados.',
      },
      {
        title: 'Arquitectura Web3',
        description:
          'Integré funciones Web3 robustas, asegurando una interoperabilidad fluida en múltiples entornos de blockchain.',
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
        title: 'Conectar Billetera',
        description: 'Interfaz de conexión de billetera para transferencias entre cadenas.',
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
    title: 'LMaaS',
    description:
      'Gestioné y optimicé los componentes full-stack (Frontend, Backend y SDK) de una dApp de Minería de Liquidez, escalando la infraestructura para soportar interacciones Web3 de alta frecuencia bajo escenarios de alta carga de red.',
    link: '#',
    shortDescription:
      'Infraestructura full-stack de Minería de Liquidez optimizada para interacciones DeFi de alta frecuencia.',
    achievements: [
      {
        title: 'Mantenimiento Full-Stack',
        description:
          'Gestioné y mejoré los componentes de frontend, backend y SDK, asegurando un ecosistema confiable para proveedores de liquidez.',
      },
      {
        title: 'Escalado Web3',
        description:
          'Optimizé funcionalidades Web3 clave para manejar interacciones de alta frecuencia dentro de la dApp de Minería de Liquidez.',
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
      'Ecosistema descentralizado y colaborativo de mercado de datos (anteriormente DataTunnel). Desarrollé pruebas unitarias robustas y desplegué de manera segura los contratos inteligentes V2 en producción, coordinando con el equipo de frontend para implementar nuevos diseños e integrar estados reactivos masivos para flujos de datos Web3.',
    link: 'https://app.nukl.ai/',
    shortDescription:
      'Mercado de datos descentralizado con contratos inteligentes de nivel producción e integraciones Web3 reactivas.',
    achievements: [
      {
        title: 'Despliegue de Contratos Inteligentes',
        description:
          'Desarrollé pruebas unitarias robustas y desplegué de manera segura contratos inteligentes V2 en producción.',
      },
      {
        title: 'Coordinación de Frontend',
        description:
          'Coordiné con el equipo de frontend para ejecutar nuevos diseños y características.',
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
    title: 'Campaña de Investigación de Sentimiento de Bitcoin',
    description:
      'Plataforma Web3 full-stack para rastrear el sentimiento sobre Bitcoin. Desarrollé la arquitectura de contratos inteligentes centrales con Solidity y Hardhat para gestionar y almacenar datos de encuestas de forma segura on-chain. Integré con éxito Automatizaciones de Chainlink y Data Feeds para obtener actualizaciones del precio de BTC automatizadas y en tiempo real en marcas de tiempo precisas.',
    repo: 'https://github.com/Nuklai?q=bitcoin-form',
    link: 'https://winner.nukl.ai/',
    shortDescription:
      'Plataforma de sentimiento Web3 full-stack con almacenamiento on-chain y feeds de precios automatizados con Chainlink.',
    achievements: [
      {
        title: 'Implementación de Frontend e Integración Web3',
        description:
          'Traducí complejos diseños de Figma a un frontend completamente funcional y lo integré sin problemas con capacidades Web3 para manejar interacciones de blockchain.',
      },
      {
        title: 'Arquitectura de Contratos Inteligentes',
        description:
          'Desarrollé de forma independiente los contratos inteligentes centrales utilizando Solidity y Hardhat para gestionar de manera segura los datos de la campaña en la cadena.',
      },
      {
        title: 'Automatización de Chainlink',
        description:
          'Integré con éxito Chainlink Data Feeds y mantenimiento basado en tiempo para activar y obtener actualizaciones automatizadas del precio de BTC exactamente en las marcas de tiempo requeridas.',
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
        description: 'El estado inicial del formulario de encuesta sobre el sentimiento de Bitcoin.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-filled.png',
        type: 'image',
        title: 'Formulario de Encuesta Lleno',
        description: 'Un formulario de encuesta completo listo para ser enviado.',
      },
      {
        resource:
          'src/assets/projects/bitcoin-campaign/btc-survey-form-blockchain.png',
        type: 'image',
        title: 'Procesamiento de Transacción Blockchain',
        description: 'Estado pendiente de transacción Web3 durante el envío de la encuesta.',
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
    title: 'Puzzle de Def Leppard',
    description:
      'Desarrollé la arquitectura blockchain central y los servicios backend de un juego de rompecabezas Web3 creado para un artista musical de renombre, ofreciendo una experiencia de juego web fluida para una audiencia masiva mainstream que recolecta fragmentos de NFTs.',
    link: '#',
    shortDescription:
      'Juego de rompecabezas Web3 con experiencia fluida de colección de NFTs para una audiencia mainstream masiva.',
    achievements: [
      {
        title: 'Web3 Full-Stack',
        description:
          'Contribuí enormemente a la arquitectura blockchain y los servicios backend que apoyan el juego.',
      },
      {
        title: 'Adopción Principal',
        description:
          'Ayudé a cerrar la brecha entre el entretenimiento y Web3 ofreciendo una aplicación lista para el consumidor de alto perfil.',
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
        title: 'Página de Aterrizaje',
        description: 'El punto de entrada principal para el juego de rompecabezas Def Leppard.',
      },
      {
        resource:
          'src/assets/projects/defleppard-puzzle/defleppard-cover-image.jpg',
        type: 'image',
        title: 'Imagen de Portada',
        description: 'Portada promocional principal para el juego de rompecabezas Def Leppard.',
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
        description: 'Estado de la UI mostrando fragmentos de rompecabezas faltantes.',
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
        title: 'Integración Shopify',
        description:
          'Investigué e integré los marcos de Shopify, habilitando enfoques tradicionales de fiat a la compra de NFTs.',
      },
      {
        title: 'Investigación Blockchain',
        description:
          'Contribuí investigación crítica para la migración de los contratos inteligentes actuales a la blockchain Flow para una mejor escalabilidad.',
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
