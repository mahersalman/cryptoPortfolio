import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme objects

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
function buildTableRow(symbol, data,index, themeClasses, selectedFilter){ 
    const pnl = getValue(data,selectedFilter);

    return (
        <tr key={symbol} className={themeClasses.tableRowContainer}>
            <td className={themeClasses.tableCell}>
                <div className="text-lg">{index}</div>
            </td>
            <td className={`${themeClasses.tableCell} flex`}>
                <div className="text-lg text-center">
                    <span className="font-normal">{data.name}</span>
                    <div className="text-gray-500 text-sm font-light">
                        {symbol}
                    </div>
                </div>
            </td>
            <td className={themeClasses.tableCell}>
                <div className="text-lg text-center">
                    {formatPrice(data.price.rate)}
                </div>
            </td>
            <td className={themeClasses.tableCell}>
            <div className={`text-lg text-center ${
                pnl === 0
                    ? themeClasses.zeroText
                    : pnl > 0
                        ? themeClasses.positiveText
                        : themeClasses.negativeText
                        }`}>
                    {pnl.toFixed(1)}%
                </div>
            </td>
            <td className={themeClasses.tableCell}>
                <div className="text-lg text-center">
                    {data.balance.toFixed(2)}
                </div>
            </td>
            <td className={themeClasses.tableCell}>
                <div className="text-lg text-center">
                {data.balanceInUsd.toFixed(2)}       
                </div>
            </td>
        </tr>
    );
}
const BestPerformingTable = ({ tokens }) => {
    const { theme } = useContext(ThemeContext); // Access the theme using useContext
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h'); // State to manage the selected filter

    const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };
    const sortedData = sortTokensByPNL(tokens, selectedFilter);
    const topData = sortedData.slice(0, 10);
    console.log('topData',topData);
    return (
        <>
        <div className={themeClasses.filterContainer}>
                <div className="text-lg font-semibold">Choose Criteria</div>
                <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className={themeClasses.selectClass}>
                    <option value="PNL_24h">24h PNL</option>
                    <option value="PNL_week">7d PNL</option>
                    <option value="PNL_month">30d PNL</option>
                </select>
            </div>

            <div className={themeClasses.tableContainer}>
                <table className={themeClasses.table}>
                    <thead className={themeClasses.thead}>
                        <tr>
                            <th className={themeClasses.thClasses}>Rank</th>
                            <th className={themeClasses.thClasses}>Name</th>
                            <th className={themeClasses.thClasses}>Price (USD)</th>
                            <th className={themeClasses.thClasses}>PNL</th>
                            <th className={themeClasses.thClasses}>Balance</th>
                            <th className={themeClasses.thClasses}>Balance(USD)</th>
                        </tr>
                    </thead>
                    <tbody className={themeClasses.tbody}>
                       {topData.map(([symbol, data],index) => 
                        buildTableRow(symbol, data,index+1, themeClasses, selectedFilter)
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BestPerformingTable;

"FET",
        {
            "name": "Fetch.ai",
            "decimals": 18,
            "price": {
                "rate": 1.35,
                "diff": 2.28,
                "diff7d": 47.28,
                "ts": 1724786861,
                "marketCapUsd": 3406938164.8105135,
                "availableSupply": 0,
                "volume24h": 583946803.4650438,
                "volDiff1": 4.449719784493695,
                "volDiff7": 169.16975456436393,
                "volDiff30": -20.22925833806667,
                "diff30d": 5.465700193334499,
                "bid": 1.35,
                "currency": "USD"
            },
            "balance": 90096.58783402208,
            "balanceInUsd": 121630.39357592982
        }