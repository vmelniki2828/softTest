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
            to="/services/design" 
            className={`navbar-link ${isActive('/services/design') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Дизайн
          </Link>
          <Link 
            to="/services/promotion" 
            className={`navbar-link ${isActive('/services/promotion') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Продвижение
          </Link>
          <Link 
            to="/services/support" 
            className={`navbar-link ${isActive('/services/support') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Сопровождение
          </Link>
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