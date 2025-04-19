import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skill() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Professional Skills',
      icon: '🛠️',
      skills: [
        { name: 'Leadership', description: 'Confident team and project leader', icon: '💡' },
        { name: 'Critical Thinking', description: 'Analytical decision-making', icon: '🧠' },
        { name: 'Creativity', description: 'Strong ideation and visual thinking', icon: '🎨' },
        { name: 'Management Skills', description: 'Team, project, and task management', icon: '📊' },
      ],
    },
    {
      title: 'Technical Skills',
      icon: '💻',
      skills: [
        { name: 'Digital Marketing', description: 'Social media, content, and outreach basics', icon: '🌐' },
        { name: 'Basic Computer Knowledge', description: 'MS Office, internet tools', icon: '💻' },
        { name: 'Report Writing', description: 'Clear and professional documentation', icon: '📁' },
        { name: 'Organizing Campaigns', description: 'Planning and executing awareness/educational events', icon: '🧩' },
        { name: 'Social Media Management', description: 'Creating and scheduling content', icon: '🖥️' },
        { name: 'Video Editing', description: 'Basic editing for promotional and educational content', icon: '🎬' },
        { name: 'Fashion Design', description: 'Creative styling and clothing design', icon: '👗' },
      ],
    },
    {
      title: 'Language Skills',
      icon: '🗣️',
      skills: [
        { name: 'Tamil', description: 'Native fluency', icon: '🇱🇰' },
        { name: 'English', description: 'Excellent written and spoken skills', icon: '🇬🇧' },
        { name: 'Sinhala', description: 'Excellent communication ability', icon: '🇱🇰' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#082032] mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-[#082032]">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:border-red-500 border-2 border-transparent transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{skill.icon}</span>
                      <div>
                        <h4 className="text-lg font-semibold text-[#082032] mb-1">{skill.name}</h4>
                        <p className="text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;
