import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code2, Terminal, Database, Brain, Award, Download, Send, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import TechOrbit from './TechOrbit';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const phrases = [
    'Software Engineer',
    'Full-Stack Developer', 
    'AI/ML Enthusiast',
    'Digital Solutions Architect',
    'Problem Solver',
    'Innovation Driver'
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (typedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentPhraseIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Subaashini_Resume.pdf';
    link.download = 'Subaashini_Mohanasundaram_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 dark:from-neutral-900 dark:via-primary-900/30 dark:to-secondary-900/20" />
      
      {/* Interactive Purple Mouse Follower */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(217, 70, 239, 0.1) 50%, rgba(168, 85, 247, 0.05) 70%, transparent 90%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/5 dark:bg-black/5" />
      
      {/* Animated Purple Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-400 rounded-full animate-pulse-slow opacity-70 shadow-lg shadow-primary-400/50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary-400 rounded-full animate-bounce-slow opacity-60 shadow-md shadow-secondary-400/40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary-300 rounded-full animate-pulse-slow opacity-65 shadow-lg shadow-primary-300/50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-secondary-300 rounded-full animate-bounce-slow opacity-50 shadow-md shadow-secondary-300/40"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-primary-500 rounded-full animate-pulse-slow opacity-80"></div>
        <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-secondary-500 rounded-full animate-bounce-slow opacity-60"></div>
      </div>
      
      {/* Enhanced Purple Code Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333ea' fill-opacity='0.4'%3E%3Cpath d='M15 15h3v3h-3zM21 15h3v3h-3zM27 15h3v3h-3zM15 21h3v3h-3zM27 21h3v3h-3zM15 27h3v3h-3zM21 27h3v3h-3zM27 27h3v3h-3z'/%3E%3C/g%3E%3C/svg%3E")`
           }} />
      
      {/* Enhanced Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Code2, Terminal, Database, Brain, Award, Zap, Rocket, Star].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${15 + index * 12}%`,
              top: `${25 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <motion.div 
              className="p-4 bg-gradient-to-br from-primary-500/20 via-secondary-500/15 to-primary-600/10 dark:from-primary-400/15 dark:via-secondary-400/10 dark:to-primary-500/5 backdrop-blur-lg rounded-2xl border border-primary-300/40 dark:border-primary-400/30 shadow-2xl shadow-primary-500/20"
              whileHover={{ scale: 1.4, rotate: 20, y: -5 }}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
            >
              <Icon className="w-7 h-7 text-primary-700 dark:text-primary-300 drop-shadow-lg" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 2) * 50}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          >
            <div className={`w-8 h-8 ${index % 3 === 0 ? 'bg-gradient-to-r from-primary-400 to-secondary-400' : index % 3 === 1 ? 'bg-gradient-to-r from-secondary-400 to-accent-400' : 'bg-gradient-to-r from-accent-400 to-primary-400'} ${index % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'} opacity-20`} />
          </motion.div>
        ))}
      </div>
      
      {/* Enhanced Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Professional Photo - Centered at Top */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-16 flex justify-center"
          >
            <div className="relative group">
              {/* Animated Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-44 h-44 rounded-full bg-white dark:bg-neutral-900" />
              </motion.div>
              
              {/* Photo Container */}
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 p-1 shadow-2xl shadow-primary-500/30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-primary-200/30 dark:border-primary-400/20">
                  <motion.img 
                    src="/Suba photo.jpg" 
                    alt="Subaashini Mohanasundaram - Software Engineer"
                    className="w-40 h-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
              
              {/* Enhanced Purple Floating Badge */}
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.3, 1],
                  y: [0, -8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-3 -right-3 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl shadow-primary-500/40 backdrop-blur-sm border border-white/30"
              >
                <motion.div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Available</span>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Purple Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/25 via-secondary-500/20 to-primary-600/25"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Enhanced Content Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-12">
            {/* Enhanced Professional Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight">
                <span className="text-neutral-900 dark:text-white">I bring your vision to life through </span>
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent">smart technology</span>
              </h1>
            </motion.div>

              {/* Enhanced Professional Title with Typing Effect */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-neutral-700 dark:text-neutral-300 mb-6 font-display">
                  <span className="font-light">I'm a </span>
                  <span className="relative inline-block">
                    <motion.span 
                      className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent font-black"
                      animate={{ 
                        backgroundPosition: ['0%', '100%', '0%'],
                        textShadow: ['0 0 0px rgba(147, 51, 234, 0)', '0 0 20px rgba(147, 51, 234, 0.3)', '0 0 0px rgba(147, 51, 234, 0)']
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {typedText}
                    </motion.span>
                    <motion.span
                      animate={{ 
                        opacity: [1, 0, 1],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="absolute right-0 top-0 text-primary-600 dark:text-primary-400 font-thin drop-shadow-lg"
                    >
                      |
                    </motion.span>
                  </span>
                </div>
              </motion.div>

              {/* Enhanced Professional Summary */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 mb-12 leading-relaxed font-body max-w-5xl mx-auto"
              >
                Full‑stack developer focused on React, Node.js, and AI/ML (TensorFlow.js, MediaPipe).Available for freelance projects .
              </motion.p>
            
              {/* Enhanced Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg text-primary-600 dark:text-primary-400 font-bold text-lg rounded-3xl border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-2xl shadow-primary-500/20 hover:shadow-3xl hover:shadow-primary-500/30 transition-all duration-500 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-100/80 via-secondary-100/60 to-primary-100/80 dark:from-primary-900/20 dark:via-secondary-900/15 dark:to-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-200/30 via-transparent to-primary-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <div className="relative flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={22} />
                    </motion.div>
                    <span>Hire me</span>
                  </div>
                </motion.button>

                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg text-primary-600 dark:text-primary-400 font-bold text-lg rounded-3xl border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-2xl shadow-primary-500/20 hover:shadow-3xl hover:shadow-primary-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <Rocket size={20} />
                    <span>See my work</span>
                  </div>
                </motion.button>

                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 text-white font-bold text-lg rounded-3xl shadow-2xl shadow-primary-500/30 hover:shadow-3xl hover:shadow-primary-500/40 transition-all duration-500 overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 via-secondary-600 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <div className="relative flex items-center justify-center gap-3">
                    <Download size={24} />
                    <span>Download Resume</span>
                  </div>
                </motion.button>
              </motion.div>

              {/* Enhanced Tech Stack Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              >
                {['React', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'MySQL'].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-semibold shadow-soft hover:shadow-medium transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Social links removed to avoid redundancy with Contact section */}
            </div>

            {/* Tech Orbit Graphic (right side on large screens) */}
            <div className="hidden lg:flex justify-center">
              <TechOrbit />
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.span 
              className="text-base text-neutral-500 dark:text-neutral-400 font-semibold tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Explore my work
            </motion.span>
            
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-4 bg-gradient-to-r from-white/90 to-white/70 dark:from-neutral-800/90 dark:to-neutral-800/70 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden"
              aria-label="Scroll to about section"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <ChevronDown className="text-primary-600 dark:text-primary-400" size={24} />
              </motion.div>
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            {/* Scroll Line */}
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-primary-500/50 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;