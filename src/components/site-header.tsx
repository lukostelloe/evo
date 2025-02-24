import { useMediaQuery } from '@/hooks/useMediaQuery';
import LanguageDropdown from './language-dropdown';
import ThemeSelect from './theme-select';
import { SidebarTrigger } from './ui/sidebar';
import { XStack } from './ui/stacks';
import ButtonTabs from './ui/buttonTabs';

function SiteHeader() {
  const isSmallScreen = useMediaQuery('max', 'md');

  return (
    <XStack className='fixed top-0 left-0 w-full items-center justify-between p-5 h-[60px]'>
      <XStack className='items-center gap-6'>
        {isSmallScreen ? (
          <SidebarTrigger className='hover:bg-[var(--background)]' />
        ) : null}
        <h3 className='font-bold text-[var(--text)]'>Luke Costelloe</h3>
      </XStack>
      {!isSmallScreen && <ButtonTabs />}
      <XStack className='gap-3 items-center'>
        <LanguageDropdown />
        <ThemeSelect />
      </XStack>
    </XStack>
  );
}

export default SiteHeader;
