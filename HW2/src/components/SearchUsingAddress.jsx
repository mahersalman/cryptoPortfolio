import React, { useState } from 'react';
import Web3 from 'web3';

function SearchUsingAddress({ handleConnect }) {
    const [address, setAddress] = useState('0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C');
    const [error, setError] = useState('');

    const web3 = new Web3(); // Create a web3 instance

    function handleSearchAddress() {
        try {
            console.log('Address:', address); // Log address to ensure it's not undefined
            
            // Validate Ethereum or BNB address
            if (web3.utils.isAddress(address)) {
                handleConnect(address, "Ethereum", true); // Assuming Ethereum chain for simplicity
                setError(''); // Clear error message if address is valid
            } else {
                setError('Invalid address. Please enter a valid Ethereum or BNB address.');
            }
        } catch (err) {
            console.error('Validation error:', err); // Log error for debugging
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <div className="flex flex-col items-center p-6 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                Search for crypto data using your wallet address
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Enter the address to fetch related information.
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg">
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter wallet address"
                    className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>
            {error && (
                <div className="text-red-500 dark:text-red-400 text-center">
                    {error}
                </div>
            )}
            <button
                onClick={handleSearchAddress}
                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400">
                Search
            </button>
        </div>
    );
}

export default SearchUsingAddress;
