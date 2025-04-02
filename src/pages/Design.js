import React, { useState, useEffect } from 'react';
import { FaPalette, FaPaintBrush, FaDesktop, FaMobile, FaCheck, FaTools, FaRocket } from 'react-icons/fa';
import './Design.css';

const Design = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaPalette />,
      title: "UI/UX дизайн",
      description: "Интуитивно понятный и привлекательный интерфейс для ваших пользователей"
    },
    {
      icon: <FaPaintBrush />,
      title: "Брендинг",
      description: "Разработка уникального визуального стиля и айдентики"
    },
    {
      icon: <FaDesktop />,
      title: "Веб-дизайн",
      description: "Современный и отзывчивый дизайн для веб-платформ"
    },
    {
      icon: <FaMobile />,
      title: "Мобильный дизайн",
      description: "Дизайн мобильных приложений с учетом особенностей платформ"
    },
    {
      icon: <FaPalette />,
      title: "Прототипирование",
      description: "Создание интерактивных прототипов для тестирования"
    },
    {
      icon: <FaPaintBrush />,
      title: "Анимация",
      description: "Разработка анимаций и микровзаимодействий"
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Исследование',
      description: 'Изучаем вашу целевую аудиторию и конкурентов',
      icon: <FaCheck />
    },
    {
      number: '02',
      title: 'Концепция',
      description: 'Разрабатываем концепцию дизайна и стилистику',
      icon: <FaTools />
    },
    {
      number: '03',
      title: 'Дизайн',
      description: 'Создаем финальный дизайн и прототипы',
      icon: <FaPaintBrush />
    },
    {
      number: '04',
      title: 'Тестирование',
      description: 'Проводим тестирование с пользователями',
      icon: <FaCheck />
    },
    {
      number: '05',
      title: 'Внедрение',
      description: 'Передаем готовый дизайн в разработку',
      icon: <FaRocket />
    }
  ];

  const technologies = [
    {
      icon: <FaPaintBrush />,
      title: "Figma",
      description: "Современный инструмент для дизайна интерфейсов"
    },
    {
      icon: <FaDesktop />,
      title: "Adobe XD",
      description: "Профессиональный инструмент для прототипирования"
    },
    {
      icon: <FaMobile />,
      title: "Sketch",
      description: "Популярный инструмент для дизайна мобильных приложений"
    },
    {
      icon: <FaPalette />,
      title: "Adobe Creative Suite",
      description: "Комплексный набор инструментов для дизайна"
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает разработка дизайна?',
      answer: 'Сроки разработки дизайна зависят от сложности проекта. Обычно это занимает от 2 до 4 недель, в зависимости от объема работ и количества итераций.'
    },
    {
      question: 'Какие файлы вы предоставляете?',
      answer: 'Мы предоставляем исходные файлы в Figma, Adobe XD или Sketch, а также экспорт в различных форматах (PNG, SVG, PDF) для разработчиков.'
    },
    {
      question: 'Сколько правок включено в стоимость?',
      answer: 'В базовую стоимость включено до 3 раундов правок. Дополнительные правки могут быть включены в расширенный пакет услуг.'
    },
    {
      question: 'Работаете ли вы с существующим дизайном?',
      answer: 'Да, мы можем доработать или обновить существующий дизайн, сохраняя при этом узнаваемость бренда и улучшая пользовательский опыт.'
    }
  ];

  return (
    <div className={`design-page ${isVisible ? 'visible' : ''}`}>
      <section className="design-hero">
        <div className="design-hero-content">
          <div className="design-hero-icon">
            <FaPalette />
          </div>
          <h1>Дизайн</h1>
          <p className="design-hero-description">
            Создаем уникальный и современный дизайн для ваших цифровых продуктов
          </p>
          <div className="design-hero-buttons">
            <a href="#contact" className="design-hero-button primary">Обсудить проект</a>
            <a href="#features" className="design-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="design-hero-visual">
          <div className="design-palette">
            <div className="design-color color-1"></div>
            <div className="design-color color-2"></div>
            <div className="design-color color-3"></div>
            <div className="design-color color-4"></div>
            <div className="design-color color-5"></div>
          </div>
        </div>
      </section>

      <div className="design-divider">
        <div className="design-divider-line"></div>
        <div className="design-divider-icon">
          <FaPalette />
        </div>
        <div className="design-divider-line"></div>
      </div>

      <section className="design-tabs">
        <div className="design-tab-buttons">
          <button
            className={`design-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`design-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`design-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`design-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="design-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности дизайна</h2>
              <div className="design-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="design-feature-card">
                    <div className="design-feature-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'process' && (
            <>
              <h2>Процесс работы</h2>
              <div className="design-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="design-process-step">
                    <div className="design-process-step-number">{step.number}</div>
                    <div className="design-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="design-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые технологии</h2>
              <div className="design-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="design-technology-card">
                    <div className="design-technology-icon">{tech.icon}</div>
                    <h3>{tech.title}</h3>
                    <p>{tech.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'faq' && (
            <>
              <h2>Частые вопросы</h2>
              <div className="design-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="design-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="design-cta">
        <h2>Готовы создать уникальный дизайн?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="design-cta-button">Начать проект</a>
      </section>
    </div>
  );
};

export default Design; 