import { Button } from '@/components/ui/button';
import { XStack, YStack } from './components/ui/stacks';
import { useTranslation } from 'react-i18next';
import { AtSign, CircleCheck, Code, Download, Smile } from 'lucide-react';
import AboutMeCard from './components/aboutMeCard';
import ContactCard from './components/contactCard';
import ExperienceCard from './components/experienceCard';
import TechStackCard from './components/techStackCard';
import { useState } from 'react';

export default function App() {
  // rgb(238, 228, 202)
  // rgb(253, 246, 232)

  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<string>('');
  const handleButtonClick = (card: string) => {
    setActiveCard(card);
  };

  const activeStyles =
    'bg-yellow-300 hover:bg-yellow-300 translate-y-[2px] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] border-2';

  return (
    <YStack className='bg-[#FDF6E8] items-center w-screen h-screen text-slate-800 font-sans gap-3 pt-[150px] w-80%'>
      <YStack className='gap-2'>
        <p className='font-bold'>{t('hey_im')}</p>
        <h1 className='text-5xl font-bold text-black'>Luke Costelloe</h1>
        <h1 className='text-3xl font-bold text-black'>
          {t('software_developer')}
        </h1>
        <p>{t('dev_description')}</p>
      </YStack>
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
    </YStack>
  );
}
