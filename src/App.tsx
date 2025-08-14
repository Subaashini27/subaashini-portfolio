import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 dark bg-gray-900`}>
      <ParticleBackground />
      <Header darkMode={true} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Services />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;