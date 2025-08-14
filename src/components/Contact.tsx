import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, MessageCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    deadline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create professional mailto link
    const subject = encodeURIComponent('Freelance Project Inquiry - ' + (formData.projectType || 'General'));
    const body = encodeURIComponent(
      `Hi Subaashini,\n\nI'd like to discuss a freelance project with you.\n\nProject Details:\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType || 'Not specified'}\nBudget Range: ${formData.budgetRange || 'To be discussed'}\nDeadline: ${formData.deadline || 'Flexible'}\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you!\n\nBest regards,\n${formData.name}`
    );
    const mailtoLink = `mailto:subaashini2701@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', projectType: '', budgetRange: '', deadline: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:subaashini2701@gmail.com",
      color: "bg-red-600 hover:bg-red-700",
      description: "Direct email"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subaashini-mohanasundaram-0a7b28293",
      color: "bg-primary-600 hover:bg-primary-700",
      description: "Professional Network & Experience"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Subaashini27",
      color: "bg-secondary-800 hover:bg-secondary-900",
      description: "Code Repository & Projects"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      url: "https://wa.me/60167245698",
      color: "bg-secondary-500 hover:bg-secondary-600",
      description: "Direct Communication"
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
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
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
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">Let's Collaborate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Code 
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent"> The Future Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative software solutions and contributing to meaningful projects. 
              Let's discuss how my technical skills can drive your next development initiative.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Social + Availability column */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-between p-6 ${social.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center">
                        <div className="mr-4">
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{social.name}</p>
                          <p className="text-sm opacity-90">{social.description}</p>
                        </div>
                      </div>
                      <div className="opacity-60 text-2xl">
                        →
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 p-6 rounded-xl border border-secondary-200 dark:border-secondary-700/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Available for Opportunities
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Currently seeking internship positions in software development, 
                  AI/ML, or full-stack development roles. Open to both remote and on-site opportunities.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 p-8 rounded-2xl border border-primary-200 dark:border-primary-700/30 shadow-lg shadow-primary-500/5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Start a Project
                </h3>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-900/20 border border-secondary-200 dark:border-secondary-700/30 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      Thanks! I'll reply within 24 hours.
                    </p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      >
                        <option value="">Select project type</option>
                        <option value="Web App Development">Web App Development</option>
                        <option value="Dashboard & Data Visualization">Dashboard & Data Visualization</option>
                        <option value="AI Features">AI Features</option>
                        <option value="Fix & Improve">Fix & Improve</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budgetRange" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="RM800-1,500">RM800-1,500 (Landing page)</option>
                        <option value="RM1,800-4,500">RM1,800-4,500 (Dashboard)</option>
                        <option value="RM3,500-7,000">RM3,500-7,000 (MVP app)</option>
                        <option value="RM1,200-3,000">RM1,200-3,000 (AI add-on)</option>
                        <option value="RM200-500/mo">RM200-500/mo (Maintenance)</option>
                        <option value="Custom">Custom budget</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="deadline" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Deadline
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="e.g., 2 weeks, End of March, Flexible"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    ) : (
                      <Send size={20} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Request a Quote'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Removed extra CTA block to avoid redundancy with hero */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;