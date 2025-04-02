import React from 'react';
import ServicePage from './ServicePage';
import { FaGlobe, FaCode, FaMobile, FaSearch } from 'react-icons/fa';

const WebSites = () => {
  const serviceData = {
    title: "Веб-сайты",
    description: "Создаем современные, отзывчивые и высокопроизводительные веб-сайты для вашего бизнеса.",
    icon: <FaGlobe />,
    features: [
      {
        title: "Адаптивный дизайн",
        description: "Сайты, которые отлично выглядят на всех устройствах"
      },
      {
        title: "Оптимизация производительности",
        description: "Быстрая загрузка и плавная работа"
      },
      {
        title: "SEO-оптимизация",
        description: "Улучшение видимости в поисковых системах"
      }
    ],
    process: [
      {
        title: "Анализ требований",
        description: "Изучаем ваши потребности и цели"
      },
      {
        title: "Дизайн",
        description: "Создаем уникальный дизайн"
      },
      {
        title: "Разработка",
        description: "Пишем чистый и эффективный код"
      },
      {
        title: "Тестирование",
        description: "Проводим тщательное тестирование"
      }
    ],
    technologies: [
      {
        icon: <FaCode />,
        name: "React",
        description: "Современный JavaScript фреймворк"
      },
      {
        icon: <FaMobile />,
        name: "Responsive Design",
        description: "Адаптивный дизайн"
      },
      {
        icon: <FaSearch />,
        name: "SEO",
        description: "Поисковая оптимизация"
      }
    ],
    faq: [
      {
        question: "Сколько времени занимает разработка сайта?",
        answer: "От 2 до 8 недель, в зависимости от сложности проекта"
      },
      {
        question: "Какие гарантии вы предоставляете?",
        answer: "Гарантия на код и техническую поддержку"
      },
      {
        question: "Как происходит процесс оплаты?",
        answer: "30% аванс, 40% в процессе, 30% после сдачи"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WebSites; 