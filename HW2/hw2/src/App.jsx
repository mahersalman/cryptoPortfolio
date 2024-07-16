// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleAddressChange = (address) => {
    setWalletAddress(address);
  };

  return (
    <div>
      <NavBar onAddressChange={handleAddressChange} />
      {walletAddress && (
        <div className="text-xl">
          <strong>Connected Account:</strong> {walletAddress}
        </div>
      )}
    </div>
  );
}

export default App;
