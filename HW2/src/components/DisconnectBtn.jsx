import react , {useState} from 'react';

function DisconnectBtn({handleDisconnect}) {
    function disconnect() {
        handleDisconnect('','','false');
    }

    return (
        <button
            onClick={disconnect}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
            Disconnect
        </button>
    );

}