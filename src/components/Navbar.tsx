import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, FolderOpen, Image, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Compact Logo */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
            scrolled
              ? 'backdrop-blur-xl bg-dark-light/80 border border-accent/20 shadow-glow'
              : 'backdrop-blur-md bg-dark-light/40 border border-white/10'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-accent">A</span>
          <span className="text-white">Y</span>
        </motion.button>
      </motion.div>

      {/* Full Navigation Panel */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Navigation Panel */}
        <motion.div
          className={`absolute top-0 right-0 h-full w-80 bg-dark-light/95 backdrop-blur-xl border-l border-accent/20 p-6 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <motion.button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>
          </div>

          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">
              <span className="text-accent">Ayuk</span>
              <span className="text-white">Ikome</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">Portfolio</p>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'bg-accent text-white shadow-glow'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {React.createElement(item.icon, { className: "w-5 h-5" })}
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-gray-400 text-sm">
              <p>📍 Makepe Douala Cameroon</p>
              <p>🎓 A-Level Graduate</p>
              <p>🔬 Medicine & Healthcare</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-4 inset-x-0 z-50 transition-all duration-300 flex justify-center hidden md:flex"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className={`px-6 py-3 w-fit rounded-2xl ${
            scrolled
              ? 'backdrop-blur-xl bg-dark-light/80 border border-accent/20'
              : 'backdrop-blur-md bg-dark-light/40 border border-white/10'
          }`}
          style={{
            boxShadow: scrolled
              ? '0 8px 32px rgba(224, 59, 59, 0.1)'
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-accent">Ayuk</span>Ikome
            </motion.div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-accent text-white shadow-glow'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(item.icon, { className: "w-4 h-4 inline mr-2" })}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;