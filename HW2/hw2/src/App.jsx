import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { AppKitProvider } from './AppKitProvider';
import WalletData from './components/WalletData';
import Banner from "./components/Banner";
import { ThemeProvider, ThemeContext } from './components/ThemeContext';

function App() {
  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false,
  });

  const handleConnect = (address, network, isConnected) => {
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
            <AppKitProvider>
              <NavBar handleConnect={handleConnect} />
              {wallet.isConnected ? (
                <div>
                  <WalletData wallet={wallet} />
                </div>
              ) : (
                <Banner />
              )}
            </AppKitProvider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
