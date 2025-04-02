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
// import Accounting from './pages/development/accounting/Accounting';
// import Education from './pages/development/education/Education';
// import DocumentFlow from './pages/development/document-flow/DocumentFlow';
// import ERPCRM from './pages/development/erp-crm/ERPCRM';
// import Corporate from './pages/development/corporate/Corporate';
// import Ecommerce from './pages/development/ecommerce/Ecommerce';
// import Landing from './pages/development/landing/Landing';
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
          {/* <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/education" element={<Education />} />
          <Route path="/services/document-flow" element={<DocumentFlow />} />
          <Route path="/services/erp-crm" element={<ERPCRM />} />
          <Route path="/services/corporate" element={<Corporate />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/landing" element={<Landing />} /> */}

          <Route path="/services/ai" element={<AI />} />
          <Route path="/services/mobile" element={<Mobile />} />

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
