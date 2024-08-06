import React, { useState } from 'react';

function Wallet({ isDarkMode, onAddressChange }) {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setWalletAddress(address);
        onAddressChange(address); // Pass the address to the parent component
      } catch (error) {
        console.error('Error connecting...', error);
        alert('Failed to connect. Please try again.');
      }
    } else {
      alert('MetaMask not detected');
    }
  }

  return (
    <button 
      onClick={requestAccount}
      className={`py-2 px-4 rounded ${isDarkMode ? 'bg-yellow-500 text-gray-800' : 'bg-yellow-500 text-white'} hover:bg-yellow-600`}>
      Disconnect
    </button>
  );
}

export default Wallet;
