/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Leadership',
    'Critical Thinking',
    'Management Skills',
    'Communication',
    'Problem Solving',
    'Team Collaboration',
  ];

  const roles = [
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

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-[#d8e9f0]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-[#082032] opacity-20 rounded-2xl"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-[#2D4059] mb-2"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={underlineVariants}
                className="h-1 bg-red-500"
               
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed"
            >
              A dedicated health professional with a passion for community wellness and health education. 
              With a BSc in Health Promotion, I bring expertise in developing and implementing health 
              programs, focusing on preventive healthcare and community engagement. My experience spans 
              across various health promotion initiatives, always with a focus on improving community 
              health outcomes.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#082032]">Key Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <span className="text-red-500">•</span>
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Roles */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-[#082032]">Roles</h3>
              <div className="flex flex-wrap gap-6">
                {roles.map((role) => (
                  <motion.div
                    key={role.name}
                    variants={itemVariants}
                    className="flex items-center gap-2 bg-[#b2d4dc] px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl">{role.icon}</span>
                    <span className="text-gray-700">{role.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
