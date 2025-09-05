import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-[60vh] py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
