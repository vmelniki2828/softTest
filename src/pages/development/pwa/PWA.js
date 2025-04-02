import React, { useState, useEffect } from 'react';
import { FaMobile, FaGlobe, FaSync, FaShieldAlt, FaDownload, FaBell, FaWifi, FaCode, FaRocket, FaCheck } from 'react-icons/fa';
import './PWA.css';

const PWA = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaDownload />,
      title: 'Установка на устройство',
      description: 'Возможность установки на главный экран устройства для быстрого доступа'
    },
    {
      icon: <FaWifi />,
      title: 'Работа офлайн',
      description: 'Функционирование приложения без подключения к интернету'
    },
    {
      icon: <FaBell />,
      title: 'Push-уведомления',
      description: 'Отправка уведомлений пользователям для повышения вовлеченности'
    },
    {
      icon: <FaSync />,
      title: 'Автоматическое обновление',
      description: 'Обновление контента в фоновом режиме без перезагрузки страницы'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных через HTTPS и современные протоколы безопасности'
    },
    {
      icon: <FaRocket />,
      title: 'Высокая производительность',
      description: 'Быстрая загрузка и отзывчивый интерфейс благодаря кэшированию'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение бизнес-процессов и определение необходимого функционала',
      icon: <FaCode />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры и дизайна приложения',
      icon: <FaCode />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание PWA с использованием современных технологий',
      icon: <FaCode />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка работоспособности на различных устройствах',
      icon: <FaCode />
    },
    {
      number: '05',
      title: 'Запуск',
      description: 'Развертывание и мониторинг работы приложения',
      icon: <FaCode />
    }
  ];

  const technologies = [
    {
      icon: <FaCode />,
      title: 'Service Workers',
      description: 'Для кэширования и офлайн-функциональности'
    },
    {
      icon: <FaCode />,
      title: 'Web App Manifest',
      description: 'Для установки на устройство и настройки отображения'
    },
    {
      icon: <FaCode />,
      title: 'HTTPS',
      description: 'Для безопасного соединения и работы Service Workers'
    },
    {
      icon: <FaCode />,
      title: 'IndexedDB',
      description: 'Для хранения данных на стороне клиента'
    }
  ];

  const faq = [
    {
      question: 'Чем PWA отличается от обычного сайта?',
      answer: 'PWA сочетает в себе преимущества веб-сайта и нативного приложения. Пользователи могут установить его на устройство, использовать офлайн и получать push-уведомления.'
    },
    {
      question: 'На каких устройствах работает PWA?',
      answer: 'PWA работает на всех современных устройствах с поддержкой веб-технологий, включая смартфоны, планшеты и компьютеры.'
    },
    {
      question: 'Сколько времени нужно на разработку PWA?',
      answer: 'Сроки разработки зависят от сложности проекта. Обычно это занимает от 2 до 8 недель.'
    }
  ];

  return (
    <div className={`pwa-page ${isVisible ? 'visible' : ''}`}>
      <section className="pwa-hero">
        <div className="pwa-hero-content">
          <div className="pwa-hero-icon">
            <FaMobile />
          </div>
          <h1>Progressive Web Apps</h1>
          <p className="pwa-hero-description">
            Современные веб-приложения, которые работают как нативные. Установите их на устройство, используйте офлайн и получайте уведомления.
          </p>
          <div className="pwa-hero-buttons">
            <a href="#contact" className="pwa-hero-button primary">Начать проект</a>
            <a href="#features" className="pwa-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="pwa-hero-visual">
          <div className="pwa-device">
            <div className="pwa-screen">
              <div className="pwa-app-icon"></div>
              <div className="pwa-app-content">
                <div className="pwa-app-header"></div>
                <div className="pwa-app-body">
                  <div className="pwa-app-item"></div>
                  <div className="pwa-app-item"></div>
                  <div className="pwa-app-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pwa-divider">
        <div className="pwa-divider-line"></div>
        <div className="pwa-divider-icon"><FaCode /></div>
        <div className="pwa-divider-line"></div>
      </div>

      <section className="pwa-tabs" id="features">
        <div className="pwa-tab-buttons">
          <button 
            className={`pwa-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button 
            className={`pwa-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button 
            className={`pwa-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button 
            className={`pwa-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="pwa-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности PWA</h2>
              <div className="pwa-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="pwa-feature-card">
                    <div className="pwa-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс разработки</h2>
              <div className="pwa-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="pwa-process-step">
                    <div className="pwa-process-step-number">{step.number}</div>
                    <div className="pwa-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      <div className="pwa-process-step-icon">{step.icon}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые технологии</h2>
              <div className="pwa-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="pwa-technology-card">
                    <div className="pwa-technology-icon">{tech.icon}</div>
                    <h3>{tech.title}</h3>
                    <p>{tech.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'faq' && (
            <>
              <h2>Часто задаваемые вопросы</h2>
              <div className="pwa-faq-list">
                {faq.map((item, index) => (
                  <div key={index} className="pwa-faq-item">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="pwa-divider">
        <div className="pwa-divider-line"></div>
        <div className="pwa-divider-icon"><FaRocket /></div>
        <div className="pwa-divider-line"></div>
      </div>

      <section className="pwa-cta" id="contact">
        <h2>Готовы создать свое PWA?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="pwa-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default PWA; 