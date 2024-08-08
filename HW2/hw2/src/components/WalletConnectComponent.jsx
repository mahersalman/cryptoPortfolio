import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

export function WalletConnectComponent({ handleConnect }) {
  const account = useAccount();

  useEffect(() => {
    if (account.isConnected) {
      handleConnect(account.address, account.chain.name, account.isConnected);
    }
  }, [account.address, account.chain.name]); 


  return (
    <div className="flex gap-5">
      <w3m-button balance='hide' />
      <w3m-network-button />
    </div>
  );
}
