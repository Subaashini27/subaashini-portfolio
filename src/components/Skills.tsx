import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench, TrendingUp, Award, Globe, Server, Smartphone, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Globe size={28} />,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, experience: "2+ years" },
        { name: "TypeScript", level: 85, experience: "1+ year" },
        { name: "JavaScript (ES6+)", level: 90, experience: "3+ years" },
        { name: "HTML5 & CSS3", level: 95, experience: "3+ years" },
        { name: "Tailwind CSS", level: 85, experience: "2+ years" },
        { name: "Responsive Design", level: 90, experience: "2+ years" }
      ],
      color: "primary",
      description: "Modern frontend technologies for building interactive user interfaces"
    },
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, experience: "2+ years" },
        { name: "Express.js", level: 75, experience: "1+ year" },
        { name: "Python", level: 85, experience: "2+ years" },
        { name: "RESTful APIs", level: 80, experience: "1+ year" },
        { name: "Authentication", level: 75, experience: "1+ year" }
      ],
      color: "secondary",
      description: "Server-side development and API design"
    },
    {
      icon: <Database size={28} />,
      title: "Database & DevOps",
      skills: [
        { name: "MySQL", level: 85, experience: "2+ years" },
        { name: "SQL", level: 90, experience: "3+ years" },
        { name: "Git & GitHub", level: 85, experience: "2+ years" },
        { name: "Docker", level: 70, experience: "6+ months" },
        { name: "Linux/Unix", level: 75, experience: "1+ year" }
      ],
      color: "primary",
      description: "Database management and development operations"
    },
    {
      icon: <Brain size={28} />,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow.js", level: 85, experience: "1+ year" },
        { name: "MediaPipe", level: 80, experience: "1+ year" },
        { name: "Computer Vision", level: 80, experience: "1+ year" },
        { name: "Data Analysis", level: 85, experience: "2+ years" },
        { name: "Model Deployment", level: 75, experience: "1+ year" }
      ],
      color: "secondary",
      description: "AI/ML applications and intelligent system development"
    }
  ];

  const tools = [
    { name: "Visual Studio Code", category: "IDE", icon: <Code size={20} /> },
    { name: "Git & GitHub", category: "Version Control", icon: <GitBranch size={20} /> },
    { name: "Docker", category: "DevOps", icon: <Server size={20} /> },
    { name: "Postman", category: "API Testing", icon: <Globe size={20} /> },
    { name: "Figma", category: "UI/UX Design", icon: <Smartphone size={20} /> },
    { name: "npm/yarn", category: "Package Manager", icon: <Database size={20} /> },
    { name: "Webpack/Vite", category: "Build Tools", icon: <Wrench size={20} /> },
    { name: "Chrome DevTools", category: "Debugging", icon: <Brain size={20} /> }
  ];

  const certifications = [
    {
      title: "Modern Web Development",
      issuer: "Project-Based Learning",
      year: "2023-2024",
      skills: ["React.js", "TypeScript", "Node.js", "REST APIs"]
    },
    {
      title: "AI/ML Applications",
      issuer: "Self-Directed Learning",
      year: "2024",
      skills: ["TensorFlow.js", "MediaPipe", "Computer Vision", "Data Analysis"]
    },
    {
      title: "Software Engineering Practices",
      issuer: "Academic & Project Experience",
      year: "2023-2024",
      skills: ["Git Workflow", "Code Review", "Testing", "Documentation"]
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "from-primary-500 to-primary-600",
        text: "text-primary-600 dark:text-primary-400",
        bar: "bg-gradient-to-r from-primary-500 to-primary-600",
        accent: "bg-primary-50 dark:bg-primary-900/20"
      },
      secondary: {
        bg: "from-secondary-500 to-secondary-600", 
        text: "text-secondary-600 dark:text-secondary-400",
        bar: "bg-gradient-to-r from-secondary-500 to-secondary-600",
        accent: "bg-secondary-50 dark:bg-secondary-900/20"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50">
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
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills & 
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent"> Proficiency</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical skills developed through hands-on projects and continuous learning
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 p-8 rounded-2xl shadow-lg shadow-primary-500/10 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 border border-primary-100 dark:border-primary-700/30"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`${getColorClasses(category.color).text} mr-4 p-2 ${getColorClasses(category.color).accent} rounded-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <span className="text-gray-900 dark:text-white font-semibold">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                            ({skill.experience})
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-medium mr-2">
                            {skill.level}%
                          </span>
                          <TrendingUp size={16} className={getColorClasses(category.color).text} />
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className={`h-3 rounded-full ${getColorClasses(category.color).bar} shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Platforms */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tools & Technologies
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional tools and platforms I use for development and collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-white to-secondary-50 dark:from-gray-800 dark:to-secondary-900/20 p-6 rounded-xl shadow-lg shadow-secondary-500/10 border border-secondary-100 dark:border-secondary-700/30 text-center group"
                >
                  <div className="mb-3">
                    <div className="text-secondary-600 dark:text-secondary-400 mx-auto group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {tool.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Commitment to staying current with emerging technologies and best practices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 p-8 rounded-2xl border border-primary-200 dark:border-primary-700/30 shadow-lg shadow-primary-500/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Award className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;