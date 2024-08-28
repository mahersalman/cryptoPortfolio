import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import { BestPerformingTableStyle } from '../styles/BestPerformingTableStyle'; // Import unified theme classes

// Utility function to get the PNL value based on the selected filter
const getValue = (item, filter) => {
    switch (filter) {
        case 'PNL_24h':
            return item.price.diff || 0;
        case 'PNL_week':
            return item.price.diff7d || 0;
        case 'PNL_month':
            return item.price.diff30d || 0;
        default:
            return 0;
    }
};

// Utility function to sort tokens by the selected PNL filter
const sortTokensByPNL = (tokens, selectedFilter) => {
    return [...tokens].sort((a, b) => {
        const aValue = getValue(a[1], selectedFilter);
        const bValue = getValue(b[1], selectedFilter);
        return bValue - aValue; // Sort in descending order
    });
};

function formatPrice(rate) {
    if (rate >= 1) {
        // For rates >= 1, limit to 2 decimal places
        return rate.toFixed(2);
    } else {
        // For rates < 1, find the first non-zero digit after the decimal point
        const rateStr = rate.toString();
        let nonZeroIndex = rateStr.indexOf('.') + 1; // Start after the decimal point
        
        while (nonZeroIndex < rateStr.length && rateStr[nonZeroIndex] === '0') {
            nonZeroIndex++;
        }

        // Keep the first two non-zero digits
        const precision = nonZeroIndex - rateStr.indexOf('.') + 1;
        return rate.toFixed(precision);
    }
}

// Function to build a table row
function buildTableRow(symbol, data, index, BestPerformingTableStyle, selectedFilter) { 
    const pnl = getValue(data, selectedFilter);

    return (
        <tr key={symbol} className={BestPerformingTableStyle.tableRowContainer}>
            <td className={BestPerformingTableStyle.tableCell}>
                <div className="text-lg">{index}</div>
            </td>
            <td className={`${BestPerformingTableStyle.tableCell} flex`}>
                <div className="text-lg text-center">
                    <span className="font-normal">{data.name}</span>
                    <div className="text-gray-500 dark:text-gray-400 text-sm font-light">
                        {symbol}
                    </div>
                </div>
            </td>
            <td className={BestPerformingTableStyle.tableCell}>
                <div className="text-lg text-center">
                    {formatPrice(data.price.rate)}
                </div>
            </td>
            <td className={BestPerformingTableStyle.tableCell}>
                <div className={`text-lg text-center ${
                    pnl === 0
                        ? "text-gray-500 dark:text-gray-400"
                        : pnl > 0
                            ? "text-green-500 dark:text-green-400"
                            : "text-red-500 dark:text-red-400"
                    }`}>
                    {pnl.toFixed(1)}%
                </div>
            </td>
            <td className={BestPerformingTableStyle.tableCell}>
                <div className="text-lg text-center">
                    {data.balance.toFixed(2)}
                </div>
            </td>
            <td className={BestPerformingTableStyle.tableCell}>
                <div className="text-lg text-center">
                    {data.balanceInUsd.toFixed(2)}       
                </div>
            </td>
        </tr>
    );
}

const BestPerformingTable = ({ tokens }) => {
    const handleFilterChange = (event) => {setSelectedFilter(event.target.value);
    };
    
    //const { theme } = useContext(ThemeContext); // Access the theme using useContext
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h'); // State to manage the selected filter

    const sortedData = sortTokensByPNL(tokens, selectedFilter);
    const topData = sortedData.slice(0, 10);

    return (
        <>
            <div className={BestPerformingTableStyle.filterContainer}>
                <div className="text-lg font-semibold">Choose Criteria</div>
                <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className={BestPerformingTableStyle.selectClass}>
                    <option value="PNL_24h">24h PNL</option>
                    <option value="PNL_week">7d PNL</option>
                    <option value="PNL_month">30d PNL</option>
                </select>
            </div>

            <div className={BestPerformingTableStyle.tableContainer}>
                <table className={BestPerformingTableStyle.table}>
                    <thead className={BestPerformingTableStyle.thead}>
                        <tr>
                            <th className={BestPerformingTableStyle.th}>Rank</th>
                            <th className={BestPerformingTableStyle.th}>Name</th>
                            <th className={BestPerformingTableStyle.th}>Price (USD)</th>
                            <th className={BestPerformingTableStyle.th}>PNL</th>
                            <th className={BestPerformingTableStyle.th}>Balance</th>
                            <th className={BestPerformingTableStyle.th}>Balance (USD)</th>
                        </tr>
                    </thead>
                    <tbody className={BestPerformingTableStyle.tbody}>
                        {topData.map(([symbol, data], index) =>
                            buildTableRow(symbol, data, index + 1, BestPerformingTableStyle, selectedFilter)
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BestPerformingTable;
