

import React, { useState } from 'react';
import { Web3ModalProvider } from './config/Web3ModalProvider';
import { ThemeProvider,ThemeContext } from './components/ThemeContext';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import WalletData from './components/WalletData';
import WalletAddress from './components/WalletAddress';

function App() {
  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false,
  });

  const handleStatus = (address, network, isConnected) => {
    setWallet({
      Address: address,
      Network: network,
      isConnected: isConnected,
    });
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={`min-h-screen ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <Web3ModalProvider>
              <NavBar/>
              {wallet.isConnected ? (
                <div>
                  <WalletAddress address={wallet.Address} handleDisconnect={handleStatus} />
                 {<WalletData wallet={wallet} />} 
                </div>
              ) : (
                <div>
                    <Banner handleConnect={handleStatus}/>  
                </div>

              )}
            </Web3ModalProvider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
