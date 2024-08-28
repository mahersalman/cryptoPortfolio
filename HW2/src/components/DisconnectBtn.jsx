import React from 'react';

function DisconnectBtn({ handleDisconnect }) {
    function disconnect() {
        handleDisconnect('', '', false);
    }

    return (
        <button
            onClick={disconnect}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-2xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-red-600 dark:text-gray-200 dark:hover:bg-red-500 dark:focus:ring-red-300"
        >
            Disconnect
        </button>
    );
}

export default DisconnectBtn;
