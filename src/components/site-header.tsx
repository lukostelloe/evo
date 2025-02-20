import ContactButtons from './contactButtons';
import LanguageDropdown from './language-dropdown';
import ThemeSelect from './theme-select';
import ButtonTabs from './ui/buttonTabs';
import { XStack } from './ui/stacks';

function SiteHeader() {
  return (
    <XStack className='fixed top-0 left-0 w-full z-10 items-center justify-between p-5'>
      <XStack className='items-center gap-6'>
        <h3 className='font-bold text-[var(--text)]'>Luke Costelloe</h3>
        <ContactButtons />
      </XStack>
      <ButtonTabs />
      <XStack className='gap-3 items-center'>
        <LanguageDropdown />
        <ThemeSelect />
      </XStack>
    </XStack>
  );
}

export default SiteHeader;
