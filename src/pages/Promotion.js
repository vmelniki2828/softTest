import React, { useState, useEffect } from 'react';
import { FaChartLine, FaSearch, FaAd, FaGlobe, FaCheck, FaTools, FaRocket, FaQuestion } from 'react-icons/fa';
import './Promotion.css';

const Promotion = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaSearch />,
      title: "SEO оптимизация",
      description: "Улучшение видимости сайта в поисковых системах"
    },
    {
      icon: <FaAd />,
      title: "Контекстная реклама",
      description: "Таргетированная реклама для привлечения целевой аудитории"
    },
    {
      icon: <FaGlobe />,
      title: "SMM продвижение",
      description: "Продвижение в социальных сетях и медиа"
    },
    {
      icon: <FaChartLine />,
      title: "Аналитика",
      description: "Анализ эффективности маркетинговых кампаний"
    },
    {
      icon: <FaSearch />,
      title: "Контент-маркетинг",
      description: "Создание и продвижение полезного контента"
    },
    {
      icon: <FaAd />,
      title: "Email-маркетинг",
      description: "Работа с базой подписчиков через email-рассылку"
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ',
      description: 'Изучаем текущее состояние и конкурентов',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Стратегия',
      description: 'Разрабатываем план продвижения',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Реализация',
      description: 'Внедряем стратегию продвижения',
      icon: <FaRocket />
    },
    {
      number: '04',
      title: 'Мониторинг',
      description: 'Отслеживаем результаты и метрики',
      icon: <FaChartLine />
    },
    {
      number: '05',
      title: 'Оптимизация',
      description: 'Корректируем стратегию на основе данных',
      icon: <FaTools />
    }
  ];

  const technologies = [
    {
      icon: <FaSearch />,
      title: "Google Analytics",
      description: "Анализ поведения пользователей"
    },
    {
      icon: <FaAd />,
      title: "Google Ads",
      description: "Контекстная реклама в поиске"
    },
    {
      icon: <FaGlobe />,
      title: "Facebook Ads",
      description: "Реклама в социальных сетях"
    },
    {
      icon: <FaChartLine />,
      title: "Yandex.Metrica",
      description: "Аналитика и отслеживание конверсий"
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени нужно для первых результатов?',
      answer: 'Первые результаты SEO-продвижения обычно видны через 3-6 месяцев. Контекстная реклама и SMM могут дать результаты уже в первый месяц.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем регулярную отчетность о проделанной работе, прозрачность всех процессов и достижение договоренных KPI.'
    },
    {
      question: 'Как часто вы предоставляете отчеты?',
      answer: 'Мы предоставляем ежемесячные отчеты о результатах продвижения, включая все ключевые метрики и рекомендации по оптимизации.'
    },
    {
      question: 'Работаете ли вы с новыми сайтами?',
      answer: 'Да, мы работаем с сайтами любой "возрастной" категории. Для новых сайтов мы разрабатываем специальную стратегию продвижения.'
    }
  ];

  return (
    <div className={`promotion-page ${isVisible ? 'visible' : ''}`}>
      <section className="promotion-hero">
        <div className="promotion-hero-content">
          <div className="promotion-hero-icon">
            <FaChartLine />
          </div>
          <h1>Продвижение</h1>
          <p className="promotion-hero-description">
            Комплексное продвижение вашего бизнеса в цифровой среде
          </p>
          <div className="promotion-hero-buttons">
            <a href="#contact" className="promotion-hero-button primary">Обсудить проект</a>
            <a href="#features" className="promotion-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="promotion-hero-visual">
          <div className="promotion-chart">
            <div className="chart-line line-1"></div>
            <div className="chart-line line-2"></div>
            <div className="chart-line line-3"></div>
            <div className="chart-dot dot-1"></div>
            <div className="chart-dot dot-2"></div>
            <div className="chart-dot dot-3"></div>
          </div>
        </div>
      </section>

      <div className="promotion-divider">
        <div className="promotion-divider-line"></div>
        <div className="promotion-divider-icon">
          <FaChartLine />
        </div>
        <div className="promotion-divider-line"></div>
      </div>

      <section className="promotion-tabs">
        <div className="promotion-tab-buttons">
          <button
            className={`promotion-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`promotion-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`promotion-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`promotion-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="promotion-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности продвижения</h2>
              <div className="promotion-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="promotion-feature-card">
                    <div className="promotion-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс работы</h2>
              <div className="promotion-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="promotion-process-step">
                    <div className="promotion-process-step-number">{step.number}</div>
                    <div className="promotion-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="promotion-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые технологии</h2>
              <div className="promotion-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="promotion-technology-card">
                    <div className="promotion-technology-icon">{tech.icon}</div>
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
              <div className="promotion-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="promotion-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="promotion-cta">
        <h2>Готовы продвигать свой бизнес?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="promotion-cta-button">Начать продвижение</a>
      </section>
    </div>
  );
};

export default Promotion; 