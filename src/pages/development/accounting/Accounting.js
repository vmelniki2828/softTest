import React, { useState, useEffect } from 'react';
import { FaCalculator, FaFileInvoiceDollar, FaChartLine, FaUsers, FaDatabase, FaShieldAlt, FaCloud, FaMobileAlt, FaClipboardList, FaCog, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './Accounting.css';

const Accounting = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaCalculator />,
      title: 'Бухгалтерский учет',
      description: 'Автоматизация основных бухгалтерских операций и отчетности'
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Управление финансами',
      description: 'Контроль доходов и расходов, финансовое планирование'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика',
      description: 'Детальный анализ финансовых показателей и прогнозирование'
    },
    {
      icon: <FaUsers />,
      title: 'Управление персоналом',
      description: 'Расчет зарплаты, отпусков и других выплат'
    },
    {
      icon: <FaDatabase />,
      title: 'Интеграция',
      description: 'Подключение к банкам и государственным системам'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных и контроль доступа'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение бизнес-процессов и потребностей компании',
      icon: <FaClipboardList />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры и интерфейса системы',
      icon: <FaCog />
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
      description: 'Надежное хранение финансовых данных'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Масштабируемое хранение и обработка'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита конфиденциальных данных'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильный доступ',
      description: 'Работа с системой с любых устройств'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества автоматизации бухгалтерского учета?',
      answer: 'Автоматизация позволяет сократить время на рутинные операции, минимизировать ошибки и получить актуальную информацию о финансовом состоянии компании в реальном времени.'
    },
    {
      question: 'Как происходит интеграция с банками?',
      answer: 'Мы обеспечиваем интеграцию с популярными банковскими системами через API, что позволяет автоматизировать операции с банковскими счетами и платежами.'
    },
    {
      question: 'Какие функции доступны в системе?',
      answer: 'Система включает функции ведения бухгалтерского учета, управления финансами, расчета зарплаты, формирования отчетности и аналитики.'
    }
  ];

  return (
    <div className={`accounting-page ${isVisible ? 'visible' : ''}`}>
      <section className="accounting-hero">
        <div className="accounting-hero-content">
          <div className="accounting-hero-icon">
            <FaCalculator />
          </div>
          <h1>Бухгалтерские системы</h1>
          <p className="accounting-hero-description">
            Современные решения для автоматизации бухгалтерского учета и управления финансами. Оптимизация бизнес-процессов и повышение эффективности работы.
          </p>
          <div className="accounting-hero-buttons">
            <a href="#contact" className="accounting-hero-button primary">Обсудить проект</a>
            <a href="#features" className="accounting-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="accounting-hero-visual">
          <div className="accounting-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Бухгалтерская система</div>
              <div className="dashboard-actions">
                <FaCalculator />
                <FaChartLine />
                <FaFileInvoiceDollar />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaCalculator />
                <div className="card-title">Операции</div>
                <div className="card-value">150</div>
              </div>
              <div className="dashboard-card">
                <FaChartLine />
                <div className="card-title">Доход</div>
                <div className="card-value">₴500K</div>
              </div>
              <div className="dashboard-card">
                <FaFileInvoiceDollar />
                <div className="card-title">Расходы</div>
                <div className="card-value">₴300K</div>
              </div>
              <div className="dashboard-card">
                <FaUsers />
                <div className="card-title">Сотрудники</div>
                <div className="card-value">25</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="accounting-divider">
        <div className="accounting-divider-line"></div>
        <div className="accounting-divider-icon">
          <FaCalculator />
        </div>
        <div className="accounting-divider-line"></div>
      </div>

      <section className="accounting-tabs">
        <div className="accounting-tab-buttons">
          <button
            className={`accounting-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`accounting-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`accounting-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`accounting-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="accounting-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Системы</h2>
              <div className="accounting-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="accounting-feature-card">
                    <div className="accounting-feature-icon">{feature.icon}</div>
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
              <div className="accounting-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="accounting-process-step">
                    <div className="accounting-process-step-number">{step.number}</div>
                    <div className="accounting-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="accounting-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="accounting-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="accounting-technology-card">
                    <div className="accounting-technology-icon">{tech.icon}</div>
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
              <div className="accounting-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="accounting-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="accounting-divider">
        <div className="accounting-divider-line"></div>
        <div className="accounting-divider-icon">
          <FaCalculator />
        </div>
        <div className="accounting-divider-line"></div>
      </div>

      <section className="accounting-cta">
        <h2>Готовы автоматизировать бухгалтерский учет?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="accounting-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Accounting; 