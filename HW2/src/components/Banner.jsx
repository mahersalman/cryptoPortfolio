// src/components/Banner.js
import React, { useContext } from 'react';
import Carousel from './Carousel';
import { BannerStyle } from '../styles/BannerStyle'; // Import unified theme classes
import WalletConnectComponent from './WalletConnectComponent';
import SearchUsingAddress from './SearchUsingAddress';

/**
 * Banner component displays a promotional section with a carousel, a title, and connection options.
 * It provides two ways for users to connect to their crypto wallets: via WalletConnect and by searching using an address.
 * 
 * @param {Function} props.handleConnect - Function to handle wallet connection. This function is passed as a prop to 
 *   both `WalletConnectComponent` and `SearchUsingAddress` components, allowing them to trigger the connection process 
 *   when users interact with these components.
 * 
 * @returns {JSX.Element} The rendered Banner component.
 */
function Banner({ handleConnect }) {
  return (
    <div className={BannerStyle.background}>
      <div className={BannerStyle.container}>
        <div>
          <h2 className={BannerStyle.gradientText}>
            The Ultimate <span className={BannerStyle.textHighlight}>Crypto Portfolio Tracker</span>
          </h2>
        </div>
        
        <div className={BannerStyle.carouselContainer}>
          <Carousel />
        </div>
        
        <div className={BannerStyle.contentContainer}>
          <div className={BannerStyle.innerContainer}>
            <h1 className={BannerStyle.heading}>
              Choose Way To Connect
            </h1>
            <div className={BannerStyle.buttonContainer}>
              <div className={BannerStyle.button}>
                <WalletConnectComponent handleConnect={handleConnect} />
              </div>
              <div className={BannerStyle.button}>
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
