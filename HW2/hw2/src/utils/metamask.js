// src/utils/metamask.js
import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      return signer;
    } catch (error) {
      console.error('User denied account access', error);
      return null;
    }
  } else {
    console.error('No crypto wallet found. Please install it.');
    return null;
  }
};

export const getAccountInfo = async (signer) => {
  try {
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    return {
      address,
      balance: ethers.utils.formatEther(balance),
    };
  } catch (error) {
    console.error('Failed to get account info', error);
    return null;
  }
};
