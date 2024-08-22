import { useState, useEffect } from 'react';

// Custom hook to fetch coin icon URL
export const useCoinIcon = (coinId) => {
  const [iconUrl, setIconUrl] = useState(null); // State to store icon URL
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchCoinDetails = async () => {
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
    };

    fetchCoinDetails();
  }, [coinId]);

  return { iconUrl, error };
};
