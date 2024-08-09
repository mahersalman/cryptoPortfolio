import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { AppKitProvider } from './AppKitProvider';
import WalletData from './components/WalletData';

function App() {

  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false
  });

  const handleConnect = (address, network, isConnected) => {
    setWallet({
        Address: address,
        Network: network,
        isConnected: isConnected
    });
};


  return (
    <div>
        <AppKitProvider>    
          <NavBar handleConnect={handleConnect} />
           
          {wallet.isConnected ? (
              <div>
                <WalletData wallet={wallet} />
              </div>
              ) : (
                <div className="text-center text-7xl">               
                   <p>Please Connect ...</p>
                </div>
              )
          }
        </AppKitProvider>
    </div>
    );
  };

export default App;
