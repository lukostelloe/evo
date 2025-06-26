import { XStack, YStack } from '../ui/stacks';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from '../typewriter';

const useTechCardConfig = () => {
  const { t } = useTranslation('', { keyPrefix: 'tech_stack_card' });

  return [
    {
      title: 'Storybook',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
      description: t('storybook'),
    },
    {
      title: 'Jest',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      description: t('jest'),
    },
    {
      title: 'RTL',
      imgSrc: '/react-testing.png',
      description: t('rtl'),
    },
    {
      title: 'Figma',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      description:t('figma'),
    },
    {
      title: 'GitHub',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      description:t('github'),
    },
    {
      title: 'TanStack',
      imgSrc: '/tanstack.png',
      description:t('tanstack'),
    },
    {
      title: 'Expo',
      imgSrc: '/expo.svg',
      description:t('expo'),
    },
    {
      title: 'Zod',
      imgSrc: '/zod.svg',
      description:t('zod'),
    },
    {
      title: 'JavaScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      description:t('javascript'),
    },
    {
      title: 'TypeScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      description:t('typescript'),
    },
    {
      title: 'HTML',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      description:t('html'),
    },
    {
      title: 'CSS',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      description:t('css'),
    },
    {
      title: 'React',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      description:t('react'),
    },
    {
      title: 'React Native',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      description:t('react_native'),
    },
    {
      title: 'Next.js',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      description:t('next'),
    },
    {
      title: 'Tailwind',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      description:t('tailwind'),
    },
    {
      title: 'PandaCSS',
      imgSrc: '/pandacss.svg',
      description:t('panda_css'),
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
      <XStack
        className='bg-white items-center gap-2 p-2 justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:translate-x-[-2px] transition-all duration-950 w-full'
        style={{ width: '150px', borderRadius: '6px' }}
      >
        <img width={30} src={imgSrc} alt={title} />
        <p className='text-center'>{title}</p>
      </XStack>
    </motion.div>
  );
}

function TechStackCard() {
  const { t } = useTranslation('', { keyPrefix: 'tech_stack_card' });
  const techCardConfig = useTechCardConfig();

  const defaultCard = {
    title: '',
    imgSrc: '',
    description: t('description')
  };

  const [activeCard, setActiveCard] = useState(defaultCard);

  return (
    <YStack className='items-center gap-8'>
      <YStack className='grid grid-cols-1 sm:grid-cols-5 gap-3 w-full'>
        {techCardConfig.map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: -500 }} // Start slightly above the screen
            animate={{ y: 0 }} // Animate to the grid position
            transition={{
              type: 'spring', // Using spring animation for bounce
              stiffness: 100, // Control how tight the bounce is
              damping: 10, // Control how quickly the bounce settles
              duration: 0.4, // Total animation duration
              delay: index * 0.05, // Small delay based on index for staggered effect
            }}
            className='flex justify-center'
          >
            <TechCard
              title={card.title}
              imgSrc={card.imgSrc}
              onMouseEnter={() => setActiveCard(card)}
              onMouseLeave={() => setActiveCard(defaultCard)} // Reset when mouse leaves
            />
          </motion.div>
        ))}
      </YStack>

      <motion.div
        key={activeCard.title}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='flex flex-col p-5 rounded-lg gap-2 w-full items-start'
      >
        <XStack className='items-center justify-center gap-3'>
        <h2 className='font-bold text-[var(--largetext)]'>{activeCard.title}</h2>
        <img width={30} src={activeCard.imgSrc} alt={activeCard.title} />
        </XStack>
        <Typewriter text={activeCard.description} delay={30} />
      </motion.div>
    </YStack>
  );
}

export default TechStackCard;
