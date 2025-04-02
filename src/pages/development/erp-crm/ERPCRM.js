import React, { useState, useEffect } from 'react';
import { FaChartLine, FaUsers, FaBox, FaMoneyBillWave, FaCog, FaCode, FaCheckCircle, FaRocket, FaDatabase, FaCloud, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import './ERPCRM.css';

const ERPCRM = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaChartLine />,
      title: 'Управление бизнес-процессами',
      description: 'Автоматизация и оптимизация основных бизнес-процессов компании'
    },
    {
      icon: <FaUsers />,
      title: 'Управление клиентами',
      description: 'Ведение базы клиентов, история взаимодействий и аналитика'
    },
    {
      icon: <FaBox />,
      title: 'Управление запасами',
      description: 'Контроль товарных запасов, закупок и поставок'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Финансовый учет',
      description: 'Управление финансами, бюджетирование и отчетность'
    },
    {
      icon: <FaUsers />,
      title: 'Управление персоналом',
      description: 'Кадровый учет, расчет зарплаты и управление задачами'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика и отчеты',
      description: 'Детальная аналитика и формирование отчетов по всем аспектам бизнеса'
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
      question: 'Какие преимущества ERP/CRM систем?',
      answer: 'ERP/CRM системы позволяют автоматизировать бизнес-процессы, повысить эффективность работы, улучшить взаимодействие с клиентами и принимать более точные управленческие решения на основе данных.'
    },
    {
      question: 'Как происходит интеграция с существующими системами?',
      answer: 'Мы обеспечиваем плавную интеграцию с существующими системами компании, включая бухгалтерские программы, системы складского учета и другие бизнес-приложения.'
    },
    {
      question: 'Какие функции доступны в системе?',
      answer: 'Система включает функции управления клиентами, товарами, финансами, персоналом, а также аналитику и формирование отчетов. Все функции настраиваются под потребности конкретной компании.'
    }
  ];

  return (
    <div className={`erp-crm-page ${isVisible ? 'visible' : ''}`}>
      <section className="erp-crm-hero">
        <div className="erp-crm-hero-content">
          <div className="erp-crm-hero-icon">
            <FaChartLine />
          </div>
          <h1>ERP/CRM Системы</h1>
          <p className="erp-crm-hero-description">
            Комплексные решения для управления бизнесом. Автоматизация процессов, повышение эффективности и рост прибыли.
          </p>
          <div className="erp-crm-hero-buttons">
            <a href="#contact" className="erp-crm-hero-button primary">Обсудить проект</a>
            <a href="#features" className="erp-crm-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="erp-crm-hero-visual">
          <div className="erp-crm-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">ERP/CRM Система</div>
              <div className="dashboard-actions">
                <FaChartLine />
                <FaUsers />
                <FaBox />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaUsers />
                <div className="card-title">Клиенты</div>
                <div className="card-value">2,345</div>
              </div>
              <div className="dashboard-card">
                <FaBox />
                <div className="card-title">Товары</div>
                <div className="card-value">1,678</div>
              </div>
              <div className="dashboard-card">
                <FaMoneyBillWave />
                <div className="card-title">Продажи</div>
                <div className="card-value">₽4.5M</div>
              </div>
              <div className="dashboard-card">
                <FaChartLine />
                <div className="card-title">Эффективность</div>
                <div className="card-value">+25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="erp-crm-divider">
        <div className="erp-crm-divider-line"></div>
        <div className="erp-crm-divider-icon">
          <FaChartLine />
        </div>
        <div className="erp-crm-divider-line"></div>
      </div>

      <section className="erp-crm-tabs">
        <div className="erp-crm-tab-buttons">
          <button
            className={`erp-crm-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`erp-crm-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`erp-crm-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`erp-crm-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="erp-crm-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Системы</h2>
              <div className="erp-crm-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="erp-crm-feature-card">
                    <div className="erp-crm-feature-icon">{feature.icon}</div>
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
              <div className="erp-crm-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="erp-crm-process-step">
                    <div className="erp-crm-process-step-number">{step.number}</div>
                    <div className="erp-crm-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="erp-crm-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="erp-crm-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="erp-crm-technology-card">
                    <div className="erp-crm-technology-icon">{tech.icon}</div>
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
              <div className="erp-crm-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="erp-crm-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="erp-crm-divider">
        <div className="erp-crm-divider-line"></div>
        <div className="erp-crm-divider-icon">
          <FaChartLine />
        </div>
        <div className="erp-crm-divider-line"></div>
      </div>

      <section className="erp-crm-cta">
        <h2>Готовы оптимизировать бизнес-процессы?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="erp-crm-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default ERPCRM; 