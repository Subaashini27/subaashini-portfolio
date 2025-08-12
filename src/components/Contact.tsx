import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, MessageCircle, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const subject = encodeURIComponent(formData.subject || 'Software Development Opportunity - Portfolio Contact');
    const body = encodeURIComponent(
      `Dear Subaashini,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}\n\nI am interested in discussing software development opportunities, internships, or collaboration on technical projects.\n\nBest regards,\n${formData.name}`
    );
    const mailtoLink = `mailto:subaashini2701@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "subaashini2701@gmail.com",
      link: "mailto:subaashini2701@gmail.com",
      description: "Professional inquiries welcome"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "WhatsApp",
      value: "+60 16-724 5698",
      link: "https://wa.me/60167245698",
      description: "Quick response available"
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Location",
      value: "Alor Gajah, Malacca",
      link: null,
      description: "Malaysia • Open to relocation"
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: "Availability",
      value: "Immediate",
      link: null,
      description: "Ready for software development roles"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subaashini-mohanasundaram-0a7b28293",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Professional Network & Experience"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Subaashini27",
      color: "bg-gray-800 hover:bg-gray-900",
      description: "Code Repository & Projects"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      url: "https://wa.me/60167245698",
      color: "bg-green-500 hover:bg-green-600",
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Let's Collaborate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Code 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> The Future Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative software solutions and contributing to meaningful projects. 
              Let's discuss how my technical skills can drive your next development initiative.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <div className="mr-4 p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

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
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
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
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
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
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Internship Opportunity"
                      />
                    </div>
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
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell me about the opportunity, your team, or how we can work together..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    ) : (
                      <Send size={20} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-12 rounded-2xl border border-blue-200 dark:border-blue-700">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm excited to bring innovative thinking, technical expertise, and fresh perspectives 
                to your team. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:subaashini2701@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  <Mail size={20} className="mr-2" />
                  Email Me Directly
                </motion.a>
                <motion.a
                  href="/Subaashini_Resume.pdf"
                  download="Subaashini_Mohanasundaram_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                >
                  <Calendar size={20} className="mr-2" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;