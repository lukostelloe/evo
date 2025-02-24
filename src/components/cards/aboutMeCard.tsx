import Typewriter from '../typewriter';
import { useTranslation } from 'react-i18next';
import { XStack, YStack } from '../ui/stacks';
import Intro from '../intro';
import { motion } from 'framer-motion';

function AboutMeCard() {
  const { t } = useTranslation();

  return (
    <YStack className='sm:items-center md:items-center gap-8'>
      <XStack className='gap-5'>
        <Intro />
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.3,
            delay: 0.3,
          }}
          className='flex justify-center'
        >
          <h1 className='text-5xl font-bold text-[var(--text)]'>👋</h1>
        </motion.div>
      </XStack>
      <XStack className='sm:w-3/4 md:w-1/2 lg:w-[900px] xl:w-[1000px] gap-5 items-center'>
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
