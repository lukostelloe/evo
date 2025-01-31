import LanguageDropdown from './language-dropdown';
import { XStack } from './ui/stacks';

function SiteHeader() {
  return (
    <XStack className='fixed top-0 left-0 w-full bg-white z-10 items-center justify-between p-5'>
      <h3></h3>
      <h3>Luke Costelloe</h3>
      <LanguageDropdown />
    </XStack>
  );
}

export default SiteHeader;
