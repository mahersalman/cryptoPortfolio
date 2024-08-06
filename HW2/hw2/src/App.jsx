import React, { useState, useEffect } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';


//      WalletConnect Confirguration
// 0. Setup queryClient
const queryClient = new QueryClient()
// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '3bc485fc6392a8539e456890061ed1c9'
// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'http://localhost:1743',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})
// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
//      End - WalletConnect Confirguration



function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/WalletPage');
  };

  return (
  <div className="bg-home-page bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center">
    <div className="text-center mb-4">
      <h1 className="text-yellow-500 text-4xl font-bold">Welcome</h1>
    </div>
    <div><w3m-button className="bg-center" /></div>
    <button 
        onClick={handleClick} 
        className="bg-yellow-500 flex text-white w-12 h-12 rounded-md hover:bg-yellow-600 focus:ring-yellow-400"
      >
        Try Demo
      </button>
  </div>
  );

  };

export default App;


 