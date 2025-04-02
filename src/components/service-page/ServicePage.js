import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ServicePage = ({ 
  title, 
  description, 
  icon, 
  features, 
  process, 
  technologies, 
  faq 
}) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-container">
          <div className="service-hero-content">
            <div className="service-icon">{icon}</div>
            <h1>{title}</h1>
            <p className="service-description">{description}</p>
            <Link to="/contact" className="btn btn-primary">Обсудить проект</Link>
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="service-container">
          <h2>Что мы предлагаем</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="service-container">
          <h2>Наш процесс работы</h2>
          <div className="process-steps">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-technologies">
        <div className="service-container">
          <h2>Технологии, которые мы используем</h2>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-card">
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-faq">
        <div className="service-container">
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq-list">
            {faq.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="service-container">
          <h2>Готовы начать свой проект?</h2>
          <p>Свяжитесь с нами, чтобы обсудить детали и получить бесплатную консультацию</p>
          <Link to="/contact" className="btn btn-primary">Связаться с нами</Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage; 