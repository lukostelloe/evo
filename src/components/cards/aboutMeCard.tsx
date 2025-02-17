import Typewriter from '../typewriter';
import { useTranslation } from 'react-i18next';
import { XStack, YStack } from '../ui/stacks';
import Intro from '../intro';
import { motion } from 'framer-motion';

function AboutMeCard() {
  const { t } = useTranslation();

  return (
    <YStack className='items-start gap-8'>
      <XStack className='gap-5'>
      <Intro />
      <motion.div
        initial={{ y: -300 }} // Start slightly above the screen
        animate={{ y: 0 }} // Animate to the grid position
        transition={{
          type: 'spring', // Using spring animation for bounce
          stiffness: 100, // Control how tight the bounce is
          damping: 10, // Control how quickly the bounce settles
          duration: 0.3, // Total animation duration
          delay: 0.3, // Small delay based on index for staggered effect
        }}
        className='flex justify-center'
      >
        <h1 className='text-5xl font-bold text-[var(--text)]'>👋</h1>
      </motion.div>
      </XStack>
      <XStack className='w-[1000px] gap-5 items-center'>
        <img
          width={60}
          height={60}
          className='rounded-full'
          src='/luke-id.jpeg'
          alt='luke'
        />
        <Typewriter text={t('about_me_text')} delay={30} />
      </XStack>
    </YStack>
  );
}

export default AboutMeCard;
