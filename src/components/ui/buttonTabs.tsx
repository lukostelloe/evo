import { AtSign, CircleCheck, Code, Download, Smile } from 'lucide-react';
import { Button } from './button';
import { XStack } from './stacks';
import { useState } from 'react';
import AboutMeCard from '../aboutMeCard';
import ExperienceCard from '../experienceCard';
import ContactCard from '../contactCard';
import TechStackCard from '../techStackCard';

export default function ButtonTabs() {
  const [activeCard, setActiveCard] = useState<string>('aboutMe');
  const handleButtonClick = (card: string) => {
    setActiveCard(card);
  };

  const activeStyles =
    'bg-yellow-300 hover:bg-yellow-300 translate-y-[2px] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] border-2';

  return (
    <>
      <XStack className='bg-white p-6 gap-2 rounded-full'>
        <Button
          className={`${activeCard === 'aboutMe' ? activeStyles : ''}`}
          variant='orangeround'
          onClick={() => handleButtonClick('aboutMe')}
        >
          <Smile />
          About me
        </Button>
        <Button
          className={`${activeCard === 'experience' ? activeStyles : ''}`}
          variant='orangeround'
          onClick={() => handleButtonClick('experience')}
        >
          <CircleCheck />
          Experience
        </Button>
        <Button
          className={`${activeCard === 'techstack' ? activeStyles : ''}`}
          variant='orangeround'
          onClick={() => handleButtonClick('techstack')}
        >
          <Code />
          Tech Stack
        </Button>
        <Button
          className={`${activeCard === 'contact' ? activeStyles : ''}`}
          variant='orangeround'
          onClick={() => handleButtonClick('contact')}
        >
          <AtSign />
          Contact
        </Button>
        <Button variant='orangeround'>
          <Download />
          Download my CV
        </Button>
      </XStack>
      <XStack className='bg-white p-10 gap-2 rounded-full h-100'>
        {/* Conditional Rendering based on activeCard state */}
        {activeCard === 'aboutMe' && <AboutMeCard />}
        {activeCard === 'experience' && <ExperienceCard />}
        {activeCard === 'contact' && <ContactCard />}
        {activeCard === 'techstack' && <TechStackCard />}
      </XStack>
    </>
  );
}
