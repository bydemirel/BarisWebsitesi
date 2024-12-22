import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLanguage } from '../context/LanguageContext';
import './Navigation.css';

const Navigation = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`dropdown-icon ${isOpen ? 'active' : ''}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link smooth to="#hakkimda" scroll={scrollWithOffset} onClick={handleLinkClick}>{currentContent.about}</Link></li>
        <li><Link smooth to="#egitim" scroll={scrollWithOffset} onClick={handleLinkClick}>{currentContent.education}</Link></li>
        <li><Link smooth to="#deneyim" scroll={scrollWithOffset} onClick={handleLinkClick}>{currentContent.experience}</Link></li>
        <li><Link smooth to="#yetenekler" scroll={scrollWithOffset} onClick={handleLinkClick}>{currentContent.skills}</Link></li>
        <li><Link smooth to="#referanslar" scroll={scrollWithOffset} onClick={handleLinkClick}>{currentContent.references}</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 