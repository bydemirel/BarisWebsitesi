import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Teknik Yetenekler',
      languages: 'Diller',
      languagesList: {
        turkish: 'Türkçe',
        english: 'İngilizce'
      }
    },
    en: {
      title: 'Technical Skills',
      languages: 'Languages',
      languagesList: {
        turkish: 'Turkish',
        english: 'English'
      }
    }
  };

  const currentContent = content[language];

  const skills = [
    'Javascript',
    'PL/SQL',
    'Agile/Scrum',
    'Oracle Database',
    'RESTful API',
    'Flutter/Dart',
    'Java',
    'Problem Solving'
  ];

  return (
    <section id="yetenekler" className="section">
      <h2>{currentContent.title}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
      
      <h3 style={{ marginTop: '2rem' }}>{currentContent.languages}</h3>
      <div className="skills-grid">
        <div className="skill-item">{currentContent.languagesList.turkish}</div>
        <div className="skill-item">{currentContent.languagesList.english}</div>
      </div>
    </section>
  );
};

export default Skills; 