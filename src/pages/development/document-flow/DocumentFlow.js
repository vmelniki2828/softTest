import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaSearch, FaUserCheck, FaClock, FaShieldAlt, FaCloud, FaMobileAlt, FaClipboardList, FaCog, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import './DocumentFlow.css';

const DocumentFlow = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaFileAlt />,
      title: 'Управление документами',
      description: 'Создание, хранение и организация документов в электронном виде'
    },
    {
      icon: <FaSearch />,
      title: 'Поиск и фильтрация',
      description: 'Быстрый поиск документов по различным параметрам и фильтрация'
    },
    {
      icon: <FaUserCheck />,
      title: 'Согласование',
      description: 'Настройка маршрутов согласования и контроль статусов'
    },
    {
      icon: <FaClock />,
      title: 'Версионность',
      description: 'Отслеживание версий документов и история изменений'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Разграничение прав доступа и защита конфиденциальных данных'
    },
    {
      icon: <FaCloud />,
      title: 'Облачное хранение',
      description: 'Безопасное хранение документов в облаке с резервным копированием'
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
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Масштабируемое хранение и обработка документов'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита конфиденциальных данных и контроль доступа'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильный доступ',
      description: 'Работа с документами с любых устройств'
    },
    {
      icon: <FaFileAlt />,
      title: 'OCR',
      description: 'Распознавание текста и автоматизация ввода данных'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества электронного документооборота?',
      answer: 'Электронный документооборот позволяет ускорить процессы согласования, сократить расходы на хранение бумажных документов, обеспечить безопасность и удобство доступа к документам.'
    },
    {
      question: 'Как обеспечивается безопасность документов?',
      answer: 'Мы используем современные методы шифрования, разграничение прав доступа, аудит действий пользователей и регулярное резервное копирование данных.'
    },
    {
      question: 'Какие функции доступны в системе?',
      answer: 'Система включает функции создания и редактирования документов, настройки маршрутов согласования, поиска и фильтрации, управления версиями и интеграции с другими системами.'
    }
  ];

  return (
    <div className={`document-flow-page ${isVisible ? 'visible' : ''}`}>
      <section className="document-flow-hero">
        <div className="document-flow-hero-content">
          <div className="document-flow-hero-icon">
            <FaFileAlt />
          </div>
          <h1>Системы документооборота</h1>
          <p className="document-flow-hero-description">
            Современные решения для автоматизации работы с документами. Оптимизация бизнес-процессов и повышение эффективности работы с документацией.
          </p>
          <div className="document-flow-hero-buttons">
            <a href="#contact" className="document-flow-hero-button primary">Обсудить проект</a>
            <a href="#features" className="document-flow-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="document-flow-hero-visual">
          <div className="document-flow-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Система документооборота</div>
              <div className="dashboard-actions">
                <FaFileAlt />
                <FaSearch />
                <FaUserCheck />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaFileAlt />
                <div className="card-title">Документы</div>
                <div className="card-value">1,234</div>
              </div>
              <div className="dashboard-card">
                <FaUserCheck />
                <div className="card-title">На согласовании</div>
                <div className="card-value">45</div>
              </div>
              <div className="dashboard-card">
                <FaClock />
                <div className="card-title">Версии</div>
                <div className="card-value">3,567</div>
              </div>
              <div className="dashboard-card">
                <FaSearch />
                <div className="card-title">Поисков</div>
                <div className="card-value">789</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="document-flow-divider">
        <div className="document-flow-divider-line"></div>
        <div className="document-flow-divider-icon">
          <FaFileAlt />
        </div>
        <div className="document-flow-divider-line"></div>
      </div>

      <section className="document-flow-tabs">
        <div className="document-flow-tab-buttons">
          <button
            className={`document-flow-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`document-flow-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`document-flow-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`document-flow-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="document-flow-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Системы</h2>
              <div className="document-flow-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="document-flow-feature-card">
                    <div className="document-flow-feature-icon">{feature.icon}</div>
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
              <div className="document-flow-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="document-flow-process-step">
                    <div className="document-flow-process-step-number">{step.number}</div>
                    <div className="document-flow-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="document-flow-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="document-flow-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="document-flow-technology-card">
                    <div className="document-flow-technology-icon">{tech.icon}</div>
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
              <div className="document-flow-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="document-flow-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="document-flow-divider">
        <div className="document-flow-divider-line"></div>
        <div className="document-flow-divider-icon">
          <FaFileAlt />
        </div>
        <div className="document-flow-divider-line"></div>
      </div>

      <section className="document-flow-cta">
        <h2>Готовы автоматизировать документооборот?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="document-flow-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default DocumentFlow; 