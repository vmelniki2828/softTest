import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDevelopmentOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDevelopmentMenu = () => {
    setIsDevelopmentOpen(!isDevelopmentOpen);
  };

  const developmentServices = [
    { title: 'PWA', path: '/services/pwa' },
    { title: 'API', path: '/services/api' },
    { title: 'Big Data', path: '/services/big-data' },
    { title: 'Автоматизация', path: '/services/automation' },
    { title: 'Учетные системы', path: '/services/accounting' },
    { title: 'Электронные журналы', path: '/services/education' },
    { title: 'Документооборот', path: '/services/document-flow' },
    { title: 'ERP/CRM', path: '/services/erp-crm' },
    { title: 'Корпоративные решения', path: '/services/corporate' },
    { title: 'E-commerce', path: '/services/ecommerce' },
    { title: 'Landing Page', path: '/services/landing' },
    { title: 'Искусственный интеллект', path: '/services/ai' },
    { title: 'Мобильная разработка', path: '/services/mobile' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          softqod
        </Link>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-item dropdown">
            <button 
              className="navbar-link dropdown-toggle"
              onClick={toggleDevelopmentMenu}
            >
              Разработка
            </button>
            <div className={`dropdown-menu ${isDevelopmentOpen ? 'show' : ''}`}>
              {developmentServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path} 
                  className="dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="navbar-contact">
          <a href="tel:+380501234567" className="navbar-phone">
            +38 (050) 123-45-67
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 