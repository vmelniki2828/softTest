import React, { useState, useEffect } from 'react';
import { FaMobile, FaCode, FaRocket, FaCheck, FaTools, FaCogs, FaChartLine, FaCloud, FaShieldAlt, FaSync } from 'react-icons/fa';
import './Mobile.css';

const Mobile = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaMobile />,
      title: 'Нативные приложения',
      description: 'Разработка высокопроизводительных нативных приложений для iOS и Android'
    },
    {
      icon: <FaCode />,
      title: 'Кросс-платформенные решения',
      description: 'Создание универсальных приложений с использованием React Native и Flutter'
    },
    {
      icon: <FaCloud />,
      title: 'Облачная интеграция',
      description: 'Подключение к облачным сервисам и синхронизация данных'
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
      description: 'Публикация в App Store и Google Play',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaCode />,
      title: 'React Native',
      description: 'Кросс-платформенная разработка для iOS и Android'
    },
    {
      icon: <FaCode />,
      title: 'Flutter',
      description: 'Создание нативных приложений с единой кодовой базой'
    },
    {
      icon: <FaMobile />,
      title: 'Swift',
      description: 'Разработка нативных iOS приложений'
    },
    {
      icon: <FaMobile />,
      title: 'Kotlin',
      description: 'Создание нативных Android приложений'
    }
  ];

  const faqs = [
    {
      question: 'Какие платформы поддерживаются?',
      answer: 'Мы разрабатываем приложения для iOS и Android, а также создаем кросс-платформенные решения.'
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer: 'Сроки зависят от сложности проекта. Простое приложение может быть готово за 2-3 месяца, а комплексное решение - за 6-12 месяцев.'
    },
    {
      question: 'Как происходит поддержка приложения?',
      answer: 'Мы предоставляем полную техническую поддержку, обновления и исправления ошибок после запуска.'
    }
  ];

  return (
    <div className={`mobile-page ${isVisible ? 'visible' : ''}`}>
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <div className="mobile-hero-icon">
            <FaMobile />
          </div>
          <h1>Мобильная Разработка</h1>
          <p className="mobile-hero-description">
            Создаем современные мобильные приложения для iOS и Android. От идеи до публикации в магазинах приложений.
          </p>
          <div className="mobile-hero-buttons">
            <a href="#contact" className="mobile-hero-button primary">Обсудить проект</a>
            <a href="#features" className="mobile-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="mobile-hero-visual">
          <div className="mobile-device">
            <div className="mobile-screen">
              <div className="mobile-app">
                <div className="mobile-app-header"></div>
                <div className="mobile-app-content">
                  <div className="mobile-app-icon"></div>
                  <div className="mobile-app-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-divider">
        <div className="mobile-divider-line"></div>
        <div className="mobile-divider-icon">
          <FaCode />
        </div>
        <div className="mobile-divider-line"></div>
      </div>

      <section className="mobile-tabs">
        <div className="mobile-tab-buttons">
          <button
            className={`mobile-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`mobile-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`mobile-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`mobile-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="mobile-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Мобильной Разработки</h2>
              <div className="mobile-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="mobile-feature-card">
                    <div className="mobile-feature-icon">{feature.icon}</div>
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
              <div className="mobile-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="mobile-process-step">
                    <div className="mobile-process-step-number">{step.number}</div>
                    <div className="mobile-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="mobile-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="mobile-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="mobile-technology-card">
                    <div className="mobile-technology-icon">{tech.icon}</div>
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
              <div className="mobile-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="mobile-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="mobile-divider">
        <div className="mobile-divider-line"></div>
        <div className="mobile-divider-icon">
          <FaRocket />
        </div>
        <div className="mobile-divider-line"></div>
      </div>

      <section className="mobile-cta">
        <h2>Готовы создать мобильное приложение?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="mobile-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Mobile; 