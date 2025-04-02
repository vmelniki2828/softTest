import React, { useState, useEffect } from 'react';
import { FaCode, FaServer, FaShieldAlt, FaDatabase, FaCogs, FaRocket, FaCheck, FaTools, FaChartLine } from 'react-icons/fa';
import './API.css';

const API = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaServer />,
      title: 'RESTful API',
      description: 'Создание современных REST API с использованием лучших практик и стандартов'
    },
    {
      icon: <FaCode />,
      title: 'GraphQL',
      description: 'Разработка гибких GraphQL API для эффективной работы с данными'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Внедрение современных методов защиты и аутентификации'
    },
    {
      icon: <FaDatabase />,
      title: 'Базы данных',
      description: 'Интеграция с различными типами баз данных и системами хранения'
    },
    {
      icon: <FaCogs />,
      title: 'Микросервисы',
      description: 'Разработка масштабируемых микросервисных архитектур'
    },
    {
      icon: <FaChartLine />,
      title: 'Мониторинг',
      description: 'Системы мониторинга и аналитики производительности API'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение бизнес-требований и определение архитектуры API',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка документации и схемы API',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Реализация API с использованием современных технологий',
      icon: <FaCode />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Комплексное тестирование и оптимизация производительности',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Развертывание',
      description: 'Настройка инфраструктуры и запуск API',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaServer />,
      title: 'Node.js',
      description: 'Создание высокопроизводительных API на Node.js'
    },
    {
      icon: <FaCode />,
      title: 'Express',
      description: 'Фреймворк для быстрой разработки REST API'
    },
    {
      icon: <FaDatabase />,
      title: 'MongoDB',
      description: 'NoSQL база данных для гибкого хранения данных'
    },
    {
      icon: <FaShieldAlt />,
      title: 'JWT',
      description: 'Безопасная аутентификация с использованием JWT'
    }
  ];

  const faqs = [
    {
      question: 'Что такое API?',
      answer: 'API (Application Programming Interface) - это набор правил и протоколов, которые позволяют различным приложениям взаимодействовать друг с другом.'
    },
    {
      question: 'Сколько времени занимает разработка API?',
      answer: 'Сроки разработки зависят от сложности проекта. Простой REST API может быть разработан за 2-4 недели, а сложная микросервисная архитектура может занять несколько месяцев.'
    },
    {
      question: 'Какие типы API вы разрабатываете?',
      answer: 'Мы разрабатываем REST API, GraphQL API, SOAP API, а также микросервисные архитектуры. Выбор типа API зависит от конкретных требований проекта.'
    }
  ];

  return (
    <div className={`api-page ${isVisible ? 'visible' : ''}`}>
      <section className="api-hero">
        <div className="api-hero-content">
          <div className="api-hero-icon">
            <FaCode />
          </div>
          <h1>API Разработка</h1>
          <p className="api-hero-description">
            Создаем мощные и безопасные API для ваших приложений. От простых REST API до сложных микросервисных архитектур.
          </p>
          <div className="api-hero-buttons">
            <a href="#contact" className="api-hero-button primary">Обсудить проект</a>
            <a href="#features" className="api-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="api-hero-visual">
          <div className="api-code-window">
            <div className="api-code-header">
              <div className="api-code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="api-code-title">api.js</div>
            </div>
            <div className="api-code-content">
              <pre>
                <code>{`const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  });
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="api-divider">
        <div className="api-divider-line"></div>
        <div className="api-divider-icon">
          <FaCode />
        </div>
        <div className="api-divider-line"></div>
      </div>

      <section className="api-tabs">
        <div className="api-tab-buttons">
          <button
            className={`api-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`api-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`api-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`api-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="api-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности API Разработки</h2>
              <div className="api-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="api-feature-card">
                    <div className="api-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс Разработки</h2>
              <div className="api-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="api-process-step">
                    <div className="api-process-step-number">{step.number}</div>
                    <div className="api-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="api-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="api-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="api-technology-card">
                    <div className="api-technology-icon">{tech.icon}</div>
                    <h3>{tech.title}</h3>
                    <p>{tech.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'faq' && (
            <>
              <h2>Часто Задаваемые Вопросы</h2>
              <div className="api-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="api-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="api-divider">
        <div className="api-divider-line"></div>
        <div className="api-divider-icon">
          <FaRocket />
        </div>
        <div className="api-divider-line"></div>
      </div>

      <section className="api-cta">
        <h2>Готовы начать разработку API?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="api-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default API; 