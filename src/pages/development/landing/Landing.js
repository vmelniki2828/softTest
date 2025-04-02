import React, { useState, useEffect } from 'react';
import { FaRocket, FaChartLine, FaMobileAlt, FaSearch, FaCode, FaCheckCircle, FaPaintBrush, FaCog, FaCheck, FaDesktop, FaUserFriends, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import './Landing.css';

const Landing = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaRocket />,
      title: 'Высокая конверсия',
      description: 'Оптимизированный дизайн и структура для максимальной конверсии посетителей'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика и отслеживание',
      description: 'Интеграция с системами аналитики для отслеживания эффективности'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Адаптивный дизайн',
      description: 'Идеальное отображение на всех устройствах и экранах'
    },
    {
      icon: <FaSearch />,
      title: 'SEO-оптимизация',
      description: 'Оптимизация под поисковые системы для лучшей видимости'
    },
    {
      icon: <FaUserFriends />,
      title: 'Целевая аудитория',
      description: 'Фокус на конкретной целевой аудитории и их потребностях'
    },
    {
      icon: <FaBullseye />,
      title: 'Четкие призывы к действию',
      description: 'Эффективные CTA для достижения поставленных целей'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ и планирование',
      description: 'Изучение целевой аудитории и определение целей лендинга',
      icon: <FaCog />
    },
    {
      number: '02',
      title: 'Дизайн',
      description: 'Создание привлекательного и эффективного дизайна',
      icon: <FaPaintBrush />
    },
    {
      number: '03',
      title: 'Разработка',
      description: 'Программирование и интеграция необходимых функций',
      icon: <FaCode />
    },
    {
      number: '04',
      title: 'Оптимизация',
      description: 'Настройка производительности и SEO-оптимизация',
      icon: <FaCheckCircle />
    },
    {
      number: '05',
      title: 'Запуск',
      description: 'Тестирование и публикация лендинга',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaDesktop />,
      title: 'Современные технологии',
      description: 'Использование передовых веб-технологий'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильная версия',
      description: 'Оптимизация под мобильные устройства'
    },
    {
      icon: <FaSearch />,
      title: 'SEO-инструменты',
      description: 'Интеграция с системами аналитики'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных и форм'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества лендинга?',
      answer: 'Лендинг позволяет сфокусировать внимание посетителя на конкретном предложении, увеличить конверсию и эффективно достигать поставленных целей.'
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer: 'Срок разработки зависит от сложности проекта и количества требуемых функций. Обычно это занимает от 2 до 4 недель.'
    },
    {
      question: 'Какие элементы должны быть на лендинге?',
      answer: 'Эффективный лендинг включает привлекательный заголовок, описание преимуществ, призывы к действию, социальные доказательства и контактную информацию.'
    }
  ];

  return (
    <div className={`landing-page ${isVisible ? 'visible' : ''}`}>
      <section className="landing-hero">
        <div className="landing-hero-content">
          <div className="landing-hero-icon">
            <FaRocket />
          </div>
          <h1>Разработка Лендингов</h1>
          <p className="landing-hero-description">
            Создаем эффективные одностраничные сайты, которые конвертируют посетителей в клиентов. Современный дизайн, высокая конверсия, результат.
          </p>
          <div className="landing-hero-buttons">
            <a href="#contact" className="landing-hero-button primary">Обсудить проект</a>
            <a href="#features" className="landing-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="landing-hero-visual">
          <div className="landing-preview">
            <div className="preview-header">
              <div className="preview-title">Лендинг</div>
              <div className="preview-actions">
                <FaDesktop />
                <FaMobileAlt />
                <FaChartLine />
              </div>
            </div>
            <div className="preview-content">
              <div className="preview-section">
                <FaRocket />
                <div className="section-title">Конверсия</div>
                <div className="section-value">+45%</div>
              </div>
              <div className="preview-section">
                <FaUserFriends />
                <div className="section-title">Посетители</div>
                <div className="section-value">2.5K</div>
              </div>
              <div className="preview-section">
                <FaChartLine />
                <div className="section-title">Продажи</div>
                <div className="section-value">₽1.2M</div>
              </div>
              <div className="preview-section">
                <FaCheck />
                <div className="section-title">Цели</div>
                <div className="section-value">98%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="landing-divider">
        <div className="landing-divider-line"></div>
        <div className="landing-divider-icon">
          <FaRocket />
        </div>
        <div className="landing-divider-line"></div>
      </div>

      <section className="landing-tabs">
        <div className="landing-tab-buttons">
          <button
            className={`landing-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`landing-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`landing-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`landing-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="landing-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Лендинга</h2>
              <div className="landing-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="landing-feature-card">
                    <div className="landing-feature-icon">{feature.icon}</div>
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
              <div className="landing-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="landing-process-step">
                    <div className="landing-process-step-number">{step.number}</div>
                    <div className="landing-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="landing-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="landing-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="landing-technology-card">
                    <div className="landing-technology-icon">{tech.icon}</div>
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
              <div className="landing-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="landing-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="landing-divider">
        <div className="landing-divider-line"></div>
        <div className="landing-divider-icon">
          <FaRocket />
        </div>
        <div className="landing-divider-line"></div>
      </div>

      <section className="landing-cta">
        <h2>Готовы создать эффективный лендинг?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="landing-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Landing; 