import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaBuilding } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@company.com',
      link: 'mailto:info@company.com'
    },
    {
      icon: <FaPhone />,
      title: 'Телефон',
      content: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Адрес',
      content: 'г. Москва, ул. Примерная, д. 123',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaClock />,
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null
    }
  ];

  return (
    <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Свяжитесь с нами</h1>
          <p>Мы всегда готовы ответить на ваши вопросы и обсудить ваш проект</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-info-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="contact-info-link">
                  {item.content}
                </a>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <h2>Отправьте нам сообщение</h2>
            <p>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <FaPaperPlane /> Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0!2d37.0!3d55.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDAwJzAwLjAiTiAzN8KwMDAnMDAuMCJF!5e0!3m2!1sru!2sru!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact; 