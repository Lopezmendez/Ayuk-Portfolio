import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for hero elements
    gsap.to('.hero-float', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Particle animation
    if (particlesRef.current) {
      const particles = Array.from(particlesRef.current.children);
      particles.forEach((particle, i) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
        
        gsap.to(particle, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          duration: 10 + Math.random() * 20,
          repeat: -1,
          yoyo: true,
          ease: 'none',
          delay: i * 0.5,
        });
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(224,59,59,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(224,59,59,0.05),transparent)]" />
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-20"
            style={{
              boxShadow: '0 0 4px rgba(224, 59, 59, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-float"
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-red-600 p-1">
              <div className="w-full h-full rounded-full bg-dark-light flex items-center justify-center overflow-hidden">
                <img
                  src="/Hero.jpg"
                  alt="Ayuk Ikome Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-accent">Ayuk Ikome</span> Tabe Mbiokang
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">Student</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about biology, anatomy, and research. Currently done with High School and just got my A-Levels while
            on a break before transiting into a new era of Further Studies, I always keep exploring the intersection of Health care science and technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white 
                         font-semibold rounded-full transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { label: 'Advance Level GCE Holder', value: '2024-2025' },
              { label: 'Leadership Role', value: 'Prefect' },
              { label: 'Interest Areas', value: '4+' },
              { label: 'Academic Focus', value: 'Biology' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-accent group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-400 hover:text-accent transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/30 rounded-full hero-float" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent/20 rotate-45 hero-float" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full hero-float" />
    </section>
  );
};

export default Hero;