import React from 'react';
import transactionData from './TransactionData.json';

const TransactionTable = () => {
  // Function to generate table rows for each transaction item
  const generateTableRow = (item, index) => (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <div className="text-lg font-medium text-gray-900 dark:text-white">{index}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900 dark:text-white">{item.transactionId}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900 dark:text-white">{item.senders[0].address}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900 dark:text-white">{item.recipients[0].address}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900 dark:text-white">{item.senders[0].amount}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900 dark:text-white">{item.fee.amount}</div>
      </td>
    </tr>
  );

  return (
    <div id="TransactionTable" className="w-full overflow-x-auto border rounded-3xl border-slate-400 dark:border-slate-700 p-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Index</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tx hash</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sender Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recipient Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sender Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fee Amount</th>
          </tr>
        </thead>
        <tbody id="cryptoTableBody" className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          {transactionData.map((transaction, index) => generateTableRow(transaction.data.item, index))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
