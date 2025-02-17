import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './theme-provider';

function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 text-black bg-[var(--mode-switcher)] rounded-full border-2 border-black px-6 text-[var(--anti-text)]'
    >
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
}

export default ThemeSelect;
