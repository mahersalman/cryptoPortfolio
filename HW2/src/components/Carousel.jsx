import React, { useEffect, useState, useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import { darkTheme, lightTheme } from "../utils/classes"; // Import theme objects
import { fetchTrendingCoins, getAutoplayInterval } from '../utils/carouselUtils'; // Import utility functions

// Component to display a carousel of trending cryptocurrencies
const Carousel = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context
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
        className={`flex flex-col items-center justify-center space-x-0 sm:space-x-4 ${
          theme === "dark" ? darkTheme.textWhite : lightTheme.textBlack
        }`}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mb-2 object-contain"
        />
        <span className="uppercase">
          {coin?.symbol.toUpperCase()} &nbsp;
          <span
            className={`font-semibold ${
              profit ? darkTheme.textGreen : darkTheme.textRed
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
