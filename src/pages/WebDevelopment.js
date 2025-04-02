import React from 'react';
import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { FaCode, FaMobile, FaServer, FaDatabase, FaReact, FaNodeJs, FaDatabase as FaMongoDb } from 'react-icons/fa';

const WebDevelopment = () => {
  const serviceData = {
    title: "Веб-разработка",
    description: "Создаем современные веб-приложения с использованием передовых технологий и лучших практик разработки.",
    icon: <FaCode />,
    features: [
      {
        title: "Адаптивный дизайн",
        description: "Ваш сайт будет отлично выглядеть на всех устройствах - от мобильных телефонов до больших десктопных экранов."
      },
      {
        title: "Оптимизация производительности",
        description: "Мы обеспечиваем быструю загрузку и плавную работу вашего веб-приложения."
      },
      {
        title: "SEO-оптимизация",
        description: "Ваш сайт будет легко находить в поисковых системах благодаря правильной структуре и оптимизации."
      }
    ],
    process: [
      {
        title: "Анализ требований",
        description: "Изучаем ваши потребности и определяем оптимальное решение."
      },
      {
        title: "Проектирование",
        description: "Создаем архитектуру приложения и разрабатываем дизайн."
      },
      {
        title: "Разработка",
        description: "Пишем чистый и эффективный код, следуя лучшим практикам."
      },
      {
        title: "Тестирование",
        description: "Тщательно тестируем все функции и исправляем ошибки."
      }
    ],
    technologies: [
      {
        icon: <FaReact />,
        name: "React",
        description: "Современный JavaScript-фреймворк для создания интерактивных пользовательских интерфейсов."
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        description: "Серверная платформа для создания масштабируемых сетевых приложений."
      },
      {
        icon: <FaMongoDb />,
        name: "MongoDB",
        description: "NoSQL база данных для хранения и управления данными."
      }
    ],
    faq: [
      {
        question: "Сколько времени занимает разработка?",
        answer: "Сроки разработки зависят от сложности проекта. Обычно от 2 до 6 месяцев."
      },
      {
        question: "Какие гарантии вы предоставляете?",
        answer: "Мы предоставляем гарантию на код и техническую поддержку после запуска."
      },
      {
        question: "Как происходит процесс оплаты?",
        answer: "Оплата происходит поэтапно: 30% аванс, 40% в процессе разработки, 30% после сдачи проекта."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WebDevelopment; 