import React, { useState, useEffect } from 'react';
import { WalletFeesStyle } from '../styles/WalletFeesStyle'; // Adjust the path based on your project structure
import { fetchFees } from '../utils/feesUtils';
import { getETH, getBNB } from '../utils/coinGecko';
/**
 * WalletFees calculates and displays the total gas fees in USD for Ethereum and BNB transactions.
 * @param {Object} props - Component props.
 * @param {string} props.address - The wallet address to fetch fees for.
 * @returns {JSX.Element} The rendered WalletFees component.
 */
function WalletFees({ address }) {
    const [ethFees, setEthFees] = useState(0);
    const [bnbFees, setBnbFees] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ethPrice = await getETH();
                const bnbPrice = await getBNB();
                const [ethFee, bnbFee] = await fetchFees(address);

                setEthFees(ethPrice * ethFee);
                setBnbFees(bnbPrice * bnbFee);
            } catch (error) {
                console.log("Error: ", error);
            } 
        };
        if (address) {
            fetchData();
        }
    }, [address]);

    return (
        <>
            <div className={WalletFeesStyle.container}>
                <div className={WalletFeesStyle.header}>
                    Wallet Gas Fees
                </div>
                <div className={WalletFeesStyle.totalFees}>
                    Total fees in USD: <span className={WalletFeesStyle.totalAmount}>${(ethFees + bnbFees).toFixed(2)}</span>
                </div>
            </div>
            
            <div className={WalletFeesStyle.gridContainer}>
                <div className={WalletFeesStyle.feeBox}>
                    <div className={WalletFeesStyle.feeLabel}>ETH fees:</div>
                    <div className={WalletFeesStyle.feeAmount}>${ethFees.toFixed(2)}</div>
                </div>
                
                <div className={WalletFeesStyle.feeBox}>
                    <div className={WalletFeesStyle.feeLabel}>BNB fees:</div>
                    <div className={WalletFeesStyle.feeAmount}>${bnbFees.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}

export default WalletFees;
