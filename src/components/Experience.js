import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiUpload, FiFile, FiDownload, FiTrash2 } from 'react-icons/fi';
import { experienceData, educationData } from '../data/projectsData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [certifications, setCertifications] = useState([]);
  const [uploading, setUploading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploading(true);

    // Simulate file processing
    setTimeout(() => {
      const newCertifications = files.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date().toLocaleDateString(),
        file: file
      }));

      setCertifications(prev => [...prev, ...newCertifications]);
      setUploading(false);
      event.target.value = ''; // Reset input
    }, 1000);
  };

  const removeCertification = (id) => {
    setCertifications(prev => prev.filter(cert => cert.id !== id));
  };

  const downloadCertification = (certification) => {
    const url = URL.createObjectURL(certification.file);
    const a = document.createElement('a');
    a.href = url;
    a.download = certification.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and educational background that have shaped my expertise
            in full-stack development and software engineering.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <FiBriefcase className="mr-3 text-primary-600" size={24} />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < experienceData.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-dark-600" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <FiBriefcase className="text-primary-600" size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                        <FiMapPin className="mr-2" size={16} />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <FiAward className="mr-3 text-primary-600" size={24} />
              Education
            </h3>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < educationData.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-dark-600" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <FiAward className="text-blue-600" size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                        <FiMapPin className="mr-2" size={16} />
                        <span className="text-sm">{edu.institution}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {edu.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                            >
                              <span className="text-primary-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm passionate about staying up-to-date with the latest technologies and best practices.
              I regularly participate in online courses, hackathons, and contribute to open-source projects.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Online Courses", value: "50+", icon: "📚" },
                { label: "Projects Built", value: "25+", icon: "🚀" },
                { label: "Technologies", value: "15+", icon: "⚡" },
                { label: "Years Experience", value: "3+", icon: "⏰" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
