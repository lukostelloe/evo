
import { Stack } from './ui/stacks';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function LanguageSelect() {
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
      variant="themeselector"
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

export default LanguageSelect;
