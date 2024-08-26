
// Utility function to fetch trending coins data from the API
export const fetchTrendingCoins = async (currency, setTrending) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setTrending(data); // Update state with fetched data
  } catch (error) {
    console.error("Error fetching trending coins: ", error);
  }
};


// Utility function to get the appropriate autoplay interval based on screen size
export const getAutoplayInterval = (width) => {
  return width < 512 ? 2500 : 1500; // Slower autoplay on smaller screens
};
