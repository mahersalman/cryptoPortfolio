import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MyWalletAddress from './components/MyWalletAddress';
import TabButtons from './components/MarketNavbar';
import BestPerformingTable from './components/BestPerformingTable';
import { ThemeProvider } from './components/ThemeContext';
import AssetsTable from './components/assestsTable';
import TransactionTable from './components/TransactionTable';
import TotalBalanceChart from './components/TotalBalanceChart';

function WalletPage() {
    const [walletAddress, setWalletAddress] = useState("0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5");
    const [activeTab, setActiveTab] = useState(null);
    const [addressToken, setAddressToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const ethploroerAPIKey = 'EK-nY7ou-saWnY7s-ooUEm';
  
    const handleAddressChange = (address) => {
      setWalletAddress(address);
    };
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.ethplorer.io/getAddressInfo/${walletAddress}?apiKey=${ethploroerAPIKey}`);
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
  
      if (walletAddress) {
        fetchData();
      }
    }, [walletAddress]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
        <div>
            <NavBar onAddressChange={handleAddressChange} />
            <MyWalletAddress walletAddress={walletAddress} />
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <TotalBalanceChart data={addressToken}/>
            </div>
            <ThemeProvider>
              <div>
                <TabButtons setActiveTab={setActiveTab} />
                {activeTab === 'assets' && <AssetsTable tokens = {addressToken}/>}
                {activeTab === 'transactions' && <TransactionTable address={walletAddress}/>}
                {activeTab === 'BestPerforming' && <BestPerformingTable />}
              </div>
            </ThemeProvider> 
           </div>
        );
}

export default WalletPage;
