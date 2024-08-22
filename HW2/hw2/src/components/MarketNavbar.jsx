import React, { useState } from 'react';

const TabButtons = ({ setActiveTab }) => {
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
    <div className="w-full flex items-center justify-center space-x-2 sm:space-x-4 mb-4">
      <button
        onClick={() => handleClick('assets')}
        className={`tab-btn flex-shrink-0 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-bold border-b-4 
          ${activeButton === 'assets' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        Assets
      </button>
      <button
        onClick={() => handleClick('transactions')}
        className={`tab-btn flex-shrink-0 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-bold border-b-4 
          ${activeButton === 'transactions' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        Transactions
      </button>
      <button
        onClick={() => handleClick('BestPerforming')}
        className={`tab-btn flex-shrink-0 px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-bold border-b-4 
          ${activeButton === 'BestPerforming' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        Best Performing
      </button>
    </div>
  );
};

export default TabButtons;
