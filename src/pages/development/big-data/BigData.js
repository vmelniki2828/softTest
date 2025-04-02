import React, { useState, useEffect } from 'react';
import { FaDatabase, FaChartBar, FaBrain, FaCloud, FaCogs, FaRocket, FaCheck, FaTools, FaChartLine, FaSearch } from 'react-icons/fa';
import './BigData.css';

const BigData = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaDatabase />,
      title: 'Обработка данных',
      description: 'Анализ и обработка больших объемов данных в реальном времени'
    },
    {
      icon: <FaChartBar />,
      title: 'Визуализация',
      description: 'Создание интерактивных дашбордов и визуализаций данных'
    },
    {
      icon: <FaBrain />,
      title: 'Машинное обучение',
      description: 'Внедрение алгоритмов машинного обучения для анализа данных'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные решения',
      description: 'Масштабируемая инфраструктура для обработки больших данных'
    },
    {
      icon: <FaSearch />,
      title: 'Поиск и аналитика',
      description: 'Продвинутые системы поиска и аналитической обработки'
    },
    {
      icon: <FaChartLine />,
      title: 'Прогнозирование',
      description: 'Построение моделей для прогнозирования и анализа трендов'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ данных',
      description: 'Изучение источников данных и определение целей анализа',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры системы обработки данных',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание системы обработки и анализа данных',
      icon: <FaCogs />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка точности и производительности системы',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Запуск системы и мониторинг результатов',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaDatabase />,
      title: 'Hadoop',
      description: 'Распределенная обработка больших данных'
    },
    {
      icon: <FaCloud />,
      title: 'Spark',
      description: 'Быстрая обработка данных в памяти'
    },
    {
      icon: <FaBrain />,
      title: 'TensorFlow',
      description: 'Фреймворк для машинного обучения'
    },
    {
      icon: <FaChartBar />,
      title: 'Tableau',
      description: 'Визуализация и анализ данных'
    }
  ];

  const faqs = [
    {
      question: 'Что такое Big Data?',
      answer: 'Big Data - это технологии для обработки и анализа больших объемов структурированных и неструктурированных данных.'
    },
    {
      question: 'Какие преимущества дает Big Data?',
      answer: 'Big Data позволяет получать ценные инсайты, оптимизировать процессы, принимать обоснованные решения и прогнозировать тренды.'
    },
    {
      question: 'Сколько времени занимает внедрение Big Data?',
      answer: 'Сроки зависят от объема данных и сложности задач. Простой проект может занять 2-3 месяца, а комплексное решение - до года.'
    }
  ];

  return (
    <div className={`bigdata-page ${isVisible ? 'visible' : ''}`}>
      <section className="bigdata-hero">
        <div className="bigdata-hero-content">
          <div className="bigdata-hero-icon">
            <FaDatabase />
          </div>
          <h1>Big Data Разработка</h1>
          <p className="bigdata-hero-description">
            Создаем мощные системы для обработки и анализа больших объемов данных. От сбора до визуализации и прогнозирования.
          </p>
          <div className="bigdata-hero-buttons">
            <a href="#contact" className="bigdata-hero-button primary">Обсудить проект</a>
            <a href="#features" className="bigdata-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="bigdata-hero-visual">
          <div className="bigdata-visualization">
            <div className="bigdata-chart">
              <div className="bigdata-chart-bar" style={{ height: '60%' }}></div>
              <div className="bigdata-chart-bar" style={{ height: '80%' }}></div>
              <div className="bigdata-chart-bar" style={{ height: '40%' }}></div>
              <div className="bigdata-chart-bar" style={{ height: '90%' }}></div>
              <div className="bigdata-chart-bar" style={{ height: '70%' }}></div>
            </div>
            <div className="bigdata-data-points">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bigdata-point"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bigdata-divider">
        <div className="bigdata-divider-line"></div>
        <div className="bigdata-divider-icon">
          <FaDatabase />
        </div>
        <div className="bigdata-divider-line"></div>
      </div>

      <section className="bigdata-tabs">
        <div className="bigdata-tab-buttons">
          <button
            className={`bigdata-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`bigdata-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`bigdata-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`bigdata-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="bigdata-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Big Data</h2>
              <div className="bigdata-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="bigdata-feature-card">
                    <div className="bigdata-feature-icon">{feature.icon}</div>
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
              <div className="bigdata-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="bigdata-process-step">
                    <div className="bigdata-process-step-number">{step.number}</div>
                    <div className="bigdata-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="bigdata-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="bigdata-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="bigdata-technology-card">
                    <div className="bigdata-technology-icon">{tech.icon}</div>
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
              <div className="bigdata-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="bigdata-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="bigdata-divider">
        <div className="bigdata-divider-line"></div>
        <div className="bigdata-divider-icon">
          <FaRocket />
        </div>
        <div className="bigdata-divider-line"></div>
      </div>

      <section className="bigdata-cta">
        <h2>Готовы начать работу с Big Data?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="bigdata-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default BigData; 