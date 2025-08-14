import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Eye, Code, Calendar, Users, Award, Filter, Trophy, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'AI/ML', 'Web Development', 'Sustainability', 'Mobile'];
  const projects = [
    {
      id: 1,
      title: "AI-Powered Sports Injury Prevention System",
      subtitle: "Final Year Project • Full-Stack AI Application",
      description: "Real-time computer vision application for sports injury prediction using TensorFlow.js and MediaPipe, featuring separate dashboards for athletes and coaches.",
      outcome: "Real-time pose analysis; 92% precision on demo set",
      badges: [],
      fullDescription: "A comprehensive full-stack application that combines modern web technologies with AI/ML capabilities. Built with React.js frontend, Node.js/Express.js backend, and MySQL database. Implements real-time pose estimation using MediaPipe MoveNet and TensorFlow.js for browser-based AI inference. Features include user authentication, role-based access control, real-time data visualization, and predictive analytics dashboards.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "TensorFlow.js", "MediaPipe", "TailwindCSS"],
      image: "Badminton.png",
      category: "AI/ML",
      status: "Completed",
      timeline: "Sep 2024 - Present",
      team: "Solo Project",
      github: "https://github.com/Subaashini27/-badminton-injury-prediction",
      demo: "https://www.badminton-injury.live/",
      demoVideo: "",
      
      features: [
        "Real-time computer vision with MediaPipe integration",
        "RESTful API design with Express.js backend",
        "Role-based authentication and authorization",
        "Real-time data visualization with Chart.js",
        "Responsive React.js frontend with TypeScript",
        "MySQL database with optimized queries"
      ],
      impact: "Potential to reduce sports injuries by 30-40% through predictive analytics",
      recognition: "Final Year Project - Expected Excellence Award"
    ,
      caseStudy: {
        why: "Reduce badminton overuse injuries by giving athletes and coaches real-time risk signals without expensive hardware or wearables.",
        solution: "Browser-based pose estimation using MediaPipe MoveNet and TensorFlow.js; Node/Express API with MySQL for session storage; role-based dashboards for athletes/coaches with real-time charts and threshold-based risk flags.",
        role: "Solo developer: requirements, architecture, React/TypeScript frontend, Node/Express backend, DB schema, deployment, and CI.",
        status: "Completed FYP; live demo available; recognized at competitions; next: run a small pilot with players/coaches."
      }
    },
    {
      id: 2,
      title: "Rainwater Harvesting Calculator",
      subtitle: "Hackathon Project • Data-Driven Web Application",
      description: "Full-stack web application for rainwater harvesting optimization with real-time weather API integration and interactive data visualization.",
      outcome: " Pulls live weather APIs.",
      badges: [],
      fullDescription: "A modern web application built with React.js frontend and Node.js backend, featuring real-time API integration with OpenWeatherMap. Implements advanced data processing algorithms for CSV parsing and analysis, interactive charts with Recharts library, and responsive design. The application processes historical rainfall data to provide intelligent recommendations and ROI calculations.",
      tech: ["React.js", "Node.js", "Express.js", "Recharts", "REST APIs", "CSV Processing", "Data Visualization"],
      image: "Calculator.jpg",
      github: "https://github.com/Subaashini27/rainwater-harvesting-optimizer",
      
      category: "Sustainability",
      status: "Completed",
      timeline: "April 2025",
      demoVideo: "",
      features: [
        "RESTful API integration with OpenWeatherMap",
        "Advanced data processing and CSV parsing",
        "Interactive charts with Recharts library",
        "Responsive React.js component architecture",
        "State management with React hooks",
        "Optimized performance with data caching"
      ],
      impact: "Helps optimize water conservation efforts across Malaysia",
      recognition: "JomHack VarsityHack 2025 Participant"
    ,
      caseStudy: {
        why: "Help households and facilities estimate rainwater capture potential and ROI to support water conservation decisions.",
        solution: "Combine historical CSV data with OpenWeatherMap API; calculate catchment, runoff, and storage needs; present insights with interactive charts and a responsive UI.",
        role: "Full-stack implementation: React frontend, Node/Express backend, data processing, charting, and API integration.",
        status: "Hackathon project completed; next: add mobile layout and deploy a guided calculator for non-technical users."
      }
    },
    {
      id: 3,
      title: "Waqf Sukuk Platform",
      subtitle: "Hackathon Project • FinTech Web Application",
      description: "Modern web application for Islamic microfinancing with Material-UI design system, featuring risk assessment algorithms and financial tracking.",
      outcome: "Promotes financial inclusion while adhering to Islamic finance principles",
      badges: [],
      fullDescription: "A sophisticated web application built with React.js and Material-UI, implementing complex financial algorithms and data visualization. Features include user authentication, financial dashboard with real-time calculations, risk assessment algorithms, and comprehensive data management. The application demonstrates advanced React patterns, state management, and integration with financial APIs.",
      tech: ["React.js", "Material-UI", "JavaScript", "Financial APIs", "Data Visualization", "Algorithm Design"],
      image: "Waqf-Sukuk.jpg",
      github: "https://github.com/Subaashini27/waqf-sukuk-platform",
      category: "FinTech",
      status: "Completed",
      timeline: "March 2025",
      demoVideo: "",
    
      features: [
        "Complex financial calculation algorithms",
        "Material-UI component library implementation",
        "Advanced React state management",
        "Real-time data visualization dashboards",
        "Responsive web design principles",
        "API integration and data processing"
      ],
      impact: "Promotes financial inclusion while adhering to Islamic finance principles",
      recognition: "UM Hackathon 2025 Participant"
    ,
      caseStudy: {
        why: "Explore a Sharia-compliant microfinancing flow for small borrowers and improve transparency around risks and repayments.",
        solution: "React + Material UI app with financial calculators, risk heuristics, and dashboards; integrates with mock financial APIs for data flows.",
        role: "Frontend lead and integrator: UI design system, state management, API adapters, and data visualization.",
        status: "Hackathon prototype; next: validate assumptions with domain mentors and connect to a sandbox API."
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // (removed unused cardVariants)

  const filterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`bg-element-${index}`}
            className="absolute w-64 h-64 rounded-full opacity-5"
            style={{
              background: `linear-gradient(45deg, ${index % 3 === 0 ? '#3b82f6' : index % 3 === 1 ? '#10b981' : '#f97316'}, transparent)`,
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Professional Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center px-8 py-4 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-md rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl mb-10"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Trophy className="text-accent-500 mr-4" size={24} />
              </motion.div>
              <span className="text-base font-bold text-neutral-700 dark:text-neutral-300 tracking-wide">
                Featured Projects & Achievements
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="ml-4 text-secondary-500" size={20} />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-neutral-900 dark:text-white">My </span>
              <motion.span 
                className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Portfolio
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-body max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Showcasing innovative solutions across AI/ML, web development, and sustainability. 
              Each project demonstrates technical excellence and real-world impact.
            </motion.p>
          </motion.div>

          {/* Enhanced Project Filters */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variants={filterVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-500 overflow-hidden ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 text-white shadow-2xl shadow-primary-500/30'
                    : 'bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg text-neutral-600 dark:text-neutral-400 hover:text-white border border-primary-200/30 dark:border-primary-700/30 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20'
                }`}
              >
                {activeFilter !== filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/25 via-secondary-500/20 to-primary-700/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                )}
                
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 via-secondary-600 to-primary-800"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {filter === 'All' && <Filter size={18} />}
                  {filter === 'AI/ML' && <Award size={18} />}
                  {filter === 'Web Development' && <Code size={18} />}
                  {filter === 'Sustainability' && <Star size={18} />}
                  {filter === 'Mobile' && <Eye size={18} />}
                  {filter}
                </span>
                
                {activeFilter === filter && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 rounded-2xl opacity-40 blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {projects
              .filter(project => activeFilter === 'All' || project.category === activeFilter)
              .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 overflow-hidden group border border-neutral-200 dark:border-neutral-700"
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover object-center transition-transform duration-700"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                  />
                  
                  {/* Enhanced Status and Category Badges */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between">
                    <div className="flex flex-col gap-3">
                      <motion.span 
                        className={`px-5 py-3 rounded-2xl text-sm font-bold backdrop-blur-md shadow-xl border border-white/30 ${
                          project.status === 'Completed' 
                            ? 'bg-secondary-100/90 text-secondary-800 dark:bg-secondary-900/80 dark:text-secondary-200'
                            : 'bg-primary-100/90 text-primary-800 dark:bg-primary-900/80 dark:text-primary-200'
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.status}
                      </motion.span>
                      {project.badges.map((badge, idx) => (
                        <motion.span 
                          key={idx} 
                          className="px-4 py-2 bg-gradient-to-r from-secondary-500/90 to-secondary-600/90 text-white rounded-2xl text-sm font-bold backdrop-blur-md shadow-xl shadow-secondary-500/30 border border-white/30"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 }}
                          animate={{ 
                            boxShadow: ['0 4px 20px rgba(217, 70, 239, 0.3)', '0 8px 30px rgba(217, 70, 239, 0.5)', '0 4px 20px rgba(217, 70, 239, 0.3)'] 
                          }}
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                    <motion.span 
                      className="px-5 py-3 bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 text-white rounded-2xl text-sm font-bold backdrop-blur-md shadow-xl border border-white/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  {/* Enhanced Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="flex space-x-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, staggerChildren: 0.1 }}
                    >
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -5, rotateY: 15 }}
                          whileTap={{ scale: 0.9 }}
                          className="group/btn relative p-5 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 text-white rounded-2xl shadow-2xl shadow-primary-500/30 backdrop-blur-md border border-white/20 overflow-hidden"
                          title="View Live Demo"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <Eye size={24} className="relative z-10" />
                          <motion.span 
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900/95 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap font-bold backdrop-blur-md border border-white/20"
                            initial={{ y: 10, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            Live Demo
                          </motion.span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -5, rotateY: 15 }}
                          whileTap={{ scale: 0.9 }}
                          className="group/btn relative p-5 bg-gradient-to-r from-neutral-800 via-primary-900/50 to-neutral-900 text-white rounded-2xl shadow-2xl shadow-primary-500/20 backdrop-blur-md border border-white/20 overflow-hidden"
                          title="View Source Code"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neutral-700 via-primary-800/40 to-neutral-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <Code size={24} className="relative z-10" />
                          <motion.span 
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900/95 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap font-bold backdrop-blur-md border border-white/20"
                            initial={{ y: 10, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            GitHub
                          </motion.span>
                        </motion.a>
                      )}
                      {project.demoVideo && (
                        <motion.a
                          href={project.demoVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -5, rotateY: 15 }}
                          whileTap={{ scale: 0.9 }}
                          className="group/btn relative p-5 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-2xl shadow-2xl shadow-secondary-500/30 backdrop-blur-md border border-white/20 overflow-hidden"
                          title="Demo Video"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <Play size={24} className="relative z-10" />
                          <motion.span 
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-900/95 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap font-bold backdrop-blur-md border border-white/20"
                            initial={{ y: 10, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            Demo Video
                          </motion.span>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="relative p-10">
                  {/* Content Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50 dark:from-primary-900/20 dark:to-accent-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl"
                  />
                  
                  <div className="relative z-10">
                    {/* Enhanced Project Meta */}
                    <div className="flex items-center justify-between mb-8">
                      <motion.span 
                        className="text-sm text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.subtitle}
                      </motion.span>
                      <motion.div 
                        className="flex items-center text-neutral-500 dark:text-neutral-400 text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar size={14} className="mr-1" />
                        {project.timeline}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="font-display text-2xl md:text-3xl font-black text-neutral-900 dark:text-white mb-6 line-clamp-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-neutral-600 dark:text-neutral-300 mb-8 line-clamp-3 leading-relaxed font-body text-lg"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                  
                  {/* Enhanced Outcome/Metrics */}
                  <motion.div 
                    className="mb-8 p-6 bg-gradient-to-r from-secondary-50/80 to-secondary-100/60 dark:from-secondary-900/40 dark:to-secondary-800/30 rounded-2xl border border-secondary-200/50 dark:border-secondary-700/50 backdrop-blur-sm shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <motion.div
                        className="p-2 bg-secondary-500/20 rounded-xl mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award size={18} className="text-secondary-600 dark:text-secondary-400" />
                      </motion.div>
                      <span className="text-sm font-bold text-secondary-800 dark:text-secondary-300 uppercase tracking-wide">Impact & Results</span>
                    </div>
                    <p className="text-secondary-700 dark:text-secondary-300 text-base leading-relaxed font-medium">
                      {project.outcome}
                    </p>
                  </motion.div>
                  
                  {/* Enhanced Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-4 flex items-center uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-5 py-3 bg-gradient-to-r from-neutral-100/80 to-neutral-200/60 dark:from-neutral-700/80 dark:to-neutral-600/60 text-neutral-700 dark:text-neutral-300 rounded-2xl text-sm font-bold hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900/40 dark:hover:to-primary-800/40 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-600/50 backdrop-blur-sm shadow-md cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: idx * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <motion.span 
                          className="px-5 py-3 bg-gradient-to-r from-primary-50/80 to-primary-100/60 dark:from-primary-900/40 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 rounded-2xl text-sm font-bold border border-primary-200/50 dark:border-primary-700/50 backdrop-blur-sm shadow-md"
                          whileHover={{ scale: 1.05, y: -3 }}
                          transition={{ duration: 0.3 }}
                        >
                          +{project.tech.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Project Actions */}
                  <div className="space-y-6 pt-8 border-t border-neutral-200/50 dark:border-neutral-700/50">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="w-full group/btn relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 text-white rounded-2xl font-bold text-base shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-500 overflow-hidden border border-primary-500/30"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <Play size={20} className="mr-3 relative z-10 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-all duration-300" />
                      <span className="relative z-10">View Full Details</span>
                    </motion.button>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn relative flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-secondary-500/30"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <ExternalLink size={18} className="mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10">Live Demo</span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn relative flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-neutral-700/50"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <Github size={18} className="mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10">Source Code</span>
                        </motion.a>
                      )}
                      {project.demoVideo && (
                        <motion.a
                          href={project.demoVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.08, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn relative flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-400 overflow-hidden border border-accent-500/30"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <Play size={18} className="mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10">Demo Video</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    {/* Modal Header */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200 backdrop-blur-sm"
                      >
                        <X size={20} />
                      </button>
                      
                      {/* Project Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-100 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Project Meta Information */}
                      <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                        <div className="flex items-center">
                          <Calendar className="text-blue-600 mr-3" size={20} />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Timeline</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{project.timeline}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="text-green-600 mr-3" size={20} />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Team</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{project.team}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="text-purple-600 mr-3" size={20} />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{project.status}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                          >
                            <ExternalLink size={18} />
                            View Live Demo
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-semibold"
                          >
                            <Github size={18} />
                            View Source Code
                          </motion.a>
                        )}
                      </div>

                      {/* Project Description */}
                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Project Overview
                        </h4>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.fullDescription}
                        </p>
                        {project.caseStudy && (
                          <div className="mt-6 grid md:grid-cols-2 gap-6">
                            <div className="p-5 bg-neutral-50 dark:bg-neutral-700/40 rounded-xl border border-neutral-200/60 dark:border-neutral-700/50">
                              <h5 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-2">Why</h5>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{project.caseStudy.why}</p>
                            </div>
                            <div className="p-5 bg-neutral-50 dark:bg-neutral-700/40 rounded-xl border border-neutral-200/60 dark:border-neutral-700/50">
                              <h5 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-2">Solution</h5>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{project.caseStudy.solution}</p>
                            </div>
                            <div className="p-5 bg-neutral-50 dark:bg-neutral-700/40 rounded-xl border border-neutral-200/60 dark:border-neutral-700/50">
                              <h5 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-2">My Role</h5>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{project.caseStudy.role}</p>
                            </div>
                            <div className="p-5 bg-neutral-50 dark:bg-neutral-700/40 rounded-xl border border-neutral-200/60 dark:border-neutral-700/50">
                              <h5 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-2">Status</h5>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{project.caseStudy.status}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                          Key Features & Capabilities
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact & Recognition */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Project Impact
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            Recognition
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.recognition}
                          </p>
                        </div>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-800 dark:text-blue-300 rounded-lg font-medium border border-blue-200 dark:border-blue-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;