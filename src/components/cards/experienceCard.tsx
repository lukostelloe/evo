import { useTranslation } from 'react-i18next';
import { Stack, XStack, YStack } from '../ui/stacks';
import { motion } from 'framer-motion';

type ExperienceItem = {
  id: string;
  link: string;
  companyName: string;
  img: string;
  description: string;
  title: string;
  info: string;
};

const useExperienceConfig = (): ExperienceItem[] => {
  const { t } = useTranslation('', { keyPrefix: 'experience_card' });

  return [
    {
      id: 'monistid',
      link: 'https://monist.studio/',
      companyName: 'Monist Studio',
      img: '/monist.jpeg',
      description: 'Web Solutions',
      title: t('monist_title'),
      info: t('monist_desc'),
    },
    {
      id: 'breachquestid',
      link: 'https://www.breachquest.com/',
      companyName: 'BreachQuest',
      img: '/breachquest.jpeg',
      description: 'Cybersecurity',
      title: t('breachquest_title'),
      info: t('breachquest_desc'),
    },
    {
      id: 'bangkid',
      link: 'https://bangk.app/',
      companyName: 'BANGK',
      img: '/bangk.jpeg',
      description: 'Fintech',
      title: t('BANGK_title'),
      info: t('BANGK_desc'),
    },
  ];
};

function Experience({
  link,
  companyName,
  image,
  description,
  title,
  info,
}: {
  link: string;
  companyName: string;
  image: string;
  description: string;
  title: string;
  info: string;
}) {
  return (
    <YStack className="bg-white border md:w-1/3 border-black p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[11px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-9px] hover:translate-x-[-6px] transition-all duration-950 gap-2 rounded-md">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <XStack className="gap-2">
          <img width={50} src={image} alt={companyName} />
          <YStack>
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p>{description}</p>
          </YStack>
        </XStack>
        <YStack className="gap-2">
          <p className="font-bold">{title}</p>
          <p>{info}</p>
        </YStack>
      </a>
    </YStack>
  );
}

function ExperienceCard() {
  const experienceConfig = useExperienceConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: 0.05,
      }}
      className="flex justify-center"
    >
      <Stack className="gap-6 rounded-md sm:flex-row flex-col">
        {experienceConfig.map((exp) => (
          <Experience
            key={exp.id} // ✅ unique key
            link={exp.link}
            companyName={exp.companyName}
            image={exp.img}
            description={exp.description}
            title={exp.title}
            info={exp.info}
          />
        ))}
      </Stack>
    </motion.div>
  );
}

export default ExperienceCard;
