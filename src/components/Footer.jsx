/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Education', url: '#education' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' },
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

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#082032] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Rukshana Mubassira</h3>
            <p className="text-gray-300">
              Empowering communities through health promotion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl hover:text-red-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+94753487907"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  +94 753487907 / +94 770609150
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:rukshanamubass2000@gmail.com"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  rukshanamubass2000@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-300">
                  No.215/9, Mahroof Nahar, Kinniya 03
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <form className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400"
        >
          <p>© 2025 Rukshana Mubassira. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#082032] text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition-colors"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
