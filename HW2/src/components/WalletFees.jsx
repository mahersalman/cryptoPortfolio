import React, { useState,useEffect } from 'react';

const ethApiKey = 'I3KJY4E13M9VBJWASHMS7FGGHREBR3D8VV';
const bnbApiKey = 'BWHFXFN4IDYTRDVW8W3AV9E3Y96JQSJIJ7';

async function fetchFees(address){
    const ethFees = await getTotalFees('eth', address, ethApiKey);
    const bnbFees = await getTotalFees('bnb', address, bnbApiKey);
    return [ethFees , bnbFees]
}

async function getTotalFees(network, address, apiKey) {
    const url = network === 'eth' 
        ? `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
        : `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const transactions = data.result;
        let totalFees = 0;
        transactions.forEach(tx => {
            const gasUsed = parseInt(tx.gasUsed);
            const gasPrice = parseInt(tx.gasPrice);
            const fee = gasUsed * gasPrice;
            totalFees += fee;
        });

        return totalFees / (10 ** 18); 
    } catch (error) {
        console.error(`Error fetching fees for ${network}:`, error);
        return 0;
    }
};

async function getBNB() {
    try {    
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb'
            }
        };

        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin', options);
        const data = await response.json();

        const currentPrice = data[0].current_price;

        return currentPrice;
    } catch (error) {
        console.error('Error fetching BNB data:', error);
        return 0;
    }
}

async function getETH() {
    try {    
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-mNCEY3t9ZsvHKtmrpN4hQoPb'
            }
        };

        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum', options);
        const data = await response.json();

        const currentPrice = data[0].current_price;

        return currentPrice;
    } catch (error) {
        console.error('Error fetching BNB data:', error);
        return 0 ;
    }
}
function WalletFees ({address}) {
    const [ethFees,setEthFees] = useState(0);
    const [bnbFees,setBnbFees] = useState(0);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const ethPrice = await getETH();
                const bnbPrice = await getBNB();
                const [ethFee, bnbFee] = await fetchFees(address);
                setEthFees(ethPrice * ethFee);
                setBnbFees(bnbPrice * bnbFee);
            } catch (error) {
                console.log("Error : " ,error);
            } 
        };
        if (address) {
            fetchData();
        }
    },[address]);

    return (
        <>
        <div className="flex flex-col items-center justify-center h-32 p-4 bg-gray-800 rounded-lg text-blue-50 text-center">
            <div className="text-xl font-bold mb-2">
             Wallet Gas Fees
            </div>
            <div className="text-lg font-medium">
            Total fees in USD: <span className="font-semibold text-2xl">${(ethFees + bnbFees).toFixed(2)}</span>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center justify-center h-24 p-4 bg-gray-700 rounded-lg text-blue-50 text-center">
            <div className="text-md font-medium">ETH fees:</div>
            <div className="text-lg font-semibold">${ethFees.toFixed(2)}</div>
            </div>
            
            <div className="flex flex-col items-center justify-center h-24 p-4 bg-gray-700 rounded-lg text-blue-50 text-center">
            <div className="text-md font-medium">BNB fees:</div>
            <div className="text-lg font-semibold">${bnbFees.toFixed(2)}</div>
            </div>
        </div>
        </>

    );
};

export default WalletFees;
