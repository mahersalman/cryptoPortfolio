import React, { useEffect } from 'react';
import { Web3ModalProvider } from './config/Web3ModalProvider';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import WalletData from './components/WalletData';
import WalletAddress from './components/WalletAddress';
import ChooseNetwork from './components/ChooseNetwork';
import DisconnectBtn from './components/DisconnectBtn';

function App() {
  const [wallet, setWallet] = React.useState({
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
      Network: network
    });
  };

  // Set dark mode based on localStorage
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
      <Web3ModalProvider>
        <NavBar />
        {wallet.isConnected ? (
          <div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 items-center p-4 rounded-lg shadow-2xl max-w-fit mx-auto">
              <DisconnectBtn handleDisconnect={handleStatus} />
              <WalletAddress address={wallet.Address} handleDisconnect={handleStatus} />
              <ChooseNetwork handleChangeNetwork={handleChangeNetwork}/>
            </div>
            <WalletData wallet={wallet} /> 
          </div>
        ) : (
          <div>
            <Banner handleConnect={handleStatus} />  
          </div>
        )}
      </Web3ModalProvider>
    </div>
  );
}

export default App;
