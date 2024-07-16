// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import Wallet from './Wallet'; // Ensure the correct import path

function NavBar({ onAddressChange }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`shadow-md p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>CryptoTrack</div>
      <div className="flex items-center space-x-4">
        <a href="#dashboard" className={`hover:text-black ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700'}`}>Dashboard</a>
        <a href="#markets" className={`hover:text-black ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700'}`}>Markets</a>
        <Wallet isDarkMode={isDarkMode} onAddressChange={onAddressChange} />
        <button 
          onClick={toggleDarkMode} 
          className={`py-2 px-4 rounded border ${isDarkMode ? 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-800' : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white'}`}>
          <span role="img" aria-label="sun">
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
