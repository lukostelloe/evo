import { XStack, YStack } from './components/ui/stacks';
import AboutMeCard from './components/aboutMeCard';
import ExperienceCard from './components/experienceCard';
import TechStackCard from './components/techStackCard';
import { useButtonTabState } from './store/activeTabStore';

export default function App() {
  const { activeCard } = useButtonTabState();

  return (
    <YStack
      className={`bg-[var(--background)] items-center w-screen h-screen text-slate-800 font-sans gap-3 pt-[150px] px-10`}
    >
      <XStack className='p-10'>
        {activeCard === 'aboutMe' && <AboutMeCard />}
        {activeCard === 'experience' && <ExperienceCard />}
        {activeCard === 'techstack' && <TechStackCard />}
      </XStack>
    </YStack>
  );
}
