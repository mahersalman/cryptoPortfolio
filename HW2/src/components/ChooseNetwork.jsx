import React, { useState } from 'react';
import ethIcon from '../icon/eth.png';
import bnbIcon from '../icon/bnb.png';
import { Menu } from '@headlessui/react';

const options = [
    { value: 'Ethereum', label: 'Ethereum', icon: ethIcon },
    { value: 'BNB Smart Chain', label: 'BNB Smart Chain', icon: bnbIcon },
];

function ChooseNetwork({ handleChangeNetwork }) {
    const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');

    const handleSelect = (network) => {
        setSelectedNetwork(network.label);
        handleChangeNetwork(network.value);
    };

    return (
        <div className="relative">
            <div className="flex justify-center font-semibold text-xl dark:text-white">
                Network : 
            </div>
            <Menu as="div" className="relative w-56">
                <Menu.Button className="flex items-center justify-between rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                    <div className="flex items-center">
                        <img
                            src={options.find(net => net.label === selectedNetwork)?.icon}
                            alt={selectedNetwork}
                            className="w-6 h-6 mr-2"
                        />
                        {selectedNetwork}
                    </div>
                    <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Menu.Button>
                <Menu.Items className="absolute z-10 mt-2 w-full max-w-lg rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                    <div className="py-1">
                        {options.map((network) => (
                            <Menu.Item key={network.value}>
                                {({ active }) => (
                                    <button
                                        onClick={() => handleSelect(network)}
                                        className={`flex items-center p-2 w-full text-left cursor-pointer ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                    >
                                        <img
                                            src={network.icon}
                                            alt={network.label}
                                            className="w-6 h-6 mr-2"
                                        />
                                        {network.label}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
}

export default ChooseNetwork;