import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { certificatesData } from '../data/certificatesData';
import { importAllImages } from '../utils/importAll';
import { probePublicCertificates } from '../utils/loadPublicCertificates';

// Dynamically import any images placed in src/assets/certificates
const dynamicCertificateImages = (() => {
  try {
    const context = require.context('../assets/certificates', false, /\.(png|jpe?g|webp|gif|svg)$/i);
    return importAllImages(context);
  } catch (e) {
    return [];
  }
})();

const Certificates = () => {
  const [publicCerts, setPublicCerts] = useState([]);
  const [previewSrc, setPreviewSrc] = useState(null);

  useEffect(() => {
    let mounted = true;
    probePublicCertificates().then((urls) => {
      if (mounted) setPublicCerts(urls);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of certifications I have earned.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...certificatesData,
            ...dynamicCertificateImages.map((img, idx) => ({
              id: `dyn-${idx}`,
              title: img.fileName,
              issuer: '',
              issueDate: '2025',
              credentialId: '23331A4462',
              verifyLink: '',
              image: img.src
            })),
            ...publicCerts.map((url, idx) => ({
              id: `pub-${idx}`,
              title: url.split('/').pop().split('.').slice(0, -1).join('.').replace(/[-_]/g, ' '),
              issuer: '',
              issueDate: '2025',
              credentialId: '23331A4462',
              verifyLink: '',
              image: url
            }))
          ].map((cert) => (
            <motion.div key={cert.id} variants={itemVariants} className="card overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer" onClick={() => setPreviewSrc(cert.image)}>
                <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">Issued: {cert.issueDate}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-500">ID: {cert.credentialId}</span>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-md bg-gray-900 dark:bg-gray-800 text-white text-sm"
                      onClick={() => setPreviewSrc(cert.image)}
                    >
                      View
                    </motion.button>
                    {cert.verifyLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
                    >
                      <FiExternalLink className="mr-1" /> Verify
                    </motion.a>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox / Preview Modal */}
        <AnimatePresence>
          {previewSrc && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewSrc(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-dark-900 rounded-lg overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex-1 overflow-auto p-2">
                  <img src={previewSrc} alt="Certificate Preview" className="w-full object-contain" />
                </div>
                <div className="border-t border-gray-200 dark:border-dark-700 p-3 flex items-center justify-end gap-3 sticky bottom-0 bg-white/90 dark:bg-dark-900/90">
                  <a href={previewSrc} download className="px-4 py-2 rounded-md bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200 text-sm">Download</a>
                  <a href={previewSrc} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-primary-600 text-white text-sm">Open in New Tab</a>
                  <button onClick={() => setPreviewSrc(null)} className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm">Close</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;


