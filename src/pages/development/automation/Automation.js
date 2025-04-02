import React, { useState, useEffect } from 'react';
import { FaCogs, FaChartLine, FaRobot, FaCode, FaDatabase, FaCloud, FaCheck, FaTools, FaRocket } from 'react-icons/fa';
import './Automation.css';

const Automation = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaCogs />,
      title: 'Автоматизация процессов',
      description: 'Оптимизация и автоматизация рутинных задач для повышения эффективности бизнеса'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика и оптимизация',
      description: 'Глубокий анализ данных и оптимизация бизнес-процессов на основе полученных результатов'
    },
    {
      icon: <FaRobot />,
      title: 'RPA решения',
      description: 'Внедрение роботизированной автоматизации процессов для повышения производительности'
    },
    {
      icon: <FaCode />,
      title: 'Интеграция систем',
      description: 'Беспрепятственная интеграция различных систем и приложений для автоматизации рабочих процессов'
    },
    {
      icon: <FaDatabase />,
      title: 'Управление данными',
      description: 'Автоматизация сбора, обработки и анализа данных для принятия обоснованных решений'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные решения',
      description: 'Развертывание автоматизированных решений в облаке для масштабируемости и доступности'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ процессов',
      description: 'Изучение текущих бизнес-процессов и выявление возможностей для автоматизации',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка плана автоматизации и выбор оптимальных технологических решений',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание и настройка автоматизированных систем и процессов',
      icon: <FaCode />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка работоспособности и оптимизация автоматизированных решений',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Запуск автоматизированных процессов и обучение персонала',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaRobot />,
      title: 'UiPath',
      description: 'Платформа для роботизированной автоматизации процессов'
    },
    {
      icon: <FaCode />,
      title: 'Python',
      description: 'Язык программирования для создания скриптов автоматизации'
    },
    {
      icon: <FaDatabase />,
      title: 'Power Automate',
      description: 'Инструмент для автоматизации рабочих процессов Microsoft'
    },
    {
      icon: <FaCloud />,
      title: 'AWS Lambda',
      description: 'Серверная платформа для автоматизации облачных процессов'
    }
  ];

  const faqs = [
    {
      question: 'Что такое автоматизация процессов?',
      answer: 'Автоматизация процессов - это использование технологий для выполнения повторяющихся задач без участия человека, что повышает эффективность и снижает вероятность ошибок.'
    },
    {
      question: 'Какие преимущества дает автоматизация?',
      answer: 'Автоматизация позволяет повысить производительность, снизить затраты, минимизировать ошибки, ускорить выполнение задач и освободить ресурсы для более важных задач.'
    },
    {
      question: 'Сколько времени занимает внедрение автоматизации?',
      answer: 'Сроки внедрения зависят от сложности процессов и масштаба проекта. Обычно это занимает от нескольких недель до нескольких месяцев.'
    },
    {
      question: 'Какие процессы можно автоматизировать?',
      answer: 'Можно автоматизировать практически любые повторяющиеся процессы: обработку данных, документооборот, коммуникации, аналитику и многое другое.'
    }
  ];

  return (
    <div className={`automation-page ${isVisible ? 'visible' : ''}`}>
      <section className="automation-hero">
        <div className="automation-hero-content">
          <div className="automation-hero-icon">
            <FaCogs />
          </div>
          <h1>Автоматизация и оптимизация</h1>
          <p className="automation-hero-description">
            Повышайте эффективность вашего бизнеса с помощью современных решений автоматизации и оптимизации процессов
          </p>
          <div className="automation-hero-buttons">
            <a href="#contact" className="automation-hero-button primary">Обсудить проект</a>
            <a href="#features" className="automation-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="automation-hero-visual">
          <div className="automation-gears">
            <div className="automation-gear large">
              <div className="automation-gear-teeth"></div>
              <div className="automation-gear-center"></div>
            </div>
            <div className="automation-gear medium">
              <div className="automation-gear-teeth"></div>
              <div className="automation-gear-center"></div>
            </div>
            <div className="automation-gear small">
              <div className="automation-gear-teeth"></div>
              <div className="automation-gear-center"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="automation-divider">
        <div className="automation-divider-line"></div>
        <div className="automation-divider-icon">
          <FaCogs />
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
              <h2>Возможности автоматизации</h2>
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
              <h2>Процесс внедрения</h2>
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
              <h2>Используемые технологии</h2>
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
              <h2>Частые вопросы</h2>
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

      <section className="automation-cta">
        <h2>Готовы автоматизировать ваш бизнес?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="automation-cta-button">Начать проект</a>
      </section>
    </div>
  );
};

export default Automation; 