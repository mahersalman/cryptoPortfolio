import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';

function WalletConnectComponent({ handleConnect }) {
  const { isConnected, address, chain } = useAccount();

  useEffect(() => {
    if (isConnected && address && chain) {
      handleConnect(address, chain.name, isConnected);
    } else if (!isConnected) {
      handleConnect("", "", false);
    }
  }, [isConnected, address, chain]);

  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-lg font-semibold text-gray-900 dark:text-white text-center">
        Connect your wallet to fetch your crypto data
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
        MetaMask, TrustWallet, and other supported wallets are available.
      </div>
      <w3m-button balance="hide" className="w-full sm:w-auto" />
    </div>
  );
}

export default WalletConnectComponent;
