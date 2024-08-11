import React, { useContext } from 'react';
import { WalletConnectComponent } from './WalletConnectComponent';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

function NavBar({ handleConnect }) {
  const { theme} = useContext(ThemeContext);
 

  return (
    <div className={`shadow-md p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>CryptoTrack</div>
      <div className="flex items-center space-x-4">
        <WalletConnectComponent handleConnect={handleConnect}/>
       
        <ThemeToggleButton/>
      </div>
    </div>
  );
}

export default NavBar;
