import React, { useEffect, useRef } from 'react';
import { FaRobot, FaCogs, FaChartLine, FaRocket, FaCode, FaServer, FaClock, FaUsers } from 'react-icons/fa';
import '../styles/Development.css';

const Automation = () => {
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
      icon: <FaRobot />,
      title: "Автоматизация процессов",
      description: "Оптимизация рутинных задач и бизнес-процессов с помощью современных технологий"
    },
    {
      icon: <FaCogs />,
      title: "Интеграция систем",
      description: "Связывание различных систем и приложений для автоматического обмена данными"
    },
    {
      icon: <FaChartLine />,
      title: "Аналитика",
      description: "Сбор и анализ данных для оптимизации бизнес-процессов"
    },
    {
      icon: <FaRocket />,
      title: "Эффективность",
      description: "Повышение производительности и снижение затрат на ручные операции"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Анализ",
      description: "Изучение текущих процессов и определение возможностей для автоматизации"
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Разработка",
      description: "Создание решений для автоматизации с использованием современных технологий"
    },
    {
      number: "03",
      icon: <FaClock />,
      title: "Тестирование",
      description: "Проверка эффективности автоматизации и оптимизация решений"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Внедрение",
      description: "Обучение персонала и запуск автоматизированных процессов"
    }
  ];

  const technologies = [
    {
      icon: <FaRobot />,
      title: "RPA",
      description: "Роботизированная автоматизация процессов"
    },
    {
      icon: <FaServer />,
      title: "API",
      description: "Интеграция через программные интерфейсы"
    },
    {
      icon: <FaChartLine />,
      title: "Аналитика",
      description: "Системы анализа и оптимизации процессов"
    }
  ];

  const faq = [
    {
      question: "Что такое автоматизация?",
      answer: "Автоматизация - это процесс использования технологий для выполнения задач с минимальным участием человека, что повышает эффективность и снижает вероятность ошибок."
    },
    {
      question: "Какие преимущества у автоматизации?",
      answer: "Автоматизация позволяет повысить производительность, снизить затраты, минимизировать ошибки, ускорить процессы и освободить персонал для более творческих задач."
    },
    {
      question: "Как начать автоматизацию?",
      answer: "Для начала автоматизации необходимо проанализировать текущие процессы, определить приоритетные задачи, выбрать подходящие технологии и начать с пилотного проекта."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaRobot className="development-hero-icon" />
          <h1>Автоматизация</h1>
          <p className="development-hero-description">
            Оптимизируем бизнес-процессы с помощью современных технологий автоматизации, 
            повышая эффективность и снижая затраты
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

export default Automation; 