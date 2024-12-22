import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      about: 'Hakkımda',
      education: 'Eğitim',
      experience: 'İş Deneyimi',
      skills: 'Yetenekler',
      references: 'Referanslar'
    },
    en: {
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      references: 'References'
    }
  };

  const currentContent = content[language];

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="nav">
      <ul>
        <li><Link smooth to="#hakkimda" scroll={scrollWithOffset}>{currentContent.about}</Link></li>
        <li><Link smooth to="#egitim" scroll={scrollWithOffset}>{currentContent.education}</Link></li>
        <li><Link smooth to="#deneyim" scroll={scrollWithOffset}>{currentContent.experience}</Link></li>
        <li><Link smooth to="#yetenekler" scroll={scrollWithOffset}>{currentContent.skills}</Link></li>
        <li><Link smooth to="#referanslar" scroll={scrollWithOffset}>{currentContent.references}</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 