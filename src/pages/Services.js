import React, { useState, useEffect } from 'react';
import { FaCode, FaPaintBrush, FaChartLine, FaRobot, FaHeadset, FaMobileAlt, FaDatabase, FaCloud, FaShieldAlt, FaUsers } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaCode />,
      title: 'Разработка',
      description: 'Создание современных веб-приложений и программного обеспечения',
      features: ['Веб-разработка', 'Мобильная разработка', 'API разработка']
    },
    {
      icon: <FaPaintBrush />,
      title: 'Дизайн',
      description: 'Разработка пользовательских интерфейсов и графического дизайна',
      features: ['UI/UX дизайн', 'Графический дизайн', 'Брендинг']
    },
    {
      icon: <FaChartLine />,
      title: 'Продвижение',
      description: 'Комплексное продвижение вашего бизнеса в интернете',
      features: ['SEO', 'SMM', 'Контекстная реклама']
    },
    {
      icon: <FaRobot />,
      title: 'AI-решения',
      description: 'Внедрение искусственного интеллекта в ваш бизнес',
      features: ['Чат-боты', 'Аналитика данных', 'Автоматизация']
    },
    {
      icon: <FaHeadset />,
      title: 'Сопровождение',
      description: 'Техническая поддержка и обслуживание ваших систем',
      features: ['Поддержка 24/7', 'Обновление систем', 'Мониторинг']
    }
  ];

  const technologies = [
    {
      icon: <FaMobileAlt />,
      title: 'Мобильная разработка',
      description: 'iOS, Android, React Native, Flutter'
    },
    {
      icon: <FaDatabase />,
      title: 'Базы данных',
      description: 'PostgreSQL, MongoDB, Redis'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'AWS, Google Cloud, Azure'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'SSL, шифрование, защита данных'
    }
  ];

  return (
    <div className={`services-page ${isVisible ? 'visible' : ''}`}>
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Наши услуги</h1>
          <p>Комплексные решения для развития вашего бизнеса</p>
        </div>
      </section>

      <section className="services-main">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="services-technologies">
        <h2>Технологии</h2>
        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-card">
              <div className="technology-icon">{tech.icon}</div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>Готовы обсудить ваш проект?</h2>
        <p>Свяжитесь с нами для консультации</p>
        <a href="#contact" className="cta-button">Связаться с нами</a>
      </section>
    </div>
  );
};

export default Services; 