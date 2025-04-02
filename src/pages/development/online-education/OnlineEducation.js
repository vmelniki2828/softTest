import React, { useState, useEffect } from 'react';
import { FaVideo, FaUsers, FaLaptop, FaChartBar, FaCertificate, FaComments, FaClipboardList, FaCog, FaCode, FaCheckCircle, FaRocket, FaDatabase, FaCloud, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';
import './OnlineEducation.css';

const OnlineEducation = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaVideo />,
      title: 'Видео-курсы',
      description: 'Создание и управление видео-курсами с интерактивными элементами'
    },
    {
      icon: <FaUsers />,
      title: 'Управление студентами',
      description: 'Система управления студентами и преподавателями'
    },
    {
      icon: <FaLaptop />,
      title: 'Интерактивные занятия',
      description: 'Проведение онлайн-занятий с возможностью взаимодействия'
    },
    {
      icon: <FaChartBar />,
      title: 'Аналитика обучения',
      description: 'Отслеживание прогресса и эффективности обучения'
    },
    {
      icon: <FaCertificate />,
      title: 'Сертификация',
      description: 'Выдача сертификатов по завершении курсов'
    },
    {
      icon: <FaComments />,
      title: 'Обсуждения',
      description: 'Форум для общения студентов и преподавателей'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение потребностей образовательной платформы',
      icon: <FaClipboardList />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры и интерфейса платформы',
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
      description: 'Обучение персонала и запуск платформы',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaDatabase />,
      title: 'Базы данных',
      description: 'Надежное хранение данных и контента'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Масштабируемое хранение и обработка данных'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита данных и контента'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильные приложения',
      description: 'Доступ к платформе с любых устройств'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества онлайн-платформы?',
      answer: 'Онлайн-платформа позволяет проводить обучение в любое время и из любого места, обеспечивает интерактивность и отслеживание прогресса обучения.'
    },
    {
      question: 'Как происходит интеграция с существующими системами?',
      answer: 'Мы обеспечиваем интеграцию с популярными системами управления обучением (LMS) и можем разработать индивидуальные решения для вашей платформы.'
    },
    {
      question: 'Какие функции доступны для преподавателей?',
      answer: 'Преподаватели получают доступ к созданию курсов, проведению занятий, оценке работ и аналитике успеваемости студентов.'
    }
  ];

  return (
    <div className={`online-education-page ${isVisible ? 'visible' : ''}`}>
      <section className="online-education-hero">
        <div className="online-education-hero-content">
          <div className="online-education-hero-icon">
            <FaLaptop />
          </div>
          <h1>Платформы онлайн-образования</h1>
          <p className="online-education-hero-description">
            Современные решения для дистанционного обучения. Создание интерактивных курсов, проведение онлайн-занятий и управление образовательным процессом.
          </p>
          <div className="online-education-hero-buttons">
            <a href="#contact" className="online-education-hero-button primary">Обсудить проект</a>
            <a href="#features" className="online-education-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="online-education-hero-visual">
          <div className="online-education-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Платформа онлайн-обучения</div>
              <div className="dashboard-actions">
                <FaVideo />
                <FaUsers />
                <FaChartBar />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaUsers />
                <div className="card-title">Студенты</div>
                <div className="card-value">500</div>
              </div>
              <div className="dashboard-card">
                <FaVideo />
                <div className="card-title">Курсы</div>
                <div className="card-value">25</div>
              </div>
              <div className="dashboard-card">
                <FaChartBar />
                <div className="card-title">Успеваемость</div>
                <div className="card-value">92%</div>
              </div>
              <div className="dashboard-card">
                <FaCertificate />
                <div className="card-title">Сертификаты</div>
                <div className="card-value">150</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="online-education-divider">
        <div className="online-education-divider-line"></div>
        <div className="online-education-divider-icon">
          <FaLaptop />
        </div>
        <div className="online-education-divider-line"></div>
      </div>

      <section className="online-education-tabs">
        <div className="online-education-tab-buttons">
          <button
            className={`online-education-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`online-education-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`online-education-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`online-education-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="online-education-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Платформы</h2>
              <div className="online-education-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="online-education-feature-card">
                    <div className="online-education-feature-icon">{feature.icon}</div>
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
              <div className="online-education-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="online-education-process-step">
                    <div className="online-education-process-step-number">{step.number}</div>
                    <div className="online-education-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="online-education-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="online-education-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="online-education-technology-card">
                    <div className="online-education-technology-icon">{tech.icon}</div>
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
              <div className="online-education-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="online-education-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="online-education-divider">
        <div className="online-education-divider-line"></div>
        <div className="online-education-divider-icon">
          <FaLaptop />
        </div>
        <div className="online-education-divider-line"></div>
      </div>

      <section className="online-education-cta">
        <h2>Готовы создать свою платформу онлайн-обучения?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="online-education-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default OnlineEducation; 