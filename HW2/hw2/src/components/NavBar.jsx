// src/components/NavBar.jsx
import React from 'react';

const NavBar = ({ onConnect }) => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">CryptoTrack</div>
      <div className="flex items-center space-x-4">
        <a href="#dashboard" className="text-gray-700 hover:text-black">Dashboard</a>
        <a href="#markets" className="text-gray-700 hover:text-black">Markets</a>
        <button 
          onClick={onConnect} 
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
          Connect Wallet
        </button>
        <button className="bg-transparent border border-yellow-500 text-yellow-500 py-2 px-4 rounded hover:bg-yellow-500 hover:text-white">
          {/* Add your icon here, for example a sun icon for light/dark mode toggle */}
          <span role="img" aria-label="sun">☀️</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
