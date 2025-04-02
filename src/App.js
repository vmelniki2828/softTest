import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Development pages
import PWA from './pages/development/pwa/PWA';
import API from './pages/development/api/API';
import BigData from './pages/development/big-data/BigData';
import Automation from './pages/development/automation/Automation';
import Mobile from './pages/development/mobile/Mobile';
import AI from './pages/development/ai/AI';

// Other service pages
import Design from './pages/Design';
import Promotion from './pages/Promotion';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Development routes */}
          <Route path="/services/pwa" element={<PWA />} />
          <Route path="/services/api" element={<API />} />
          <Route path="/services/big-data" element={<BigData />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/mobile" element={<Mobile />} />
          <Route path="/services/ai" element={<AI />} />

          {/* Other service routes */}
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/promotion" element={<Promotion />} />
          <Route path="/services/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
