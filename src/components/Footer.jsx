import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const content = {
    tr: {
      rights: 'Tüm hakları saklıdır'
    },
    en: {
      rights: 'All rights reserved'
    }
  };

  const currentContent = content[language];

  return (
    <footer className="footer">
      <p>&copy; {year} Barış Can Demirel - {currentContent.rights}</p>
    </footer>
  );
};

export default Footer; 