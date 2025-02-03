import Typewriter from './typewriter';
import { useTranslation } from 'react-i18next';
import { XStack, YStack } from './ui/stacks';

const useContactConfig = () => {
  const { t } = useTranslation();

  return [
    {
      link: 'mailto:lukostelloe@gmail.com',
      img: '/mail.svg',
      description: t('send_me_an_email'),
    },
    {
      link: 'https://github.com/lukostelloe',
      img: '/github.svg',
      description: t('go_see_my_github'),
    },
    {
      link: 'https://www.linkedin.com/in/lukecostelloe/',
      img: '/linkedin.svg',
      description: t('connect_on_linkedin'),
    },
  ];
};

function Contact({img, link}:{img:string;link:string}){
  return(
  <YStack className='border border-black rounded-full p-5'>
    <a href={link} target="_blank">
      <img src={img} alt={img}/>
    </a>
  </YStack>
  )
}

function AboutMeCard() {
  const { t } = useTranslation();
  const contactConfig = useContactConfig()

  return (
    <YStack className='items-start gap-2'>
      <img width={40} height={40} src='/luke-id.jpeg' alt='luke' />
      <XStack className='w-[800px]'>
        <Typewriter text={t('about_me_text')} delay={20} />
      </XStack>
      <XStack className='bg-white p-5 border border-black rounded-full items-center gap-4'>
            <img width={70} src='/luke-id.jpeg' alt='luke-id' className='rounded-full'/>
            <XStack className='gap-5'>
              {contactConfig.map(contact=><Contact img={contact.img} link={contact.link}/>)}
            </XStack>
      </XStack>
    </YStack>
  );
}

export default AboutMeCard;
