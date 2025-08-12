import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message with form data
      const whatsappMessage = `*New Message from Contact Form*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject || 'No subject'}
*Message:* ${formData.message}

*Sent from:* Ayuk Ikome Portfolio Website`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/+237653193185?text=${encodedMessage}`;

      // Open WhatsApp with pre-filled message
      window.open(whatsappUrl, '_blank');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      window.alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppTranscript = () => {
    const message = `Hello! I would like to request my academic transcript. Could you please provide me with the necessary information and process?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+237653193185?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsAppCollaboration = () => {
    const message = `Hello! I'm interested in collaborating with you. Could you please tell me more about potential collaboration opportunities?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+237653193185?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayukikome44@gmail.com',
      href: 'mailto:ayukikome44@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+237653193185',
      href: 'https://wa.me/+237653193185',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Makepe Douala Camerron',
      href: '#',
      color: 'from-accent to-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-light/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're interested in collaboration, have questions about my work, 
                or want to discuss academic opportunities, I'm always open to meaningful conversations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group flex items-center space-x-4 p-4 bg-dark-light/50 rounded-2xl border border-accent/10 
                             hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ y: -2 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-glow`}>
                    {React.createElement(info.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold group-hover:text-accent transition-colors">
                      {info.label}
                    </div>
                    <div className="text-gray-400 text-sm">{info.value}</div>
                  </div>
                  {info.href.startsWith('http') && (
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Additional Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-accent/10 to-transparent rounded-2xl p-6 border border-accent/20"
            >
              <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <motion.button
                  onClick={openWhatsAppTranscript}
                  className="w-full text-left p-3 bg-dark-light/50 rounded-lg text-gray-300 hover:text-white 
                             hover:bg-accent/20 transition-all duration-300 border border-accent/10 cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  📋 Request Academic Transcript Directly on WhatsApp
                </motion.button>
                <motion.button
                  onClick={openWhatsAppCollaboration}
                  className="w-full text-left p-3 bg-dark-light/50 rounded-lg text-gray-300 hover:text-white 
                             hover:bg-accent/20 transition-all duration-300 border border-accent/10 cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🤝 Collaboration Inquiry Directly on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-dark-light/50 rounded-2xl p-8 border border-accent/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">WhatsApp Opened!</h4>
                  <p className="text-gray-300">Your message has been prepared and WhatsApp is now open. Please send the message to complete your inquiry.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/20 rounded-lg text-white 
                                   focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-accent/20 rounded-lg text-white 
                                   focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-accent/20 rounded-lg text-white 
                                 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark border border-accent/20 rounded-lg text-white 
                                 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                      placeholder="Tell me about your idea, project, or question..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg 
                               shadow-glow hover:shadow-glow-intense transition-all duration-300 flex items-center justify-center space-x-3
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;