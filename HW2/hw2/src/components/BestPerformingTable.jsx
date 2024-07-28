import React, { useState } from 'react';
import bestPerformingData from './bestPerformingData.json';

const BestPerformingTable = () => {
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h');

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const sortedData = [...bestPerformingData].sort((a, b) => {
        const aValue = parseFloat(a[selectedFilter].replace('%', ''));
        const bValue = parseFloat(b[selectedFilter].replace('%', ''));
        return bValue - aValue;
    });
  return (
        <div className="w-full overflow-x-auto border rounded-3xl border-slate-400  ">
            
            <table className="min-w-full divide-y divide-gray-200">
                
                <thead className="bg-gray-50 dark:bg-gray-800">
                    
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400">#</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Market Cap</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">PNL</th>
                        <select 
                    value={selectedFilter} 
                    onChange={handleFilterChange} 
                    className="absolute right-0  border rounded p-2 dark:bg-gray-800 dark:text-white "
                >
                    <option value="PNL_24h">24h</option>
                    <option value="PNL_week">Week</option>
                    <option value="PNL_month">Month</option>
                    <option value="PNL_year">Year</option>
                </select>
                    </tr>
                   
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-center dark:border-slate-700 p-4">
                                <div className="text-lg font-medium text-gray-900 dark:text-white">{index + 1}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                <img src={item.logo} alt={item.name} className="h-8 w-8 rounded-full mr-2" />
                                <div>
                                    <div className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 dark:text-white">{item.price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 dark:text-white">{item.marketCap}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`text-lg ${item[selectedFilter].includes('+') ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                                    {item[selectedFilter]}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BestPerformingTable;
