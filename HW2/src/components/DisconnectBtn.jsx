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
          className="w-full bg-[#e03636] dark:bg-blue-600 text-black dark:text-white font-bold p-4 text-xl rounded-2xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 sm:mx-0"
          >
          Disconnect
        </button>
      );
}

export default DisconnectBtn;
