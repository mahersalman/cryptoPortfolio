

import React, { useState } from 'react';
import { Web3ModalProvider } from './config/Web3ModalProvider';
import { ThemeProvider,ThemeContext } from './components/ThemeContext';
import Banner from './components/Banner';
import NavBar from './components/NavBar'
import WalletData from './components/WalletData';
import WalletAddress from './components/WalletAddress';
import ChooseNetwork from './components/ChooseNetwork';

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

  const handleChangeNetwork = (network) => {
    setWallet({
      ...wallet,
      Network: network});
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
                  <div className="flex flex-col lg:gap-20 sm:flex-row items-center p-4  dark:bg-gray-800 rounded-lg shadow-2xl dark:text-gray-50 max-w-fit mx-auto ">
                    <WalletAddress address={wallet.Address} handleDisconnect={handleStatus} />
                    <ChooseNetwork handleChangeNetwork={handleChangeNetwork}/>
                  </div>
                 {<WalletData wallet={wallet} />} 
                </div>
              ) : (
                <div>
                    <Banner handleConnect={handleStatus} />  
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
