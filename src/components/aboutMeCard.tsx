import { useTranslation } from 'react-i18next';
import Typewriter from './typewriter';
import { XStack } from './ui/stacks';

function AboutMeCard() {
  const { t } = useTranslation();

  return (
    <XStack className='items-start gap-2'>
      <img width={40} height={40} src='/luke-id.jpeg' alt='luke' />
      <XStack className='w-[800px]'>
        <Typewriter text={t('about_me_text')} delay={20} />
      </XStack>
    </XStack>
  );
}

export default AboutMeCard;
