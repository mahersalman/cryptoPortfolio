import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { AppKitProvider } from './AppKitProvider';
import WalletData from './components/WalletData';
import Banner from "./components/Banner";


function App() {
  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleConnect = (address, network, isConnected) => {
    setWallet({
      Address: address,
      Network: network,
      isConnected: isConnected,
    });
  };

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
    <div>
        <AppKitProvider>    
          <NavBar handleConnect={handleConnect} />
           
          {wallet.isConnected ? (
              <div>
                <WalletData wallet={wallet} />
              </div>
              ) : (
                <Banner />
              )
          }
        </AppKitProvider>
    </div>
    );
}

export default App;