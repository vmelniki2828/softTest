import React, { useEffect, useRef } from 'react';
import { FaMobileAlt, FaSync, FaShieldAlt, FaRocket, FaCode, FaServer, FaChartLine, FaUsers } from 'react-icons/fa';
import '../styles/Development.css';

const PWA = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Адаптивный дизайн",
      description: "Идеальное отображение на всех устройствах - от смартфонов до десктопов"
    },
    {
      icon: <FaSync />,
      title: "Офлайн-режим",
      description: "Работа приложения даже без подключения к интернету"
    },
    {
      icon: <FaShieldAlt />,
      title: "Безопасность",
      description: "Защита данных и безопасное соединение через HTTPS"
    },
    {
      icon: <FaRocket />,
      title: "Быстрая загрузка",
      description: "Мгновенный запуск и отзывчивый интерфейс"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Разработка",
      description: "Создание базовой структуры PWA с использованием современных технологий"
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Оптимизация",
      description: "Настройка кэширования и оптимизация производительности"
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Тестирование",
      description: "Проверка работы на различных устройствах и браузерах"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Запуск",
      description: "Развертывание и мониторинг использования приложения"
    }
  ];

  const technologies = [
    {
      icon: <FaCode />,
      title: "React",
      description: "Современный фреймворк для создания пользовательских интерфейсов"
    },
    {
      icon: <FaServer />,
      title: "Service Workers",
      description: "Технология для кэширования и офлайн-функциональности"
    },
    {
      icon: <FaShieldAlt />,
      title: "HTTPS",
      description: "Безопасное соединение для защиты данных"
    }
  ];

  const faq = [
    {
      question: "Что такое PWA?",
      answer: "Progressive Web App (PWA) - это веб-приложение, которое сочетает в себе лучшие качества веб-сайтов и нативных приложений. Оно может работать офлайн, отправлять уведомления и устанавливаться на устройство пользователя."
    },
    {
      question: "Какие преимущества у PWA?",
      answer: "PWA предлагают улучшенную производительность, возможность работы офлайн, автоматическое обновление, кроссплатформенность и более низкую стоимость разработки по сравнению с нативными приложениями."
    },
    {
      question: "Как установить PWA?",
      answer: "PWA можно установить через браузер, нажав на кнопку 'Установить' в адресной строке или через меню браузера. После установки приложение будет доступно на главном экране устройства."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaMobileAlt className="development-hero-icon" />
          <h1>Progressive Web Apps</h1>
          <p className="development-hero-description">
            Создаем современные веб-приложения, которые работают как нативные, 
            обеспечивая отличный пользовательский опыт на всех устройствах
          </p>
          <div className="development-hero-buttons">
            <a href="#contact" className="development-hero-button primary">
              Начать проект
            </a>
            <a href="#features" className="development-hero-button secondary">
              Узнать больше
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="development-features">
        {features.map((feature, index) => (
          <div key={index} className="development-feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="development-feature-icon">{feature.icon}</div>
            <h3 className="development-feature-title">{feature.title}</h3>
            <p className="development-feature-description">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="development-process">
        <h2>Процесс разработки</h2>
        <div className="development-process-steps">
          {process.map((step, index) => (
            <div key={index} className="development-process-step" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="development-process-step-number">{step.number}</div>
              <div className="development-process-step-icon">{step.icon}</div>
              <h3 className="development-process-step-title">{step.title}</h3>
              <p className="development-process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="development-technologies">
        <h2>Технологии</h2>
        <div className="development-technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="development-technology-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="development-technology-icon">{tech.icon}</div>
              <h3 className="development-technology-title">{tech.title}</h3>
              <p className="development-technology-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="development-faq">
        <h2>Частые вопросы</h2>
        {faq.map((item, index) => (
          <div key={index} className="development-faq-item" style={{ animationDelay: `${index * 0.2}s` }}>
            <h3 className="development-faq-question">{item.question}</h3>
            <p className="development-faq-answer">{item.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PWA; 