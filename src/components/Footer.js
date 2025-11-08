import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/Bhargavprasad-data',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhargavprasad-vana-1b49b62bb/',
      color: 'hover:text-blue-600',
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
    },
    {
      icon: FiMail,
      name: 'Email',
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Bhargavprasad Vana
            </h3>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              and building scalable applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 dark:bg-dark-700 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-200 ${social.color}`}
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Vizianagaram,Andhra Pradesh</p>
              <p>📧 bhargavvana80@gmail.com</p>
              <p>📱 +91 7981092249</p>
            </div>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-colors duration-200"
                title="Back to top"
              >
                <FiArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear}Bhargavprasad. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <span>Made with ❤️ using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
