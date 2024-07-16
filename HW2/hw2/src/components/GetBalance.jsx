import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const GetBalance = ({ address,provider }) => {

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          const balance = await provider.getBalance(address);
          setBalance(ethers.utils.formatEther(balance));
        } else {
          console.error("No Ethereum provider found. Install a web3 wallet like MetaMask.");
        }
      } catch (error) {
        console.error("Error fetching balance: ", error);
      }
    };

    fetchBalance();
  }, [address]);


  return (
      <div className="glassmorphism p-6 border rounded-3xl border-slate-400 dark:border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Total Balance</h2>
          {balance !== null ? (
            <p className="text-xl">ETH Balance: {balance} ETH</p>
          ) : (
            <p className="text-xl">Loading balance...</p>
          )}
          <p className="text-4xl font-bold gradient-text">
          </p>
          <p className="dark:text-green-400 mt-2">24h Pnl : +$945.78 (1.2%)</p>
          
          <div className="w-full h-32 mt-4">
              ***Chart***
          </div>
      </div>

  );
};

export default GetBalance;
