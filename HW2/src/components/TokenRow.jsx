import React from 'react';
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme classes

// Presentational component for rendering a single row in the assets table
const TokenRow = ({ symbol, data, theme }) => {
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme; // Apply the correct theme classes

  return (
    <tr className={themeClasses.tableRow}>
      <td className={`${themeClasses.tableCell} flex items-center justify-center`}>
        <div className="flex items-center justify-center gap-2">
          <div className="text-left">
            <div>{symbol}</div>
            <div className={themeClasses.tokenSymbolText}>{data.name}</div>
          </div>
        </div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{data.balance.toFixed(3)}</div>
      </td>
      <td className={themeClasses.tableCell}>
        <div className={data.price.diff >= 0 ? themeClasses.positiveChange : themeClasses.negativeChange}>
          {data.price.diff}%
        </div>
      </td>
      <td className={themeClasses.tableCell}>
        <div>{data.price.rate}$</div>
      </td>

      <td className={themeClasses.tableCell}>
        <div>{data.balanceInUsd.toFixed(2)}$</div>
      </td>
    </tr>
  );
};

export default TokenRow;

/*

{
  "ETH": {
      "name": "Ethereum",
      "decimals": 18,
      "price": {
          "rate": 2768.0147731216853,
          "diff": -0.01,
          "diff7d": 3.6,
          "ts": 1724602260,
          "marketCapUsd": 332987629248.3016,
          "availableSupply": 120298356.960273,
          "volume24h": 11337855614.681696,
          "volDiff1": -15.25634869832777,
          "volDiff7": -8.938367848808767,
          "volDiff30": 14.42540374979761,
          "diff30d": -14.17011750591351,
          "tsAdded": 0
      },
      "balance": 244.38059659477426,
      "balanceInUsd": 676449.1016386262
  },
  "USDC": {
      "name": "USD Coin",
      "decimals": 6,
      "price": {
          "rate": 0.9999857525210499,
          "diff": 0.02,
          "diff7d": -0.01,
          "ts": 1724602260,
          "marketCapUsd": 34814760386.70922,
          "availableSupply": 34815256416.342155,
          "volume24h": 3990049772.2377377,
          "volDiff1": -28.143668573493443,
          "volDiff7": -0.08784708190829349,
          "volDiff30": 16.41007677335287,
          "diff30d": -0.007631107307801699,
          "bid": 0.999641,
          "currency": "USD"
      },
      "balance": 17462186.229818,
      "balanceInUsd": 17461937.43768727
  }
*/