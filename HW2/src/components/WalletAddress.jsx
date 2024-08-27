import React, { useState } from 'react';
import DisconnectBtn from './DisconnectBtn';
function WalletAddress({ address ,handleDisconnect}) {
    const [copied, setCopied] = useState(false);

    function copyAddress() {
        navigator.clipboard.writeText(address).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center items-center space-x-4 mb-4">
                 <DisconnectBtn handleDisconnect={handleDisconnect} />
                <h1 className="text-xl font-semibold text-gray-700">Wallet Address:</h1>
                <p className="text-lg font-medium text-gray-900 bg-gray-100 py-2 px-4 rounded-md border border-gray-200">{address}</p>
                <button
                onClick={copyAddress}
                className="ml-4 flex items-center space-x-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                title="Copy Address"
            >
                {copied ? (
                    <span className="text-green-500">✔</span>
                ) : (
                    <span>📋</span>
                )}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            </div>
        </div>
    );
}

export default WalletAddress;
