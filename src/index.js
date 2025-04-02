import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Добавляем шрифты
const links = [
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
    rel: 'stylesheet'
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
    rel: 'stylesheet'
  }
];

links.forEach(link => {
  const linkElement = document.createElement('link');
  linkElement.href = link.href;
  linkElement.rel = link.rel;
  document.head.appendChild(linkElement);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
