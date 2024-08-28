import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import { TabButtonsStyle } from '../styles/TabButtonsStyle'; // Import unified theme classes

const TabButtons = ({ setActiveTab }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //const { theme } = useContext(ThemeContext); // Get the current theme

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
    <div className={TabButtonsStyle.tabContainer}>
      {['assets', 'transactions', 'BestPerforming'].map(tab => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`${TabButtonsStyle.tabButton} ${activeButton === tab ? TabButtonsStyle.activeTab : TabButtonsStyle.inactiveTab}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
