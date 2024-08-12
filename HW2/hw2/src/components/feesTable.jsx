import React, { useEffect, useState } from 'react';
import { getUrlString } from './utils'; 

function TransactionStats({wallet}) {
  const [stats, setStats] = useState({
    totalFeesUSD: 0,
    averageFeeUSD: 0,
    highestFeeUSD: 0,
    totalCount: 0
  });

  useEffect(() => {
    const getTransactions = async () => {
        const url_transactions = getUrlString(wallet.Network,'getAddressTransactions', wallet.Address);
        console.log(url_transactions)
        const response = await fetch(url_transactions);
        const transactions = await response.json()
        let totalFeesUSD = 0;
        let highestFeeUSD = 0;

        for (const transaction of transactions) {
            const url_hash = getUrlString(wallet.Network,'getTxInfo', transaction.hash);
            const response_hash = await fetch(url_hash);
            const hashData = await response_hash.json();

            const feeInWei = hashData.gasUsed * hashData.gasPrice;
            const feeInETH = feeInWei / Math.pow(10, 18); // Convert Wei to ETH
            const feeUSD =  feeInETH * hashData.usdPrice;

            totalFeesUSD += feeUSD;
            if (feeUSD > highestFeeUSD) {
                highestFeeUSD = feeUSD;
            }
            console.log("url" , url_hash)
            console.log("fee" , hashData)
        }

        const averageFeeUSD = transactions.length > 0 ? totalFeesUSD / transactions.length : 0;

        setStats({
            totalFeesUSD,
            averageFeeUSD,
            highestFeeUSD,
            totalCount: transactions.length
        });
    };

    getTransactions();
  }, [wallet.Address, wallet.Network]);

  return (
    <div>
      <p>Total Paid Fees (USD): ${stats.totalFeesUSD.toFixed(2)}</p>
      <p>Average Fee per Transaction (USD): ${stats.averageFeeUSD.toFixed(2)}</p>
      <p>Highest Fee Paid (USD): ${stats.highestFeeUSD.toFixed(2)}</p>
      <p>Total Number of Transactions: {stats.totalCount}</p>
    </div>
  );
};

export default TransactionStats;
