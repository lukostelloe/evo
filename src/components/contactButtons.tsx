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

function Contact({ img, link }: { img: string; link: string }) {
  return (
    <YStack className='bg-white border border-black rounded-full p-2'>
      <a href={link} target='_blank'>
        <img src={img} alt={img} />
      </a>
    </YStack>
  );
}

export default function ContactButtons() {
  const contactConfig = useContactConfig();

  return (
    <XStack className='p-2 rounded-full items-center gap-3'>
      {contactConfig.map((contact) => (
        <Contact img={contact.img} link={contact.link} />
      ))}
    </XStack>
  );
}
