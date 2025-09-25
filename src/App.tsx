

import Banner from './components/ui/marquee';
import SiteHeader from './components/site-header';
import { useMediaQuery } from './hooks/useMediaQuery';
import { XStack, YStack } from './components/ui/stacks';
import AboutMeCard from './components/cards/aboutMeCard';
import { AppSidebar } from './components/ui/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { useButtonTabState } from './store/activeTabStore';
import TechStackCard from './components/cards/techStackCard';
import ExperienceCard from './components/cards/experienceCard';

export default function App() {

  const { activeCard } = useButtonTabState();
  const isSmallScreen = useMediaQuery('max', 'md');
  
  return (
    <SidebarProvider>
      <XStack className='w-screen h-screen bg-[var(--background)]'>
        <Banner/>
        {isSmallScreen && <AppSidebar />}
        <SiteHeader />
        <YStack className='flex-1 h-full text-[var(--text)] font-sans gap-3 pt-[150px] px-10'>
          {activeCard === 'aboutMe' && <AboutMeCard />}
          {activeCard === 'experience' && <ExperienceCard />}
          {activeCard === 'techstack' && <TechStackCard />}
        </YStack>
      </XStack>
    </SidebarProvider>
  );
}
