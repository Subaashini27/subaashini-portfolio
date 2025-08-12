import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code2, Terminal, Database, Brain, Award, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = [
    'Software Engineer',
    'Full-Stack Developer', 
    'AI/ML Enthusiast',
    'Problem Solver'
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (typedText.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentPhraseIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800" />
      
      {/* Subtle Code Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M10 10h2v2h-2zM14 10h2v2h-2zM18 10h2v2h-2zM10 14h2v2h-2zM18 14h2v2h-2zM10 18h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z'/%3E%3C/g%3E%3C/svg%3E")`
           }} />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 p-4 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg backdrop-blur-sm"
        >
          <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 right-20 p-4 bg-green-500/10 dark:bg-green-400/10 rounded-lg backdrop-blur-sm"
        >
          <Terminal className="text-green-600 dark:text-green-400" size={24} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-32 left-20 p-4 bg-purple-500/10 dark:bg-purple-400/10 rounded-lg backdrop-blur-sm"
        >
          <Brain className="text-purple-600 dark:text-purple-400" size={24} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-40 right-10 p-4 bg-orange-500/10 dark:bg-orange-400/10 rounded-lg backdrop-blur-sm"
        >
          <Database className="text-orange-600 dark:text-orange-400" size={24} />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Professional Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Open to Software Engineering Opportunities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-gray-900 dark:text-white">Subaashini Mohanasundaram</span>
              </h1>
            </motion.div>

            {/* Professional Title with Typing Effect */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-light">I'm a </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Computer Science student specializing in AI/ML and full-stack development. 
              Passionate about building innovative solutions that solve real-world problems 
              through clean code and intelligent systems.
            </motion.p>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {['React', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'MySQL'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
              >
                <Code2 size={18} />
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-base hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
              >
                <ChevronDown size={18} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center gap-6"
            >
              <motion.a
                href="https://github.com/Subaashini27"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/subaashini-mohanasundaram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:subaashini2705@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
             </motion.div>
           </div>

           {/* Scroll Indicator */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.4 }}
             className="text-center mt-16"
           >
             <motion.button
               onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               whileHover={{ scale: 1.1 }}
               className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
             >
               <ChevronDown size={24} />
             </motion.button>
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
               Explore my work
             </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;