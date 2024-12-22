import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import References from './components/References';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="loading">Yükleniyor...</div>}>
          <div className="app">
            <LanguageToggle />
            <Header />
            <Navigation />
            <main className="content">
              <About />
              <Experience />
              <Skills />
              <References />
            </main>
            <Footer />
          </div>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App; 