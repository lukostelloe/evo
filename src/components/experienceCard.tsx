import { XStack, YStack } from './ui/stacks';

const experienceConfig = [
  {
    link: 'https://monist.studio/',
    companyName: 'Monist Studio',
    img: '/monist.jpeg',
    description: 'Web Solutions',
    title: 'Front-end Developer',
    info: 'With Monist Studio, I worked with website design and developed performant and responsive websites for clients',
  },
  {
    link: 'https://www.breachquest.com/',
    companyName: 'BreachQuest',
    img: '/breachquest.jpeg',
    description: 'Cybersecurity',
    title: 'Front-end Developer',
    info: 'With Breachquest, I worked with a talented team of developers, working on Priori, a cutting edge cyber attack notification system',
  },
  {
    link: 'https://bangk.app/',
    companyName: 'BANGK',
    img: '/bangk.jpeg',
    description: 'Fintech',
    title: 'Full stack developer Fintech',
    info: 'With BANGK, I had the opportunity to create a variety of applications for a fintech platform, including a native application, a website and an internal dashboard',
  },
];

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
    <YStack className='bg-white border w-1/3 border-black p-5 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[11px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-9px] hover:translate-x-[-6px] transition-all duration-950 gap-2'>
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
  return (
    <XStack className='gap-6'>
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
    </XStack>
  );
}

export default ExperienceCard;
