import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, MessageCircle, Clock, Target, 
  BookOpen, Microscope, Calculator, Globe,
  Code, Database, Palette, Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Soft Skills',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { icon: Users, name: 'Leadership', level: 76 },
        { icon: MessageCircle, name: 'Communication', level: 85 },
        { icon: Clock, name: 'Time Management', level: 70 },
        { icon: Target, name: 'Problem Solving', level: 83 },
      ],
    },
    {
      title: 'Academic Skills',
      color: 'from-green-500 to-teal-600',
      skills: [
        { icon: BookOpen, name: 'Biology', level: 98 },
        { icon: Microscope, name: 'Pysics', level: 76 },
        { icon: Calculator, name: 'Mathematics', level: 94 },
        { icon: Microscope, name: 'Chemistry', level: 74 },
        { icon: Microscope, name: 'Computer Studies', level: 76 },
        { icon: Globe, name: 'Research', level: 87 },
      ],
    },
    {
      title: 'Technical Skills',
      color: 'from-accent to-red-600',
      skills: [
        { icon: Code, name: 'Programming', level: 13 },
        { icon: Database, name: 'Design Analysis', level: 70 },
        { icon: Palette, name: 'Drawing', level: 65 },
        { icon: Zap, name: 'Innovation', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-light/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my abilities across different domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div className="bg-dark-light/50 rounded-2xl p-6 border border-accent/10 hover:border-accent/30 
                              transition-all duration-500 backdrop-blur-sm group-hover:transform group-hover:scale-105">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 shadow-glow`}>
                  {React.createElement(category.skills[0].icon, { className: "w-6 h-6 text-white" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {React.createElement(skill.icon, { className: "w-4 h-4 text-accent group-hover/skill:scale-110 transition-transform" })}
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-accent font-semibold text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Team Management', 'Project Planning', 'Critical Thinking', 'Scientific Writing',
              'Data Visualization', 'Public Speaking', 'Mentoring', 'Event Organization'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium
                           hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-default"
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;