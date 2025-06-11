import React, { useState, useEffect } from 'react';
import { FaCogs, FaCode, FaRocket, FaCheck, FaTools, FaChartLine, FaSync, FaRobot, FaDatabase, FaChartBar, FaClock, FaTachometerAlt, FaChartPie, FaUsers, FaFileAlt } from 'react-icons/fa';
import './Automation.css';

const Automation = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaRobot />,
      title: 'Автоматизация процессов',
      description: 'Внедрение роботизированных решений для автоматизации рутинных задач'
    },
    {
      icon: <FaTachometerAlt />,
      title: 'Оптимизация производительности',
      description: 'Улучшение эффективности бизнес-процессов и систем'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика и мониторинг',
      description: 'Системы отслеживания и анализа ключевых показателей'
    },
    {
      icon: <FaSync />,
      title: 'Интеграция систем',
      description: 'Объединение различных систем в единый рабочий процесс'
    },
    {
      icon: <FaClock />,
      title: 'Управление задачами',
      description: 'Автоматизация планирования и контроля выполнения задач'
    },
    {
      icon: <FaUsers />,
      title: 'Управление ресурсами',
      description: 'Оптимизация распределения и использования ресурсов'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ процессов',
      description: 'Изучение текущих бизнес-процессов и выявление точек оптимизации',
      icon: <FaChartPie />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка схемы автоматизации и оптимизации',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание и настройка систем автоматизации',
      icon: <FaCogs />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка эффективности внедренных решений',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Запуск и настройка автоматизированных процессов',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaRobot />,
      title: 'RPA',
      description: 'Роботизированная автоматизация процессов'
    },
    {
      icon: <FaDatabase />,
      title: 'Workflow',
      description: 'Системы управления рабочими процессами'
    },
    {
      icon: <FaChartBar />,
      title: 'BI',
      description: 'Инструменты бизнес-аналитики'
    },
    {
      icon: <FaFileAlt />,
      title: 'BPM',
      description: 'Управление бизнес-процессами'
    }
  ];

  const faqs = [
    {
      question: 'Какие процессы можно автоматизировать?',
      answer: 'Автоматизировать можно практически любые повторяющиеся процессы: обработка документов, сбор данных, отчетность, коммуникации с клиентами и многое другое.'
    },
    {
      question: 'Сколько времени занимает внедрение?',
      answer: 'Сроки зависят от сложности процессов. Простая автоматизация может быть внедрена за 1-2 месяца, комплексные решения - за 3-6 месяцев.'
    },
    {
      question: 'Какой эффект от автоматизации?',
      answer: 'Автоматизация позволяет сократить время выполнения задач, уменьшить количество ошибок, повысить производительность и снизить операционные расходы.'
    }
  ];

  return (
    <div className={`automation-page ${isVisible ? 'visible' : ''}`}>
      <section className="automation-hero">
        <div className="automation-hero-content">
          <div className="automation-hero-icon">
            <FaCogs />
          </div>
          <h1>Автоматизация и Оптимизация</h1>
          <p className="automation-hero-description">
            Внедряем современные решения для автоматизации бизнес-процессов и оптимизации производительности. От анализа до полной автоматизации.
          </p>
          <div className="automation-hero-buttons">
            <a href="#contact" className="automation-hero-button primary">Обсудить проект</a>
            <a href="#features" className="automation-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="automation-hero-visual">
          <div className="automation-gears">
            <div className="automation-gear large">
              <div className="gear-teeth"></div>
              <div className="gear-center"></div>
            </div>
            <div className="automation-gear medium">
              <div className="gear-teeth"></div>
              <div className="gear-center"></div>
            </div>
            <div className="automation-gear small">
              <div className="gear-teeth"></div>
              <div className="gear-center"></div>
            </div>
            <div className="automation-gear tiny">
              <div className="gear-teeth"></div>
              <div className="gear-center"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="automation-divider">
        <div className="automation-divider-line"></div>
        <div className="automation-divider-icon">
          <FaCode />
        </div>
        <div className="automation-divider-line"></div>
      </div>

      <section className="automation-tabs">
        <div className="automation-tab-buttons">
          <button
            className={`automation-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`automation-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`automation-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`automation-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="automation-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Автоматизации</h2>
              <div className="automation-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="automation-feature-card">
                    <div className="automation-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс Внедрения</h2>
              <div className="automation-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="automation-process-step">
                    <div className="automation-process-step-number">{step.number}</div>
                    <div className="automation-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="automation-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="automation-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="automation-technology-card">
                    <div className="automation-technology-icon">{tech.icon}</div>
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
              <div className="automation-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="automation-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="automation-divider">
        <div className="automation-divider-line"></div>
        <div className="automation-divider-icon">
          <FaRocket />
        </div>
        <div className="automation-divider-line"></div>
      </div>

      <section className="automation-cta">
        <h2>Готовы автоматизировать ваш бизнес?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="automation-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Automation; 