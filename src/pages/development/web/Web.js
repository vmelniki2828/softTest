import React, { useState, useEffect } from 'react';
import { FaGlobe, FaCode, FaRocket, FaCheck, FaTools, FaCogs, FaChartLine, FaCloud, FaShieldAlt, FaSync } from 'react-icons/fa';
import './Web.css';

const Web = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaGlobe />,
      title: 'Веб-приложения',
      description: 'Разработка современных веб-приложений с использованием передовых технологий'
    },
    {
      icon: <FaCode />,
      title: 'SPA и MPA',
      description: 'Создание одностраничных и многостраничных приложений'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные решения',
      description: 'Интеграция с облачными сервисами и микросервисная архитектура'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных и безопасная аутентификация пользователей'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика',
      description: 'Встроенная аналитика и отслеживание пользовательского поведения'
    },
    {
      icon: <FaSync />,
      title: 'Обновления',
      description: 'Автоматические обновления и поддержка приложений'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение потребностей и определение функционала приложения',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Создание UI/UX дизайна и архитектуры приложения',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Программирование и интеграция всех компонентов',
      icon: <FaCogs />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка функционала и исправление ошибок',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Запуск',
      description: 'Развертывание и публикация веб-приложения',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaCode />,
      title: 'React',
      description: 'Создание интерактивных пользовательских интерфейсов'
    },
    {
      icon: <FaCode />,
      title: 'Node.js',
      description: 'Разработка серверной части приложений'
    },
    {
      icon: <FaGlobe />,
      title: 'TypeScript',
      description: 'Типизированный JavaScript для надежного кода'
    },
    {
      icon: <FaGlobe />,
      title: 'Next.js',
      description: 'Фреймворк для создания универсальных веб-приложений'
    }
  ];

  const faqs = [
    {
      question: 'Какие типы веб-приложений вы разрабатываете?',
      answer: 'Мы разрабатываем различные типы веб-приложений: от простых сайтов до сложных корпоративных систем.'
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer: 'Сроки зависят от сложности проекта. Простое приложение может быть готово за 1-2 месяца, а комплексное решение - за 4-8 месяцев.'
    },
    {
      question: 'Как происходит поддержка приложения?',
      answer: 'Мы предоставляем полную техническую поддержку, обновления и исправления ошибок после запуска.'
    }
  ];

  return (
    <div className={`web-page ${isVisible ? 'visible' : ''}`}>
      <section className="web-hero">
        <div className="web-hero-content">
          <div className="web-hero-icon">
            <FaGlobe />
          </div>
          <h1>Веб-разработка</h1>
          <p className="web-hero-description">
            Создаем современные веб-приложения с использованием передовых технологий. От идеи до запуска.
          </p>
          <div className="web-hero-buttons">
            <a href="#contact" className="web-hero-button primary">Обсудить проект</a>
            <a href="#features" className="web-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="web-hero-visual">
          <div className="web-browser">
            <div className="web-browser-header">
              <div className="web-browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="web-browser-address">https://example.com</div>
            </div>
            <div className="web-browser-content">
              <div className="web-app">
                <div className="web-app-header"></div>
                <div className="web-app-content">
                  <div className="web-app-icon"></div>
                  <div className="web-app-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="web-divider">
        <div className="web-divider-line"></div>
        <div className="web-divider-icon">
          <FaCode />
        </div>
        <div className="web-divider-line"></div>
      </div>

      <section className="web-tabs">
        <div className="web-tab-buttons">
          <button
            className={`web-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`web-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`web-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`web-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="web-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Веб-разработки</h2>
              <div className="web-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="web-feature-card">
                    <div className="web-feature-icon">{feature.icon}</div>
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
              <div className="web-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="web-process-step">
                    <div className="web-process-step-number">{step.number}</div>
                    <div className="web-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="web-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="web-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="web-technology-card">
                    <div className="web-technology-icon">{tech.icon}</div>
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
              <div className="web-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="web-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="web-divider">
        <div className="web-divider-line"></div>
        <div className="web-divider-icon">
          <FaRocket />
        </div>
        <div className="web-divider-line"></div>
      </div>

      <section className="web-cta">
        <h2>Готовы создать веб-приложение?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="web-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Web; 