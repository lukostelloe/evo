import LanguageDropdown from './language-dropdown';
import ThemeSelect from './theme-select';
import { XStack } from './ui/stacks';

function SiteHeader() {
  return (
    <XStack className='fixed top-0 left-0 w-full z-10 items-center justify-between p-5'>
      <h3></h3>
      <h3></h3>
      <XStack className='gap-3 items-center'>
      <LanguageDropdown />
      <ThemeSelect/>
      </XStack>
    </XStack>
  );
}

export default SiteHeader;
