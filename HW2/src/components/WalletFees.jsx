import React, { useState,useEffect } from 'react';

const ethApiKey = 'I3KJY4E13M9VBJWASHMS7FGGHREBR3D8VV';
const bnbApiKey = 'BWHFXFN4IDYTRDVW8W3AV9E3Y96JQSJIJ7';

async function fetchFees(address){
    const ethBnbPrice = await rateEthBnb();
    const ethFees = await getTotalFees('eth', address, ethApiKey);
    const bnbFees = await getTotalFees('bnb', address, bnbApiKey);
    return [ethFees*ethBnbPrice[0] , bnbFees*ethBnbPrice[1]]
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

        return totalFees / (10 ** 18); // Convert from Wei to Ether or BNB
    } catch (error) {
        console.error(`Error fetching fees for ${network}:`, error);
        return 0;
    }
};

async function rateEthBnb (){
    try{
    const ethToUsd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => data.ethereum.usd);
    
    const bnbToUsd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => data.binancecoin.usd);

    return [ethToUsd,bnbToUsd];
    }catch(error){
        console.error('Error fetching USD prices:', error);
        return [0,0];
    }
};

function WalletFees ({address}) {
    const [ethFees,setEthFees] = useState(0);
    const [bnbFees,setBnbFees] = useState(0);


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const [eth,bnb] = fetchFees(address);
                setEthFees(eth);
                setBnbFees(bnb);
            } catch (error) {
                console.log("Error : " ,error);
            } 
        };
        if (address) {
            fetchData();
        }
    },[address]);

    return (
        <div className='w-1/2 mx-auto p-4 bg-gray-800 bg-gray-700 mb-4 rounded-lg text-blue-50 relative w-64 h-64'>
            <h1>Wallet Gas Fees</h1>
            <div>
                <p>Total ETH fees: {ethFees.toFixed(3)} ETH</p>
                <p>Total BNB fees: {bnbFees.toFixed(3)} BNB</p>
                <p>Total fees in USD: ${ethFees+bnbFees}</p>
            </div>
        </div>
    );
};

export default WalletFees;
