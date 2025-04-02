import React from 'react';
import { motion } from 'framer-motion';
import './Cases.css';

const cases = [
  {
    id: 1,
    title: 'E-commerce платформа',
    description: 'Разработка современной платформы для онлайн-торговли с интеграцией AI-рекомендаций.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Веб-разработка'
  },
  {
    id: 2,
    title: 'AI-ассистент для бизнеса',
    description: 'Создание интеллектуального ассистента для автоматизации бизнес-процессов.',
    image: 'https://via.placeholder.com/600x400',
    category: 'AI-интеграция'
  },
  {
    id: 3,
    title: 'Мобильное приложение',
    description: 'Разработка кроссплатформенного мобильного приложения с современным UI/UX.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Мобильная разработка'
  }
];

const Cases = () => {
  return (
    <section id="cases" className="cases section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Наши проекты</h2>
          <p className="section-description">
            Посмотрите примеры наших успешных проектов и решений
          </p>
        </motion.div>

        <div className="cases-grid">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="case-card"
            >
              <div className="case-image">
                <img src={case_.image} alt={case_.title} />
              </div>
              <div className="case-content">
                <span className="case-category">{case_.category}</span>
                <h3>{case_.title}</h3>
                <p>{case_.description}</p>
                <a href="#" className="case-link">
                  Подробнее →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases; 