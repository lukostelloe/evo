import { AtSign, CircleCheck, Code, Download, Smile } from 'lucide-react';
import { Button } from './button';
import { XStack, YStack } from './stacks';
import { useState } from 'react';
import AboutMeCard from '../aboutMeCard';
import ExperienceCard from '../experienceCard';
import ContactCard from '../contactCard';
import TechStackCard from '../techStackCard';
import ConfettiExplosion from 'react-confetti-explosion';

export default function ButtonTabs() {
  const [isExploding, setIsExploding] = useState(false);
  const [activeCard, setActiveCard] = useState<string>('aboutMe');
  const handleButtonClick = (card: string) => {
    setActiveCard(card);
  };

  const activeStyles =
    'bg-yellow-300 hover:bg-yellow-300 translate-y-[2px] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] border-2';


    function handleExplode(){
      setIsExploding(true)
      console.log(isExploding)
    }

  return (
    <>
      <XStack className="bg-white p-6 gap-2 rounded-full shadow-md" >
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
        <YStack className='justify-center items-center'>
        <Button variant='orangeround' onClick={handleExplode} className='z-10'>
          <Download />
          Download my CV
        </Button>
        {isExploding && <ConfettiExplosion zIndex={9} width={500} duration={2000} onComplete={()=>setIsExploding(false)}/>}
        </YStack>



      </XStack>
      <XStack className='p-10'>
        {activeCard === 'aboutMe' && <AboutMeCard />}
        {activeCard === 'experience' && <ExperienceCard />}
        {activeCard === 'contact' && <ContactCard />}
        {activeCard === 'techstack' && <TechStackCard />}
      </XStack>
    </>
  );
}
