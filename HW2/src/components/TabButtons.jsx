import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme classes

const TabButtons = ({ setActiveTab }) => {
  const { theme } = useContext(ThemeContext); // Get the current theme
  const themeClasses = theme === "dark" ? darkTheme : lightTheme; // Apply the correct theme classes

  const [activeButton, setActiveButton] = useState('');
  const [tabOpen, setTabOpen] = useState({
    assets: false,
    transactions: false,
    BestPerforming: false,
  });

  const handleClick = (tab) => {
    const allTabsClosed = {
      assets: false,
      transactions: false,
      BestPerforming: false,
    };

    if (tabOpen[tab]) {
      setActiveTab(''); 
      setActiveButton(''); 
      setTabOpen(allTabsClosed); 
    } else {
      setActiveTab(tab); 
      setActiveButton(tab); 
      setTabOpen({
        ...allTabsClosed,
        [tab]: true, 
      });
    }
  };

  return (
    <div className={themeClasses.tabContainer}>
      {['assets', 'transactions', 'BestPerforming'].map(tab => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`${themeClasses.tabButton} ${activeButton === tab ? themeClasses.activeTab : themeClasses.inactiveTab}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
