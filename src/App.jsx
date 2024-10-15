import React, { useEffect } from 'react';
import { Web3ModalProvider } from './config/Web3ModalProvider';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import WalletData from './components/WalletData';
import WalletAddress from './components/WalletAddress';
import ChooseNetwork from './components/ChooseNetwork';
import DisconnectBtn from './components/DisconnectBtn';
import { containerStyles, contentStyles } from './styles/AppStyles';

/**
 * App component serves as the main container for the application.
 * It displays the navigation bar, wallet data, and handles user authentication and network changes.
 * @returns {JSX.Element} The rendered App component.
 */
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

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <div className={containerStyles}>
      <Web3ModalProvider>
        <NavBar />
        {wallet.isConnected ? (
          <div>
            <div className={contentStyles}>
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
