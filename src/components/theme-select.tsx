import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './theme-provider';

function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="themeselector"
      //fix this: something to do with cva and style merging
      className='px-6'
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
}

export default ThemeSelect;
