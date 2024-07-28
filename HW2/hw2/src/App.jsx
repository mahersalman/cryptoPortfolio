import React, { useState, useEffect } from 'react';
import GetBalance from './components/GetBalance';
import NavBar from './components/NavBar';
import PortfolioDistribution from './components/PortfolioDistribution';
import MyWalletAddress from './components/MyWalletAddress';
import { ethers } from 'ethers';
import TabButtons from './components/MarketNavbar';
import BestPerformingTable from './components/BestPerformingTable';
import { ThemeProvider } from './components/ThemeContext';
import AssetsTable from './components/assestsTable';
import TransactionTable from './components/TransactionTable';

function App() {
  const [walletAddress, setWalletAddress] = useState("0x974caa59e49682cda0ad2bbe82983419a2ecc400");
  const [activeTab, setActiveTab] = useState(null);
  const [addressToken, setAddressToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ethploroerAPIKey = 'EK-nY7ou-saWnY7s-ooUEm';
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const handleAddressChange = (address) => {
    setWalletAddress(address);
  };


  const address = '0x974caa59e49682cda0ad2bbe82983419a2ecc400'; // Replace with the actual Ethereum address

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${ethploroerAPIKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setAddressToken(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchData();
    }
  }, [address]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <div>
          <div className='w-full flex items-center justify-center mt-10 mb-10 text-5xl'>Prototype</div>
          <NavBar onAddressChange={handleAddressChange} />
          <MyWalletAddress walletAddress={walletAddress} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <GetBalance address={walletAddress} provider={provider} />
            <PortfolioDistribution/>
          </div>
          <ThemeProvider>
            <div>
              <TabButtons setActiveTab={setActiveTab} />
              {activeTab === 'assets' && <AssetsTable tokens = {addressToken}/>}
              {activeTab === 'transactions' && <TransactionTable/>}
              {activeTab === 'BestPerforming' && <BestPerformingTable />}
            </div>
          </ThemeProvider> 
         </div>


    );
  };

export default App;


 