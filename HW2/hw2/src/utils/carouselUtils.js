// carouselUtils.js

import axios from "axios";

// Utility function to fetch trending coins data from the API
export const fetchTrendingCoins = async (currency, setTrending) => {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets`,
      {
        params: {
          vs_currency: currency,
          order: "gecko_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
          price_change_percentage: "24h",
        },
      }
    );
    setTrending(data); // Update state with fetched data
  } catch (error) {
    console.error("Error fetching trending coins: ", error);
  }
};

// Utility function to get the appropriate autoplay interval based on screen size
export const getAutoplayInterval = (width) => {
  return width < 512 ? 2500 : 1500; // Slower autoplay on smaller screens
};
