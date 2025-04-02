import React from 'react';
import ServicePage from './ServicePage';
import { FaPalette, FaPaintBrush, FaDesktop, FaMobile } from 'react-icons/fa';

const Design = () => {
  const serviceData = {
    title: "Дизайн",
    description: "Создаем уникальный и современный дизайн для ваших цифровых продуктов.",
    icon: <FaPalette />,
    features: [
      {
        title: "UI/UX дизайн",
        description: "Интуитивно понятный и привлекательный интерфейс"
      },
      {
        title: "Брендинг",
        description: "Разработка уникального визуального стиля"
      },
      {
        title: "Прототипирование",
        description: "Создание интерактивных прототипов"
      }
    ],
    process: [
      {
        title: "Исследование",
        description: "Изучаем вашу целевую аудиторию"
      },
      {
        title: "Концепция",
        description: "Разрабатываем концепцию дизайна"
      },
      {
        title: "Дизайн",
        description: "Создаем финальный дизайн"
      },
      {
        title: "Тестирование",
        description: "Проводим тестирование с пользователями"
      }
    ],
    technologies: [
      {
        icon: <FaPaintBrush />,
        name: "Figma",
        description: "Современный инструмент для дизайна"
      },
      {
        icon: <FaDesktop />,
        name: "Web Design",
        description: "Дизайн для веб-платформ"
      },
      {
        icon: <FaMobile />,
        name: "Mobile Design",
        description: "Дизайн мобильных приложений"
      }
    ],
    faq: [
      {
        question: "Сколько времени занимает разработка дизайна?",
        answer: "От 2 до 4 недель, в зависимости от объема работ"
      },
      {
        question: "Какие файлы вы предоставляете?",
        answer: "Figma файлы, экспорт в различных форматах"
      },
      {
        question: "Сколько правок включено в стоимость?",
        answer: "До 3 раундов правок включены в базовую стоимость"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default Design; 