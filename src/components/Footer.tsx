import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Subaashini.dev
            </motion.h3>
            <p className="text-gray-300 text-lg mb-6">
              Crafting innovative solutions with passion and precision
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/subaashini-mohanasundaram-0a7b28293"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a
                href="https://github.com/Subaashini27"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href="mailto:subaashini2701@gmail.com"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} fill="currentColor" />
                <span>and</span>
                <Code className="text-blue-400" size={16} />
                <span>by Subaashini</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                <p>&copy; {currentYear} Subaashini Mohanasundaram. All rights reserved.</p>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                Software Engineering Student | AI Enthusiast | Ready to Innovate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;