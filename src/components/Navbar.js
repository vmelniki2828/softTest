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
    { name: "PWA", path: "/services/pwa" },
    { name: "API разработка", path: "/services/api" },
    { name: "Big Data и аналитика", path: "/services/big-data" },
    { name: "Автоматизация и оптимизация", path: "/services/automation" },
    { name: "Электронные журналы и системы учёта", path: "/services/accounting" },
    { name: "Платформы для онлайн-образования", path: "/services/education" },
    { name: "Системы документооборота", path: "/services/document-flow" },
    { name: "ERP и CRM системы", path: "/services/erp-crm" },
    { name: "Корпоративные сайты", path: "/services/corporate" },
    { name: "Интернет-магазины", path: "/services/ecommerce" },
    { name: "Landing page", path: "/services/landing" },
    { name: "Мобильные приложения", path: "/services/mobile" },
    { name: "ИИ", path: "/services/ai" }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

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
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            to="/design" 
            className={`navbar-link ${isActive('/design') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Дизайн
          </Link>
          <Link 
            to="/promotion" 
            className={`navbar-link ${isActive('/promotion') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Продвижение
          </Link>
          <Link 
            to="/ai" 
            className={`navbar-link ${isActive('/ai') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI-решения
          </Link>
          <Link 
            to="/support" 
            className={`navbar-link ${isActive('/support') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Сопровождение
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 