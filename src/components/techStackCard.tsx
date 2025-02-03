import { XStack, YStack } from './ui/stacks';

const useTechCardConfig = () => {
  return [
    {
      title: 'Storybook',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg"
    },
    {
      title: 'Jest',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
    },
    {
      title: 'React Testing Library',
      imgSrc:'/react-testing.png'
    },
    {
      title: 'Figma',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    {
      title: 'GitHub',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
      title: 'TanStack',
      imgSrc:'/tanstack.png'
    },
    {
      title: 'Expo',
      imgSrc:'/expo.svg'
    },
    {
      title: 'Zod',
      imgSrc:'/zod.svg'
    },
    {
      title: 'JavaScript',
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: 'TypeScript',
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      title: 'HTML',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
      title: 'CSS',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
      title: 'React',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      title: 'React Native',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      title: 'Next.js',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
      title: 'Tailwind',
      imgSrc:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      title: 'PandaCSS',
      imgSrc:'/pandacss.svg'
    },
  ];
};

function TechCard({
  title,
  imgSrc,
}: {
  title: string;
  imgSrc:string | undefined;
}) {


  return (
      <XStack
        className='bg-white items-center gap-2 p-2 justify-center rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:translate-x-[-2px] transition-all duration-950'
      >
        <img width={30} src={imgSrc} alt={imgSrc}/>
        <p>{title}</p>
      </XStack>

  );
}

function TechStackCard() {
  const techCardConfig = useTechCardConfig();

  return (
    <YStack className='grid grid-cols-5 gap-3 w-[900px]'>
      {techCardConfig.map((card) => (
        <TechCard
          key={card.title}
          title={card.title}
          imgSrc={card.imgSrc}
        />
      ))}
    </YStack>
  );
}

export default TechStackCard;
