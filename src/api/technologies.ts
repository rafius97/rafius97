import Astro_ from '@assets/tech/astro.svg';
import Css3 from '@assets/tech/css3.svg';
import Echarts from '@assets/tech/echarts.png';
import Ethers from '@assets/tech/ethersjs.png';
import Express from '@assets/tech/express.svg';
import Fastapi from '@assets/tech/fast-api.svg';
import Hardhat from '@assets/tech/hardhat.svg';
import Html5 from '@assets/tech/html5.svg';
import Javacript from '@assets/tech/javascript.svg';
import Next from '@assets/tech/next.svg';
import Node from '@assets/tech/node.svg';
import Postgresql from '@assets/tech/postgresql.svg';
import Python from '@assets/tech/python.svg';
import Rainbowkit from '@assets/tech/rainbowkit.svg';
import React from '@assets/tech/react.svg';
import Sass from '@assets/tech/sass.svg';
import Shopify from '@assets/tech/shopify.webp';
import Solidity from '@assets/tech/solidity.svg';
import Storybook from '@assets/tech/storybook.svg';
import Tailwind from '@assets/tech/tailwindcss.svg';
import Typescript from '@assets/tech/typescript.svg';
import Viem from '@assets/tech/viem.png';
import Vite from '@assets/tech/vite.svg';
import Vue from '@assets/tech/vue.svg';
import Wagmi from '@assets/tech/wagmi.svg';

export interface Technology {
  name: string;
  image: string;
}

export const frontend: Technology[] = [
  { name: 'React', image: React.src },
  { name: 'Vue', image: Vue.src },
  { name: 'Typescript', image: Typescript.src },
  { name: 'Javascript', image: Javacript.src },
  { name: 'SaSS', image: Sass.src },
  { name: 'TailwindCSS', image: Tailwind.src },
  { name: 'HTML5', image: Html5.src },
  { name: 'CSS3', image: Css3.src },
  { name: 'Vite', image: Vite.src },
  { name: 'Astro', image: Astro_.src },
];

export const backend: Technology[] = [
  { name: 'Node.js', image: Node.src },
  { name: 'Python', image: Python.src },
  { name: 'Next.js', image: Next.src },
  { name: 'PostgreSQL', image: Postgresql.src },
  { name: 'FastAPI', image: Fastapi.src },
  { name: 'Express.js', image: Express.src },
];

export const blockchain: Technology[] = [
  { name: 'Solidity', image: Solidity.src },
  { name: 'Hardhat', image: Hardhat.src },
  { name: 'Viem', image: Viem.src },
  { name: 'Wagmi', image: Wagmi.src },
  { name: 'Ethers', image: Ethers.src },
  { name: 'Rainbowkit', image: Rainbowkit.src },
];

export const others: Technology[] = [
  { name: 'Storybook', image: Storybook.src },
  { name: 'Shopify', image: Shopify.src },
  { name: 'Echarts', image: Echarts.src },
];

export const getTechnologies = () => ({
  frontend,
  backend,
  blockchain,
  others,
});

export const getTechnologyByName = (name: string) => {
  const allTechnologies = [...frontend, ...backend, ...blockchain, ...others];

  const technology = allTechnologies.find(
    (tech) => tech.name.toLowerCase() === name.toLowerCase(),
  );

  if (!technology) {
    throw new Error(`Technology ${name} not found`);
  }

  return technology;
};
