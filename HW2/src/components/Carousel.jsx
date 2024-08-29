import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselStyle } from "../styles/CarouselStyle"; // Import unified theme classes
import { fetchTrendingCoins, getAutoplayInterval } from '../utils/carouselUtils'; // Import utility functions

// Component to display a carousel of trending cryptocurrencies
const Carousel = () => {
  //const { theme } = useContext(ThemeContext); // Access theme from context
  const [trending, setTrending] = useState([]); // State to store trending coins data
  const [autoplayInterval, setAutoplayInterval] = useState(getAutoplayInterval(window.innerWidth)); // Default autoplay interval based on screen size

  // Fetch trending coins data when the component mounts
  useEffect(() => {
    fetchTrendingCoins("USD", setTrending); // Fetch data and update state

    // Adjust autoplay speed based on screen size
    const handleResize = () => {
      setAutoplayInterval(getAutoplayInterval(window.innerWidth)); // Update autoplay interval based on screen size
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate carousel items based on the fetched data
  const items = trending.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0; // Determine if the coin's price increased

    return (
      <div
        key={coin.id}
        className={CarouselStyle.coinId}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          className={CarouselStyle.coinImage}
        />
        <span className="uppercase">
          {coin?.symbol.toUpperCase()} &nbsp;
          <span
            className={`font-semibold ${
              profit ? "text-green-500" : "text-red-500"
            }`}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span className="text-lg font-semibold">
          ${coin?.current_price.toFixed(2)}
        </span>
      </div>
    );
  });

  // Responsive settings for the carousel
  const responsive = {
    0: {
      items: 2, // Show 2 items on small screens
    },
    512: {
      items: 3, // Show 3 items on medium screens
    },
    1024: {
      items: 5, // Show 5 items on large screens
    },
  };

  return (
    <div className="py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayInterval={autoplayInterval}
          animationDuration={1000}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </div>
  );
};

export default Carousel;
