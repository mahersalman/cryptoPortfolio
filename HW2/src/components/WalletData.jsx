import React, { useState, useEffect } from 'react';
import AssetsTable from './AssetsTable';
import TransactionTable from './TransactionTable';
import TabButtons from './TabButtons';
import BestPerformingTable from './BestPerformingTable';
import MainData from './MainData';
import { getUrlString } from '../utils/urlUtils';
import { processWalletData } from '../utils/walletUtils';

/**
 * WalletData fetches and displays wallet data including assets, transactions, and best-performing tokens.
 * @param {Object} props - Component props.
 * @param {Object} props.wallet - The wallet object containing network and address information.
 * @returns {JSX.Element} The rendered WalletData component.
 */
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
                console.log("Error:", error);
            } 
        };

        if (wallet.Address) {
            fetchData();
        }
    }, [wallet.Address, wallet.Network]);

    return (
        <>
            <div className=''>
                <MainData address={wallet.Address} tokens={tokens} />
            </div>
            <div className="mt-4">
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
