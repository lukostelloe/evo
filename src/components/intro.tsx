

import { YStack } from './ui/stacks';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Intro() {

  const { t } = useTranslation('',{keyPrefix:'intro'});
 
  const currentHour = new Date().getHours();
  
  const greeting =
    currentHour < 12 ? t('morning_intro') :
    currentHour < 18 ? t('afternoon_intro') :
    t('evening_intro');


  return (
    <motion.div
      initial={{ x: -500 }} // Start slightly above the screen
      animate={{ x: 0 }} // Animate to the grid position
      transition={{
        type: 'spring', // Using spring animation for bounce
        stiffness: 100, // Control how tight the bounce is
        damping: 12, // Control how quickly the bounce settles
        duration: 0.3, // Total animation duration
        delay: 0.05, // Small delay based on index for staggered effect
      }}
      className='flex justify-center'
    >
      <YStack className='gap-2 items-start w-full'>
        <h1 className='text-4xl sm:text-5xl font-bold text-[var(--largetext)]'>
          {greeting}
        </h1>
        <h1 className='text-3xl sm:text-5l font-bold text-[var(--largetext)]'>
          {t('software_developer')}
        </h1>
      </YStack>
    </motion.div>
  );
}
