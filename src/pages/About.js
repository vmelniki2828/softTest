import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaUsers, FaHandshake, FaRocket, FaUserTie, FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Инновации',
      description: 'Мы постоянно следим за новыми технологиями и внедряем их в наши проекты'
    },
    {
      icon: <FaUsers />,
      title: 'Команда',
      description: 'Наша команда состоит из опытных профессионалов, готовых решать сложные задачи'
    },
    {
      icon: <FaHandshake />,
      title: 'Надежность',
      description: 'Мы всегда выполняем свои обязательства и гарантируем качество работы'
    },
    {
      icon: <FaRocket />,
      title: 'Развитие',
      description: 'Постоянное развитие и совершенствование - ключ к успеху'
    }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'CEO',
      icon: <FaUserTie />
    },
    {
      name: 'Мария Иванова',
      position: 'CTO',
      icon: <FaCode />
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Lead Designer',
      icon: <FaPaintBrush />
    },
    {
      name: 'Елена Козлова',
      position: 'Project Manager',
      icon: <FaChartLine />
    }
  ];

  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>О нас</h1>
          <p>Мы создаем инновационные решения для вашего бизнеса</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-content">
          <h2>Наша история</h2>
          <p>
            Компания была основана в 2020 году группой энтузиастов, объединенных идеей создания
            качественных IT-решений. За годы работы мы успешно реализовали множество проектов
            для клиентов из различных отраслей.
          </p>
          <p>
            Наша миссия - помогать бизнесу развиваться с помощью современных технологий
            и инновационных решений. Мы стремимся к тому, чтобы каждый наш проект
            приносил реальную пользу клиентам.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Наши ценности</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-icon">{member.icon}</div>
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h2>Готовы обсудить ваш проект?</h2>
          <p>Свяжитесь с нами, и мы поможем воплотить ваши идеи в жизнь</p>
          <a href="/contact" className="cta-button">
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
};

export default About; 