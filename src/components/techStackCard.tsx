
import { YStack} from "./ui/stacks";
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

const useTechCardConfig = () => {

  return [
    {
      title: 'Storybook',
      description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Jest',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'React Testing Library',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Figma',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'GitHub',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'TanStack',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Expo',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Zod',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'JavaScript',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'TypeScript',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'HTML',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'CSS',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'React',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'React Native',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Next.js',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'Tailwind',
            description:'I use storybook to design and test components in isolation'
    },
    {
      title: 'PandaCSS',
            description:'I use storybook to design and test components in isolation'
    },
  ];
};

function TechCard({title, description}:{title:string; description:string}){

  const [flipped, setFlipped] = useState(false);

  const styles = useSpring({
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    config: { tension: 0, friction: 5 },
  });

  return(
    <div style={{ perspective: 500 }} onClick={() => setFlipped(!flipped)}>
      <animated.div
        className="w-[150px] h-[150px] relative hover:translate-y-[-9px] hover:translate-x-[-6px] transition-all shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_6px_0px_0px_rgba(0,0,0,1)]"
        style={{
          ...styles,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute w-full h-full backface-hidden bg-white flex items-center justify-center">
          <h3>{title}</h3>
        </div>
        <div className="absolute w-full h-full rotate-y-180 bg-gray-200 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3>{description}</h3>
        </div>
      </animated.div>
    </div>
  )
}

function TechStackCard() {

  const techCardConfig = useTechCardConfig()

  return (
     <YStack className="grid grid-cols-4 gap-4">
   {techCardConfig.map(card => (
     <TechCard key={card.title} title={card.title} description={card.description}/>
   ))}
 </YStack>
  )
}

export default TechStackCard;


