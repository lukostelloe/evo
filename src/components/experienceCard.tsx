import { XStack, YStack } from './ui/stacks';

function ExperienceCard() {
  return (
    <YStack className='gap-2'>
      <XStack className='items-center gap-2'>
        <img width={30} src='/monist.jpeg' alt='monist' />
        <p>Monist Studio: Client based web development</p>
      </XStack>
      <XStack className='items-center gap-2'>
        <img width={30} src='/breachquest.jpeg' alt='breachquest' />
        <p>BreachQuest: Front-end developer Cybersecurity</p>
      </XStack>
      <XStack className='items-center gap-2'>
        <img width={30} src='/bangk.jpeg' alt='bangk' />
        <p>Bangk: Full stack developer Fintech</p>
      </XStack>
    </YStack>
  );
}

export default ExperienceCard;
