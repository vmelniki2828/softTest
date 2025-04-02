import React from 'react';
import ServicePage from './ServicePage';
import { FaMobile, FaAndroid, FaApple, FaReact } from 'react-icons/fa';

const MobileDevelopment = () => {
  const serviceData = {
    title: "Мобильная разработка",
    description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android.",
    icon: <FaMobile />,
    features: [
      {
        title: "Нативная разработка",
        description: "Создаем приложения, оптимизированные под конкретную платформу с использованием Swift и Kotlin."
      },
      {
        title: "Кроссплатформенная разработка",
        description: "Разрабатываем приложения, работающие на обеих платформах с помощью React Native."
      },
      {
        title: "UI/UX дизайн",
        description: "Создаем интуитивно понятный и привлекательный интерфейс, соответствующий гайдлайнам платформ."
      }
    ],
    process: [
      {
        title: "Анализ требований",
        description: "Изучаем ваши потребности и определяем оптимальный стек технологий."
      },
      {
        title: "Проектирование",
        description: "Создаем архитектуру приложения и разрабатываем дизайн интерфейса."
      },
      {
        title: "Разработка",
        description: "Пишем чистый и эффективный код, следуя лучшим практикам мобильной разработки."
      },
      {
        title: "Тестирование",
        description: "Проводим тестирование на различных устройствах и исправляем ошибки."
      }
    ],
    technologies: [
      {
        icon: <FaAndroid />,
        name: "Android",
        description: "Разработка нативных приложений для Android с использованием Kotlin."
      },
      {
        icon: <FaApple />,
        name: "iOS",
        description: "Создание приложений для iOS с использованием Swift и SwiftUI."
      },
      {
        icon: <FaReact />,
        name: "React Native",
        description: "Кроссплатформенная разработка с использованием React Native."
      }
    ],
    faq: [
      {
        question: "Сколько времени занимает разработка мобильного приложения?",
        answer: "Сроки зависят от сложности проекта. Обычно от 3 до 8 месяцев."
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

export default MobileDevelopment; 