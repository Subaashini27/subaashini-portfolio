import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Eye, Code, Calendar, Users, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Sports Injury Prevention System",
      subtitle: "Final Year Project • Full-Stack AI Application",
      description: "Real-time computer vision application for sports injury prediction using TensorFlow.js and MediaPipe, featuring separate dashboards for athletes and coaches.",
      fullDescription: "A comprehensive full-stack application that combines modern web technologies with AI/ML capabilities. Built with React.js frontend, Node.js/Express.js backend, and MySQL database. Implements real-time pose estimation using MediaPipe MoveNet and TensorFlow.js for browser-based AI inference. Features include user authentication, role-based access control, real-time data visualization, and predictive analytics dashboards.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "TensorFlow.js", "MediaPipe", "TailwindCSS"],
      image: "Badminton.png",
      category: "AI/ML",
      status: "Completed",
      timeline: "Sep 2024 - Present",
      team: "Solo Project",
      github: "https://github.com/Subaashini27/badminton-injury-prediction",
      demo: "https://subaashini27.github.io/badminton-injury-prediction/",
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
    },
    {
      id: 2,
      title: "Rainwater Harvesting Calculator   ",
      subtitle: "Hackathon Project • Data-Driven Web Application",
      description: "Full-stack web application for rainwater harvesting optimization with real-time weather API integration and interactive data visualization.",
      fullDescription: "A modern web application built with React.js frontend and Node.js backend, featuring real-time API integration with OpenWeatherMap. Implements advanced data processing algorithms for CSV parsing and analysis, interactive charts with Recharts library, and responsive design. The application processes historical rainfall data to provide intelligent recommendations and ROI calculations.",
      tech: ["React.js", "Node.js", "Express.js", "Recharts", "REST APIs", "CSV Processing", "Data Visualization"],
      image: "Calculator.jpg",
      github: "https://github.com/Subaashini27/rainwater-harvesting-calculator",
      
      category: "Sustainability",
      status: "Completed",
      timeline: "April 2025",
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
    },
    {
      id: 3,
      title: "Islamic Microfinance Web Platform",
      subtitle: "Hackathon Project • FinTech Web Application",
      description: "Modern web application for Islamic microfinancing with Material-UI design system, featuring risk assessment algorithms and financial tracking.",
      fullDescription: "A sophisticated web application built with React.js and Material-UI, implementing complex financial algorithms and data visualization. Features include user authentication, financial dashboard with real-time calculations, risk assessment algorithms, and comprehensive data management. The application demonstrates advanced React patterns, state management, and integration with financial APIs.",
      tech: ["React.js", "Material-UI", "JavaScript", "Financial APIs", "Data Visualization", "Algorithm Design"],
      image: "Waqf-Sukuk.jpg",
      github: "https://github.com/Subaashini27/waqf-sukuk-platform",
      demo: "https://waqf-sukuk-platform.vercel.app/",
      category: "FinTech",
      status: "Completed",
      timeline: "March 2025",
      team: "Solo Participant",
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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Professional Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Featured 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack applications and AI-powered solutions demonstrating modern software engineering practices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Status and Category Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Completed' 
                        ? 'bg-green-100/90 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                        : 'bg-blue-100/90 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                          title="View Live Demo"
                        >
                          <Eye size={20} />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 shadow-lg"
                          title="View Source Code"
                        >
                          <Code size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {project.subtitle}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {project.timeline}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project.id)}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2"
                    >
                      <Play size={16} />
                      View Details
                    </motion.button>
                    
                    <div className="flex space-x-2">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                          title="Source Code"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
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