import React, { useEffect, useRef } from 'react';
import { FaDatabase, FaChartBar, FaBrain, FaRocket, FaCode, FaServer, FaChartLine, FaUsers } from 'react-icons/fa';
import './Development.css';

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
      description: "Интерактивные графики и дашборды для представления аналитических данных"
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
      icon: <FaServer />,
      title: "Обработка",
      description: "Применение алгоритмов обработки и анализа данных"
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Визуализация",
      description: "Создание интерактивных дашбордов и отчетов"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Внедрение",
      description: "Интеграция решений в бизнес-процессы"
    }
  ];

  const technologies = [
    {
      icon: <FaDatabase />,
      title: "Hadoop",
      description: "Распределенная обработка больших данных"
    },
    {
      icon: <FaChartBar />,
      title: "Spark",
      description: "Быстрая обработка данных в реальном времени"
    },
    {
      icon: <FaBrain />,
      title: "TensorFlow",
      description: "Машинное обучение и нейронные сети"
    }
  ];

  const faq = [
    {
      question: "Что такое Big Data?",
      answer: "Big Data - это совокупность технологий и методов обработки больших объемов данных, которые характеризуются большим объемом, высокой скоростью поступления и разнообразием форматов."
    },
    {
      question: "Какие преимущества у Big Data?",
      answer: "Big Data позволяет принимать более точные бизнес-решения, оптимизировать процессы, предсказывать тренды и находить новые возможности для развития бизнеса."
    },
    {
      question: "Как внедрить Big Data в бизнес?",
      answer: "Внедрение Big Data начинается с определения целей, выбора подходящих технологий, сбора и подготовки данных, разработки аналитических моделей и создания визуализаций для принятия решений."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaDatabase className="development-hero-icon" />
          <h1>Big Data и Аналитика</h1>
          <p className="development-hero-description">
            Создаем системы для обработки и анализа больших данных, 
            помогая бизнесу принимать обоснованные решения
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