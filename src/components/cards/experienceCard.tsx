import { Stack, XStack, YStack } from '../ui/stacks';
import { useTranslation } from 'react-i18next';

const useExperienceConfig = () => {
  const { t } = useTranslation('', { keyPrefix: 'experience_card' });

  return [
    {
      link: 'https://monist.studio/',
      companyName: 'Monist Studio',
      img: '/monist.jpeg',
      description: 'Web Solutions',
      title: t('monist_title'),
      info: t('monist_desc'),
    },
    {
      link: 'https://www.breachquest.com/',
      companyName: 'BreachQuest',
      img: '/breachquest.jpeg',
      description: 'Cybersecurity',
      title: t('breachquest_title'),
      info: t('breachquest_desc'),
    },
    {
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
    <YStack className='bg-white border md:w-1/3 border-black p-5 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[11px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-9px] hover:translate-x-[-6px] transition-all duration-950 gap-2'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <XStack className='gap-2'>
          <img width={50} src={image} alt={image} />
          <YStack>
            <h3 className='text-xl font-bold'>{companyName}</h3>
            <p>{description}</p>
          </YStack>
        </XStack>
        <YStack>
          <p className='font-bold'>{title}</p>
          <p>{info}</p>
        </YStack>
      </a>
    </YStack>
  );
}

function ExperienceCard() {
  const experienceConfig = useExperienceConfig();

  return (
    <Stack className='gap-6 rounded-lg sm:flex-row flex-col'>
      {experienceConfig.map((exp) => (
        <Experience
          link={exp.link}
          companyName={exp.companyName}
          image={exp.img}
          description={exp.description}
          title={exp.title}
          info={exp.info}
        />
      ))}
    </Stack>
  );
}

export default ExperienceCard;
