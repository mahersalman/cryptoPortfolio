import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';
//import { connect } from '@wagmi/core'


function WalletConnectComponent({ handleConnect }) {
  const { isConnected, address, chain } = useAccount();

  useEffect(() => {
    if (isConnected && address && chain) {
      handleConnect(address, chain.name, isConnected);
    }
    if (!isConnected){
      handleConnect("", "",false);
    }
  }, [isConnected, address, chain]); 

  return (
    <div className="flex flex-col justify-center items-center bg-red-200 rounded-full w-auto h-auto ">
      <div className="text-xl font-bold p-4">Connect Your Wallet</div>
      <w3m-button balance="hide"/>
    </div>
  );
}


export default WalletConnectComponent;