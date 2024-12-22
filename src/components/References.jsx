import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const References = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Referanslar',
      phone: 'Telefon'
    },
    en: {
      title: 'References',
      phone: 'Phone'
    }
  };

  const references = [
    {
      name: "Orkun Orbay",
      title: "TPO, Simply Deliver",
      phone: "+31 6 25554285"
    },
    {
      name: "Cem Tezgelen",
      title: "Team Lead, Simply Deliver",
      phone: "+90 552 097 88 30"
    },
    {
      name: "Fırat Sezel",
      title: "Mobile Team Lead, Simply Deliver",
      phone: "+31 6 25554285"
    }
  ];

  const currentContent = content[language];

  return (
    <section id="referanslar" className="section">
      <h2>{currentContent.title}</h2>
      <div className="reference-grid">
        {references.map((ref, index) => (
          <div key={index} className="reference-item">
            <h3>{ref.name}</h3>
            <p>{ref.title}</p>
            <p><i className="fas fa-phone"></i> {currentContent.phone}: {ref.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References; 