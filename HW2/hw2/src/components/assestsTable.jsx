import React from 'react';

const AssetsTable = ({tokens}) => {
  
  return (
    <div id="AssetsTable" className="w-full overflow-x-auto border rounded-3xl border-slate-400 dark:border-slate-700 p-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Token Icon</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Token Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price (USD)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Balance</th>

          </tr>
        </thead>
        <tbody id="cryptoTableBody" className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap"><img src="/images/eth.png" alt="Ethereum" width="24" height="24" /></td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div div className="text-lg text-gray-900 dark:text-white">Ethereum</div>  
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div div className="text-lg text-gray-900 dark:text-white">{tokens.ETH.price.rate.toFixed(3)}</div>  
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div div className="text-lg text-gray-900 dark:text-white">{tokens.ETH.balance.toFixed(2)}</div>  
            </td>
          </tr>
          {tokens.tokens && tokens.tokens
            .filter(token => token.tokenInfo.price)
            .map((token, index) => {
              const decimals = parseInt(token.tokenInfo.decimals);
              const price = token.tokenInfo.price.rate.toFixed(3);
              const balance = (parseFloat(token.balance) / Math.pow(10, decimals)).toFixed(decimals > 2 ? 2 : decimals);

              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={token.tokenInfo.image} alt={token.tokenInfo.name} width="24" height="24" /></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{token.tokenInfo.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div div className="text-lg text-gray-900 dark:text-white">{price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div div className="text-lg text-gray-900 dark:text-white">{balance}</div>  
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;


