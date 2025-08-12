import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Star, Calendar, Award as AwardIcon, X, ExternalLink } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Champion - Engineering Innovative Design Competition (ENGINNOVATE)",
      date: "2025",
      type: "Engineering Innovation",
      icon: <Trophy className="text-yellow-500" size={24} />,
      level: "National",
      description: "Champion award for Engineering Innovative Design Competition hosted by USM Engineering Campus Career Fair 2025 in collaboration with IEM-USM Student Section."
    },
    {
      title: "Silver Award - AI-Driven Intelligent Monitoring Dashboard for Sports Injury Predictions (INNOVEX)",
      date: "March 2025",
      type: "Young Science Technology",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "University",
      description: "Silver Award for developing an AI-driven intelligent monitoring dashboard for sports injury predictions at INNOVEX 2025, Universiti Selangor."
    },
    {
      title: "Silver Award - AI-Driven Intelligent Monitoring Dashboard for Sports Injury Predictions (IIEF)",
      date: "February 2025",
      type: "International Innovation",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "International",
      description: "Silver Award at International Innovation & Exhibition Fair (IIEF 2025) for AI-driven intelligent monitoring dashboard for sports injury predictions."
    }
  ];

  const participation = [
    {
      title: "INNOVEX 2025 - Innovation Competition",
      date: "March 2025",
      type: "Innovation Competition",
      description: "Participated in INNOVEX 2025 innovation competition at Universiti Selangor, showcasing AI-driven intelligent monitoring dashboard for sports injury predictions."
    },
    {
      title: "International Innovation & Exhibition Fair (IIEF 2025)",
      date: "February 2025",
      type: "International Exhibition",
      description: "Presented innovative AI-driven solution at international level, demonstrating technical expertise in artificial intelligence and data analytics."
    },
    {
      title: "USM Engineering Campus Career Fair 2025",
      date: "2025",
      type: "Engineering Competition",
      description: "Participated in Engineering Innovative Design Competition in collaboration with IEM-USM Student Section, showcasing engineering innovation skills."
    },
    {
      title: "University Innovation Competitions",
      date: "2024 - 2025",
      type: "Academic Competition",
      description: "Active participation in various university-level innovation competitions, consistently demonstrating technical problem-solving and creative thinking abilities."
    }
  ];

  const leadership = [
    {
      title: "Technical Lead - University Software Development Projects",
      date: "August 2024 - Present",
      type: "Technical Leadership",
      description: "Leading development teams in building web applications, mentoring junior developers in React.js, Node.js, and modern development practices."
    },
    {
      title: "Code Review Mentor - Peer Programming Initiative",
      date: "January 2024 - Present",
      type: "Technical Mentorship",
      description: "Conducting code reviews, teaching best practices in JavaScript/TypeScript, and guiding students in full-stack development methodologies."
    },
    {
      title: "STEM Technology Facilitator - Programming & AI Workshop Leader",
      date: "January 2022 - August 2023",
      type: "Educational Leadership",
      description: "Designed and conducted programming workshops focusing on web development, AI/ML concepts, and hands-on coding sessions for university students."
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const AwardCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          {item.icon}
          <div className="ml-3">
            {item.level && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.level === 'International' 
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
              }`}>
                {item.level}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <Calendar size={16} className="mr-1" />
          {item.date}
        </div>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {item.title}
      </h4>
      {item.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {item.description}
        </p>
      )}
      <div className="flex items-center justify-between">
        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm">
          {item.type}
        </span>
      </div>
    </motion.div>
  );

  const ParticipationCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 10 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <Star className="text-blue-500 mr-3" size={20} />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h4>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
            <div className="flex items-center gap-4 mt-2">
              <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm">
                {item.type}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar size={16} className="mr-1" />
                {item.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const LeadershipCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 10 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <Star className="text-green-500 mr-3" size={20} />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h4>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
            <div className="flex items-center gap-4 mt-2">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded text-sm">
                {item.type}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar size={16} className="mr-1" />
                {item.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition for software development excellence, technical innovation, and leadership in programming competitions
            </p>
          </motion.div>

          {/* Awards Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              🏆 Software Development Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <AwardCard key={`award-${index}`} item={award} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Participation Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              🚀 Hackathons & Competitions
            </h3>
            <div className="space-y-4">
              {participation.map((item, index) => (
                <ParticipationCard key={`participation-${index}`} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Leadership Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              👥 Technical Leadership & Mentorship
            </h3>
            <div className="space-y-4">
              {leadership.map((item, index) => (
                <LeadershipCard key={`leadership-${index}`} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;