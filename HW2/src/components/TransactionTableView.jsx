import React from 'react';
import { formatDate } from '../utils/dateUtils';

// Presentational component for rendering the transaction table
const TransactionTableView = ({ transactions, themeClasses }) => {
  // Function to generate a table row for each transaction
  const generateTableRow = (item, index) => {
    const tokenDecimals = parseInt(item.tokenInfo.decimals);
    const tokenValue = (item.value / Math.pow(10, tokenDecimals)).toFixed(2);

    return (
      <tr key={index} className={themeClasses.tableRow}>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>{formatDate(item.timestamp)}</div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>
            {item.transactionHash ? `${item.transactionHash.substring(0, 5)}...` : 'N/A'}
          </div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>
            {item.from ? `${item.from.substring(0, 6)}...${item.from.slice(-4)}` : 'N/A'}
          </div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>
            {item.to ? `${item.to.substring(0, 6)}...${item.to.slice(-4)}` : 'N/A'}
          </div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>{tokenValue}</div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg}>{item.type}</div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className="flex items-center justify-center">
            <div className={themeClasses.textLg}>{item.tokenInfo.name}</div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div id="TransactionTable" className={`overflow-x-auto ${themeClasses.tableContainer}`}>
      <table className={`min-w-full ${themeClasses.table}`}>
        <thead className={themeClasses.thead}>
          <tr>
            <th className={`${themeClasses.thClasses} text-left`}>Date & Time</th>
            <th className={`${themeClasses.thClasses} text-left`}>Tx Hash</th>
            <th className={`${themeClasses.thClasses} text-left`}>From</th>
            <th className={`${themeClasses.thClasses} text-left`}>To</th>
            <th className={`${themeClasses.thClasses} text-right`}>Amount</th>
            <th className={`${themeClasses.thClasses} text-left`}>Type</th>
            <th className={`${themeClasses.thClasses} text-left`}>Token</th>
          </tr>
        </thead>
        <tbody className={themeClasses.tbody}>
          {transactions && transactions.map((transaction, index) => generateTableRow(transaction, index))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTableView;
