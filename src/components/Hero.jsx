/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialLinks = [
    { name: 'Email', icon: '✉️', link: 'mailto:your.email@example.com' },
    { name: 'LinkedIn', icon: '🔗', link: 'https://linkedin.com/in/your-profile' },
    { name: 'WhatsApp', icon: '💬', link: 'https://wa.me/your-number' },
    { name: 'Instagram', icon: '📸', link: 'https://instagram.com/your-profile' },
  ];

  const roleBadges = [
    { name: 'Health Promoter', icon: '🏥' },
    { name: 'Volunteer', icon: '🤝' },
    { name: 'Management Assistant', icon: '📊' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/personal-portfolio/hero.jpg')] bg-cover bg-center opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#082032] mb-4"
          >
            Alifullah Rukshana Mubassira
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 mb-6"
          >
            BSc Graduate in Health Promotion
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg"
          >
            A dedicated health professional with a passion for community wellness and health education. 
            Experienced in developing and implementing health promotion programs, with a strong focus 
            on preventive healthcare and community engagement.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#082032] text-white rounded-lg font-medium shadow-lg hover:bg-opacity-90 transition-all"
            >
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 border-2 border-[#082032] text-[#082032] rounded-lg font-medium hover:bg-[#082032] hover:text-white transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Role Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {roleBadges.map((badge) => (
              <motion.div
                key={badge.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#b2d4dc] rounded-lg shadow-md"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-gray-900 font-bold">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#b2d4dc] rounded-xl p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-[#082032] mb-6 text-center">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#082032] hover:text-white transition-all"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(false)}
                className="mt-6 w-full py-2 text-gray-600 hover:text-[#082032] font-medium"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
