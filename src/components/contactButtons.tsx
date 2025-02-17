import { XStack, YStack } from './ui/stacks';

const useContactConfig = () => {
  return [
    {
      link: 'mailto:lukostelloe@gmail.com',
      img: '/mail.svg',
    },
    {
      link: 'https://github.com/lukostelloe',
      img: '/github.svg',
    },
    {
      link: 'https://www.linkedin.com/in/lukecostelloe/',
      img: '/linkedin.svg',
    },
  ];
};

function Contact({ img, link }: { img: string; link: string }) {
  return (
    <YStack className='bg-white border border-black rounded-full p-2 cursor-pointer'>
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
