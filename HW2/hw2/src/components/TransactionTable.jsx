import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { fetchTransactions } from '../services/transactionService';
import TransactionTableView from './TransactionTableView';
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme objects

const TransactionTable = ({ wallet }) => {
  const { theme } = useContext(ThemeContext);
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const operations = await fetchTransactions(wallet.Network, wallet.Address);
        setTransactions(operations);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, [wallet.Network, wallet.Address]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <TransactionTableView transactions={transactions} themeClasses={themeClasses} />;
};

export default TransactionTable;
