import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      id: 1,
      institution: 'British Isles International College',
      degree: 'Advanced Level (A-Level)',
      period: '2024 - 2025',
      location: 'Completed',
      status: 'Completed',
      color: 'from-accent to-red-600',
      icon: GraduationCap,
      subjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'ICT'],
      achievements: [
        'Successfully completed O-Level examinations',
        'Actively participated in student administration',
        'Maintained academic excellence while serving leadership roles'
      ],
      gpa: 'Passed with Merit'
    },
    {
      id: 2,
      institution: 'St. Joseph\'s College Sasse',
      degree: 'General Certificate of Education Ordinary Level (GCE O/L)',
      period: '2022 - 2023',
      location: 'Completed',
      status: 'Completed',
      color: 'from-blue-500 to-purple-600',
      icon: Award,
      subjects: ['Economics', 'Geography', 'English', 'French', 'Religious Studies',  'Mathematics',  'Additional Mathematics',  'Biology', 'Human Biology', 'Chemistry', 'Physics'],
      achievements: [
        'Successfully completed O-Level examinations',
        'Served as Student Prefect during final year',
        'Demonstrated leadership and academic balance',
        'Active participation in extracurricular activities'
      ],
      gpa: 'Passed with Merit'
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-light/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Educational <span className="text-accent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic progression and achievements in pursuing scientific excellence.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full 
                             bg-gradient-to-r ${edu.color} shadow-glow z-10 flex items-center justify-center`}
                  whileHover={{ scale: 1.2 }}
                >
                  {React.createElement(edu.icon, { className: "w-4 h-4 text-white" })}
                </motion.div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:max-w-2xl md:mx-auto">
                  <motion.div
                    className="bg-dark-light/50 rounded-2xl p-8 border border-accent/10 hover:border-accent/30 
                               transition-all duration-500 backdrop-blur-sm group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-gray-300 text-lg font-medium mb-3">{edu.degree}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'In Progress' 
                              ? 'bg-accent/20 text-accent' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-glow`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {React.createElement(edu.icon, { className: "w-8 h-8 text-white" })}
                      </motion.div>
                    </div>

                    {/* Subjects */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-accent" />
                        <span>Subjects</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.1 }}
                            className="px-3 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent text-sm font-medium
                                       hover:bg-accent/20 hover:scale-105 transition-all duration-300"
                            whileHover={{ y: -2 }}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.2 + i * 0.1 }}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* GPA/Performance */}
                    <div className="flex items-center justify-between p-4 bg-dark/50 rounded-lg border border-accent/10">
                      <span className="text-gray-400">Academic Performance:</span>
                      <span className="text-accent font-semibold">{edu.gpa}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-2xl p-8 border border-accent/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Future Educational Goals</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                Planning to pursue higher education in <span className="text-accent font-semibold">Biology/Medical Sciences </span> 
                with a focus on anatomy and research. Exploring opportunities in top universities for undergraduate programs 
                that align with my passion for scientific discovery and healthcare.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['University Applications', 'Medical School Prep', 'Research Experience', 'Academic Excellence'].map((goal, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;