import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

// Define your styles using the makeStyles hook from MUI
const useStyles = (theme) =>
  makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
    },
    header: {
      marginBottom: "20px",
    },
    content: {
      width: "100%",
      maxWidth: "800px",
      backgroundColor: theme === "dark" ? "#444" : "#f9f9f9",
      padding: "20px",
      borderRadius: "8px",
    },
  });

const CoinPage = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const classes = useStyles(theme)();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching the coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  if (!coinData) return <LinearProgress />;

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.header}>
        {coinData.name}
      </Typography>
      <div className={classes.content}>
        <Typography variant="body1">
          Symbol: {coinData.symbol.toUpperCase()}
        </Typography>
        <Typography variant="body1">
          Current Price: ${coinData.market_data.current_price.usd}
        </Typography>
        <Typography variant="body1">
          Market Cap: ${coinData.market_data.market_cap.usd.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          24h High: ${coinData.market_data.high_24h.usd}
        </Typography>
        <Typography variant="body1">
          24h Low: ${coinData.market_data.low_24h.usd}
        </Typography>
        
      </div>
    </div>
  );
};

export default CoinPage;
