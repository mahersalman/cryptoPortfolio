import React, { useEffect, useState } from 'react';

function CryptoIcon({ coinId }) {
  const [iconUrl, setIconUrl] = useState(null); // Initialize with null for no icon
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    async function fetchCoinDetails() {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setIconUrl(data.image.small || null); // Use 'thumb', 'small', or 'large', or null if not available
      } catch (err) {
        console.error('Error fetching coin details:', err);
        setError(err);
        setIconUrl(null); // Set iconUrl to null in case of an error
      }
    }
    
    fetchCoinDetails();
  }, [coinId]);

  if (error) {
    // Optionally, you could render something else if there's an error
    return <></>;
  }

  if (iconUrl === null) {
    // Render null or a placeholder if no icon is available
    return null;
  }

  return <img src={iconUrl} alt={`${coinId} icon`} />;
}

export default CryptoIcon;
