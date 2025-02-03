
import { XStack, YStack } from './ui/stacks';
import { useTranslation } from 'react-i18next';

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

function ContactCard() {

  const contactConfig = useContactConfig()

  return (
    <XStack className='bg-white p-5 border border-black rounded-full items-center gap-4'>
      <img width={70} src='/luke-id.jpeg' alt='luke-id' className='rounded-full'/>
      <XStack className='gap-5'>
        {contactConfig.map(contact=><Contact img={contact.img} link={contact.link}/>)}
      </XStack>
    </XStack>
  );
}

export default ContactCard;
