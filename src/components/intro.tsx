import { YStack } from './ui/stacks';
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { t } = useTranslation();

  return (
    <YStack className='gap-2 items-start w-full'>
      <p className='font-bold'>{t('hey_im')}</p>
      <h1 className='text-5xl font-bold text-black'>Luke Costelloe</h1>
      <h1 className='text-3xl font-bold text-black'>
        {t('software_developer')}
      </h1>
    </YStack>
  );
}
