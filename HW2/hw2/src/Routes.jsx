import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import WalletPage from './WalletPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WalletPage" element={<WalletPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
