import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { getAutoplayInterval, generateCarouselItems, responsive } from '../utils/carouselUtils'; 
import { fetchTrendingCoins } from '../utils/coinGecko';
/**
 * Carousel component displays a carousel of trending cryptocurrencies.
 * @returns {JSX.Element} The rendered Carousel component.
 */
const Carousel = () => {
  const [trending, setTrending] = useState([]); 
  const [autoplayInterval, setAutoplayInterval] = useState(getAutoplayInterval(window.innerWidth)); 

  useEffect(() => {
    /**
     * Fetches trending coins data and updates the state.
     * Also sets up a resize event listener to adjust autoplay speed based on screen size.
     */
    fetchTrendingCoins("USD", setTrending); 

    const handleResize = () => {
      setAutoplayInterval(getAutoplayInterval(window.innerWidth));
    };
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = generateCarouselItems(trending);

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
