
import { XStack, YStack } from './stacks';

type ContactItem = {
  link:string;
  img:string
}

const useContactConfig = (): ContactItem[] => {
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

function Contact({ img, link }: ContactItem) {
  return (
    <YStack className=' p-2 cursor-pointer shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 text-black rounded-full border-2 bg-white border-black '>
      <a href={link} target='_blank'>
        <img src={img} alt={img} />
      </a>
    </YStack>
  );
}

export default function ContactButtons() {
  
  const contactConfig = useContactConfig();

  return (
  <XStack className="p-2 rounded-full items-center gap-3">
      {contactConfig.map((contact, i) => (
        <Contact
          key={contact.link ?? i}
          img={contact.img}
          link={contact.link}
        />
      ))}
  </XStack>
  );
} 
