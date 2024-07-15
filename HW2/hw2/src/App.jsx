// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { connectWallet } from './utils/metamask';

function App() {
  const [account, setAccount] = useState(null);

  const handleConnectWallet = async () => {
    const signer = await connectWallet();
    if (signer) {
      const address = await signer.getAddress();
      setAccount(address);
    }
  };

  return (
    <div>
      <NavBar onConnect={handleConnectWallet} />
      <div className="p-4">
        {account ? <p>Connected Account: {account}</p> : <p>Please connect your wallet.</p>}
      </div>
    </div>
  );
}

export default App;
