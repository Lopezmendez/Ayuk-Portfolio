import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, Calendar, Tag } from 'lucide-react';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Leadership Workshop',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023',
      description: 'Leading a student workshop on effective leadership techniques and team collaboration.',
    },
    {
      id: 2,
      title: 'Biology Laboratory',
      category: 'Academic',
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024',
      description: 'Conducting advanced biology experiments and research in the college laboratory.',
    },
    {
      id: 3,
      title: 'Student Council Meeting',
      category: 'Administration',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024',
      description: 'Organizing and facilitating important student council discussions and decisions.',
    },
    {
      id: 4,
      title: 'Research Presentation',
      category: 'Research',
      image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023',
      description: 'Presenting research findings on human anatomy to faculty and peers.',
    },
    {
      id: 5,
      title: 'Peer Tutoring Session',
      category: 'Academic',
      image: 'https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023',
      description: 'Conducting peer tutoring sessions to help fellow students with challenging subjects.',
    },
    {
      id: 6,
      title: 'Science Exhibition',
      category: 'Research',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024',
      description: 'Showcasing scientific projects and research at the annual college science exhibition.',
    },
    {
      id: 7,
      title: 'Student Orientation',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024',
      description: 'Welcoming and orienting new students as part of the student administration team.',
    },
    {
      id: 8,
      title: 'Award Ceremony',
      category: 'Achievement',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023',
      description: 'Recognition ceremony for academic excellence and leadership contributions.',
    },
  ];

  const categories = ['All', 'Leadership', 'Academic', 'Research', 'Administration', 'Achievement'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-dark-light/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery & <span className="text-accent">Memories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through my academic achievements, leadership moments, and memorable experiences.
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

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer relative"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-dark-light/50 border border-accent/10 
                               hover:border-accent/30 transition-all duration-500">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 
                                    transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tag className="w-3 h-3" />
                            <span>{item.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-dark-light/80 rounded-full flex items-center 
                                    justify-center opacity-0 group-hover:opacity-100 transition-all duration-300
                                    transform scale-75 group-hover:scale-100">
                      <ZoomIn className="w-5 h-5 text-accent" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/80 text-white rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh] bg-dark-light rounded-2xl overflow-hidden border border-accent/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark/80 rounded-full flex items-center 
                             justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{selectedImage.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-medium ml-4">
                      {selectedImage.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedImage.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;