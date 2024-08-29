import React, { useState, useEffect } from "react";
import WalletFees from "./WalletFees";
import DistributionChart from "./DistributionChart";

function MainData({ address, tokens }) {
  const [totalBalance, setTotalBalance] = useState(0);
  const [topBalances, setTopBalances] = useState([]);

  useEffect(() => {
    const calculateData = () => {
      const dataArray = tokens.map(([symbol, crypto]) => ({
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

    if (tokens) {
      calculateData();
    }
  }, [tokens]);

    return (
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6">
          <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 rounded-lg text-gray-900 dark:text-blue-50 lg:w-[25%] h-64 sm:h-72 flex items-center justify-center border border-blue-300 dark:border-gray-600 shadow-lg">
            <div className="text-center">
              <div className="font-semibold text-xl sm:text-2xl mb-2">
                Total Balance:
              </div>
              <div className="font-bold text-2xl sm:text-3xl">
                ${totalBalance.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 rounded-lg text-gray-900 dark:text-blue-50 w-full border border-green-300 dark:border-gray-600 shadow-lg">
            <WalletFees address={address} />
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 rounded-lg text-gray-900 dark:text-blue-50 w-full col-span-2 lg:col-span-1 h-64 sm:h-72 border border-purple-300 dark:border-gray-600 shadow-lg">
            <DistributionChart tokens={topBalances} />
          </div>
        </div>
      </div>
    );
  
  
}

export default MainData;
