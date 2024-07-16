import React from 'react';

const MyWalletAddress = ({ walletAddress }) => {
  return (
    <div className="w-full flex items-center justify-center mt-10 mb-10">
      <div className="text-4xl flex items-center justify-center border-4 border-black rounded-md bg-blue-500 p-4">
        <h2 className="font-bold">
          Connected Account: 
        </h2> 
        {walletAddress ? walletAddress : 'Not Connected'}
      </div>
    </div>
  );
};

export default MyWalletAddress;


