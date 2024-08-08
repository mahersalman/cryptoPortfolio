import React, { useState, useEffect } from 'react';
import AssetsTable from './assestsTable';
import TransactionTable from './TransactionTable';
import TotalBalanceChart from './TotalBalanceChart';
import { ThemeProvider } from './ThemeContext';
import TabButtons from './MarketNavbar';
import { getUrlString } from './utils'; 
import BestPerformingTable from './BestPerformingTable';
function DataTables({wallet}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [Tokens, setTokens] = useState(null);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = getUrlString(wallet.Network,'getAddressInfo', wallet.Address);
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            // Add ETH data to tokens array
            const ethToken = {
              tokenInfo: {
                address: wallet.Address,
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                price: json.ETH.price
              },
              balance: json.ETH.balance,
              rawBalance: json.ETH.rawBalance
            };
            const filteredTokens = [ethToken, ...json.tokens.filter(token => token.tokenInfo.price !== false)];
            setTokens(filteredTokens);
            console.log(filteredTokens)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <TotalBalanceChart tokens={Tokens}/>
         </div>
         <div> 
          <ThemeProvider>
          <div>
            <TabButtons setActiveTab={setActiveTab} />
            {activeTab === 'assets' && <AssetsTable tokens = {Tokens}/>}
            {activeTab === 'transactions' && <TransactionTable wallet={wallet}/>}
            {activeTab === 'BestPerforming' && <BestPerformingTable tokens = {Tokens}/>}
          </div>
          </ThemeProvider> 

        </div>
        </>
        );
    };

export default DataTables;
