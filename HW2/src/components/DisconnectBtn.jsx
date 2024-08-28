import React from 'react';
import { useDisconnect } from 'wagmi';

function DisconnectBtn({ handleDisconnect }) {
    const { disconnectAsync } = useDisconnect();

    async function disconnectWallet() {
        await disconnectAsync(); // Wait for the disconnection to complete
        handleDisconnect("", "", false); // Then update the state
    }
    
      return (
        <button
          onClick={disconnectWallet}
          className="bg-red-500 dark:bg-blue-600 text-black dark:text-white font-bold py-2 px-6 rounded-2xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Disconnect
        </button>
      );
}

export default DisconnectBtn;
