import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

// Predefined list of token decimals
const tokenDecimals = {
    "USDT": 6,
    "DAI": 18,
    "LINK": 18,
};

function FetchTransactions({ address }) {
    const [normalTransactions, setNormalTransactions] = useState([]);
    const [internalTransactions, setInternalTransactions] = useState([]);
    const [erc20Transactions, setErc20Transactions] = useState([]);
    const [erc721Transactions, setErc721Transactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const responses = await Promise.all([
                    fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96`),
                    fetch(`https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96`),
                    fetch(`https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96`),
                    fetch(`https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZDQB9JAJ9GCPPSB5XYU4H1VWY295XM3W96`),
                ]);

                const data = await Promise.all(responses.map(response => response.json()));

                if (data[0].status === "1") setNormalTransactions(data[0].result);
                if (data[1].status === "1") setInternalTransactions(data[1].result);
                if (data[2].status === "1") setErc20Transactions(data[2].result);
                if (data[3].status === "1") setErc721Transactions(data[3].result);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [address]);

    const formatTokenValue = (value, tokenName) => {
        const decimals = tokenDecimals[tokenName] || 18; // Default to 18 decimals if not found
        return ethers.utils.formatUnits(value, decimals);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Transactions for {address}</h2>

            <h3 className="text-lg font-semibold mb-2">Normal Transactions</h3>
            <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Hash</th>
                        <th className="border border-gray-300 p-2">From</th>
                        <th className="border border-gray-300 p-2">To</th>
                        <th className="border border-gray-300 p-2">Value (ETH)</th>
                        <th className="border border-gray-300 p-2">Block Number</th>
                    </tr>
                </thead>
                <tbody>
                    {normalTransactions.map(tx => (
                        <tr key={tx.hash}>
                            <td className="border border-gray-300 p-2">{tx.hash}</td>
                            <td className="border border-gray-300 p-2">{tx.from}</td>
                            <td className="border border-gray-300 p-2">{tx.to}</td>
                            <td className="border border-gray-300 p-2">{ethers.utils.formatEther(tx.value)}</td>
                            <td className="border border-gray-300 p-2">{tx.blockNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-2">Internal Transactions</h3>
            <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Hash</th>
                        <th className="border border-gray-300 p-2">From</th>
                        <th className="border border-gray-300 p-2">To</th>
                        <th className="border border-gray-300 p-2">Value (ETH)</th>
                        <th className="border border-gray-300 p-2">Block Number</th>
                    </tr>
                </thead>
                <tbody>
                    {internalTransactions.map(tx => (
                        <tr key={tx.hash}>
                            <td className="border border-gray-300 p-2">{tx.hash}</td>
                            <td className="border border-gray-300 p-2">{tx.from}</td>
                            <td className="border border-gray-300 p-2">{tx.to}</td>
                            <td className="border border-gray-300 p-2">{ethers.utils.formatEther(tx.value)}</td>
                            <td className="border border-gray-300 p-2">{tx.blockNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-2">ERC-20 Token Transfers</h3>
            <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Hash</th>
                        <th className="border border-gray-300 p-2">From</th>
                        <th className="border border-gray-300 p-2">To</th>
                        <th className="border border-gray-300 p-2">Value</th>
                        <th className="border border-gray-300 p-2">Token Name</th>
                        <th className="border border-gray-300 p-2">Block Number</th>
                    </tr>
                </thead>
                <tbody>
                    {erc20Transactions.map(tx => (
                        <tr key={tx.hash}>
                            <td className="border border-gray-300 p-2">{tx.hash}</td>
                            <td className="border border-gray-300 p-2">{tx.from}</td>
                            <td className="border border-gray-300 p-2">{tx.to}</td>
                            <td className="border border-gray-300 p-2">{formatTokenValue(tx.value, tx.tokenName)}</td>
                            <td className="border border-gray-300 p-2">{tx.tokenName}</td>
                            <td className="border border-gray-300 p-2">{tx.blockNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-2">ERC-721 Token Transfers (NFTs)</h3>
            <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Hash</th>
                        <th className="border border-gray-300 p-2">From</th>
                        <th className="border border-gray-300 p-2">To</th>
                        <th className="border border-gray-300 p-2">Token ID</th>
                        <th className="border border-gray-300 p-2">Token Name</th>
                        <th className="border border-gray-300 p-2">Block Number</th>
                    </tr>
                </thead>
                <tbody>
                    {erc721Transactions.map(tx => (
                        <tr key={tx.hash}>
                            <td className="border border-gray-300 p-2">{tx.hash}</td>
                            <td className="border border-gray-300 p-2">{tx.from}</td>
                            <td className="border border-gray-300 p-2">{tx.to}</td>
                            <td className="border border-gray-300 p-2">{tx.tokenID}</td>
                            <td className="border border-gray-300 p-2">{tx.tokenName}</td>
                            <td className="border border-gray-300 p-2">{tx.blockNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FetchTransactions;
