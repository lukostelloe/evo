

import { useState } from 'react';
import { Button } from './button';
import { Stack, YStack } from './stacks';
import { useTranslation } from 'react-i18next';
import ConfettiExplosion from 'react-confetti-explosion';
import { useButtonTabState } from '../../store/activeTabStore';
import { CircleCheck, Code, Download, Smile } from 'lucide-react';

export default function ButtonTabs() {
  
  const [isExploding, setIsExploding] = useState(false);
  const { activeCard, changeButtonTab } = useButtonTabState();
  const { t } = useTranslation('',{keyPrefix:'buttonTabs'});

  const handleButtonClick = (card: string) => {
    changeButtonTab(card);
  };

  const pressedStyle =
    'bg-bigButton hover:bg-yellow-300 translate-y-[2px] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] border-2';


  function handleDownloadCv() {
    setIsExploding(true);
    // Fetch as blob to avoid navigation/opening the PDF tab
    fetch('/luke_costelloe_cv.pdf')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch CV');
        return await res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Luke-Costelloe-CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch(() => {
        // fallback to direct link if blob download fails
        const a = document.createElement('a');
        a.href = '/luke_costelloe_cv.pdf';
        a.download = 'Luke-Costelloe-CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }

  return (
    <Stack className='p-3 gap-2 rounded-full flex sm:flex-row flex-col items-center justify-center'>
      <Button
        className={`${activeCard === 'aboutMe' ? pressedStyle : ''}`}
        variant='orangeround'
        onClick={() => handleButtonClick('aboutMe')}
      >
        <Smile />
        {t('about_me')}
      </Button>
      <Button
        className={`${activeCard === 'experience' ? pressedStyle : ''}`}
        variant='orangeround'
        onClick={() => handleButtonClick('experience')}
      >
        <CircleCheck />
        {t('experience')}
      </Button>
      <Button
        className={`${activeCard === 'techstack' ? pressedStyle : ''}`}
        variant='orangeround'
        onClick={() => handleButtonClick('techstack')}
      >
        <Code />
        {t('tech_stack')}
      </Button>
      <YStack className='justify-center items-center'>
        <Button variant='orangeround' onClick={handleDownloadCv} className='z-10'>
          <Download />
          {t('get_my_cv')}
        </Button>
        {isExploding && (
          <ConfettiExplosion
            force={0.3}
            zIndex={9}
            width={350}
            duration={2000}
            onComplete={() => setIsExploding(false)}
          />
        )}
      </YStack>
    </Stack>
  );
}
