import React from 'react';
import { TokenRowStyle } from '../styles/TokenRowStyle'; // Import unified theme classes

// Presentational component for rendering a single row in the assets table
const TokenRow = ({ symbol, data }) => {
  return (
    <tr className={TokenRowStyle.tableRow}>
      <td className={`${TokenRowStyle.tableCell} flex items-center justify-center`}>
        <div className="flex items-center justify-center gap-2">
          <div className="text-left">
            <div>{symbol}</div>
            <div className={TokenRowStyle.tokenSymbolText}>{data.name}</div>
          </div>
        </div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.balance.toFixed(3)}</div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div className={data.price.diff >= 0 ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}>
          {data.price.diff}%
        </div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.price.rate}$</div>
      </td>

      <td className={TokenRowStyle.tableCell}>
        <div>{data.balanceInUsd.toFixed(2)}$</div>
      </td>
    </tr>
  );
};

export default TokenRow;
