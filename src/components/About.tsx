import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: BookOpen, label: 'Anatomy', progress: 90 },
    { icon: Target, label: 'Biology', progress: 85 },
    { icon: Award, label: 'Research', progress: 80 },
    { icon: Users, label: 'Innovation', progress: 85 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey, interests, and aspirations in the world of Health care, Science and Leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-transparent p-1">
              <div className="bg-dark-light rounded-2xl overflow-hidden">
                <img
                  src="/About.jpg"
                  alt="About Ayuk Ikome"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-gray-300">
              <p className="leading-relaxed mb-6">
                I'm a dedicated high school graduate and an A-Level holder from British Isles International College (2024-2025) with 
                a profound passion for <span className="text-accent font-semibold">biology and anatomy</span>. 
                My academic journey began at St. Joseph's College Sasse, where I completed my O-Levels (2022-2023).
              </p>
              
              <p className="leading-relaxed mb-6">
                As a <span className="text-accent font-semibold">Prefect and Student Admin</span>, 
                I did developed strong leadership skills while maintaining academic excellence. My interests 
                span across scientific research, educational technology, and fostering collaborative learning environments.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Current Certificate', value: 'Advanced Levels 2024-2025' },
                { label: 'Previous', value: 'Ordinary Levels 2022-2023' },
                { label: 'Leadership', value: 'Prefect & Admin' },
                { label: 'Focus Area', value: 'Medicine & Health care' },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-light/50 rounded-lg p-4 border border-accent/10 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-accent text-sm font-medium">{fact.label}</div>
                  <div className="text-white font-semibold">{fact.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Interest Areas Progress */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Interest Areas</h3>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {React.createElement(stat.icon, { className: "w-5 h-5 text-accent" })}
                      <span className="text-gray-300 font-medium">{stat.label}</span>
                    </div>
                    <span className="text-accent font-semibold">{stat.progress}%</span>
                  </div>
                  <div className="w-full bg-dark-light rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-red-600 rounded-full shadow-glow"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${stat.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;