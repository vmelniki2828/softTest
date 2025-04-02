import React, { useState, useEffect } from 'react';
import { FaBuilding, FaUsers, FaChartBar, FaCog, FaCode, FaCheckCircle, FaRocket, FaDatabase, FaCloud, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import './Corporate.css';

const Corporate = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaBuilding />,
      title: 'Управление компанией',
      description: 'Комплексные решения для управления всеми аспектами бизнеса'
    },
    {
      icon: <FaUsers />,
      title: 'Управление персоналом',
      description: 'Кадровый учет, расчет зарплаты и управление задачами'
    },
    {
      icon: <FaChartBar />,
      title: 'Финансовый учет',
      description: 'Управление финансами, бюджетирование и отчетность'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных и контроль доступа к информации'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные решения',
      description: 'Доступ к системе из любой точки мира'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильный доступ',
      description: 'Работа с системой с любых устройств'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение бизнес-процессов и потребностей компании',
      icon: <FaCog />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры и интерфейса системы',
      icon: <FaCode />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание функционала и интеграция с системами',
      icon: <FaCode />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка работоспособности и удобства использования',
      icon: <FaCheckCircle />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Обучение персонала и запуск системы',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaDatabase />,
      title: 'Базы данных',
      description: 'Надежное хранение и обработка данных'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Масштабируемая инфраструктура'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильный доступ',
      description: 'Работа с системой с любых устройств'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита конфиденциальных данных'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества корпоративных систем?',
      answer: 'Корпоративные системы позволяют автоматизировать бизнес-процессы, повысить эффективность работы, улучшить взаимодействие между сотрудниками и принимать более точные управленческие решения на основе данных.'
    },
    {
      question: 'Как происходит интеграция с существующими системами?',
      answer: 'Мы обеспечиваем плавную интеграцию с существующими системами компании, включая бухгалтерские программы, системы складского учета и другие бизнес-приложения.'
    },
    {
      question: 'Какие функции доступны в системе?',
      answer: 'Система включает функции управления персоналом, финансами, документами, а также аналитику и формирование отчетов. Все функции настраиваются под потребности конкретной компании.'
    }
  ];

  return (
    <div className={`corporate-page ${isVisible ? 'visible' : ''}`}>
      <section className="corporate-hero">
        <div className="corporate-hero-content">
          <div className="corporate-hero-icon">
            <FaBuilding />
          </div>
          <h1>Корпоративные Системы</h1>
          <p className="corporate-hero-description">
            Комплексные решения для управления компанией. Автоматизация процессов, повышение эффективности и рост прибыли.
          </p>
          <div className="corporate-hero-buttons">
            <a href="#contact" className="corporate-hero-button primary">Обсудить проект</a>
            <a href="#features" className="corporate-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="corporate-hero-visual">
          <div className="corporate-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Корпоративная Система</div>
              <div className="dashboard-actions">
                <FaBuilding />
                <FaUsers />
                <FaChartBar />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaUsers />
                <div className="card-title">Сотрудники</div>
                <div className="card-value">1,234</div>
              </div>
              <div className="dashboard-card">
                <FaChartBar />
                <div className="card-title">Проекты</div>
                <div className="card-value">45</div>
              </div>
              <div className="dashboard-card">
                <FaBuilding />
                <div className="card-title">Отделы</div>
                <div className="card-value">12</div>
              </div>
              <div className="dashboard-card">
                <FaChartBar />
                <div className="card-title">Эффективность</div>
                <div className="card-value">+30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="corporate-divider">
        <div className="corporate-divider-line"></div>
        <div className="corporate-divider-icon">
          <FaBuilding />
        </div>
        <div className="corporate-divider-line"></div>
      </div>

      <section className="corporate-tabs">
        <div className="corporate-tab-buttons">
          <button
            className={`corporate-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`corporate-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`corporate-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`corporate-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="corporate-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Системы</h2>
              <div className="corporate-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="corporate-feature-card">
                    <div className="corporate-feature-icon">{feature.icon}</div>
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
              <div className="corporate-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="corporate-process-step">
                    <div className="corporate-process-step-number">{step.number}</div>
                    <div className="corporate-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="corporate-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="corporate-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="corporate-technology-card">
                    <div className="corporate-technology-icon">{tech.icon}</div>
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
              <div className="corporate-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="corporate-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="corporate-divider">
        <div className="corporate-divider-line"></div>
        <div className="corporate-divider-icon">
          <FaBuilding />
        </div>
        <div className="corporate-divider-line"></div>
      </div>

      <section className="corporate-cta">
        <h2>Готовы оптимизировать бизнес-процессы?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="corporate-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Corporate; 