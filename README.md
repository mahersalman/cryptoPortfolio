# Personal Crypto Portfolio Tracker

## Overview
The **Personal Crypto Portfolio Tracker** is a React-based web application that allows users to monitor their cryptocurrency portfolios. Users can connect their crypto wallets, view detailed information about their assets, track real-time prices, and analyze the performance of their portfolio over time.

## Key Features
- **Crypto Wallet Connection**: Connect your wallet directly through WalletConnect or by searching via wallet address.
- **Multi-Network Support**: Works with both Ethereum and Binance Smart Chain networks.
- **Portfolio Overview**: View all tokens in your wallet, track performance, and see a detailed USD value of your portfolio.
- **Transaction History**: Access and review the complete history of transactions made through the connected wallet.
- **Top Performing Coins**: View a table of the top 10 best-performing coins in your wallet, with filtering options (daily, weekly, monthly).

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend APIs**:
  - **CoinGecko API**: For real-time price data and token icons.
  - **Ethplorer API**: For wallet data such as balances and transaction history.
  - **WalletConnect (Wagmi)**: For secure wallet connections.
- **Deployment**: Vercel

## Project Architecture
### Frontend
- **ReactJS**: Used to build the UI and manage application state.
- **Tailwind CSS**: Applied for fast and responsive UI styling.

### Backend/API Integration
- **CoinGecko API**: Fetches real-time cryptocurrency prices and icons.
- **Ethplorer API**: Retrieves wallet data (tokens and transactions).
- **WalletConnect (Wagmi)**: Facilitates wallet connection for users to interact with dApps.

## Project Structure
- `components/`: Contains all React components such as `AssetsTable`, `WalletConnectComponent`, `DistributionChart`, etc.
- `config/`: Configuration files for WalletConnect.
- `icons/`: All icons used in the project.
- `styles/`: Tailwind CSS files for styling.
- `utils/`: Utility functions for wallet management, API integrations, and data processing.

## Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/mahersalman/cryptoPortfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```
4. The application will be running locally at `http://localhost:5173/`.

## Deployment
The project is deployed on Vercel, providing a fast and reliable hosting solution with continuous deployment integration. Any new updates to the codebase will be automatically deployed.

## API Integration
- **CoinGecko API**: Fetches token prices and icons for accurate real-time market information.
- **Ethplorer API**: Retrieves wallet balances and transaction histories.
- **WalletConnect (Wagmi)**: Facilitates secure connections to Ethereum and Binance Smart Chain wallets.

