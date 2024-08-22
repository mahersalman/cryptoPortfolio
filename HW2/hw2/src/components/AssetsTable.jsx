import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import TokenRow from './TokenRow';
import { darkTheme, lightTheme } from "../utils/classes"; // Import theme objects
// Container component for managing tokens and rendering the table
const AssetsTable = ({ tokens }) => {
  const { theme } = useContext(ThemeContext); // Access the theme using useContext

  return (
    <div id="AssetsTable" className={theme === 'dark' ? tableContainerDark : tableContainerLight}>
      <table className={theme === 'dark' ? tableDark : tableLight}>
        <thead className={theme === 'dark' ? theadDark : theadLight}>
          <tr>
            <th className={thClasses}>Token Name</th>
            <th className={thClasses}>Amount</th>
            <th className={thClasses}>24h Change (%)</th>
            <th className={thClasses}>Price (USD)</th>
            <th className={thClasses}>Avg Buy (USD)</th>
            <th className={thClasses}>Total (USD)</th>
          </tr>
        </thead>
        <tbody className={theme === 'dark' ? tbodyDark : tbodyLight}>
          {tokens && tokens.map((token, index) => (
            <TokenRow key={index} token={token} theme={theme} /> // Delegate row rendering to TokenRow component
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
