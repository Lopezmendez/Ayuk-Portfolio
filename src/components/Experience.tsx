import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users, Award, ChevronRight, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      role: 'Student Prefect',
      organization: 'St. Joseph\'s College Sasse',
      period: '2022 - 2023',
      location: 'School Campus',
      type: 'Leadership Role',
      icon: Award,
      color: 'from-blue-500 to-purple-600',
      description: 'Led student initiatives and maintained discipline while serving as a bridge between students and administration.',
      achievements: [
        'Coordinated school events with 500+ students',
        'Mentored junior students in academic and personal development',
        'Implemented peer support programs',
        'Maintained exemplary academic performance while fulfilling duties'
      ],
      skills: ['Leadership', 'Communication', 'Event Management', 'Mentoring']
    },
    {
      id: 2,
      role: 'Student Administrator',
      organization: 'British Isles International College',
      period: '2024 - Present',
      location: 'College Campus',
      type: 'Administrative Role',
      icon: Users,
      color: 'from-accent to-red-600',
      description: 'Managing student affairs and supporting academic operations while pursuing Advanced Level studies.',
      achievements: [
        'Streamlined student registration processes',
        'Organized academic support sessions',
        'Facilitated communication between departments',
        'Assisted in curriculum planning and student feedback collection'
      ],
      skills: ['Administration', 'Organization', 'Student Support', 'Process Improvement']
    },
    {
      id: 3,
      role: 'Research Assistant (Voluntary)',
      organization: 'Independent Study',
      period: '2023 - Present',
      location: 'Remote/Library',
      type: 'Research Experience',
      icon: Briefcase,
      color: 'from-green-500 to-teal-600',
      description: 'Conducting independent research in biology and anatomy while developing scientific writing skills.',
      achievements: [
        'Completed 3+ research projects on human anatomy',
        'Developed data collection and analysis skills',
        'Created scientific presentations for peer review',
        'Contributed to student research publications'
      ],
      skills: ['Research', 'Data Analysis', 'Scientific Writing', 'Critical Thinking']
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light/20 to-dark" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            While I'm building my professional experience, my leadership roles have provided valuable insights and skills.
          </p>
        </motion.div>

        {/* Professional Experience Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-light/50 rounded-2xl p-6 border border-accent/20 mb-12 text-center backdrop-blur-sm"
        >
          <p className="text-gray-300 text-lg">
            <span className="text-accent font-semibold">Currently seeking professional experience</span> while 
            building valuable skills through leadership roles and academic pursuits.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full 
                             bg-gradient-to-r ${exp.color} shadow-glow z-10 flex items-center justify-center`}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    className="bg-dark-light/50 rounded-2xl p-6 border border-accent/10 hover:border-accent/30 
                               transition-all duration-500 backdrop-blur-sm group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-glow`}>
                          {React.createElement(exp.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 font-medium">{exp.organization}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedExperience === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5 text-accent" />
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                    <AnimatePresence>
                      {selectedExperience === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-accent/20"
                        >
                          <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2 mb-4">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-2 text-gray-300">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="text-white font-semibold mb-3">Skills Developed:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;