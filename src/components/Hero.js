import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>
            Создаем цифровое будущее
            <span className="gradient-text"> вашего бизнеса</span>
          </h1>
          <p className="hero-subtitle">
            Разработка программного обеспечения, веб-решений и интеграция AI-технологий
            для развития вашего бизнеса
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-buttons"
          >
            <a href="#contact" className="btn btn-primary">
              Обсудить проект
            </a>
            <a href="#services" className="btn btn-secondary">
              Наши услуги
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <div className="hero-shape"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 