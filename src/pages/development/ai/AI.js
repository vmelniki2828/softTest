import React, { useState, useEffect } from 'react';
import { FaBrain, FaCode, FaRocket, FaCheck, FaTools, FaCogs,  FaRobot, FaMicrochip, FaDatabase, FaSearch, FaChartBar, FaCog } from 'react-icons/fa';
import './AI.css';

const AI = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaBrain />,
      title: 'Машинное обучение',
      description: 'Разработка моделей машинного обучения для анализа данных и прогнозирования'
    },
    {
      icon: <FaRobot />,
      title: 'Нейронные сети',
      description: 'Создание глубоких нейронных сетей для сложных задач распознавания'
    },
    {
      icon: <FaMicrochip />,
      title: 'Компьютерное зрение',
      description: 'Системы распознавания изображений и видео на основе ИИ'
    },
    {
      icon: <FaSearch />,
      title: 'Обработка языка',
      description: 'NLP решения для анализа текста и голосовых команд'
    },
    {
      icon: <FaChartBar />,
      title: 'Предиктивная аналитика',
      description: 'Прогнозирование трендов и поведенческих паттернов'
    },
    {
      icon: <FaCog />,
      title: 'Автоматизация процессов',
      description: 'Интеллектуальная автоматизация бизнес-процессов'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ данных',
      description: 'Изучение и подготовка данных для обучения моделей',
      icon: <FaDatabase />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Выбор архитектуры и алгоритмов ИИ',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Создание и обучение моделей ИИ',
      icon: <FaCogs />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проверка точности и оптимизация моделей',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Интеграция ИИ в существующие системы',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaBrain />,
      title: 'TensorFlow',
      description: 'Фреймворк для создания и обучения нейронных сетей'
    },
    {
      icon: <FaBrain />,
      title: 'PyTorch',
      description: 'Библиотека для разработки моделей глубокого обучения'
    },
    {
      icon: <FaMicrochip />,
      title: 'OpenCV',
      description: 'Библиотека для компьютерного зрения и обработки изображений'
    },
    {
      icon: <FaSearch />,
      title: 'NLTK',
      description: 'Инструменты для обработки естественного языка'
    }
  ];

  const faqs = [
    {
      question: 'Какие задачи решает ИИ?',
      answer: 'ИИ может решать широкий спектр задач: от анализа данных и прогнозирования до распознавания образов и автоматизации процессов.'
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer: 'Сроки зависят от сложности проекта. Простая модель может быть готова за 1-2 месяца, а комплексное решение - за 6-12 месяцев.'
    },
    {
      question: 'Какие данные нужны для обучения?',
      answer: 'Для обучения моделей ИИ необходимы качественные данные, релевантные решаемой задаче. Чем больше данных, тем лучше результаты.'
    }
  ];

  return (
    <div className={`ai-page ${isVisible ? 'visible' : ''}`}>
      <section className="ai-hero">
        <div className="ai-hero-content">
          <div className="ai-hero-icon">
            <FaBrain />
          </div>
          <h1>Искусственный Интеллект</h1>
          <p className="ai-hero-description">
            Создаем интеллектуальные системы на основе машинного обучения и нейронных сетей. От анализа данных до автоматизации процессов.
          </p>
          <div className="ai-hero-buttons">
            <a href="#contact" className="ai-hero-button primary">Обсудить проект</a>
            <a href="#features" className="ai-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="ai-hero-visual">
          <div className="ai-brain">
            <div className="ai-brain-container">
              <div className="ai-brain-waves">
                <div className="ai-brain-wave"></div>
                <div className="ai-brain-wave"></div>
                <div className="ai-brain-wave"></div>
              </div>
              <div className="ai-brain-core"></div>
              <div className="ai-brain-connections">
                <div className="ai-brain-connection"></div>
                <div className="ai-brain-connection"></div>
                <div className="ai-brain-connection"></div>
                <div className="ai-brain-connection"></div>
                <div className="ai-brain-connection"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ai-divider">
        <div className="ai-divider-line"></div>
        <div className="ai-divider-icon">
          <FaCode />
        </div>
        <div className="ai-divider-line"></div>
      </div>

      <section className="ai-tabs">
        <div className="ai-tab-buttons">
          <button
            className={`ai-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`ai-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`ai-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`ai-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="ai-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Искусственного Интеллекта</h2>
              <div className="ai-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="ai-feature-card">
                    <div className="ai-feature-icon">{feature.icon}</div>
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
              <div className="ai-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="ai-process-step">
                    <div className="ai-process-step-number">{step.number}</div>
                    <div className="ai-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="ai-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="ai-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="ai-technology-card">
                    <div className="ai-technology-icon">{tech.icon}</div>
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
              <div className="ai-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="ai-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="ai-divider">
        <div className="ai-divider-line"></div>
        <div className="ai-divider-icon">
          <FaRocket />
        </div>
        <div className="ai-divider-line"></div>
      </div>

      <section className="ai-cta">
        <h2>Готовы внедрить ИИ в ваш бизнес?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="ai-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default AI; 