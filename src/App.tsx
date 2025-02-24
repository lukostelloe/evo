import { XStack, YStack } from './components/ui/stacks';
import AboutMeCard from './components/cards/aboutMeCard';
import ExperienceCard from './components/cards/experienceCard';
import TechStackCard from './components/cards/techStackCard';
import { useButtonTabState } from './store/activeTabStore';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/ui/app-sidebar';
import SiteHeader from './components/site-header';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const { activeCard } = useButtonTabState();
  const isSmallScreen = useMediaQuery('max', 'md');
  return (
    <SidebarProvider>
      <XStack className='w-screen h-screen bg-[var(--background)]'>
        {/* Sidebar - Takes space instead of overlaying */}
        {isSmallScreen && <AppSidebar />}

        <SiteHeader />
        <YStack className='flex-1 h-full text-slate-800 font-sans gap-3 pt-[150px] px-10'>
          {activeCard === 'aboutMe' && <AboutMeCard />}
          {activeCard === 'experience' && <ExperienceCard />}
          {activeCard === 'techstack' && <TechStackCard />}
        </YStack>
      </XStack>
    </SidebarProvider>
  );
}
