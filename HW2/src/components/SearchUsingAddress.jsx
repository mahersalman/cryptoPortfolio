import React, { useState } from 'react';

function SearchUsingAddress({ handleConnect }) {
    const [address, setAddress] = useState('0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C');
    const [network, setNetwork] = useState('Ethereum');

    function setDemoAddress() {
        handleConnect(address, network, true);
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                    className="rounded-md border border-gray-300 p-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="rounded-md border border-gray-300 p-2 w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="BNB Smart Chain">BNB</option>
                    <option value="Ethereum">ETH</option>
                </select>
            </div>
            <button
                onClick={setDemoAddress}
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    );
}

export default SearchUsingAddress;
