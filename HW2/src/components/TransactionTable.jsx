import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../utils/transactionService';
import TransactionTableView from './TransactionTableView';
import { themeClasses } from '../utils/classes';

/**
 * TransactionTable component fetches and displays transactions for a given wallet.
 * @param {Object} props - Component props.
 * @param {Object} props.wallet - Wallet object containing network and address.
 * @returns {JSX.Element} The rendered TransactionTable component.
 */
const TransactionTable = ({ wallet }) => {

  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const operations = await fetchTransactions(wallet.Network, wallet.Address);
        setTransactions(operations);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, [wallet.Network, wallet.Address]);

  if (loading) return <div className="flex justify-center items-center text-5xl p-4">Loading...</div>;

  return <TransactionTableView transactions={transactions} themeClasses={themeClasses} />;
};

export default TransactionTable;
