import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { walletConnectStyles } from '../styles/WalletConnectStyle';

/**
 * WalletConnectComponent displays a UI for connecting a wallet and handles connection state.
 * @param {Object} props - Component props.
 * @param {Function} props.handleConnect - Function to handle the connection state and details.
 * @returns {JSX.Element} The rendered WalletConnectComponent.
 */
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
    <div className={walletConnectStyles.container}>
      <div className={walletConnectStyles.title}>
        Connect your wallet to fetch your crypto data
      </div>
      <div className={walletConnectStyles.subtitle}>
        MetaMask, TrustWallet, and other supported wallets are available.
      </div>
      <w3m-button balance="hide" className={walletConnectStyles.button} />
    </div>
  );
}

export default WalletConnectComponent;
