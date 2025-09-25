

import Intro from '../intro';
import OpenAiCard from './OpenAiCard';
import { motion } from 'framer-motion';
import Typewriter from '../typewriter';
import { XStack, YStack } from '../ui/stacks';
import { useTranslation } from 'react-i18next';
// import UserList from './userList';


function AboutMeCard() {

  const { t } = useTranslation();

  return (
    <YStack className='sm:items-center md:items-center gap-8 min-h-[60vh] flex justify-center'>
      <XStack className='gap-5'>
        <Intro />
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -300 }}
          className='flex justify-center'
          transition={{
            type: 'spring',
            delay: 0.3,
            damping: 10,
            duration: 0.3,
            stiffness: 100,
          }}
        >
          <h1 className='text-5xl font-bold text-[var(--anti-text)]'>👋</h1>
        </motion.div>
      </XStack>

      {/* this is annoying me, padding will center, but not responsive
      justify center moves the image while it types */}
      <XStack className='sm:w-3/4 md:w-1/2 lg:w-[900px] xl:w-[1000px] gap-5 items-center pl-20'>
        <img
          alt='luke'
          width={60}
          height={60}
          src='/luke-id.jpeg'
          className='rounded-full'
        />
        <Typewriter text={t('about_me_text')} delay={30} />
      </XStack>

      <OpenAiCard
        character="TypeScript developer who loves start ups and clean architecture"
        greeting="Hey, I'm Luke, I can help you with anything TS or architecture."
        assistantName="Luke"
        profile={{
          name: 'Luke Costelloe',
          location: 'Nice, France',
          nationality:'Irish',
          family:'Beautiful fiancee called Sandra, and a cat called Cerise',
          title: 'Full‑Stack Engineer',
          stacks: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
          highlights: [
            'Shipped complex apps end‑to‑end',
            'Led teams and improved delivery velocity',
            'Focus on developer experience and reliability',
          ],
          github: 'https://github.com/…',
          website: 'https://…',
          hobbies: 'Running, producing music, and playing video games',
        }}
        />

      {/* dont need this atm, python full stack demo */}
      {/* <UserList/> */}
    </YStack>
  );
}

export default AboutMeCard;