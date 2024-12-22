import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Yazılım Mühendisi',
      downloadCV: 'CV İndir',
      email: 'E-posta',
      phone: 'Telefon',
      location: 'İzmir',
      linkedin: 'LinkedIn'
    },
    en: {
      title: 'Software Engineer',
      downloadCV: 'Download CV',
      email: 'Email',
      phone: 'Phone',
      location: 'Izmir',
      linkedin: 'LinkedIn'
    }
  };

  const currentContent = content[language];

  return (
    <header className="header">
      <h1>Barışcan Demirel</h1>
      <p>{currentContent.title}</p>
      <div className="social-links">
        <a href="mailto:bariscandemirel35@gmail.com">
          <i className="fas fa-envelope"></i> {currentContent.email}
        </a>
        <a href="tel:+905437704490">
          <i className="fas fa-phone"></i> {currentContent.phone}
        </a>
        <a href="#">
          <i className="fas fa-map-marker-alt"></i> {currentContent.location}
        </a>
        <a href="https://www.linkedin.com/in/barışcan-demirel-ab97b71a2/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {currentContent.linkedin}
        </a>
        <a href="/BariscanDemirel_CV.pdf" download>
          <i className="fas fa-download"></i> {currentContent.downloadCV}
        </a>
      </div>
    </header>
  );
};

export default Header; 