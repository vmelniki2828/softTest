import React, { useEffect, useRef } from 'react';
import { FaBrain, FaRobot, FaChartLine, FaRocket, FaCode, FaServer, FaChartBar, FaUsers } from 'react-icons/fa';
import '../styles/Development.css';

const AI = () => {
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
      icon: <FaBrain />,
      title: "Машинное обучение",
      description: "Разработка и внедрение алгоритмов машинного обучения для решения бизнес-задач"
    },
    {
      icon: <FaRobot />,
      title: "Искусственный интеллект",
      description: "Создание интеллектуальных систем для автоматизации и оптимизации процессов"
    },
    {
      icon: <FaChartLine />,
      title: "Аналитика данных",
      description: "Анализ больших данных и прогнозирование с помощью AI"
    },
    {
      icon: <FaRocket />,
      title: "Инновации",
      description: "Внедрение передовых AI-технологий для развития бизнеса"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Анализ",
      description: "Изучение данных и определение возможностей для применения AI"
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Разработка",
      description: "Создание и обучение моделей машинного обучения"
    },
    {
      number: "03",
      icon: <FaChartBar />,
      title: "Оптимизация",
      description: "Улучшение точности и эффективности AI-решений"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Внедрение",
      description: "Интеграция AI в бизнес-процессы и обучение персонала"
    }
  ];

  const technologies = [
    {
      icon: <FaBrain />,
      title: "TensorFlow",
      description: "Фреймворк для машинного обучения и нейронных сетей"
    },
    {
      icon: <FaRobot />,
      title: "PyTorch",
      description: "Библиотека для глубокого обучения"
    },
    {
      icon: <FaChartLine />,
      title: "Scikit-learn",
      description: "Инструменты для машинного обучения и анализа данных"
    }
  ];

  const faq = [
    {
      question: "Что такое искусственный интеллект?",
      answer: "Искусственный интеллект - это технология, позволяющая компьютерам учиться на основе данных, принимать решения и выполнять задачи, которые традиционно требуют человеческого интеллекта."
    },
    {
      question: "Какие преимущества у AI?",
      answer: "AI позволяет автоматизировать сложные задачи, повысить точность прогнозов, ускорить принятие решений, оптимизировать процессы и создать новые возможности для бизнеса."
    },
    {
      question: "Как начать использовать AI?",
      answer: "Для начала использования AI необходимо определить конкретные задачи, собрать необходимые данные, выбрать подходящие технологии и начать с пилотного проекта."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaBrain className="development-hero-icon" />
          <h1>Искусственный интеллект</h1>
          <p className="development-hero-description">
            Создаем интеллектуальные решения на основе искусственного интеллекта и машинного обучения, 
            помогая бизнесу развиваться и становиться эффективнее
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

export default AI; 