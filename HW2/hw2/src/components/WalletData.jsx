import React, { useState, useEffect } from 'react';
import AssetsTable from './AssetsTable';
import TransactionTable from './TransactionTable';
import TotalBalanceChart from './TotalBalanceChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import TabButtons from './MarketNavbar';
import { getUrlString } from '../utils/urlUtils';  // Updated to import from utils.js
import BestPerformingTable from './BestPerformingTable';
import TransactionStats from './feesTable'; // Imported for potential future use

// Main component for displaying wallet data
function WalletData({ wallet }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tokens, setTokens] = useState(null); // Renamed to follow convention
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
                const chainToken = {
                    tokenInfo: {
                        address: wallet.Address,
                        name: wallet.Network === 'Ethereum' ? 'Ethereum' : wallet.Network === 'BNB Smart Chain' ? 'BNB' : 'Unknown',
                        symbol: wallet.Network === 'Ethereum' ? 'Ethereum' : wallet.Network === 'BNB Smart Chain' ? 'BNB' : 'Unknown',
                        decimals: 0,
                        price: json.ETH.price
                    },
                    balance: json.ETH.balance,
                    rawBalance: json.ETH.rawBalance
                };
                const filteredTokens = [
                    chainToken,
                    ...(json.tokens ? json.tokens.filter(token => token.tokenInfo.price !== false) : [])
                ];
                setTokens(filteredTokens);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (wallet.Address) {
            fetchData();
        }
    }, [wallet.Address, wallet.Network]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div>
                <TotalBalanceChart tokens={tokens} />
                {/* <TransactionStats wallet={wallet}/> */}
            </div>
            <div>
                <TabButtons setActiveTab={setActiveTab} />
                {activeTab === 'assets' && <AssetsTable tokens={tokens} />}
                {activeTab === 'transactions' && <TransactionTable wallet={wallet} />}
                {activeTab === 'BestPerforming' && <BestPerformingTable tokens={tokens} />}
            </div>
        </>
    );
}

export default WalletData;
