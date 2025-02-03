import { XStack, YStack } from './ui/stacks';
import { Mail } from 'lucide-react';

function ContactCard() {
  return (
    <YStack>
      <XStack className='cursor-pointer items-center gap-2'>
        <Mail />
        <a href='mailto:lukostelloe@gmail.com'>Send me an Email</a>
      </XStack>
      <XStack className='cursor-pointer items-center gap-2'>
      <img width={25} src='/github.svg' alt='github' />
        <a
          href='https://github.com/lukostelloe'
          target='_blank'
          rel='noopener noreferrer'
        >
          Go see my Github
        </a>
      </XStack>
      <XStack className='cursor-pointer items-center gap-2'>
        <img width={25} src='/linkedin.svg' alt='linkedin' />
        <a
          href='https://www.linkedin.com/in/lukecostelloe/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Connect with me on Linkedin
        </a>
      </XStack>
    </YStack>
  );
}

export default ContactCard;
