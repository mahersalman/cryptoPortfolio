import React, { useState, useEffect } from 'react';
import AssetsTable from './AssetsTable';
import TransactionTable from './TransactionTable';
import TabButtons from './TabButtons';
import { getUrlString } from '../utils/urlUtils';  
import BestPerformingTable from './BestPerformingTable';
import MainData from './MainData';

export function processWalletData(data) {
    const result = {};

    // Add Ethereum (ETH) to the dictionary
    if (data.ETH && data.ETH.price) {
        const ethBalanceInUsd = data.ETH.balance * data.ETH.price.rate;
        result['ETH'] = {
            name: 'Ethereum',
            decimals: 18, 
            price: data.ETH.price,
            balance: data.ETH.balance,
            balanceInUsd: ethBalanceInUsd
        };
    }

    // Iterate over all tokens and add them if they have a price
    data.tokens.map((token) => {
        const { tokenInfo, balance } = token;
        const { price, symbol, decimals, name } = tokenInfo;

        // Check if the token has a valid price
        if (price && price.rate) {
            const balanceInUsd = (balance / Math.pow(10, decimals)) * price.rate;

            // Add the token to the result dictionary
            result[symbol] = {
                name: name,
                decimals: parseInt(decimals, 10),
                price: price,
                balance: balance / Math.pow(10, decimals), // Convert balance to human-readable format
                balanceInUsd: balanceInUsd
            };
        }
    });
    return Object.entries(result);
}

// Main component for displaying wallet data
function WalletData({ wallet }) {
    const [tokens, setTokens] = useState(null); 
    const [activeTab, setActiveTab] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = getUrlString(wallet.Network, 'getAddressInfo', wallet.Address);

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                const data = processWalletData(json);
                setTokens(data);
            } catch (error) {
                console.log("Error : " ,error);
            } 
        };

        if (wallet.Address) {
            fetchData();
        }
    }, [wallet.Address, wallet.Network]);

    return (
        <>
            <div className=''>
                <MainData address={wallet.Address} tokens = {tokens}/>
            </div>
            <div className="mt-4">
                {/* Title or explanation for the tabs */}
                <h2 className="pl-4 text-base font-medium text-gray-700 mb-2">
                    Choose an option below to view detailed information:
                </h2>
                <p className="pl-4 text-sm text-gray-500 mb-4">
                    Use the tabs to switch between viewing your assets, transaction history, and the best performing tokens in your wallet.
                </p>
                <TabButtons setActiveTab={setActiveTab} />
                {activeTab === 'assets' && <AssetsTable tokens={tokens} />}
                {activeTab === 'transactions' && <TransactionTable wallet={wallet} />}
                {activeTab === 'BestPerforming' && <BestPerformingTable tokens={tokens} />}
            </div>
        </>
    );  
}

export default WalletData;

