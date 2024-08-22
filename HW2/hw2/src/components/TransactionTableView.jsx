import React from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
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
          <Tooltip title={item.transactionHash} position="top" trigger="click" arrow={true}>
            <div className={themeClasses.textLg}>
              {item.transactionHash ? `${item.transactionHash.substring(0, 5)}...` : 'N/A'}
            </div>
          </Tooltip>
        </td>
        <td className={themeClasses.tableCell}>
          <Tooltip title={item.from} position="top" trigger="click" arrow={true}>
            <div className={themeClasses.textLg}>
              {item.from ? `${item.from.substring(0, 6)}...${item.from.slice(-4)}` : 'N/A'}
            </div>
          </Tooltip>
        </td>
        <td className={themeClasses.tableCell}>
          <Tooltip title={item.to} position="top" trigger="click" arrow={true}>
            <div className={themeClasses.textLg}>
              {item.to ? `${item.to.substring(0, 6)}...${item.to.slice(-4)}` : 'N/A'}
            </div>
          </Tooltip>
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
    <div id="TransactionTable" className={themeClasses.tableContainer}>
      <table className={themeClasses.table}>
        <thead className={themeClasses.thead}>
          <tr>
            <th className={themeClasses.thClasses}>Date & Time</th>
            <th className={themeClasses.thClasses}>Tx Hash</th>
            <th className={themeClasses.thClasses}>From</th>
            <th className={themeClasses.thClasses}>To</th>
            <th className={themeClasses.thClasses}>Amount</th>
            <th className={themeClasses.thClasses}>Type</th>
            <th className={themeClasses.thClasses}>Token</th>
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
