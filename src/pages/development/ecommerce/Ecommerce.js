import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBox, FaChartLine, FaCreditCard, FaTruck, FaUser, FaSearch, FaCog, FaCode, FaCheckCircle, FaRocket, FaDatabase, FaCloud, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import './Ecommerce.css';

const Ecommerce = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaShoppingCart />,
      title: 'Управление магазином',
      description: 'Полный функционал для управления товарами, заказами и продажами'
    },
    {
      icon: <FaBox />,
      title: 'Каталог товаров',
      description: 'Удобное управление товарами, категориями и характеристиками'
    },
    {
      icon: <FaChartLine />,
      title: 'Аналитика',
      description: 'Подробная статистика продаж и поведенческой аналитики'
    },
    {
      icon: <FaCreditCard />,
      title: 'Платежные системы',
      description: 'Интеграция с популярными платежными системами'
    },
    {
      icon: <FaTruck />,
      title: 'Доставка',
      description: 'Управление доставкой и отслеживание заказов'
    },
    {
      icon: <FaUser />,
      title: 'Клиентская база',
      description: 'Управление клиентами и программа лояльности'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Анализ требований',
      description: 'Изучение бизнес-процессов и потребностей магазина',
      icon: <FaCog />
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка архитектуры и интерфейса магазина',
      icon: <FaCode />
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
      description: 'Обучение персонала и запуск магазина',
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
      icon: <FaCloud />,
      title: 'Облачные технологии',
      description: 'Масштабируемая инфраструктура'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Мобильный доступ',
      description: 'Работа с магазином с любых устройств'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Безопасность',
      description: 'Защита платежей и данных клиентов'
    }
  ];

  const faqs = [
    {
      question: 'Какие преимущества электронной коммерции?',
      answer: 'Электронная коммерция позволяет расширить географию продаж, снизить операционные расходы, автоматизировать процессы и получать подробную аналитику по продажам и поведению клиентов.'
    },
    {
      question: 'Как происходит интеграция с платежными системами?',
      answer: 'Мы обеспечиваем интеграцию с популярными платежными системами, включая банковские карты, электронные кошельки и другие способы оплаты. Все платежи защищены современными протоколами безопасности.'
    },
    {
      question: 'Какие функции доступны в магазине?',
      answer: 'Магазин включает функции управления товарами, заказами, клиентами, а также аналитику и формирование отчетов. Все функции настраиваются под потребности конкретного бизнеса.'
    }
  ];

  return (
    <div className={`ecommerce-page ${isVisible ? 'visible' : ''}`}>
      <section className="ecommerce-hero">
        <div className="ecommerce-hero-content">
          <div className="ecommerce-hero-icon">
            <FaShoppingCart />
          </div>
          <h1>Электронная Коммерция</h1>
          <p className="ecommerce-hero-description">
            Современные решения для онлайн-торговли. Создание интернет-магазинов, автоматизация продаж и рост прибыли.
          </p>
          <div className="ecommerce-hero-buttons">
            <a href="#contact" className="ecommerce-hero-button primary">Обсудить проект</a>
            <a href="#features" className="ecommerce-hero-button secondary">Узнать больше</a>
          </div>
        </div>
        <div className="ecommerce-hero-visual">
          <div className="ecommerce-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-title">Интернет-Магазин</div>
              <div className="dashboard-actions">
                <FaShoppingCart />
                <FaBox />
                <FaChartLine />
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-card">
                <FaShoppingCart />
                <div className="card-title">Заказы</div>
                <div className="card-value">156</div>
              </div>
              <div className="dashboard-card">
                <FaBox />
                <div className="card-title">Товары</div>
                <div className="card-value">1,234</div>
              </div>
              <div className="dashboard-card">
                <FaUser />
                <div className="card-title">Клиенты</div>
                <div className="card-value">3,456</div>
              </div>
              <div className="dashboard-card">
                <FaChartLine />
                <div className="card-title">Продажи</div>
                <div className="card-value">+45%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ecommerce-divider">
        <div className="ecommerce-divider-line"></div>
        <div className="ecommerce-divider-icon">
          <FaShoppingCart />
        </div>
        <div className="ecommerce-divider-line"></div>
      </div>

      <section className="ecommerce-tabs">
        <div className="ecommerce-tab-buttons">
          <button
            className={`ecommerce-tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Возможности
          </button>
          <button
            className={`ecommerce-tab-button ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Процесс
          </button>
          <button
            className={`ecommerce-tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
          >
            Технологии
          </button>
          <button
            className={`ecommerce-tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>

        <div className="ecommerce-tab-content">
          {activeTab === 'features' && (
            <>
              <h2>Возможности Магазина</h2>
              <div className="ecommerce-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="ecommerce-feature-card">
                    <div className="ecommerce-feature-icon">{feature.icon}</div>
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
              <div className="ecommerce-process-timeline">
                {process.map((step, index) => (
                  <div key={index} className="ecommerce-process-step">
                    <div className="ecommerce-process-step-number">{step.number}</div>
                    <div className="ecommerce-process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    <div className="ecommerce-process-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'technologies' && (
            <>
              <h2>Используемые Технологии</h2>
              <div className="ecommerce-technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="ecommerce-technology-card">
                    <div className="ecommerce-technology-icon">{tech.icon}</div>
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
              <div className="ecommerce-faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="ecommerce-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="ecommerce-divider">
        <div className="ecommerce-divider-line"></div>
        <div className="ecommerce-divider-icon">
          <FaShoppingCart />
        </div>
        <div className="ecommerce-divider-line"></div>
      </div>

      <section className="ecommerce-cta">
        <h2>Готовы начать продажи онлайн?</h2>
        <p>Свяжитесь с нами для обсуждения вашего проекта</p>
        <a href="#contact" className="ecommerce-cta-button">Обсудить проект</a>
      </section>
    </div>
  );
};

export default Ecommerce; 