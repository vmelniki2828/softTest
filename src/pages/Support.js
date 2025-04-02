import React from 'react';
import ServicePage from './ServicePage';
import { FaHeadset, FaTools, FaClock, FaShieldAlt } from 'react-icons/fa';

const Support = () => {
  const serviceData = {
    title: "Поддержка",
    description: "Профессиональная техническая поддержка и обслуживание ваших цифровых продуктов.",
    icon: <FaHeadset />,
    features: [
      {
        title: "Техническая поддержка",
        description: "Решение технических проблем 24/7"
      },
      {
        title: "Обновление и обслуживание",
        description: "Регулярные обновления и улучшения"
      },
      {
        title: "Мониторинг",
        description: "Постоянный контроль работы систем"
      }
    ],
    process: [
      {
        title: "Обращение",
        description: "Получение запроса на поддержку"
      },
      {
        title: "Анализ",
        description: "Изучение проблемы"
      },
      {
        title: "Решение",
        description: "Устранение проблемы"
      },
      {
        title: "Проверка",
        description: "Тестирование решения"
      }
    ],
    technologies: [
      {
        icon: <FaTools />,
        name: "Техподдержка",
        description: "Решение технических проблем"
      },
      {
        icon: <FaClock />,
        name: "Мониторинг",
        description: "Контроль работы систем"
      },
      {
        icon: <FaShieldAlt />,
        name: "Безопасность",
        description: "Защита от угроз"
      }
    ],
    faq: [
      {
        question: "Какое время реакции на обращения?",
        answer: "До 2 часов в рабочее время"
      },
      {
        question: "Какие каналы поддержки доступны?",
        answer: "Email, телефон, тикет-система"
      },
      {
        question: "Как часто проводятся обновления?",
        answer: "Ежемесячные плановые обновления"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default Support; 