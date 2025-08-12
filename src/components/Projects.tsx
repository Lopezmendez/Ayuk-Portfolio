import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Student Leadership Initiative',
      category: 'Leadership',
      description: 'Implemented a comprehensive student support system during my tenure as Prefect.',
      longDescription: 'Developed and executed a peer mentorship program that helped over 100 junior students adapt to school life. Created structured study groups and organized academic support sessions that improved overall class performance by 15%.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Leadership', 'Event Management', 'Peer Support'],
      date: '2022-2023',
      status: 'Completed',
      impact: '100+ students supported',
      achievements: [
        'Reduced student dropout rate by 20%',
        'Improved academic collaboration',
        'Enhanced school community spirit',
        'Received recognition from school administration'
      ]
    },
    {
      id: 2,
      title: 'Biology Research Project',
      category: 'Research',
      description: 'Independent research on human anatomy systems and their interconnections.',
      longDescription: 'Conducted comprehensive research on the cardiovascular and nervous systems, creating detailed anatomical diagrams and presentations. Collaborated with science teachers to develop educational materials for younger students.',
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Research', 'Data Analysis', 'Scientific Writing'],
      date: '2023-Present',
      status: 'Ongoing',
      impact: 'Educational resource creation',
      achievements: [
        'Produced 50+ pages of research documentation',
        'Created visual learning aids for students',
        'Presented findings to peer groups',
        'Developed scientific methodology skills'
      ]
    },
    {
      id: 3,
      title: 'Student Administration System',
      category: 'Administrative',
      description: 'Streamlined student registration and academic support processes.',
      longDescription: 'As Student Administrator, I digitized and improved the student registration process, reducing processing time by 40%. Implemented feedback systems and organized academic support initiatives.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Process Improvement', 'Student Support', 'Communication'],
      date: '2024-Present',
      status: 'Completed',
      impact: '40% efficiency improvement',
      achievements: [
        'Reduced registration time significantly',
        'Improved student satisfaction scores',
        'Enhanced departmental communication',
        'Created standardized procedures'
      ]
    },
    {
      id: 4,
      title: 'Academic Excellence Program',
      category: 'Education',
      description: 'Developed study methodologies and academic support resources for peers.',
      longDescription: 'Created comprehensive study guides and tutoring programs for fellow students struggling with science subjects. Organized group study sessions and exam preparation workshops.',
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Teaching', 'Curriculum Development', 'Peer Support'],
      date: '2023-2024',
      status: 'Completed',
      impact: '75+ students helped',
      achievements: [
        'Improved peer academic performance',
        'Developed effective study materials',
        'Enhanced collaborative learning',
        'Recognition for educational contribution'
      ]
    }
  ];

  const categories = ['All', 'Leadership', 'Research', 'Administrative', 'Education'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects & <span className="text-accent">Initiatives</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my leadership initiatives, research projects, and contributions to academic excellence.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-white shadow-glow'
                  : 'bg-dark-light/50 text-gray-300 hover:text-white hover:bg-accent/20 border border-accent/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="bg-dark-light/50 rounded-2xl overflow-hidden border border-accent/10 
                               hover:border-accent/30 transition-all duration-500 backdrop-blur-sm
                               group-hover:transform group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-light/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-3 py-1 bg-accent/80 text-white rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Ongoing' 
                          ? 'bg-green-500/80 text-white' 
                          : 'bg-blue-500/80 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.impact}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-accent/20 pt-4 mt-4"
                        >
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {project.longDescription}
                          </p>
                          
                          <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                            <Award className="w-4 h-4 text-accent" />
                            <span>Key Achievements</span>
                          </h4>
                          <ul className="space-y-2 mb-4">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Button */}
                    <motion.button
                      className="w-full mt-4 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg
                                 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{selectedProject === project.id ? 'Show Less' : 'Learn More'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;