import React, { useState } from 'react';

const networks = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: '/node_modules/cryptocurrency-icons/svg/color/eth.svg' // Update with actual path
  },
  {
    name: 'Binance Smart Chain',
    symbol: 'BNB',
    image: '/node_modules/cryptocurrency-icons/svg/color/bnb.svg' // Update with actual path
  },
  // Add more networks as needed
];

const MyWalletAddress = ({ walletAddress }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);

  const handleNetworkChange = (event) => {
    const network = networks.find(net => net.symbol === event.target.value);
    setSelectedNetwork(network);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 mb-10">
      <div className="text-4xl flex items-center justify-center border-4 border-black rounded-md bg-blue-500 p-4 mb-4">
        <h2 className="font-bold mr-2">
          Connected Account: 
        </h2> 
        {walletAddress ? walletAddress : 'Not Connected'}
      </div>
      <div className="flex items-center">
        <img src={selectedNetwork.image} alt={selectedNetwork.name} className="h-8 w-8 mr-2" />
        <select
          value={selectedNetwork.symbol}
          onChange={handleNetworkChange}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white w-64"
        >
          {networks.map(network => (
            <option key={network.symbol} value={network.symbol}>
              {network.name} ({network.symbol})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MyWalletAddress;
