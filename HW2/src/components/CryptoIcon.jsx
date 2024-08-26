import React from 'react';
import { useCoinIcon } from './useCoinIcon'; // Adjust the path as necessary

function CryptoIcon({ coinId }) {
  const { iconUrl, error } = useCoinIcon(coinId);

  if (error) {
    return null;
  }

  if (iconUrl === null) {
    return null;
  }

  return <img src={iconUrl} alt={`${coinId} icon`} />;
}

export default CryptoIcon;
