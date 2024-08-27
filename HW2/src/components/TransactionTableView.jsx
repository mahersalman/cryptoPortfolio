import React, { useState } from 'react';
import { formatDate } from '../utils/dateUtils';

// Number of rows per page
const ITEMS_PER_PAGE = 15;

const TransactionTableView = ({ transactions, themeClasses }) => {
  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the transactions for the current page
  const currentTransactions = transactions.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  // Handler to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handler to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


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
          <div className={themeClasses.textLg} title={item.transactionHash}>
            {item.transactionHash ? `${item.transactionHash.substring(0, 5)}...` : 'N/A'}
          </div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg} title={item.from} >
            {item.from ? `${item.from.substring(0, 6)}...${item.from.slice(-4)}` : 'N/A'}
          </div>
        </td>
        <td className={themeClasses.tableCell}>
          <div className={themeClasses.textLg} title={item.to}>
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
            <th className={`${themeClasses.thClasses} text-left`}>Amount</th>
            <th className={`${themeClasses.thClasses} text-left`}>Type</th>
            <th className={`${themeClasses.thClasses} text-left`}>Token</th>
          </tr>
        </thead>
        <tbody className={themeClasses.tbody}>
          {currentTransactions.map((transaction, index) => generateTableRow(transaction, index))}
        </tbody>
      </table>
        <div class="flex items-center justify-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1} 
            className={`px-4 py-2 font-semibold text-white rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}>
            Previous
          </button>

          <span className="text-lg font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages} 
            className={`px-4 py-2 font-semibold text-white rounded-lg ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}>
            Next
          </button>
        </div>
    </div>
  );
};

export default TransactionTableView;
