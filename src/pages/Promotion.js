import React from 'react';
import ServicePage from './ServicePage';
import { FaChartLine, FaSearch, FaShareAlt, FaUsers } from 'react-icons/fa';

const Promotion = () => {
  const serviceData = {
    title: "Продвижение",
    description: "Комплексное продвижение вашего бизнеса в цифровой среде.",
    icon: <FaChartLine />,
    features: [
      {
        title: "SEO-оптимизация",
        description: "Улучшение позиций в поисковых системах"
      },
      {
        title: "SMM",
        description: "Продвижение в социальных сетях"
      },
      {
        title: "Контент-маркетинг",
        description: "Создание и распространение полезного контента"
      }
    ],
    process: [
      {
        title: "Анализ",
        description: "Изучаем текущее состояние и конкурентов"
      },
      {
        title: "Стратегия",
        description: "Разрабатываем план продвижения"
      },
      {
        title: "Реализация",
        description: "Внедряем стратегию"
      },
      {
        title: "Мониторинг",
        description: "Отслеживаем результаты"
      }
    ],
    technologies: [
      {
        icon: <FaSearch />,
        name: "SEO",
        description: "Поисковая оптимизация"
      },
      {
        icon: <FaShareAlt />,
        name: "SMM",
        description: "Социальные сети"
      },
      {
        icon: <FaUsers />,
        name: "Контент",
        description: "Контент-маркетинг"
      }
    ],
    faq: [
      {
        question: "Сколько времени нужно для первых результатов?",
        answer: "Первые результаты обычно видны через 2-3 месяца"
      },
      {
        question: "Какие метрики вы отслеживаете?",
        answer: "Трафик, конверсии, позиции в поиске, вовлеченность"
      },
      {
        question: "Как часто вы предоставляете отчеты?",
        answer: "Ежемесячные отчеты о результатах продвижения"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default Promotion; 