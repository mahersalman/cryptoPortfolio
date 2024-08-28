import React from 'react';
import { useDisconnect } from 'wagmi';

function DisconnectBtn({ handleDisconnect }) {
    const { disconnect } = useDisconnect();

    function disconnectWallet() {
        disconnect();
        handleDisconnect("", "", false); 
      }
    
      return (
        <button
          onClick={disconnectWallet}
          className="bg-red-500 text-black dark:text-white font-bold py-2 px-6 rounded-2xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Disconnect
        </button>
      );
}

export default DisconnectBtn;
