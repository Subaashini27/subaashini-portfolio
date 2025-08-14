import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart3, Brain, Wrench, Send } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Web App Development",
      description: "React/Next.js, Node/Express, MySQL.",
      deliverables: "Responsive UI, API, auth, deploy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Dashboards & Data Visualisation",
      description: "Metrics, charts, exports, role-based access.",
      deliverables: "Interactive dashboards with real-time data.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI Features",
      description: "TensorFlow.js, computer vision (MediaPipe), recommendation/automation.",
      deliverables: "Smart features that enhance user experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Wrench,
      title: "Fix & Improve",
      description: "Refactors, performance, bug-fixes, UI polish.",
      deliverables: "Optimized, maintainable, and polished code.",
      color: "from-orange-500 to-red-500"
    }
  ];



  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {service.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  Deliverables: {service.deliverables}
                </p>
              </motion.div>
            );
          })}
        </div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="mailto:subaashini2705@gmail.com?subject=Project Quote Request&body=Hi Subaashini, I'd like to request a quote for my project."
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Send size={20} />
            Request a Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;