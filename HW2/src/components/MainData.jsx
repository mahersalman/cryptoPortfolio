import React , {useState , useEffect} from "react";
import WalletFees from "./WalletFees";
import DistributionChart from "./DistributionChart";

function MainData({address, tokens}) {
  const [totalBalance, setTotalBalance] = useState(0);
  const [topBalances, setTopBalances] = useState([]);

  useEffect(() => {
    const calculateData = () => {
      const dataArray = tokens.map(([symbol, crypto]) => ({
        symbol,
        balanceInUsd: crypto.balanceInUsd,
      }));

      // Calculate total balance
      const total = dataArray.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);
      setTotalBalance(total);

      // Sort tokens by balanceInUsd in descending order
      const sortedData = dataArray.sort((a, b) => b.balanceInUsd - a.balanceInUsd);

      // Get top 3 tokens
      const top3 = sortedData.slice(0, 3);

      // Calculate the balance of "Other" tokens
      const otherTokens = sortedData.slice(3);
      const otherBalanceInUsd = otherTokens.reduce((sum, crypto) => sum + crypto.balanceInUsd, 0);

      // If there are more than 3 tokens and "Other" has a balance, include it
      if (otherTokens.length > 0 && otherBalanceInUsd > 0) {
        top3.push({ symbol: 'Other', balanceInUsd: otherBalanceInUsd });
      }
      setTopBalances(top3);
    };

    if (tokens) {
      calculateData();
    }
  }, [tokens]);

  return (
    <div className="flex space-x-4">
        <div className="p-4 bg-gray-800 rounded-lg text-blue-50 w-64 h-80">
            Balance (USD):<br/> ${totalBalance.toFixed(2)}
        </div>
        <div className="p-4 bg-gray-800 rounded-lg text-blue-50 w-64 h-80">
            {<WalletFees address={address}/>}
        </div>
        <div className="p-4 bg-gray-800 rounded-lg text-blue-50 flex-grow h-80">
            <DistributionChart tokens={topBalances}/>
        </div>
    </div>
  );
}

export default MainData;



