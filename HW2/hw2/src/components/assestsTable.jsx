import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import CryptoIcon from './CryptoIcon'
const AssetsTable = ({ tokens }) => {
  const { theme } = useContext(ThemeContext); // Access the theme using useContext
  const baseImageUrl = '/node_modules/cryptocurrency-icons/svg/color/'; // Base URL for token images

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = ''; // Remove the image source to hide the broken image icon
  };

  return (
    <div id="AssetsTable" className={`w-full overflow-x-auto rounded-3xl border-slate-400 p-4 ${theme === 'dark' ? 'dark:border-slate-700' : ''}`}>
      <table className={`min-w-full rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
        <thead className={`${theme === 'dark' ? 'bg-gray-900 text-gray-50' : 'bg-gray-50 text-gray-800'}`}>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Token Name</th> 
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">24h Change (%)</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Price (USD)</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Avg Buy (USD)</th>
            <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Total (USD)</th>
          </tr>
        </thead>
        <tbody className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} divide-y divide-gray-200 dark:divide-gray-600`}>
          {tokens && tokens.map((token, index) => {
              const decimals = parseInt(token.tokenInfo.decimals);
              const price = token.tokenInfo.price.rate.toFixed(4);
              const balance = (parseFloat(token.balance) / Math.pow(10, decimals)).toFixed(5);
              const priceChange = token.tokenInfo.price.diff.toFixed(2); // 24h Change
              const avgBuy = token.tokenInfo.price.bid ? token.tokenInfo.price.bid.toFixed(4) : '0'; // Avg Buy Price
              const total = (parseFloat(price) * parseFloat(balance)).toFixed(2); // Total value in USD
              const tokenSymbol = token.tokenInfo.symbol.toLowerCase();
              const tokenImage = `${baseImageUrl}${tokenSymbol}.svg`;
              const name = token.tokenInfo.name.toLowerCase();

              return (
                <tr key={index} className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="flex gap-3 text-lg">
                    <CryptoIcon coinId={name}></CryptoIcon>
                      <div className="flex flex-col items-center">
                        <div>{token.tokenInfo.symbol}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {token.tokenInfo.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div>{balance}</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className={`${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>{priceChange}%</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div>{price}$</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div>{avgBuy}$</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div>{total}$</div>
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
