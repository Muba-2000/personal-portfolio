/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Trainee & University Ambassador',
      organization: 'Child Protection Authority',
      duration: '2024',
      description: 'Assisted with child safety awareness programs and represented the university in health promotion events.',
      icon: '🧒',
    },
    {
      title: 'Volunteer',
      organization: 'St John\'s Ambulance First Aid',
      duration: '2023',
      description: 'Provided first aid support at public events and participated in emergency response training.',
      icon: '🩺',
    },
    {
      title: 'Management Assistant',
      organization: 'KIFAT Construction',
      duration: '1 Year',
      description: 'Worked on administrative tasks, project coordination, and document handling in a construction firm.',
      icon: '🏗️',
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

  const cardVariants = {
    hidden: (index) => ({
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-[#d8e9f0]" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#082032] mb-4">Work Experience</h2>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className={`relative flex items-center justify-center ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#082032] rounded-full z-10" />

                {/* Content container */}
                <div className={`w-full max-w-4xl p-6 bg-[#d8e9f0] border-2 border-[#ffffff] rounded-xl shadow-lg ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-8' : 'md:mr-0 md:ml-8'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{experience.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#082032]">{experience.title}</h3>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <span className="text-sm font-semibold text-red-500">{experience.duration}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">{experience.organization}</p>
                      <p className="text-gray-500">{experience.description}</p>
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

export default Experience;
