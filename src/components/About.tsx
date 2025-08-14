import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, GraduationCap, Target, Users, TrendingUp, Database, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-primary-600" size={28} />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks like Tailwind CSS.",
      metrics: "React • TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      icon: <Database className="text-secondary-600" size={28} />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and database management systems.",
      metrics: "Node.js • MySQL",
      tech: ["Node.js", "Express", "MySQL", "REST APIs"]
    },
    {
      icon: <Brain className="text-primary-700" size={28} />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions using TensorFlow.js, MediaPipe, and computer vision for real-world applications.",
      metrics: "TensorFlow • Python",
      tech: ["TensorFlow.js", "MediaPipe", "Python", "Data Analysis"]
    },
    {
      icon: <GitBranch className="text-secondary-700" size={28} />,
      title: "DevOps & Tools",
      description: "Proficient in version control, CI/CD pipelines, containerization, and deployment workflows for efficient project management.",
      metrics: "Git • Docker",
      tech: ["Git", "GitHub Actions", "Docker", "VS Code", "Testing (Jest)", "XAMPP"]
    }
  ];

  const stats = [
    { number: "3.70", label: "CGPA", suffix: "", color: "text-primary-600", description: "Current CGPA in Software Engineering" },
    { number: "5", label: "Projects", suffix: "+", color: "text-secondary-600", description: "Completed academic and personal builds" },
    { number: "4", label: "Tech Stacks", suffix: "+", color: "text-primary-700", description: "Primary stacks used end‑to‑end" },
    { number: "5", label: "Awards", suffix: "+", color: "text-secondary-700", description: "Competition and showcase recognitions" }
  ];

  const values = [
    {
      icon: <Target className="text-primary-600" size={24} />,
      title: "Problem-Solving",
      description: "Break complex problems into deliverable steps and validate with quick iterations."
    },
    {
      icon: <Users className="text-secondary-600" size={24} />,
      title: "Collaboration",
      description: "Partner with stakeholders, communicate trade-offs, and keep feedback loops tight."
    },
    {
      icon: <TrendingUp className="text-primary-700" size={24} />,
      title: "Iteration",
      description: "Ship small, improve continuously, and measure real-world impact."
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

  // Award/portrait photos that will rotate
  const rotatingPhotos: Array<{ src: string; alt: string }> = [
    { src: '/Suba_Award.jpeg', alt: 'Receiving award - Suba Award' },
    { src: '/award-photo.jpg', alt: 'Award stage photo' },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhotoIndex((prev) => (prev + 1) % rotatingPhotos.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [photoIndex, rotatingPhotos.length]);

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
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
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6">
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm Subaashini, a Problem-solver,Software enthusiast and Builder.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 mx-auto rounded-full mb-8"></div>
            <ul className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 list-disc list-inside space-y-3">
              <li>Build AI-powered web apps end-to-end — from clean UIs to deployable back ends.</li>
              <li>Recent focus: real-time badminton injury monitoring using TensorFlow.js + MediaPipe to analyze movement and flag risk.</li>
              <li>Recognition: Enginnovate (Champion) plus multiple Gold/Silver awards.</li>
              <li>Workflow: small, fast iterations; documented decisions; clarity, performance, and measurable impact.</li>
            </ul>

            

          </motion.div>

          {/* Professional Profile Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
            {/* Award Photo */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative">
                {/* Professional background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-primary-200 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-2xl transform -rotate-2"></div>
                
                {/* Rotating award/portrait photos */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={rotatingPhotos[photoIndex].src}
                      src={rotatingPhotos[photoIndex].src}
                      alt={rotatingPhotos[photoIndex].alt}
                      className="w-full h-full object-cover object-center"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        // Simple fallback: swap to the other image
                        if (img.src.includes('Suba_Award.jpeg')) {
                          img.src = '/award-photo.jpg';
                        } else {
                          img.src = '/Suba_Award.jpeg';
                        }
                      }}
                    />
                  </AnimatePresence>
                </motion.div>

                {/* Professional badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg"
                >
                  🏆 Champion
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg"
                >
                  💡 Innovator
                </motion.div>
              </div>
            </motion.div>

            {/* Professional Info */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Building Tomorrow's Solutions Today
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <GraduationCap className="mr-3 text-blue-600" size={20} />
                      <span className="font-medium">Final Year Software Engineering</span>
                    </div>
                  </div>
                </div>

                {/* Skills moved to dedicated Skills section; removed here to avoid redundancy */}

                {/* Professional Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center p-6 bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 rounded-xl shadow-lg shadow-primary-500/10 border border-primary-100 dark:border-primary-700/30"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {stat.label}
                      </div>
                      {stat.description && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {stat.description}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Core Values & Approach
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide my work and professional development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-secondary-50 dark:from-gray-800 dark:to-secondary-900/20 p-6 rounded-xl shadow-lg shadow-secondary-500/10 border border-secondary-100 dark:border-secondary-700/30 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Highlights */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Expertise
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Key areas where I deliver exceptional value and innovative solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 p-8 rounded-xl shadow-lg shadow-primary-500/10 border border-primary-100 dark:border-primary-700/30"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {highlight.icon}
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                        {highlight.title}
                      </h4>
                    </div>
                    <span className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-semibold">
                      {highlight.metrics}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {highlight.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {highlight.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Language Proficiency section removed to streamline About */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;