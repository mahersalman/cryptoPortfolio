import React, { useState } from 'react';
import axios from 'axios';

const GetAssets = (address) => {
  const tokens = {
    "USDT": {
      name: "Tether",
      symbol: "USDT",
      contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    "USDC": {
      name: "USD Coin",
      symbol: "USDC",
      contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    "DAI": {
      name: "Dai",
      symbol: "DAI",
      contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    },
    "WBTC": {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      contractAddress: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
    },
    "UNI": {
      name: "Uniswap",
      symbol: "UNI",
      contractAddress: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
    },
    "LINK": {
      name: "Chainlink",
      symbol: "LINK",
      contractAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
    },
    "MKR": {
      name: "Maker",
      symbol: "MKR",
      contractAddress: "0x9f8F72aA9304c8B593d555F12ef6589cC3A579A2"
    },
    "AAVE": {
      name: "Aave",
      symbol: "AAVE",
      contractAddress: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DdAe9"
    },
    "SUSHI": {
      name: "SushiSwap",
      symbol: "SUSHI",
      contractAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    },
    "COMP": {
      name: "Compound",
      symbol: "COMP",
      contractAddress: "0xc00e94Cb662C3520282E6f5717214004A7f26888"
    }
  };


  return (
    <div>
     
    </div>
  );
};

export default GetAssets;






