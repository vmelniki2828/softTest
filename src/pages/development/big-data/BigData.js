import React, { useEffect, useRef } from 'react';
import { FaDatabase, FaChartBar, FaBrain, FaRocket, FaCode, FaServer, FaChartLine, FaUsers } from 'react-icons/fa';
import '../styles/Development.css';

const BigData = () => {
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
      icon: <FaDatabase />,
      title: "Обработка данных",
      description: "Эффективная обработка и анализ больших объемов данных в реальном времени"
    },
    {
      icon: <FaChartBar />,
      title: "Визуализация",
      description: "Создание интерактивных дашбордов и графиков для анализа данных"
    },
    {
      icon: <FaBrain />,
      title: "Машинное обучение",
      description: "Применение алгоритмов машинного обучения для прогнозирования и анализа"
    },
    {
      icon: <FaRocket />,
      title: "Масштабируемость",
      description: "Системы, способные обрабатывать растущие объемы данных"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaDatabase />,
      title: "Сбор данных",
      description: "Интеграция различных источников данных и их подготовка к анализу"
    },
    {
      number: "02",
      icon: <FaCode />,
      title: "Обработка",
      description: "Разработка алгоритмов обработки и анализа данных"
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Анализ",
      description: "Применение статистических методов и машинного обучения"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Визуализация",
      description: "Создание интуитивно понятных интерфейсов для работы с данными"
    }
  ];

  const technologies = [
    {
      icon: <FaDatabase />,
      title: "Hadoop",
      description: "Распределенная система для обработки больших данных"
    },
    {
      icon: <FaServer />,
      title: "Spark",
      description: "Быстрый и универсальный движок для обработки данных"
    },
    {
      icon: <FaBrain />,
      title: "TensorFlow",
      description: "Фреймворк для машинного обучения и нейронных сетей"
    }
  ];

  const faq = [
    {
      question: "Что такое Big Data?",
      answer: "Big Data - это совокупность технологий и методов для обработки больших объемов данных, которые характеризуются высокой скоростью поступления, разнообразием форматов и большим объемом."
    },
    {
      question: "Какие преимущества у Big Data?",
      answer: "Big Data позволяет принимать более точные решения на основе данных, оптимизировать бизнес-процессы, улучшать обслуживание клиентов и создавать новые продукты на основе аналитических данных."
    },
    {
      question: "Как начать работу с Big Data?",
      answer: "Для начала работы с Big Data необходимо определить цели и задачи, выбрать подходящие технологии, подготовить инфраструктуру и начать с пилотного проекта, постепенно расширяя функциональность."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaDatabase className="development-hero-icon" />
          <h1>Big Data Решения</h1>
          <p className="development-hero-description">
            Создаем мощные системы для обработки и анализа больших данных, 
            помогая бизнесу принимать решения на основе данных
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

export default BigData; 