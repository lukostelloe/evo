import { useMediaQuery } from '@/hooks/useMediaQuery';
import LanguageDropdown from './language-dropdown';
import ThemeSelect from './theme-select';
import { SidebarTrigger } from './ui/sidebar';
import { XStack } from './ui/stacks';
import ButtonTabs from './ui/buttonTabs';
import StyleSelect from './style-select';

function SiteHeader() {
  const isSmallScreen = useMediaQuery('max', 'md');

  return (
    <XStack className='fixed top-8 left-0 w-full items-center justify-between p-6 h-[60px]'>
      <XStack className='items-center gap-6 '>
        {isSmallScreen ? (
          <SidebarTrigger className='hover:bg-[var(--background)]' />
        ) : null}
        <h3 className='font-bold text-[var(--largetext)]'>Luke Costelloe</h3>
      </XStack>
      {!isSmallScreen && <ButtonTabs />}
      <XStack className='gap-3 items-center'>
        <LanguageDropdown />
        <ThemeSelect />
        <StyleSelect/>
      </XStack>
    </XStack>
  );
}

export default SiteHeader;
