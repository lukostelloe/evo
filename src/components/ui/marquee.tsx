import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

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

function Banner() {

    const techStack = useTechCardConfig()

  return (
    <div style={{top:'0',position:'fixed', marginBottom:'5px', width: '100%', height: '30px', overflow: 'hidden', paddingTop:'5px' }}>
      <Marquee
      className='bg-white'
        autoFill
      >
  <div className="flex gap-5">
  {techStack.map((tech) => (
    <div className='flex gap-2'>
    <p key={tech.title}>{tech.title}</p>
    <img width={20} src={tech.imgSrc} alt={tech.title} />
    </div>
  ))}
    </div>
      </Marquee>
    </div>
  );
}

export default Banner;
