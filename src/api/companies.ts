import type { ImageMetadata } from 'astro';
import AllianceBlockCompany from '@assets/companies/allianceblock.png';
import Cub3Company from '@assets/companies/cub3.jpg';
import NuklaiCompany from '@assets/companies/nuklai.svg';
import AlcaldiaInfanteCompany from '@assets/companies/alcaldia-infante.png';
import { getTechnologyByName, type Technology } from './technologies';

export interface Company {
  slug: string;
  name: string;
  logo: ImageMetadata;
  position: string;
  duration: string;
  description: string;
  responsibilities: { title: string; description: string }[];
  technologies: Technology[];
}

export const companiesEn: Company[] = [
  {
    slug: 'nuklai',
    name: 'Nuklai',
    logo: NuklaiCompany,
    position: 'Fullstack Blockchain Developer',
    duration: 'November 2023 - August 2026',
    description:
      'A collaborative decentralized data ecosystem and smart data network powering next-generation AI and verifiable data intelligence.',
    responsibilities: [
      {
        title: 'Distributed Full-Stack Applications',
        description:
          'Led the end-to-end full-stack development of distributed applications, bridging frontend, backend services, APIs, and blockchain layers.',
      },
      {
        title: 'Scalable Backend & AI MCP Services',
        description:
          'Designed scalable backend microservices using Python and FastAPI, integrating Model Context Protocol (MCP) to enable hallucination-free AI queries over verifiable data.',
      },
      {
        title: 'Frontend Analytics Architecture',
        description:
          'Led the frontend architecture of Nexus using Vue, TypeScript, and Apache ECharts to build an interactive, fully customizable analytics dashboard.',
      },
      {
        title: 'Business Logic & Smart Contracts',
        description:
          'Developed business logic and smart contracts in Solidity with Hardhat, ensuring transactional integrity and decentralized on-chain persistence.',
      },
      {
        title: 'Chainlink Data Feeds & Automation',
        description:
          'Integrated Chainlink Automation and Data Feeds to continuously fetch and synchronize BTC/USD market data with smart contracts in real time.',
      },
      {
        title: 'Performance & State Optimization',
        description:
          'Engineered performance optimizations, managed complex reactive application states, and streamlined real-time data ingestion pipelines.',
      },
    ],
    technologies: [
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Python'),
      getTechnologyByName('FastAPI'),
      getTechnologyByName('Vue'),
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Echarts'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
      getTechnologyByName('Docker'),
    ],
  },
  {
    slug: 'cub3',
    name: 'CUB3',
    logo: Cub3Company,
    position: 'Fullstack Blockchain Developer (Part-Time)',
    duration: 'September 2021 - May 2022',
    description:
      'A customer engagement platform blending Web3 technology with loyalty programs, enabling mainstream consumer brands to launch digital asset experiences.',
    responsibilities: [
      {
        title: 'Backend Services & Web Architecture',
        description:
          'Designed backend services and web architectures for consumer-facing Web3 applications tailored to mainstream audiences.',
      },
      {
        title: 'Def Leppard Gamified Web3 Experience',
        description:
          'Architected the blockchain layer and backend services for an interactive Web3 puzzle game developed for rock band Def Leppard.',
      },
      {
        title: 'Full-Stack Integrations',
        description:
          'Implemented end-to-end integrations connecting React frontends, Node.js/Express APIs, Solidity contracts, and Ethers.js/Hardhat tooling.',
      },
      {
        title: 'Shopify E-Commerce & Web3 Rails',
        description:
          'Integrated Shopify APIs with Web3 infrastructure to provide a seamless NFT e-commerce checkout flow supporting traditional fiat payments.',
      },
      {
        title: 'Smart Contract Migration Research',
        description:
          'Conducted feasibility studies on migrating smart contracts to the Flow blockchain to evaluate scalability gains and gas cost reductions.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Express.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Ethers'),
      getTechnologyByName('Shopify'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
    ],
  },
  {
    slug: 'allianceblock',
    name: 'AllianceBlock',
    logo: AllianceBlockCompany,
    position: 'Frontend Web3 Developer',
    duration: 'July 2021 - October 2023',
    description:
      'A decentralized blockchain infrastructure provider building seamless financial pipelines, cross-chain bridges, and high-frequency DeFi protocols.',
    responsibilities: [
      {
        title: 'End-to-End Web3 Architecture',
        description:
          'Designed and maintained comprehensive Web3 architectures for DeFi applications across frontend interfaces, backend services, and client SDKs.',
      },
      {
        title: 'AllianceBridge Migration (V1 to V2)',
        description:
          'Led the full migration of AllianceBridge from legacy V1 to V2, delivering a responsive, modular interface built with React and TypeScript.',
      },
      {
        title: 'Reusable Component Systems',
        description:
          'Built modular, reusable component libraries to abstract complex multi-chain interactions into intuitive user workflows.',
      },
      {
        title: 'Cross-Chain Asset Transfers',
        description:
          'Engineered transaction flows for token and NFT transfers across Ethereum, BNB Chain, Polygon, and Avalanche.',
      },
      {
        title: 'High-Frequency Web3 Optimization',
        description:
          'Optimized frontend performance, SDK state management, and backend communication for high-frequency Web3 applications.',
      },
      {
        title: 'Liquidity Mining (LMaaS)',
        description:
          'Maintained and scaled the Liquidity Mining as a Service (LMaaS) product to ensure reliable execution during peak network loads.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
      getTechnologyByName('Docker'),
    ],
  },
  {
    slug: 'alcaldia-infante',
    name: 'Alcaldía de Infante',
    logo: AlcaldiaInfanteCompany,
    position: 'Software Engineer',
    duration: 'January 2020 - March 2021',
    description:
      'Financial and administrative enterprise software for Public Administration, managing municipal budgets, procurement, commitments, payments, treasury operations, and payroll.',
    responsibilities: [
      {
        title: 'Financial & Administrative Platform',
        description:
          'Maintained and optimized a mission-critical Public Administration platform managing municipal budgets, procurement, commitments, payments, treasury operations, and payroll.',
      },
      {
        title: 'Backend & PostgreSQL Engineering',
        description:
          'Engineered and maintained backend logic and PostgreSQL implementations in a legacy system, including complex SQL queries, stored procedures, views, and transactional workflows.',
      },
      {
        title: 'Business Rules & Workflow Enhancements',
        description:
          'Implemented process improvements and system fixes while maintaining strict compatibility with established administrative rules and database-driven workflows.',
      },
      {
        title: 'Production Incident Resolution',
        description:
          'Collaborated closely with administrative staff to investigate production incidents, reproduce business edge cases, and validate data fixes directly on transactional records.',
      },
      {
        title: 'Complex Relational Data Models',
        description:
          'Worked extensively with complex relational schemas featuring composite keys, legacy database structures, database functions, and business logic embedded directly in the data layer.',
      },
    ],
    technologies: [
      getTechnologyByName('PostgreSQL'),
      getTechnologyByName('Bash'),
      getTechnologyByName('PHP'),
      getTechnologyByName('CodeIgniter'),
    ],
  },
];

export const companiesEs: Company[] = [
  {
    slug: 'nuklai',
    name: 'Nuklai',
    logo: NuklaiCompany,
    position: 'Desarrollador Fullstack Blockchain',
    duration: 'Noviembre 2023 - Agosto 2026',
    description:
      'Ecosistema de datos descentralizado y colaborativo que impulsa la próxima generación de IA e inteligencia de datos verificable.',
    responsibilities: [
      {
        title: 'Aplicaciones Full-Stack Distribuidas',
        description:
          'Lideré el desarrollo full-stack de aplicaciones distribuidas integrando frontend, backend, APIs y tecnologías blockchain.',
      },
      {
        title: 'Backend Escalable y Servicios MCP para IA',
        description:
          'Diseñé servicios backend escalables utilizando Python y FastAPI, incluyendo integración con Model Context Protocol (MCP) para consultas de IA sobre datos verificables.',
      },
      {
        title: 'Arquitectura Frontend de Analíticas',
        description:
          'Lideré la arquitectura frontend de Nexus, utilizando Vue, TypeScript y Apache ECharts para construir un panel de analíticas personalizable.',
      },
      {
        title: 'Lógica de Negocio y Smart Contracts',
        description:
          'Desarrollé lógica de negocio y smart contracts en Solidity utilizando Hardhat, asegurando la integridad y persistencia de información on-chain.',
      },
      {
        title: 'Automatización y Feeds de Chainlink',
        description:
          'Integré Chainlink Automation y Chainlink Data Feeds para obtener y sincronizar información BTC/USD con contratos inteligentes en tiempo real.',
      },
      {
        title: 'Optimización y Gestión de Estado',
        description:
          'Trabajé en optimización de rendimiento, gestión de estados complejos e integración de datos dinámicos.',
      },
    ],
    technologies: [
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Python'),
      getTechnologyByName('FastAPI'),
      getTechnologyByName('Vue'),
      getTechnologyByName('React'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Echarts'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
      getTechnologyByName('Docker'),
    ],
  },
  {
    slug: 'cub3',
    name: 'CUB3',
    logo: Cub3Company,
    position: 'Desarrollador Fullstack Blockchain (Part-Time)',
    duration: 'Septiembre 2021 - Mayo 2022',
    description:
      'Plataforma que combina tecnología Web3 con programas de fidelización y engagement del mundo real para marcas globales de consumo.',
    responsibilities: [
      {
        title: 'Servicios Backend y Arquitectura Web',
        description:
          'Diseñé servicios backend y arquitecturas web para aplicaciones Web3 orientadas a usuarios finales.',
      },
      {
        title: 'Experiencia Gamificada Web3 Def Leppard',
        description:
          'Desarrollé la arquitectura blockchain y backend de una experiencia Web3 de rompecabezas para Def Leppard.',
      },
      {
        title: 'Integraciones Full-Stack',
        description:
          'Implementé integraciones entre React, Node.js, Express, Solidity y Ethers.js/Hardhat.',
      },
      {
        title: 'E-commerce NFT con APIs de Shopify',
        description:
          'Integré APIs de Shopify con infraestructura Web3 para crear un flujo de e-commerce de NFTs con pagos tradicionales.',
      },
      {
        title: 'Investigación de Migración Blockchain',
        description:
          'Investigué la migración de contratos inteligentes hacia Flow, evaluando escalabilidad y costos de gas.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Express.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Hardhat'),
      getTechnologyByName('Ethers'),
      getTechnologyByName('Shopify'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
    ],
  },
  {
    slug: 'allianceblock',
    name: 'AllianceBlock',
    logo: AllianceBlockCompany,
    position: 'Desarrollador Frontend Web3',
    duration: 'Julio 2021 - Octubre 2023',
    description:
      'Proveedor de infraestructura blockchain descentralizada enfocado en puentes cross-chain, fondos de liquidez y protocolos DeFi de alta frecuencia.',
    responsibilities: [
      {
        title: 'Arquitectura Integral Web3 y DeFi',
        description:
          'Diseñé y mantuve arquitecturas Web3 integrales para aplicaciones DeFi, trabajando en las capas frontend, backend y SDK.',
      },
      {
        title: 'Migración de AllianceBridge (V1 a V2)',
        description:
          'Lideré la migración completa de AllianceBridge V1 a V2, implementando la nueva interfaz utilizando React y TypeScript.',
      },
      {
        title: 'Sistemas de Componentes Reutilizables',
        description:
          'Desarrollé componentes reutilizables para abstraer la complejidad de las interacciones blockchain en flujos de usuario intuitivos.',
      },
      {
        title: 'Transferencias Cross-Chain de Activos',
        description:
          'Implementé flujos para transferencias de tokens y NFTs entre Ethereum, BNB Chain, Polygon y Avalanche.',
      },
      {
        title: 'Optimización Web3 de Alta Frecuencia',
        description:
          'Trabajé en aplicaciones Web3 de alta frecuencia, optimizando componentes frontend, backend y SDK.',
      },
      {
        title: 'Minería de Liquidez (LMaaS)',
        description:
          'Gestioné y mejoré el producto Liquidity Mining as a Service (LMaaS) para soportar interacciones Web3 bajo escenarios de alta carga.',
      },
    ],
    technologies: [
      getTechnologyByName('React'),
      getTechnologyByName('TypeScript'),
      getTechnologyByName('Node.js'),
      getTechnologyByName('Solidity'),
      getTechnologyByName('Wagmi'),
      getTechnologyByName('TailwindCSS'),
      getTechnologyByName('Git'),
      getTechnologyByName('GitHub'),
      getTechnologyByName('Docker'),
    ],
  },
  {
    slug: 'alcaldia-infante',
    name: 'Alcaldía de Infante',
    logo: AlcaldiaInfanteCompany,
    position: 'Ingeniero de Software',
    duration: 'Enero 2020 - Marzo 2021',
    description:
      'Plataforma financiera y administrativa de la Administración Pública utilizada para gestionar presupuestos, adquisiciones, compromisos, pagos, operaciones de tesorería y nómina.',
    responsibilities: [
      {
        title: 'Plataforma Financiera y Administrativa',
        description:
          'Mantuve y mejoré una plataforma financiera y administrativa de la Administración Pública utilizada para gestionar presupuestos, adquisiciones, compromisos, pagos, operaciones de tesorería y nómina.',
      },
      {
        title: 'Desarrollo Backend y PostgreSQL',
        description:
          'Desarrollé y mantuve funcionalidades backend y lógica de PostgreSQL dentro de un sistema legacy existente, incluyendo consultas SQL complejas, funciones de base de datos, vistas y flujos transaccionales.',
      },
      {
        title: 'Reglas de Negocio y Mejoras de Procesos',
        description:
          'Implementé correcciones y mejoras de procesos manteniendo la compatibilidad con las reglas de negocio existentes y los flujos de trabajo definidos en la base de datos.',
      },
      {
        title: 'Resolución de Incidentes en Producción',
        description:
          'Colaboré con usuarios administrativos para investigar incidentes en producción, reproducir escenarios de negocio y validar las correcciones directamente sobre datos transaccionales.',
      },
      {
        title: 'Modelos Relacionales Complejos',
        description:
          'Trabajé con modelos relacionales complejos que involucraban claves compuestas, estructuras de bases de datos legacy, procedimientos almacenados y lógica de negocio implementada directamente en la capa de datos.',
      },
    ],
    technologies: [
      getTechnologyByName('PostgreSQL'),
      getTechnologyByName('Bash'),
      getTechnologyByName('PHP'),
      getTechnologyByName('CodeIgniter'),
    ],
  },
];

export type Languages = 'en' | 'es';

export const getCompanies = (lang: Languages = 'en') =>
  lang === 'es' ? companiesEs : companiesEn;
export const getCompanyById = (id: string, lang: Languages = 'en') =>
  (lang === 'es' ? companiesEs : companiesEn).find(
    (company) => company.slug === id,
  );
