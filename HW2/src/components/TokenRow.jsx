import React from 'react';
import { TokenRowStyle } from '../styles/TokenRowStyle'; 

const TokenRow = ({ symbol, data, iconsMap }) => {
  const iconUrl = iconsMap[data.name.toLowerCase().replace(/\s+/g, '-')];

  return (
    <tr className={TokenRowStyle.tableRow}>
      <td className={TokenRowStyle.tableCell}>
        <div className="pl-[30%] flex items-center space-x-3">
          {/* First div: icon */}
          <div className="flex-shrink-0">
            {iconUrl ? (
              <img src={iconUrl} alt={`${data.name} icon`} className="w-8 h-8" />
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
          {/* Second div: token name and symbol */}
          <div className="flex flex-col items-start">
            <div className={`${TokenRowStyle.tokenSymbolText} font-bold`}>{data.name}</div>
            <div className="text-sm">{symbol}</div>
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
        <div>{data.price.rate.toFixed(3)}$</div>
      </td>
      <td className={TokenRowStyle.tableCell}>
        <div>{data.balanceInUsd.toFixed(2)}$</div>
      </td>
    </tr>
  );
};

export default TokenRow;
