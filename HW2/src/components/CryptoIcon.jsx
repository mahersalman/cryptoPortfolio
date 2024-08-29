import React from 'react';
import { useCoinIcon } from './useCoinIcon';

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
