import React from 'react';
import { motion } from 'framer-motion';
import './Benefits.css';

const benefits = [
  {
    id: 1,
    title: 'Опытная команда',
    description: 'Наши специалисты имеют многолетний опыт в разработке и внедрении IT-решений.',
    icon: '👥'
  },
  {
    id: 2,
    title: 'Современные технологии',
    description: 'Используем передовые технологии и инструменты для создания инновационных решений.',
    icon: '⚡'
  },
  {
    id: 3,
    title: 'Гибкий подход',
    description: 'Адаптируемся под ваши потребности и обеспечиваем индивидуальный подход к каждому проекту.',
    icon: '🔄'
  },
  {
    id: 4,
    title: 'Поддержка 24/7',
    description: 'Обеспечиваем круглосуточную техническую поддержку и сопровождение проектов.',
    icon: '🔧'
  }
];

const Benefits = () => {
  return (
    <section className="benefits section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Почему выбирают нас</h2>
          <p className="section-description">
            Мы создаем качественные IT-решения, которые помогают бизнесу расти и развиваться
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="benefit-card"
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 