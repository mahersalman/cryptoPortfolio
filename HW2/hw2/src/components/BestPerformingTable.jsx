import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import { sortTokensByPNL, getValue } from '../utils/tokenUtils'; // Import utility functions
import { darkTheme, lightTheme } from '../utils/classes'; // Import theme objects

const BestPerformingTable = ({ tokens }) => {
    const { theme } = useContext(ThemeContext); // Access the theme using useContext
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h'); // State to manage the selected filter

    const themeClasses = theme === 'dark' ? darkTheme : lightTheme;

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const sortedData = sortTokensByPNL(tokens, selectedFilter);
    const topData = sortedData.slice(0, 10);

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
                                <td className={`${themeClasses.tableCell} flex justify-center items-center`}>
                                    <div className="text-lg text-center">
                                        {item.tokenInfo.name}
                                    </div>
                                </td>
                                <td className={themeClasses.tableCell}>
                                    <div className="text-lg text-center">
                                        {item.tokenInfo.price && item.tokenInfo.price.rate !== undefined
                                            ? `$${item.tokenInfo.price.rate.toFixed(2)}`
                                            : 'N/A'}
                                    </div>
                                </td>
                                <td className={themeClasses.tableCell}>
                                    <div
                                        className={`text-lg text-center ${
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
