import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Reference() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const references = [
    {
      name: 'V.M. Farveskhan',
      position: 'Technical Officer / Authority Draftsman',
      organization: 'NCED/NDTC/IDTSL',
      email: null,
      phone: '077-0609150 / 075-4246582',
    },
    {
      name: 'Dr. Lalith Senarathna',
      position: 'Head, Department of Health Promotion',
      organization: 'Rajarata University of Sri Lanka',
      email: 'lalith.senarathna@gmail.com',
      phone: '077-7635254',
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
    <section className="py-20 bg-white" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#082032] mb-4">References</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {references.map((reference, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-xl shadow-lg p-6 hover:border-red-500 border-2 border-transparent transition-all duration-300"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#082032]">{reference.name}</h3>
                  <p className="text-gray-600 font-medium">{reference.position}</p>
                  <p className="text-gray-500">{reference.organization}</p>
                </div>

                <div className="space-y-2">
                  {reference.email && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📧</span>
                      <a
                        href={`mailto:${reference.email}`}
                        className="text-[#082032] hover:text-red-500 transition-colors"
                      >
                        {reference.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">📞</span>
                    <a
                      href={`tel:${reference.phone.replace(/\s+/g, '')}`}
                      className="text-[#082032] hover:text-red-500 transition-colors"
                    >
                      {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Reference;
