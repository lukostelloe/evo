import { YStack } from './components/ui/stacks';
import ButtonTabs from './components/ui/buttonTabs';

export default function App() {
  return (
    <YStack
      className={`bg-[var(--background)] items-center w-screen h-screen text-slate-800 font-sans gap-3 pt-[150px] px-10`}
    >
      <ButtonTabs />
    </YStack>
  );
}
