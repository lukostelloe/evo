import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language); // Set initial language

  // Update language when i18n.language changes
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]); // Dependency on i18n.language to track changes

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng); // Switch language
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <p>Current language: {language}</p> {/* Display current language */}
    </div>
  );
};

export default LanguageSwitcher;
