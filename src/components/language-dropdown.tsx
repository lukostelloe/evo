import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Stack } from './ui/stacks';

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]); // Dependency on i18n.language to track changes

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Switch language
  };

  return (
    <Button
      onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
      className='shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 text-black bg-transparent rounded-full border-2 border-black'
    >
      <Stack className='p-1 rounded-full  border-black'>
        <img src={`/flag-${language}.svg`} alt={`flag-${language}`} />
      </Stack>
    </Button>
  );
}

export default LanguageDropdown;
