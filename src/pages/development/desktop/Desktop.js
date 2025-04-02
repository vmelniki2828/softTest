import React, { useState, useEffect } from 'react';
import { FaDesktop, FaCode, FaRocket, FaCheck, FaTools, FaCogs, FaChartLine, FaCloud, FaShieldAlt, FaSync } from 'react-icons/fa';
import './Desktop.css';

const Desktop = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaDesktop />,
      title: 'Десктопные приложения',
      description: 'Разработка нативных приложений для Windows, macOS и Linux'
    },
    {
      icon: <FaCode />,
      title: 'Кросс-платформенные решения',
      description: 'Создание универсальных приложений с использованием Electron и Qt'
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
      description: 'Публикация и распространение приложения',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaCode />,
      title: 'Electron',
      description: 'Создание кросс-платформенных приложений с использованием веб-технологий'
    },
    {
      icon: <FaCode />,
      title: 'Qt',
      description: 'Разработка нативных приложений с богатым пользовательским интерфейсом'
    },
    {
      icon: <FaDesktop />,
      title: 'C++',
      description: 'Создание высокопроизводительных нативных приложений'
    },
    {
      icon: <FaDesktop />,
      title: 'C#',
      description: 'Разработка приложений для Windows с использованием .NET'
    }
  ];

  const faqs = [
    {
      question: 'Какие платформы поддерживаются?',
      answer: 'Мы разрабатываем приложения для Windows, macOS и Linux, а также создаем кросс-платформенные решения.'
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
    <div className={`desktop-page ${isVisible ? 'visible' : ''}`}>
      <section className="desktop-hero">
        <div className="desktop-hero-content">
          <div className="desktop-hero-icon">
            <FaDesktop />
          </div>
          <h1>Десктопная Разработка</h1>
          <p className="desktop-hero-description">
            Создаем современные десктопные приложения для Windows, macOS и Linux. От идеи до публикации.
          </p>
          <div className="desktop-hero-buttons">
            <a href="#contact" className="desktop-hero-button primary">Обсудить проект</a>
            <a href="#features" className="desktop-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="desktop-hero-visual">
          <div className="desktop-window">
            <div className="desktop-window-header">
              <div className="desktop-window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="desktop-window-title">Application</div>
            </div>
            <div className="desktop-window-content">
              <div className="desktop-app">
                <div className="desktop-app-sidebar"></div>
                <div className="desktop-app-main">
                  <div className="desktop-app-header"></div>
                  <div className="desktop-app-content">
                    <div className="desktop-app-icon"></div>
                    <div className="desktop-app-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="desktop-divider">
        <div className="desktop-divider-line"></div>
        <div className="desktop-divider-icon">
          <FaCode />
        </div>
        <div className="desktop-divider-line"></div>
      </div>

      <section className="desktop-tabs">
        <div className="desktop-tab-buttons">
          <button
            className={`desktop-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`desktop-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`desktop-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`desktop-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="desktop-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Десктопной Разработки</h2>
              <div className="desktop-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="desktop-feature-card">
                    <div className="desktop-feature-icon">{feature.icon}</div>
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
              <div className="desktop-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="desktop-process-step">
                    <div className="desktop-process-step-number">{step.number}</div>
                    <div className="desktop-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="desktop-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="desktop-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="desktop-technology-card">
                    <div className="desktop-technology-icon">{tech.icon}</div>
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
              <div className="desktop-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="desktop-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="desktop-divider">
        <div className="desktop-divider-line"></div>
        <div className="desktop-divider-icon">
          <FaRocket />
        </div>
        <div className="desktop-divider-line"></div>
      </div>

      <section className="desktop-cta">
        <h2>Готовы создать десктопное приложение?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="desktop-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Desktop; 