import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebSites from './pages/WebSites';
import Design from './pages/Design';
import Promotion from './pages/Promotion';
import AI from './pages/AI';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<WebSites />} />
          <Route path="/design" element={<Design />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;