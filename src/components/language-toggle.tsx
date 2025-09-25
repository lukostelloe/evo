import { Stack } from './ui/stacks';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Button
      onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
      //todo - create a style for this in tailwind
      className='shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 text-black rounded-full border-2 bg-[var(--mode-switcher)] border-black'
    >
      <Stack className='p-1 rounded-full border-black'>
        <img
          src={`/flag-${language}.svg`}
          alt={`flag-${language}`}
          className='min-w-5'
        />
      </Stack>
    </Button>
  );
}

export default LanguageToggle;
