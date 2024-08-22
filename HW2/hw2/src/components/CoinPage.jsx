import React, { useEffect, useState, useContext } from "react";
import { LinearProgress, Typography } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext"; // Import ThemeContext
import { fetchCoinData } from "../services/coinService"; // Import data fetching function
import { darkTheme, lightTheme } from "../utils/classes"; // Import theme classes

const CoinPage = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const themeClasses = theme === "dark" ? darkTheme : lightTheme; // Select the appropriate theme

  const coinData = useCoinData("bitcoin"); // Use custom hook to fetch Bitcoin data

  if (!coinData) return <LinearProgress />;

  return (
    <div className={themeClasses.container}>
      <Typography variant="h2" className={themeClasses.header}>
        {coinData.name}
      </Typography>
      <div className={themeClasses.content}>
        <Typography variant="body1" className={themeClasses.bodyText}>
          Symbol: {coinData.symbol.toUpperCase()}
        </Typography>
        <Typography variant="body1" className={themeClasses.bodyText}>
          Current Price: ${coinData.market_data.current_price.usd}
        </Typography>
        <Typography variant="body1" className={themeClasses.bodyText}>
          Market Cap: ${coinData.market_data.market_cap.usd.toLocaleString()}
        </Typography>
        <Typography variant="body1" className={themeClasses.bodyText}>
          24h High: ${coinData.market_data.high_24h.usd}
        </Typography>
        <Typography variant="body1" className={themeClasses.bodyText}>
          24h Low: ${coinData.market_data.low_24h.usd}
        </Typography>
      </div>
    </div>
  );
};

export default CoinPage;
