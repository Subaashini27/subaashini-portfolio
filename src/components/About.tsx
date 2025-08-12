import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Award, MapPin, GraduationCap, Target, Users, Lightbulb, TrendingUp, Database, Globe, Cpu, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={28} />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks like Tailwind CSS.",
      metrics: "React • TypeScript",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      icon: <Database className="text-green-600" size={28} />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and database management systems.",
      metrics: "Node.js • MySQL",
      tech: ["Node.js", "Express.js", "MySQL", "REST APIs"]
    },
    {
      icon: <Brain className="text-purple-600" size={28} />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions using TensorFlow.js, MediaPipe, and computer vision for real-world applications.",
      metrics: "TensorFlow • Python",
      tech: ["TensorFlow.js", "MediaPipe", "Python", "Data Analysis"]
    },
    {
      icon: <GitBranch className="text-orange-600" size={28} />,
      title: "Development Tools",
      description: "Proficient in version control, development environments, and deployment workflows for efficient project management.",
      metrics: "Git • Docker",
      tech: ["Git", "VS Code", "Docker", "XAMPP"]
    }
  ];

  const stats = [
    { number: "3.70", label: "CGPA", suffix: "", color: "text-blue-600" },
    { number: "10", label: "Projects", suffix: "+", color: "text-green-600" },
    { number: "4", label: "Tech Stacks", suffix: "+", color: "text-purple-600" },
    { number: "5", label: "Awards", suffix: "+", color: "text-orange-600" }
  ];

  const values = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Problem-Solving Focus",
      description: "Every project starts with understanding the real problem and crafting elegant solutions."
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Collaborative Mindset",
      description: "Believe in the power of teamwork and knowledge sharing to achieve exceptional results."
    },
    {
      icon: <Lightbulb className="text-purple-600" size={24} />,
      title: "Continuous Innovation",
      description: "Always exploring new technologies and methodologies to stay ahead of the curve."
    },
    {
      icon: <TrendingUp className="text-orange-600" size={24} />,
      title: "Growth Oriented",
      description: "Committed to continuous learning and professional development in emerging technologies."
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Crafting Digital Solutions with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Code & Innovation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A dedicated Software Engineering student specializing in full-stack development and AI/ML applications, 
              committed to building scalable, user-centric solutions that solve real-world problems.
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl transform -rotate-2"></div>
                
                {/* Award photo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                >
                  <img
                    src="/award-photo.jpg"
                    alt="Subaashini Mohanasundaram - Award Winner"
                    className="w-full h-full object-cover object-center"
                  />
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
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="mr-3 text-green-600" size={20} />
                      <span className="font-medium">Alor Gajah, Malacca, Malaysia</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Software Engineering student specializing in full-stack web development 
                    and AI/ML applications. I enjoy building scalable, user-friendly applications using modern 
                    technologies like React, Node.js, and TensorFlow, with a focus on clean code and 
                    innovative problem-solving.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently seeking software engineering internship opportunities where I can apply my 
                    technical skills, contribute to meaningful projects, and continue growing as a developer 
                    in a collaborative, fast-paced environment.
                  </p>
                </div>

                {/* Professional Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {stat.label}
                      </div>
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
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center"
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
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {highlight.icon}
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                        {highlight.title}
                      </h4>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
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
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Language Proficiency
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                   English (Fluent)
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                   Malay (Fluent)
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                   Tamil (Native)
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;