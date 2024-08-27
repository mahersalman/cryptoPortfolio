import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import TokenRow from './TokenRow';
import { darkTheme, lightTheme } from "../utils/classes";

const AssetsTable = ({ tokens }) => {
  const { theme } = useContext(ThemeContext);
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <div id="AssetsTable" className={`${themeClasses.tableContainer} overflow-x-auto max-h-[calc(50vh)] overflow-y-auto`}>
      <table className={`${themeClasses.table} w-full`}>
        <thead className={themeClasses.thead}>
          <tr>
            <th className={themeClasses.thClasses}>Token Name</th>
            <th className={themeClasses.thClasses}>Amount</th>
            <th className={themeClasses.thClasses}>24h Change (%)</th>
            <th className={themeClasses.thClasses}>Price (USD)</th>
            <th className={themeClasses.thClasses}>Total (USD)</th>
          </tr>
        </thead>
        <tbody className={themeClasses.tbody}>
          {tokens && tokens.map(([symbol, data]) => (
            <TokenRow key={symbol} symbol={symbol} data={data} theme={theme} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
