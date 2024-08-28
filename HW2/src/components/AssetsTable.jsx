import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import TokenRow from './TokenRow';
import { AssestsTableStyle } from "../styles/AssetsTableStyle"; // Import unified theme classes

const AssetsTable = ({ tokens }) => {
  const { theme } = useContext(ThemeContext); // Assuming this handles dark/light mode toggle

  return (
    <div id="AssetsTable" className={`${AssestsTableStyle.tableContainer} overflow-x-auto max-h-[calc(50vh)] overflow-y-auto`}>
      <table className={`${AssestsTableStyle.table} w-full`}>
        <thead className={AssestsTableStyle.thead}>
          <tr>
            <th className={AssestsTableStyle.th}>Token Name</th>
            <th className={AssestsTableStyle.th}>Amount</th>
            <th className={AssestsTableStyle.th}>24h Change (%)</th>
            <th className={AssestsTableStyle.th}>Price (USD)</th>
            <th className={AssestsTableStyle.th}>Total (USD)</th>
          </tr>
        </thead>
        <tbody className={AssestsTableStyle.tbody}>
          {tokens && tokens.map(([symbol, data]) => (
            <TokenRow key={symbol} symbol={symbol} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
