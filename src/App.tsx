import { YStack } from './components/ui/stacks';
import ButtonTabs from './components/ui/buttonTabs';
import Intro from './components/intro';

export default function App() {
  return (
    <YStack className='bg-[#FDF6E8] items-center w-screen h-screen text-slate-800 font-sans gap-3 pt-[150px] w-80% px-20'>
      <Intro />
      <ButtonTabs />
    </YStack>
  );
}
