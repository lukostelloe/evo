import Marquee from 'react-fast-marquee';
import { useMarqueeStore } from '@/store/marqueeStore';
import { useTranslation } from 'react-i18next';

type Tech = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
};

const useTechCardConfig = (): Tech[] => {
  const { t } = useTranslation('', { keyPrefix: 'tech_stack_card' });

  return [
    {
      id: 1,
      title: 'Storybook',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
      description: t('storybook'),
    },
    {
      id: 2,
      title: 'Jest',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      description: t('jest'),
    },
    {
      id: 3,
      title: 'RTL',
      imgSrc: '/react-testing.png',
      description: t('rtl'),
    },
    {
      id: 4,
      title: 'Figma',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      description: t('figma'),
    },
    {
      id: 5,
      title: 'GitHub',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      description: t('github'),
    },
    {
      id: 6,
      title: 'TanStack',
      imgSrc: '/tanstack.png',
      description: t('tanstack'),
    },
    {
      id: 7,
      title: 'Expo',
      imgSrc: '/expo.svg',
      description: t('expo'),
    },
    {
      id: 8,
      title: 'Zod',
      imgSrc: '/zod.svg',
      description: t('zod'),
    },
    {
      id: 9,
      title: 'JavaScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      description: t('javascript'),
    },
    {
      id: 10,
      title: 'TypeScript',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      description: t('typescript'),
    },
    {
      id: 11,
      title: 'HTML',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      description: t('html'),
    },
    {
      id: 12,
      title: 'CSS',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      description: t('css'),
    },
    {
      id: 13,
      title: 'React',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      description: t('react'),
    },
    {
      id: 14,
      title: 'React Native',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      description: t('react_native'),
    },
    {
      id: 15,
      title: 'Next.js',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      description: t('next'),
    },
    {
      id: 16,
      title: 'Tailwind',
      imgSrc:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      description: t('tailwind'),
    },
    {
      id: 17,
      title: 'PandaCSS',
      imgSrc: '/pandacss.svg',
      description: t('panda_css'),
    },
  ];
};

function Banner() {
  const techStack = useTechCardConfig();
  const { marqueeOn } = useMarqueeStore();

  return (
    <div
      style={{
        top: '0',
        position: 'fixed',
        marginBottom: '5px',
        width: '100%',
        height: '40px',
        overflow: 'hidden',
      }}
    >
      <Marquee
        pauseOnHover={true}
        className="bg-white h-8"
        autoFill
        speed={marqueeOn ? 30 : 0}
        play={marqueeOn}
      >
        <div className="flex gap-5">
          {techStack.map((tech) => (
            <div className="flex gap-2 mx-3" key={tech.id}>
              <p>{tech.title}</p>
              <img width={20} src={tech.imgSrc} alt={tech.title} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Banner;
