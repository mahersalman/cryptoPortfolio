import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import { sortTokensByPNL, getValue } from '../utils/tokenUtils'; // Import utility functions
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme objects

// Container component for managing the best performing tokens table
const BestPerformingTable = ({ tokens }) => {
    const { theme } = useContext(ThemeContext); // Access the theme using useContext
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h'); // State to manage the selected filter

    // Choose the appropriate theme object based on the current theme
    const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

    // Handle filter change from the dropdown
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value); // Update the selected filter state
    };

    // Sort the data based on the selected PNL filter
    const sortedData = sortTokensByPNL(tokens, selectedFilter);

    // Display only the top 10 items
    const topData = sortedData.slice(0, 10);

    return (
        <>
            {/* Filter Dropdown */}
            <div className={themeClasses.filterContainer}>
                <div className="text-lg font-medium">Choose Criteria</div>
                <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className={themeClasses.selectClass}>
                    <option value="PNL_24h">24h PNL</option>
                    <option value="PNL_week">7d PNL</option>
                    <option value="PNL_month">30d PNL</option>
                </select>
            </div>

            {/* Table displaying the top performing tokens */}
            <div className={themeClasses.tableContainer}>
                <table className={themeClasses.table}>
                    <thead className={themeClasses.thead}>
                        <tr>
                            <th className={themeClasses.thClasses}>Rank</th>
                            <th className={themeClasses.thClasses}>Name</th>
                            <th className={themeClasses.thClasses}>Price</th>
                            <th className={themeClasses.thClasses}>PNL</th>
                        </tr>
                    </thead>
                    <tbody className={themeClasses.tbody}>
                        {topData.map((item, index) => (
                            <tr key={index} className={themeClasses.tableRowContainer}>
                                <td className={themeClasses.tableCell}>
                                    <div className="text-lg">{index + 1}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="text-lg">
                                            {item.tokenInfo.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-lg">
                                        {item.tokenInfo.price && item.tokenInfo.price.rate !== undefined
                                            ? `$${item.tokenInfo.price.rate.toFixed(2)}`
                                            : 'N/A'}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap rounded-r-lg">
                                    <div
                                        className={`text-lg ${
                                            getValue(item, selectedFilter) >= 0
                                                ? themeClasses.positiveText
                                                : themeClasses.negativeText
                                        }`}>
                                        {getValue(item, selectedFilter) !== undefined
                                            ? `${getValue(item, selectedFilter).toFixed(2)}%`
                                            : 'N/A'}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BestPerformingTable;
