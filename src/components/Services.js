import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Веб-разработка',
    description: 'Создаем современные веб-приложения с использованием передовых технологий и лучших практик UX/UI дизайна.',
    icon: '🌐'
  },
  {
    id: 2,
    title: 'AI-интеграция',
    description: 'Внедряем искусственный интеллект в ваш бизнес для автоматизации процессов и повышения эффективности.',
    icon: '🤖'
  },
  {
    id: 3,
    title: 'UI/UX Дизайн',
    description: 'Разрабатываем интуитивно понятные интерфейсы, которые нравятся пользователям и повышают конверсию.',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Продвижение',
    description: 'Комплексное продвижение вашего продукта: SEO, контент-маркетинг, социальные сети.',
    icon: '📈'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Наши услуги</h2>
          <p className="section-description">
            Комплексные решения для цифровой трансформации вашего бизнеса
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 