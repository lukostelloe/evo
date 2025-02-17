import Typewriter from '../typewriter';
import { useTranslation } from 'react-i18next';
import { XStack, YStack } from '../ui/stacks';
import Intro from '../intro';

function AboutMeCard() {
  const { t } = useTranslation();

  return (
    <YStack className='items-start gap-8'>
      <Intro />
      <XStack className='w-[1000px] gap-5 items-center'>
        <img
          width={60}
          height={60}
          className='rounded-full'
          src='/luke-id.jpeg'
          alt='luke'
        />
        <Typewriter text={t('about_me_text')} delay={20} />
      </XStack>
    </YStack>
  );
}

export default AboutMeCard;
