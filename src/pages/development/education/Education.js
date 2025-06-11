import React, { useState, useEffect } from 'react';
import { FaBook, FaGraduationCap, FaUsers,FaCode,  FaChartBar, FaRocket, FaCalendarAlt, FaFileAlt, FaBell, FaEnvelope, FaUserGraduate, FaClipboardList, FaCheckCircle, FaChartLine, FaDatabase, FaMobileAlt, FaCloud, FaShieldAlt, FaCog, FaTasks} from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaBook />,
      title: 'Электронные журналы',
      description: 'Ведение электронных журналов успеваемости и посещаемости'
    },
    {
      icon: <FaUsers />,
      title: 'Управление группами',
      description: 'Создание и управление учебными группами и классами'
    },
    {
      icon: <FaChartBar />,
      title: 'Аналитика успеваемости',
      description: 'Отслеживание прогресса и статистики обучения'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Расписание занятий',
      description: 'Составление и управление расписанием занятий'
    },
    {
      icon: <FaFileAlt />,
      title: 'Домашние задания',
      description: 'Выдача и проверка домашних заданий онлайн'
    },
    {
      icon: <FaBell />,
      title: 'Уведомления',
      description: 'Система оповещений о важных событиях и дедлайнах'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение потребностей образовательного учреждения',
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
      description: 'Создание функционала и интеграция с существующими системами',
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
      description: 'Надежное хранение и обработка данных'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильные приложения',
      description: 'Доступ к системе с любых устройств'
    },
    {
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Безопасное хранение данных в облаке'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита персональных данных'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества электронных журналов?',
      answer: 'Электронные журналы позволяют автоматизировать процесс учета успеваемости, упрощают коммуникацию между учителями и родителями, предоставляют удобный доступ к информации и аналитике.'
    },
    {
      question: 'Как происходит интеграция с существующими системами?',
      answer: 'Мы обеспечиваем интеграцию с популярными системами управления образованием, а также можем разработать индивидуальные решения для вашего учреждения.'
    },
    {
      question: 'Какие функции доступны для родителей?',
      answer: 'Родители получают доступ к успеваемости ребенка, расписанию занятий, домашним заданиям и могут общаться с учителями через систему.'
    }
  ];

  return (
    <div className={`education-page ${isVisible ? 'visible' : ''}`}>
      <section className="education-hero">
        <div className="education-hero-content">
          <div className="education-hero-icon">
            <FaGraduationCap />
          </div>
          <h1>Электронные журналы и системы учёта</h1>
          <p className="education-hero-description">
            Современные решения для управления образовательным процессом. Автоматизация учета успеваемости, расписания и коммуникации.
          </p>
          <div className="education-hero-buttons">
            <a href="#contact" className="education-hero-button primary">Обсудить проект</a>
            <a href="#features" className="education-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="education-hero-visual">
          <div className="education-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Система управления образованием</div>
              <div className="dashboard-actions">
                <FaBell />
                <FaEnvelope />
                <FaUserGraduate />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaChartLine />
                <div className="card-title">Успеваемость</div>
                <div className="card-value">95%</div>
              </div>
              <div className="dashboard-card">
                <FaUsers />
                <div className="card-title">Студенты</div>
                <div className="card-value">250</div>
              </div>
              <div className="dashboard-card">
                <FaCalendarAlt />
                <div className="card-title">Занятия</div>
                <div className="card-value">12</div>
              </div>
              <div className="dashboard-card">
                <FaTasks />
                <div className="card-title">Задания</div>
                <div className="card-value">8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="education-divider">
        <div className="education-divider-line"></div>
        <div className="education-divider-icon">
          <FaBook />
        </div>
        <div className="education-divider-line"></div>
      </div>

      <section className="education-tabs">
        <div className="education-tab-buttons">
          <button
            className={`education-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`education-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`education-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`education-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="education-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Системы</h2>
              <div className="education-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="education-feature-card">
                    <div className="education-feature-icon">{feature.icon}</div>
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
              <div className="education-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="education-process-step">
                    <div className="education-process-step-number">{step.number}</div>
                    <div className="education-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="education-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="education-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="education-technology-card">
                    <div className="education-technology-icon">{tech.icon}</div>
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
              <div className="education-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="education-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="education-divider">
        <div className="education-divider-line"></div>
        <div className="education-divider-icon">
          <FaGraduationCap />
        </div>
        <div className="education-divider-line"></div>
      </div>

      <section className="education-cta">
        <h2>Готовы модернизировать образовательный процесс?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="education-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Education; 