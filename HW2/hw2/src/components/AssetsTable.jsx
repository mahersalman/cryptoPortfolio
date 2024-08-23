import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import TokenRow from './TokenRow';
import { darkTheme, lightTheme } from "../utils/classes"; // Import theme objects

const AssetsTable = ({ tokens }) => {
  const { theme } = useContext(ThemeContext); // Access the theme using useContext
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <div id="AssetsTable" className={themeClasses.tableContainer}>
      <table className={themeClasses.table}>
        <thead className={themeClasses.thead}>
          <tr>
            <th className={themeClasses.thClasses}>Token Name</th>
            <th className={themeClasses.thClasses}>Amount</th>
            <th className={themeClasses.thClasses}>24h Change (%)</th>
            <th className={themeClasses.thClasses}>Price (USD)</th>
            <th className={themeClasses.thClasses}>Avg Buy (USD)</th>
            <th className={themeClasses.thClasses}>Total (USD)</th>
          </tr>
        </thead>
        <tbody className={themeClasses.tbody}>
          {tokens && tokens.map((token, index) => (
            <TokenRow key={index} token={token} theme={theme} /> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
