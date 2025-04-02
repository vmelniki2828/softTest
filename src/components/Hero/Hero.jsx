import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We build digital solutions for business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Custom websites, design, AI integration & full-service digital growth.
        </motion.p>
        <motion.a
          href="#contact"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s talk
        </motion.a>
      </div>
    </section>
  );
}
