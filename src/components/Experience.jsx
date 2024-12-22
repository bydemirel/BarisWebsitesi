import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { language } = useLanguage();

  // Süre hesaplama fonksiyonu
  const calculateDuration = React.useMemo(() => (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = endDate;
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                  (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const translations = {
      tr: {
        year: 'yıl',
        month: 'ay'
      },
      en: {
        year: 'year',
        years: 'years',
        month: 'month',
        months: 'months'
      }
    };

    const t = translations[language];

    if (language === 'tr') {
      if (years > 0 && remainingMonths > 0) {
        return `${years} ${t.year} ${remainingMonths} ${t.month}`;
      }
      return years > 0 ? `${years} ${t.year}` : `${remainingMonths} ${t.month}`;
    }

    const yearText = years === 1 ? t.year : t.years;
    const monthText = remainingMonths === 1 ? t.month : t.months;

    if (years > 0 && remainingMonths > 0) {
      return `${years} ${yearText} ${remainingMonths} ${monthText}`;
    }
    return years > 0 ? `${years} ${yearText}` : `${remainingMonths} ${monthText}`;
  }, [language]);

  const content = {
    tr: {
      education: {
        title: 'Eğitim',
        items: [
          {
            school: 'Yaşar Üniversitesi',
            date: 'Eylül 2017 - Eylül 2022',
            degree: 'Yazılım Mühendisliği',
            duration: '5 yıl',
            description: 'İkinci yıldan itibaren gösterdiğim akademik başarı sayesinde üstün başarı bursu kazanarak burs oranımı %100\'e yükselttim. Eğitimim süresince YUSpace ve Google Developer Student Club (GDSC) topluluklarında aktif roller üstlendim. Müfredatta Java, SQL, Yapay Zeka, Nesne Yönelimli Programlama ve Bilgisayar Ağları gibi temel derslerde kapsamlı eğitim aldım. Bitirme projesi olarak ekibimle birlikte Getir ve Yemeksepeti benzeri bir teslimat platformu olan "ŞipŞak" uygulamasını geliştirdik ve projemiz en yüksek not olan A ile değerlendirildi.'
          },
          {
            school: 'Warsaw University of Technology',
            date: 'Ekim 2021 - Şubat 2022',
            degree: 'Elektronik ve Bilgi Teknolojileri (Erasmus Programı)',
            duration: '5 ay',
            description: 'Node.js ve React.js teknolojileri ile web uygulamaları geliştirdim. Oracle Database kullanarak veritabanı yönetimi konusunda deneyim kazandım. C# MVC mimarisi ile kurumsal web uygulamaları tasarladım. Kriptografi dersinde RSA algoritması, simetrik/asimetrik şifreleme, hash fonksiyonları ve dijital imza gibi temel güvenlik konularında pratik uygulamalar geliştirdim.'
          }
        ]
      },
      experience: {
        title: 'İş Deneyimi',
        items: [
          {
            company: 'Simply Deliver',
            startDate: '2022-09-01', // Başlangıç tarihi
            date: 'Eylül 2022 - Devam Ediyor',
            position: 'Back End Developer',
            subtitle: 'Tam Zamanlı · Alsancak, İzmir',
            responsibilities: [
              'Oracle Apex ve PL/SQL teknolojileri ile kurumsal web uygulamaları geliştirme',
              'Postman kullanarak API geliştirme ve test süreçlerini yönetme',
              'RESTful servisler aracılığıyla mobil uygulama entegrasyonları ve JSON veri iletişimi',
              'Oracle Apex ortamında JavaScript ile özelleştirilmiş çözümler geliştirme',
              'Jira üzerinden proje takibi ve süreç yönetimi',
              'Agile/Scrum metodolojileri doğrultusunda ekip çalışması'
            ]
          },
          {
            company: 'Eralp Software',
            date: 'Mart 2022 - Eylül 2022',
            position: 'Part-Time Front End Developer',
            subtitle: 'Yarı Zamanlı · İzmir',
            duration: '7 ay',
            responsibilities: [
              'Web ve mobil uygulamalar için UI/UX ekibi ile koordineli çalışma',
              'Vue.js teknolojisi ile Noteballs Web Uygulaması geliştirme',
              'Flutter ile geliştirilen ve Google Play Store\'da yayınlanan Arya Mobil Uygulamasının geliştirme sürecinde aktif rol alma'
            ]
          },
          {
            company: 'Dijisan Engineering Inc.',
            date: 'Şubat 2021 - Ağustos 2021',
            position: 'Stajyer',
            subtitle: 'Staj · İzmir',
            duration: '7 ay',
            responsibilities: [
              'Yönetim paneli arayüzü tasarımı ve implementasyonu',
              'PHP ve MySQL teknolojileri ile veritabanı yönetimi',
              'Node.js platformunda web tabanlı uygulama geliştirme'
            ]
          }
        ]
      }
    },
    en: {
      education: {
        title: 'Education',
        items: [
          {
            school: 'Yasar University',
            date: 'September 2017 - September 2022',
            degree: 'Software Engineering',
            duration: '5 years',
            description: 'Due to academic excellence, earned a high achievement scholarship from the second year onwards, increasing my scholarship to 100%. Actively participated in YUSpace and Google Developer Student Club (GDSC) during my education. Received comprehensive training in core subjects including Java, SQL, Artificial Intelligence, Object-Oriented Programming, and Computer Networks. For the graduation project, our team developed "SipSak", a delivery platform similar to Getir and Yemeksepeti, which received the highest grade A.'
          },
          {
            school: 'Warsaw University of Technology',
            date: 'October 2021 - February 2022',
            degree: 'Electronics and Information Technology (Erasmus Program)',
            duration: '5 months',
            description: 'Developed web applications using Node.js and React.js technologies. Gained experience in database management using Oracle Database. Designed enterprise web applications with C# MVC architecture. In cryptography course, developed practical applications focusing on fundamental security concepts such as RSA algorithm, symmetric/asymmetric encryption, hash functions, and digital signatures.'
          }
        ]
      },
      experience: {
        title: 'Work Experience',
        items: [
          {
            company: 'Simply Deliver',
            startDate: '2022-09-01', // Start date
            date: 'September 2022 - Present',
            position: 'Back End Developer',
            subtitle: 'Full-time · Alsancak, Izmir',
            responsibilities: [
              'Developing web applications using Oracle Apex and PL/SQL',
              'Active use of Postman for API testing and development',
              'Communication with mobile side using RESTful services for JSON data exchange',
              'Using JavaScript in Oracle Apex workplace',
              'Active use of Jira for project management',
              'Working with Agile/Scrum methodologies'
            ]
          },
          {
            company: 'Eralp Software',
            date: 'March 2022 - September 2022',
            position: 'Part-Time Front End Developer',
            subtitle: 'Part-time · Izmir',
            duration: '7 months',
            responsibilities: [
              'Working with UI/UX designers for Web and mobile applications',
              'Developing Noteballs Web Application with Vue.js',
              'Played an active role in the code phase of the Arya Mobile Application developed in Flutter and released to Google Play Market'
            ]
          },
          {
            company: 'Dijisan Engineering Inc.',
            date: 'February 2021 - August 2021',
            position: 'Intern',
            subtitle: 'Internship · Izmir',
            duration: '7 months',
            responsibilities: [
              'Designing and developing a simple website (Dashboard)',
              'Working with PHP and MySQL Databases',
              'Developing a web-based application with Node.js'
            ]
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <>
      <section id="egitim" className="section">
        <h2>{currentContent.education.title}</h2>
        {currentContent.education.items.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.school}</h3>
            <p className="date">{item.date} · {item.duration}</p>
            <p className="position">{item.degree}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section id="deneyim" className="section">
        <h2>{currentContent.experience.title}</h2>
        {currentContent.experience.items.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.company}</h3>
            <p className="date">
              {item.date} · {item.startDate && calculateDuration(item.startDate)}
            </p>
            <p className="position">{item.position}</p>
            <p className="subtitle">{item.subtitle}</p>
            <ul>
              {item.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience; 