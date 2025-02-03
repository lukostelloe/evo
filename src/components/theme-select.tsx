
import { useState } from 'react';
import { Switch } from './ui/switch';
import { Stack, XStack } from './ui/stacks';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

function ThemeSelect() {

const [theme, setTheme] = useState('light')

function handleThemeChange(){
    if (theme === 'light'){
        setTheme('dark')
    } else {
        setTheme('light')
    }
    console.log(theme)
}

  return (
    <Button
      onClick={handleThemeChange}
      className='shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 text-black bg-white rounded-full border-2 border-black px-6'
    >
        {theme === 'light' ? <Sun /> : <Moon/>}
    </Button>
  );
}

export default ThemeSelect;
