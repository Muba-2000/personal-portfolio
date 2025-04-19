/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: '2016',
      title: 'G.C.E. Ordinary Level',
      institution: 'T/KIN. Alhira M.M.V',
      description: 'Passed with 09 subjects according to the Sri Lankan government syllabus.',
      icon: '📘',
    },
    {
      year: '2019',
      title: 'G.C.E. Advanced Level (Biological Science)',
      institution: 'T/Kinniya Muslim Ladies College',
      description: 'Passed with 03 subjects in the Biological Science stream.',
      icon: '🧪',
    },
    {
      year: '2021 – 2024',
      title: 'B.Sc. in Health Promotion',
      institution: 'Rajarata University of Sri Lanka',
      description: 'Completed a Bachelor\'s degree with active involvement in community health projects.',
      icon: '🎓',
    },
    {
      year: '2023',
      title: 'UK Dual Diploma in Child Psychology & Counseling Psychology',
      institution: 'Transmind Institute of Training and Development',
      description: 'Gained practical knowledge in mental health and psychological support for children.',
      icon: '🧠',
    },
    {
      year: '2024 – 2025',
      title: 'Diploma in Human Resources Management',
      institution: 'Comparative Analysis for Scientific Environmental Development',
      description: 'Developed core HRM knowledge and administrative skills through a 1-year program.',
      icon: '🗂️',
    },
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
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-20 bg-[#d8e9f0]" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#082032] mb-4">Education & Qualifications</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-center justify-center"
              >
        

                {/* Content container */}
                <div className={`w-full max-w-2xl p-6 bg-[#d8e9f0] border-2 border-[#ffffff] rounded-xl  shadow-xl ${
                  index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{milestone.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-red-500">{milestone.year}</span>
                        <span className="text-gray-400">•</span>
                        <h3 className="text-xl font-bold text-[#082032]">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{milestone.institution}</p>
                      <p className="text-gray-500">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
