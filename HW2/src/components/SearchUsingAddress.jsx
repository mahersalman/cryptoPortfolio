import React, { useState } from 'react';

function SearchUsingAddress({ handleConnect }) {
    const [address, setAddress] = useState('0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C');
    const [network, setNetwork] = useState('Ethereum');

    function setDemoAddress() {
        handleConnect(address, network, true);
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-4 p-4 dark:bg-gray-800 dark:text-gray-50">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg">
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                    className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full sm:w-28 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                    <option value="BNB Smart Chain">BNB</option>
                    <option value="Ethereum">ETH</option>
                </select>
            </div>
            <button
                onClick={setDemoAddress}
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
            >
                Search
            </button>
        </div>
    );
}

export default SearchUsingAddress;
