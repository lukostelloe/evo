import { XStack, YStack } from '../ui/stacks';
import { motion } from 'framer-motion';
import { useState } from 'react';

const useTechCardConfig = () => {
  return [
    {
      title: 'Storybook',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
      description:
        'I use Storybook to test and develop components independent to the application, this ensures components are well built, with zero bugs',
    },
    {
      title: 'Jest',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      description:
        'Jest is my preferred testing method, it is fast and simple to use, with plenty of functionality built in',
    },
    {
      title: 'RTL',
      imgSrc: '/react-testing.png',
      description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'Figma',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'GitHub',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'TanStack',
      imgSrc: '/tanstack.png',
      description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'Expo',
      imgSrc: '/expo.svg',
      description:
      'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'Zod',
      imgSrc: '/zod.svg',
      description:
      'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'JavaScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'TypeScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'HTML',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'CSS',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
              description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'React',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
              description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'React Native',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
              description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'Next.js',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
              description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'Tailwind',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
              description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
    {
      title: 'PandaCSS',
      imgSrc: '/pandacss.svg',
            description:
        'Along with Jest, React Testing Library ensures high coverage of my projects, from the smallest components to full features',
    },
  ];
};

function TechCard({
  title,
  imgSrc,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  imgSrc: string | undefined;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <XStack className='bg-white items-center gap-2 p-2 justify-center rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:translate-x-[-2px] transition-all duration-950'>
        <img width={30} src={imgSrc} alt={title} />
        <p>{title}</p>
      </XStack>
    </motion.div>
  );
}

function TechStackCard() {
  const techCardConfig = useTechCardConfig();
  
  const defaultCard = {
    title: "",
    imgSrc: "",
    description:"Hover over a card, and let me explain more about the technologies I like to use"
  };
  
  const [activeCard, setActiveCard] = useState(defaultCard);

  return (
    <YStack className="items-center gap-8">
      <YStack className="grid grid-cols-5 gap-3 w-[900px]">
        {techCardConfig.map((card) => (
          <TechCard
            key={card.title}
            title={card.title}
            imgSrc={card.imgSrc}
            onMouseEnter={() => setActiveCard(card)}
            onMouseLeave={() => setActiveCard(defaultCard)} // Reset when mouse leaves
          />
        ))}
      </YStack>
      <motion.div
        key={activeCard.title}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white border w-1/3 border-black p-5 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[11px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-9px] hover:translate-x-[-6px] gap-2"
      >
        {activeCard.description}
      </motion.div>
    </YStack>
  );
}

export default TechStackCard;
