import React, { useEffect, useState } from 'react';
import DistributionChart from './DistributionChart';

function BalanceCharts({ data }) {
  const [totalBalance, setTotalBalance] = useState(0);
  const [topBalances, setTopBalances] = useState([]);

  useEffect(() => {
    const calculateData = () => {
      const dataArray = data.map(([symbol, crypto]) => ({
        symbol,
        balanceInUsd: crypto.balanceInUsd,
      }));

      // Calculate total balance
      const total = dataArray.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);
      setTotalBalance(total);

      // Sort tokens by balanceInUsd in descending order
      const sortedData = dataArray.sort((a, b) => b.balanceInUsd - a.balanceInUsd);

      // Get top 3 tokens
      const top3 = sortedData.slice(0, 3);

      // Calculate the balance of "Other" tokens
      const otherTokens = sortedData.slice(3);
      const otherBalanceInUsd = otherTokens.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);

      // If there are more than 3 tokens and "Other" has a balance, include it
      if (otherTokens.length > 0 && otherBalanceInUsd > 0) {
        top3.push({ symbol: 'Other', balanceInUsd: otherBalanceInUsd });
      }
      setTopBalances(top3);
    };

    if (data) {
      calculateData();
    }
  }, [data]);

  return (
    <>
      {/* Balance Rectangle */}
      <div className='p-4 bg-gray-800 bg-gray-700 p-4 mb-4 rounded-lg relative w-64 h-64 justify-center items-center text-blue-50 text-3xl '>
          <h2>Balance (USD): ${totalBalance.toFixed(2)}</h2>
      </div>
  
      {/* Top Tokens Rectangle */}
      <div className='bg-gray-600 p-4 rounded-lg  w-1/2 mx-auto p-4 bg-gray-800 relative w-auto h-64 '>
        <DistributionChart tokens={topBalances}/>
      </div>
    </>
  
  );
  
}

export default BalanceCharts;
