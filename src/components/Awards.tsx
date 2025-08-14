import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Champion - Engineering Innovative Design Competition (ENGINNOVATE)",
      date: " April2025",
      type: "Engineering Innovation",
      icon: <Trophy className="text-yellow-500" size={24} />,
      level: "National",
      description: "Champion award for Engineering Innovative Design Competition hosted by USM Engineering Campus Career Fair 2025 in collaboration with IEM-USM Student Section.",
      certificateUrl: "/USM Certificate.jpg"
    },
    {
      title: "Gold Award - exhibIT 2025 - Final Year Project Showcase",
      date: "July 2025",
      type: "Innovation Competition",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "University",
      description: "Won Gold Award at exhibIT ICT Exhibition Computing Department 2025, Universiti Selangor, showcasing an AI-driven intelligent monitoring dashboard for badminton injury predictions.",
      certificateUrl: ""
    },
    {
      title: "Gold Award in International Virtual Competition of Creative & Innovative Idea (IVCCII) ",
      date: "May 2025",
      type: "Innovation Competition",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "International",
      description: "Won Gold Award in International Virtual Competition of Creative & Innovative Idea (IVCCII)  2025, showcasing an AI-driven intelligent monitoring dashboard for badminton injury predictions.",
      certificateUrl: "/IVCCI.png"
    },
    {
      title: "Silver Award -INNOVEX 2025 ",
      date: "March 2025",
      type: "Young Science Technology",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "International",
      description: "Silver Award for developing an AI-driven intelligent monitoring dashboard for sports injury predictions at INNOVEX 2025, Universiti Selangor.",
      certificateUrl: "/Innovex 2025.jpg"
    },
    {
      title: "Silver Award - International Innovation & Exhibition Fair 2025 Kolej Mara Kulim",
      date: "February 2025",
      type: "International Innovation",
      icon: <Medal className="text-gray-400" size={24} />,
      level: "International",
      description: "Silver Award at International Innovation & Exhibition Fair (IIEF 2025) for AI-driven intelligent monitoring dashboard for sports injury predictions.",
      certificateUrl: "/IIEF 2025.jpg"
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

  const AwardCard = ({ item }: { item: any }) => (
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
        <div className="flex items-center gap-2">
          {item.certificateUrl && item.certificateUrl.length > 0 && (
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={14} /> Certificate
            </a>
          )}
          {item.certificateUrl && item.certificateUrl.length > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 size={14} /> Verified
            </span>
          )}
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
              🏆 Innovation Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <AwardCard key={`award-${index}`} item={award} />
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Awards;