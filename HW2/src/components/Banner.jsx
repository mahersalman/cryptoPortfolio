import React, { useContext } from "react";
import Carousel from "./Carousel";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import { BannerStyle } from "../styles/BannerStyle"; // Import unified theme classes
import WalletConnectComponent from "./WalletConnectComponent";
import SearchUsingAddress from "./SearchUsingAddress";

function Banner({ handleConnect }) {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <div className={BannerStyle.background}>
      <div className={BannerStyle.container}>
        <div>
          <h2 className={BannerStyle.gradientText}>
            The Ultimate <span className="text-black dark:text-white">Crypto Portfolio Tracker</span>
          </h2>
        </div>
        
        <div className="w-full flex justify-center items-center mb-6">
          <Carousel />
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className={BannerStyle.subtitleTextColor}>
            Connect Your Hardware Wallet, Binance, Coinbase, MetaMask, Trust Wallet, And Any Other Crypto Platforms To CryptoTrack In Just A Few Clicks.
          </h3>
          <div className="m-8 p-10 flex lg:flex-row sm:flex-col">
            <WalletConnectComponent handleConnect={handleConnect} />
            <SearchUsingAddress handleConnect={handleConnect}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
