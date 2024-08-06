import React, { useState, useEffect } from 'react';

const BestPerformingTable = () => {
    const [selectedFilter, setSelectedFilter] = useState('diff');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const ethplorerAPIKey = 'EK-nY7ou-saWnY7s-ooUEm';
    const address = '0x974caa59e49682cda0ad2bbe82983419a2ecc400';
    const baseImageUrl = '/node_modules/cryptocurrency-icons/svg/color/'; // Base URL for token images

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${ethplorerAPIKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                const tokens = json.tokens.map(token => ({
                    name: token.tokenInfo?.name || 'N/A',
                    symbol: token.tokenInfo?.symbol || 'N/A',
                    price: token.tokenInfo?.price?.rate ? parseFloat(token.tokenInfo.price.rate).toFixed(3) : 'N/A',
                    marketCap: token.tokenInfo?.price?.marketCapUsd ? parseFloat(token.tokenInfo.price.marketCapUsd).toFixed(3) : 'N/A',
                    diff: token.tokenInfo?.price?.diff ? parseFloat(token.tokenInfo.price.diff).toFixed(3) : '0.000',
                    diff7d: token.tokenInfo?.price?.diff7d ? parseFloat(token.tokenInfo.price.diff7d).toFixed(3) : '0.000',
                    diff30d: token.tokenInfo?.price?.diff30d ? parseFloat(token.tokenInfo.price.diff30d).toFixed(3) : '0.000',
                    logo: token.tokenInfo?.symbol ? `${baseImageUrl}${token.tokenInfo.symbol.toLowerCase()}.svg` : null
                }));
                setData(tokens);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [address, ethplorerAPIKey]);

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const sortedData = [...data].sort((a, b) => b[selectedFilter] - a[selectedFilter]).slice(0, 10);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="w-full overflow-x-auto border rounded-3xl border-slate-400 dark:border-slate-700 p-4">
            <div className="flex justify-end mb-4">
                <select 
                    value={selectedFilter} 
                    onChange={handleFilterChange} 
                    className="border rounded p-2 dark:bg-gray-800 dark:text-white"
                    style={{ minWidth: '100px' }}
                >
                    <option value="diff">24h</option>
                    <option value="diff7d">Week</option>
                    <option value="diff30d">Month</option>
                </select>
            </div>
            <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">#</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Market Cap</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">PNL</th>
                    </tr>
                </thead>
                <tbody id="cryptoTableBody" className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                <div className="text-lg font-medium text-gray-900 dark:text-white">{index + 1}</div>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap flex items-center justify-center">
                                {item.logo ? (
                                    <img src={item.logo} alt={item.name} className="h-8 w-8 rounded-full mr-2" onError={(e) => { e.target.onerror = null; e.target.src = ''; }} />
                                ) : (
                                    <div className="h-8 w-8 rounded-full mr-2"></div>
                                )}
                                <div className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</div>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                <div className="text-lg text-gray-900 dark:text-white">{item.price}</div>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                <div className="text-lg text-gray-900 dark:text-white">{item.marketCap}</div>
                            </td>
                            <td className="px-6 py-4 text-center whitespace-nowrap">
                                <div className={`text-lg ${parseFloat(item[selectedFilter]) > 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                                    {item[selectedFilter]}%
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
