import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, ArrowUp, Mail, MessageCircle, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const contactLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:ayukikome44@gmail.com' },
    { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/+237653193185' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/itsmaybevic' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark border-t border-accent/20">
      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-accent">Ayuk Ikome</span>Portfolio
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  A passionate High school graduate combining academic excellence with leadership experience. 
                  Focused on biology, anatomy, and research while building meaningful connections in the academic community.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-accent transition-colors group"
                  >
                    {React.createElement(link.icon, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })}
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-accent transition-colors hover:translate-x-2 
                                 transform duration-300 block"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 bg-dark-light border border-accent/20 rounded-xl flex items-center justify-center 
                               text-gray-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {React.createElement(social.icon, { className: "w-5 h-5" })}
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="text-gray-400 text-sm space-y-2">
                <p>📍 Makepe Douala Camerron </p>
                <p>🎓 A-Level </p>
                <p>🔬 Medecine and Healthcare Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-accent/20 my-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <span>© {currentYear} Made by TB-group </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-accent fill-current" />
              </motion.div>
              <span>All rights reserved.</span>
            </div>

            
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent/10 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/10 rotate-45 opacity-30" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;