import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>softqod</h3>
            <p>Создаем современные цифровые решения для вашего бизнеса</p>
          </div>
          
          <div className="footer-section">
            <h4>Услуги</h4>
            <ul>
              <li><Link to="/services/web-development">Веб-разработка</Link></li>
              <li><Link to="/services/mobile-development">Мобильная разработка</Link></li>
              <li><Link to="/services/ai">Искусственный интеллект</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li>Email: info@softqod.com</li>
              <li>Телефон: +380501234567</li>
              <li>Адрес: г. Киев, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 softqod. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 