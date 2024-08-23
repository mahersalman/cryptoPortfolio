import React from 'react';
import CryptoIcon from './CryptoIcon';
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme classes

// Presentational component for rendering a single row in the assets table
const TokenRow = ({ token, theme }) => {
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme; // Apply the correct theme classes
  const decimals = parseInt(token.tokenInfo.decimals);
  const price = token.tokenInfo.price.rate.toFixed(4);
  const balance = (parseFloat(token.balance) / Math.pow(10, decimals)).toFixed(5);
  const priceChange = token.tokenInfo.price.diff.toFixed(2); // 24h Change
  const avgBuy = token.tokenInfo.price.bid ? token.tokenInfo.price.bid.toFixed(4) : '0'; // Avg Buy Price
  const total = (parseFloat(price) * parseFloat(balance)).toFixed(2); // Total value in USD
  const name = token.tokenInfo.name.toLowerCase();

  return (
    <tr className={themeClasses.tableRow}>
      <td className={`${themeClasses.tableCell} flex items-center justify-center`}>
        <div className="flex items-center justify-center gap-2">
          <CryptoIcon coinId={name} /> {/* Render token icon */}
          <div className="text-left">
            <div>{token.tokenInfo.symbol}</div>
            <div className={themeClasses.tokenSymbolText}>{token.tokenInfo.name}</div>
          </div>
        </div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{balance}</div>
      </td>
      <td className={themeClasses.tableCell}>
        <div className={priceChange >= 0 ? themeClasses.positiveChange : themeClasses.negativeChange}>
          {priceChange}%
        </div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{price}$</div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{avgBuy}$</div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{total}$</div>
      </td>
    </tr>
  );
};

export default TokenRow;
