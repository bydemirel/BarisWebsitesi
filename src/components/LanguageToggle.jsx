import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage} 
      className="language-toggle"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
};

export default LanguageToggle; 