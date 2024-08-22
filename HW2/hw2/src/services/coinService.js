import axios from "axios";

// Factory function to generate the API URL for fetching coin data
const createCoinDataUrl = (coinId) => {
  return `https://api.coingecko.com/api/v3/coins/${coinId}`;
};

// Function to fetch coin data from the API
export const fetchCoinData = async (coinId) => {
  try {
    const url = createCoinDataUrl(coinId);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching the coin data:", error);
    return null; // Return null in case of an error
  }
};
