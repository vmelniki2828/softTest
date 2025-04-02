import React, { useEffect, useRef } from 'react';
import { FaServer, FaShieldAlt, FaRocket, FaCode, FaDatabase, FaChartLine, FaUsers, FaCogs } from 'react-icons/fa';
import './Development.css';

const API = () => {
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
      icon: <FaServer />,
      title: "Масштабируемость",
      description: "API, способное обрабатывать растущие нагрузки и увеличивающееся количество запросов"
    },
    {
      icon: <FaShieldAlt />,
      title: "Безопасность",
      description: "Защита данных и аутентификация с использованием современных протоколов"
    },
    {
      icon: <FaRocket />,
      title: "Производительность",
      description: "Оптимизированная обработка запросов и быстрый отклик"
    },
    {
      icon: <FaCode />,
      title: "Документация",
      description: "Подробная документация API с примерами использования"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaDatabase />,
      title: "Проектирование",
      description: "Разработка архитектуры API и определение эндпоинтов"
    },
    {
      number: "02",
      icon: <FaCode />,
      title: "Разработка",
      description: "Реализация API с использованием современных технологий"
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Тестирование",
      description: "Проверка производительности и безопасности API"
    },
    {
      number: "04",
      icon: <FaCogs />,
      title: "Оптимизация",
      description: "Улучшение производительности и масштабируемости"
    }
  ];

  const technologies = [
    {
      icon: <FaServer />,
      title: "Node.js",
      description: "Современный серверный JavaScript для создания API"
    },
    {
      icon: <FaDatabase />,
      title: "MongoDB",
      description: "Гибкая NoSQL база данных для хранения данных"
    },
    {
      icon: <FaShieldAlt />,
      title: "JWT",
      description: "Безопасная аутентификация и авторизация"
    }
  ];

  const faq = [
    {
      question: "Что такое REST API?",
      answer: "REST API - это архитектурный стиль для создания веб-сервисов, который использует HTTP методы для взаимодействия с ресурсами. Он обеспечивает простой и эффективный способ обмена данными между клиентом и сервером."
    },
    {
      question: "Какие преимущества у REST API?",
      answer: "REST API предлагает масштабируемость, простоту использования, независимость от платформы и широкую поддержку различных клиентов. Оно также обеспечивает хорошую производительность и кэширование."
    },
    {
      question: "Как обеспечить безопасность API?",
      answer: "Безопасность API обеспечивается через аутентификацию (например, JWT), авторизацию, HTTPS, валидацию входных данных, ограничение частоты запросов и регулярное обновление зависимостей."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaServer className="development-hero-icon" />
          <h1>API Разработка</h1>
          <p className="development-hero-description">
            Создаем надежные и масштабируемые API для ваших приложений, 
            обеспечивая безопасность и высокую производительность
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

export default API; 