import React, { useState, useEffect } from 'react';
import { FaHeadset, FaTools, FaChartLine, FaDatabase, FaCog, FaUserGraduate, FaTicketAlt, FaCheckCircle, FaSearch, FaWrench, FaFileAlt } from 'react-icons/fa';
import './Support.css';

const Support = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaHeadset />,
      title: 'Техническая поддержка',
      description: 'Круглосуточная поддержка пользователей и решение технических проблем'
    },
    {
      icon: <FaTools />,
      title: 'Обновление системы',
      description: 'Регулярные обновления и улучшения функциональности системы'
    },
    {
      icon: <FaChartLine />,
      title: 'Мониторинг',
      description: 'Постоянный мониторинг производительности и безопасности системы'
    },
    {
      icon: <FaDatabase />,
      title: 'Резервное копирование',
      description: 'Автоматическое резервное копирование данных и возможность восстановления'
    },
    {
      icon: <FaCog />,
      title: 'Настройка системы',
      description: 'Индивидуальная настройка системы под потребности вашего бизнеса'
    },
    {
      icon: <FaUserGraduate />,
      title: 'Обучение персонала',
      description: 'Обучение вашего персонала работе с системой и новыми функциями'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Обращение',
      description: 'Вы обращаетесь в службу поддержки с вопросом или проблемой',
      icon: <FaTicketAlt />
    },
    {
      number: '02',
      title: 'Диагностика',
      description: 'Наши специалисты анализируют проблему и определяют решение',
      icon: <FaSearch />
    },
    {
      number: '03',
      title: 'Решение',
      description: 'Применяем оптимальное решение для устранения проблемы',
      icon: <FaWrench />
    },
    {
      number: '04',
      title: 'Проверка',
      description: 'Проверяем работоспособность системы после внесенных изменений',
      icon: <FaCheckCircle />
    },
    {
      number: '05',
      title: 'Отчет',
      description: 'Предоставляем подробный отчет о проделанной работе',
      icon: <FaFileAlt />
    }
  ];

  const technologies = [
    {
      icon: <FaChartLine />,
      title: 'Системы мониторинга',
      description: 'Современные инструменты для отслеживания производительности'
    },
    {
      icon: <FaDatabase />,
      title: 'Системы резервного копирования',
      description: 'Надежные решения для защиты ваших данных'
    },
    {
      icon: <FaTicketAlt />,
      title: 'Системы тикетов',
      description: 'Эффективное управление обращениями пользователей'
    },
    {
      icon: <FaSearch />,
      title: 'Инструменты диагностики',
      description: 'Продвинутые средства анализа и устранения проблем'
    }
  ];

  const faqs = [
    {
      question: 'Как быстро реагирует служба поддержки?',
      answer: 'Мы стремимся отвечать на все обращения в течение 15 минут в рабочее время и 1 часа в нерабочее время.'
    },
    {
      question: 'Как часто обновляется система?',
      answer: 'Обновления системы выполняются ежемесячно, включая исправления ошибок и новые функции.'
    },
    {
      question: 'Как часто выполняется резервное копирование?',
      answer: 'Резервное копирование выполняется ежедневно, с хранением копий за последние 30 дней.'
    },
    {
      question: 'Какие каналы связи доступны для поддержки?',
      answer: 'Мы предоставляем поддержку через тикет-систему, телефон, email и онлайн-чат.'
    }
  ];

  return (
    <div className={`support-page ${isVisible ? 'visible' : ''}`}>
      <section className="support-hero">
        <div className="support-hero-content">
          <div className="support-hero-icon">
            <FaHeadset />
          </div>
          <h1>Техническая поддержка</h1>
          <p className="support-hero-description">
            Профессиональная поддержка вашей системы 24/7. Мы обеспечиваем бесперебойную работу,
            безопасность данных и постоянное развитие вашего проекта.
          </p>
          <div className="support-hero-buttons">
            <a href="#contact" className="support-hero-button primary">Связаться с нами</a>
            <a href="#features" className="support-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="support-hero-visual">
          <div className="support-circle">
            <div className="circle-ring ring-1"></div>
            <div className="circle-ring ring-2"></div>
            <div className="circle-ring ring-3"></div>
            <div className="circle-center">
              <FaHeadset />
            </div>
          </div>
        </div>
      </section>

      <div className="support-divider">
        <div className="support-divider-line"></div>
        <div className="support-divider-icon">
          <FaTools />
        </div>
        <div className="support-divider-line"></div>
      </div>

      <section className="support-tabs">
        <div className="support-tab-buttons">
          <button
            className={`support-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`support-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`support-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`support-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="support-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности поддержки</h2>
              <div className="support-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="support-feature-card">
                    <div className="support-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс поддержки</h2>
              <div className="support-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="support-process-step">
                    <div className="support-process-step-number">{step.number}</div>
                    <div className="support-process-step-icon">{step.icon}</div>
                    <div className="support-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые технологии</h2>
              <div className="support-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="support-technology-card">
                    <div className="support-technology-icon">{tech.icon}</div>
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
              <div className="support-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="support-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="support-cta">
        <h2>Готовы начать работу с нами?</h2>
        <p>Свяжитесь с нами, чтобы обсудить ваши потребности в технической поддержке</p>
        <a href="#contact" className="support-cta-button">Связаться с нами</a>
      </section>
    </div>
  );
};

export default Support; 