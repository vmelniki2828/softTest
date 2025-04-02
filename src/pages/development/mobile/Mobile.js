import React, { useEffect, useRef } from 'react';
import { FaMobileAlt, FaAppStore, FaAndroid, FaCode, FaServer, FaChartLine, FaUsers } from 'react-icons/fa';
import '../styles/Development.css';

const Mobile = () => {
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
      title: "Нативные приложения",
      description: "Разработка приложений для iOS и Android с использованием нативных технологий"
    },
    {
      icon: <FaAppStore />,
      title: "Кроссплатформенность",
      description: "Создание приложений, работающих на всех мобильных платформах"
    },
    {
      icon: <FaAndroid />,
      title: "UI/UX дизайн",
      description: "Создание интуитивно понятных и привлекательных интерфейсов"
    },
    {
      icon: <FaCode />,
      title: "Оптимизация",
      description: "Обеспечение высокой производительности и эффективного использования ресурсов"
    }
  ];

  const process = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Проектирование",
      description: "Разработка архитектуры и дизайна приложения"
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Разработка",
      description: "Создание функциональности и интеграция с сервером"
    },
    {
      number: "03",
      icon: <FaChartLine />,
      title: "Тестирование",
      description: "Проверка работы на различных устройствах и платформах"
    },
    {
      number: "04",
      icon: <FaUsers />,
      title: "Запуск",
      description: "Публикация в магазинах приложений и мониторинг"
    }
  ];

  const technologies = [
    {
      icon: <FaMobileAlt />,
      title: "React Native",
      description: "Фреймворк для создания кроссплатформенных приложений"
    },
    {
      icon: <FaAppStore />,
      title: "iOS",
      description: "Разработка нативных приложений для Apple"
    },
    {
      icon: <FaAndroid />,
      title: "Android",
      description: "Разработка нативных приложений для Google"
    }
  ];

  const faq = [
    {
      question: "Что такое мобильная разработка?",
      answer: "Мобильная разработка - это процесс создания программного обеспечения для мобильных устройств, включающий разработку нативных и кроссплатформенных приложений."
    },
    {
      question: "Какие преимущества у мобильных приложений?",
      answer: "Мобильные приложения обеспечивают удобный доступ к сервисам, работают офлайн, имеют доступ к функциям устройства и могут отправлять уведомления."
    },
    {
      question: "Как выбрать тип разработки?",
      answer: "Выбор между нативной и кроссплатформенной разработкой зависит от требований проекта, бюджета, времени разработки и необходимой функциональности."
    }
  ];

  return (
    <div className="development-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="development-hero">
        <div className="development-hero-content">
          <FaMobileAlt className="development-hero-icon" />
          <h1>Мобильная разработка</h1>
          <p className="development-hero-description">
            Создаем современные мобильные приложения для iOS и Android, 
            обеспечивая отличный пользовательский опыт
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

export default Mobile; 