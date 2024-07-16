import React, { useState, useEffect } from 'react';
import GetBalance from './components/GetBalance';
import NavBar from './components/NavBar';
import PortfolioDistribution from './components/PortfolioDistribution';
import MyWalletAddress from './components/MyWalletAddress';
import { ethers } from 'ethers';
function App() {
  // Wallet Address
  const [walletAddress, setWalletAddress] = useState("0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
  const handleAddressChange = (address) => {
    setWalletAddress(address);
  };

  const address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"; // A known Ethereum address with a balance

  const provider = new ethers.providers.Web3Provider(window.ethereum);
 
  return (
    <div>
        <NavBar onAddressChange={handleAddressChange} />
        <MyWalletAddress walletAddress={walletAddress} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <GetBalance address={address} provider={provider} />
        <PortfolioDistribution/>
        </div>
      </div>
  );
}

export default App;
