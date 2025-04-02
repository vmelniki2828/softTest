import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Веб-сайты',
      description: 'Создаем современные, быстрые и удобные веб-сайты с использованием передовых технологий.',
      icon: '🌐',
      path: '/websites',
      features: ['Адаптивный дизайн', 'Оптимизация производительности', 'SEO-оптимизация']
    },
    {
      id: 2,
      title: 'Дизайн',
      description: 'Разрабатываем уникальный дизайн, который выделяет ваш бренд среди конкурентов.',
      icon: '🎨',
      path: '/design',
      features: ['UI/UX дизайн', 'Брендинг', 'Графический дизайн']
    },
    {
      id: 3,
      title: 'Продвижение',
      description: 'Повышаем видимость вашего сайта в поисковых системах и увеличиваем органический трафик.',
      icon: '📈',
      path: '/promotion',
      features: ['SEO-оптимизация', 'Контент-маркетинг', 'Аналитика']
    },
    {
      id: 4,
      title: 'AI-решения',
      description: 'Интегрируем искусственный интеллект в ваш бизнес для автоматизации и оптимизации процессов.',
      icon: '🤖',
      path: '/ai',
      features: ['Чат-боты', 'Анализ данных', 'Автоматизация']
    },
    {
      id: 5,
      title: 'Сопровождение',
      description: 'Обеспечиваем техническую поддержку и регулярное обновление ваших digital-решений.',
      icon: '🛠️',
      path: '/support',
      features: ['Техническая поддержка', 'Обновления', 'Мониторинг']
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Создаем <span className="gradient-text">цифровые решения</span> для вашего бизнеса</h1>
            <p className="hero-subtitle">
              Мы помогаем компаниям развиваться в цифровой среде с помощью современных технологий и креативных решений.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Обсудить проект</Link>
              <a href="#services" className="btn btn-secondary">Наши услуги</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-shape"></div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services-container">
          <div className="services-header">
            <h2>Наши услуги</h2>
            <p>Выберите направление, которое вам интересно, чтобы узнать больше</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <Link to={service.path} key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="service-link">
                  Подробнее <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2>Готовы начать свой проект?</h2>
          <p>Свяжитесь с нами, чтобы обсудить детали и получить бесплатную консультацию</p>
          <Link to="/contact" className="btn btn-primary">Связаться с нами</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 