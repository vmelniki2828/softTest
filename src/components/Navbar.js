import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCode, FaPalette, FaChartLine, FaHeadset } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const developmentServices = [
    { name: "PWA", path: "/services/pwa", icon: <FaCode /> },
    { name: "API разработка", path: "/services/api", icon: <FaCode /> },
    { name: "Big Data и аналитика", path: "/services/big-data", icon: <FaCode /> },
    { name: "Автоматизация и оптимизация", path: "/services/automation", icon: <FaCode /> },
    { name: "Мобильные приложения", path: "/services/mobile", icon: <FaCode /> },
    { name: "ИИ", path: "/services/ai", icon: <FaCode /> }
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
            >
              <FaCode className="nav-icon" />
              Разработка
            </button>
            <div className="dropdown-menu">
              {developmentServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path} 
                  className="dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="dropdown-icon">{service.icon}</span>
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
            <FaPalette className="nav-icon" />
            Дизайн
          </Link>
          <Link 
            to="/services/promotion" 
            className={`navbar-link ${isActive('/services/promotion') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaChartLine className="nav-icon" />
            Продвижение
          </Link>
          <Link 
            to="/services/support" 
            className={`navbar-link ${isActive('/services/support') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHeadset className="nav-icon" />
            Сопровождение
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 