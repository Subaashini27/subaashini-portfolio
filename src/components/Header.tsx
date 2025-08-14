import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'services', label: 'Services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      // Handle header background
      setScrolled(window.scrollY > 50);

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Removed resume download here to avoid duplication with hero

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode 
            ? 'bg-gray-900/80 backdrop-blur-xl border-gray-800 shadow-lg' 
            : 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg'
          : 'bg-transparent border-transparent'
      } border-b before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary-500/40 before:to-transparent`}
    >
      <nav className="container mx-auto pl-2 pr-6 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Professional Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center ml-0"
          >
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white">Subaashini</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">.dev</span>
            </div>
          </motion.div>

          {/* Desktop Navigation (show from md and up) */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
                {/* active background pill */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-100/70 dark:bg-blue-900/30 rounded-lg -z-10"
                  />
                )}
                {/* animated underline */}
                <span
                  className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100 ${
                    activeSection === item.id ? 'scale-x-100' : ''
                  }`}
                />
              </motion.button>
            ))}
            
            {/* Right-side actions */}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold shadow-soft hover:shadow-medium"
              >
                Contact
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button (hide from md and up) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation (only on small screens) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2 pb-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileTap={{ scale: 0.97 }}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold"
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;