import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { profileData } from '../data/profileData';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const candidatePhotos = useMemo(() => {
    const base = '/profile/';
    const provided = profileData.photo && typeof profileData.photo === 'string' ? profileData.photo : '';
    const candidates = [
      provided,
      base + 'profile.jpg',
      base + 'profile.jpeg',
      base + 'profile.png',
      base + 'avatar.jpg',
      base + 'avatar.png',
      base + 'me.jpg',
      base + 'me.png'
    ].filter(Boolean);
    return Array.from(new Set(candidates));
  }, [profileData.photo]);

  const [photoIdx, setPhotoIdx] = useState(0);

  const currentPhoto = candidatePhotos[photoIdx];

  // Typewriter setup
  const phrases = useMemo(() => [
    'Full Stack Developer',
    'I build modern websites',
    'I develop mobile apps',
    'Tailored to your needs',
    'At budget-friendly rates'
  ], []);

  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 70; // ms per char when typing
    const deletingSpeed = 40; // ms per char when deleting
    const endPause = 1100; // pause at end of word
    const startPause = 300; // small pause before typing starts

    let timeoutId;

    if (!isDeleting && charIndex === 0 && typedText.length === 0) {
      timeoutId = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, 1));
        setCharIndex(1);
      }, startPause);
    } else if (!isDeleting && charIndex < currentPhrase.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, endPause);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeoutId);
  }, [phrases, phraseIndex, charIndex, isDeleting, typedText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">{profileData.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-8 sm:h-10 flex items-center">
                <span>{typedText}</span>
                <span className="ml-1 inline-block w-0.5 h-5 sm:h-6 bg-gray-700 dark:bg-gray-300 animate-pulse" />
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                {profileData.summary}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                href={profileData.resumeLink}
                target={profileData.resumeLink?.startsWith('http') ? "_blank" : undefined}
                rel={profileData.resumeLink?.startsWith('http') ? "noopener noreferrer" : undefined}
              >
                <FiDownload className="inline mr-2" />
                Download CV
              </motion.a> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={`mailto:${profileData.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FiMail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                  {currentPhoto ? (
                    <img
                      src={currentPhoto}
                      alt={profileData.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={() => {
                        if (photoIdx < candidatePhotos.length - 1) {
                          setPhotoIdx(photoIdx + 1);
                        }
                      }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                        <span className="text-4xl text-gray-500 dark:text-gray-400">👤</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Profile Photo</p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">(Replace with your photo)</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
                      <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('#skills')}
              className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              title="Scroll to Skills"
            >
              <FiArrowDown size={24} />
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
