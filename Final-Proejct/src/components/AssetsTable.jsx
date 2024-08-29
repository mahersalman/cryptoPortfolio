import React, { useEffect, useState } from 'react';
import TokenRow from './TokenRow';
import { AssestsTableStyle } from "../styles/AssetsTableStyle"; // Import unified theme classes
import { getImages } from '../utils/coinGecko';

/**
 * AssetsTable component displays a table of tokens with their details.
 * @param {Object[]} tokens - Array of token data, where each token is represented by [symbol, data].
 * @returns {JSX.Element} The rendered AssetsTable component.
 */
const AssetsTable = ({ tokens }) => {
  const [iconsMap, setIconsMap] = useState({});

  useEffect(() => {
    const fetchIcons = async () => {
      /**
      Fetches token icons from an external source and updates the state.
     */
      if (tokens && tokens.length > 0) {
        const tokenNames = tokens.map(([symbol, data]) => data.name);
        const images = await getImages(tokenNames);
        setIconsMap(images);
      }
    };

    fetchIcons();
  }, [tokens]);

  return (
    <div id="AssetsTable" className={`${AssestsTableStyle.tableContainer}`}>
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
            <TokenRow key={symbol} symbol={symbol} data={data} iconsMap={iconsMap} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
