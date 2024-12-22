import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Hakkımda',
      description: 'Yazılım Mühendisliği alanında 3 yıllık profesyonel deneyime sahibim. Yüksek motivasyonlu ve sürekli kendini geliştirmeye odaklı bir yazılım mühendisi olarak, karmaşık problemleri çözmekten keyif alıyorum. Hızlı tempolu ve iş birliğine dayalı çalışma ortamlarında verimli sonuçlar elde etmek için analitik düşünme becerilerimi kullanıyorum.'
    },
    en: {
      title: 'About Me',
      description: 'I have 3 years of professional experience in Software Engineering. As a highly motivated software engineer focused on continuous self-improvement, I enjoy solving complex problems. I use my analytical thinking skills to achieve efficient results in fast-paced and collaborative work environments.'
    }
  };

  const currentContent = content[language];

  return (
    <section id="hakkimda" className="section">
      <h2>{currentContent.title}</h2>
      <p>{currentContent.description}</p>
    </section>
  );
};

export default About; 