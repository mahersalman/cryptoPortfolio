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
          <div className="lg:m-20 lg:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
              Choose Way To Connect 
            </h1>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
              <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-6  w-full hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md transition duration-300">
                <WalletConnectComponent handleConnect={handleConnect} />
              </div>
              <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-6  w-full hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md transition duration-300 ">
                <SearchUsingAddress handleConnect={handleConnect} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Banner;
