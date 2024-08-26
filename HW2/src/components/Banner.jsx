import React, { useContext } from "react";
import Carousel from "./Carousel";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import { darkTheme, lightTheme } from "../utils/classes"; // Import theme objects
import SearchUsingAddress from "./SearchUsingAddress";
function Banner() {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const themeClasses = theme === 'dark' ? darkTheme : lightTheme; // Choose the correct theme

  return (
    <div className={themeClasses.bannerBackground}>
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8">
        <div>
          <h2 className={themeClasses.gradientText}>
            The Ultimate <span className={themeClasses.bannerTextColor}>Crypto Portfolio Tracker</span>
          </h2>
        </div>
        
        <div className="w-full flex justify-center items-center mb-6">
          <Carousel />
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className={themeClasses.subtitleTextColor}>
            Connect Your Hardware Wallet, Binance, Coinbase, MetaMask, Trust Wallet, And Any Other Crypto Platforms To CryptoTrack In Just A Few Clicks.
          </h3>
          <br/>
            <h3>OR </h3><br/>
            <SearchUsingAddress/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
