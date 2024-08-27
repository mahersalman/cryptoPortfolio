import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { fetchTransactions } from '../utils/transactionService';
import TransactionTableView from './TransactionTableView';
import { darkTheme, lightTheme } from '../utils/classes';

const TransactionTable = ({ wallet }) => {
  const { theme } = useContext(ThemeContext);
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

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

  if (loading) return <div className="flex justify-center items-center text-9xl p-4">Loading...</div>;

  return <TransactionTableView transactions={transactions} themeClasses={themeClasses} />;
};

export default TransactionTable;
