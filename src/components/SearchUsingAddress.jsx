import React, { useState } from 'react';
import { validateAddress, handleAddressSearch } from '../utils/addressUtils'; // Import utility functions
import { searchAddressStyle } from '../styles/SearchAddressStyle'; // Import styles

/**
 * SearchUsingAddress component allows users to search for crypto data using a wallet address.
 * @param {Object} props - Component props.
 * @param {Function} props.handleConnect - Function to handle address connection.
 * @returns {JSX.Element} The rendered SearchUsingAddress component.
 */
function SearchUsingAddress({ handleConnect }) {
    const [address, setAddress] = useState('0xA69babEF1cA67A37Ffaf7a485DfFF3382056e78C');
    const [error, setError] = useState('');

    function handleSearchAddress() {
        try {
            const { isValid, errorMsg } = handleAddressSearch(address, handleConnect);
            if (isValid) {
                setError(''); // Clear error message if address is valid
            } else {
                setError(errorMsg); // Set error message if address is invalid
            }
        } catch (err) {
            console.error('Validation error:', err); // Log error for debugging
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <div className={searchAddressStyle.container}>
            <div className={searchAddressStyle.title}>
                Search for crypto data using your wallet address
            </div>
            <div className={searchAddressStyle.subtitle}>
                Enter the address to fetch related information.
            </div>
            <div className={searchAddressStyle.inputContainer}>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter wallet address"
                    className={searchAddressStyle.input}
                />
            </div>
            {error && (
                <div className={searchAddressStyle.error}>
                    {error}
                </div>
            )}
            <button
                onClick={handleSearchAddress}
                className={searchAddressStyle.button}>
                Search
            </button>
        </div>
    );
}

export default SearchUsingAddress;
