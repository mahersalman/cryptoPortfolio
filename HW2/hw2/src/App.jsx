import React, { useState, useEffect } from 'react';
import GetBalance from './components/GetBalance';
import NavBar from './components/NavBar';
import PortfolioDistribution from './components/PortfolioDistribution';
import MyWalletAddress from './components/MyWalletAddress';
import { ethers } from 'ethers';
import GetAssets from './components/GetAssets';
import FetchTransactions from './components/FetchTransactions';

function App() {
  // Wallet Address
  const [walletAddress, setWalletAddress] = useState("");
  const handleAddressChange = (address) => {
    setWalletAddress(address);
  };

  const address = "0x1760cf6ED927240260bdecA4BEc8b6924a228858"; // A known Ethereum address with a balance

  const provider = new ethers.providers.Web3Provider(window.ethereum);
 
  return (
    <div>
        <NavBar onAddressChange={handleAddressChange} />
        <MyWalletAddress walletAddress={walletAddress} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <GetBalance address={address} provider={provider} />
        <PortfolioDistribution/>
        </div>
        <FetchTransactions address={address}/>
      </div>
  );
}

export default App;
