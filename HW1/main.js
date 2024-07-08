document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btnTheme").addEventListener("click",function (){
        document.documentElement.classList.toggle("dark")
    })
    // Distribution Chart
    const distributionCtx = document.getElementById('distributionChart').getContext('2d');
    new Chart(distributionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Ethereum', 'Bitcoin', 'Litecoin', 'Other'],
        datasets: [{
          data: [39, 28, 21, 12],
          backgroundColor: ['#627eea', '#f7931a', '#345d9d', '#2775ca'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  

  
    // Top Assets
    const assets = [
      { name: 'Ethereum', symbol: 'ETH', amount: '5', value: '$3,000', change: '+2.5%' },
      { name: 'Bitcoin', symbol: 'BTC', amount: '0.5', value: '$4,000', change: '-1.2%' },
      { name: 'Litecoin', symbol: 'LTC', amount: '10', value: '$1,000', change: '+3.1%' }
    ];
    const topAssetsContainer = document.getElementById('topAssets');
    assets.forEach(asset => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold">${asset.name} (${asset.symbol})</div>
          <div class="text-right">
            <div class="text-xl font-bold">${asset.amount}</div>
            <div class="text-sm text-gray-400">${asset.value}</div>
            <div class="${asset.change.includes('-') ? 'text-red-400' : 'text-green-400'}">${asset.change}</div>
          </div>
        </div>
      `;
      topAssetsContainer.appendChild(li);
    });
  
    // Price Updates
    const priceUpdates = [
      { name: 'Ethereum', symbol: 'ETH', price: 2000, change: 1.5 },
      { name: 'Bitcoin', symbol: 'BTC', price: 30000, change: -0.8 },
      { name: 'Litecoin', symbol: 'LTC', price: 150, change: 2.3 },
      { name: 'Cardano', symbol: 'ADA', price: 1.2, change: 5.0 },
    ];
    const priceUpdatesContainer = document.getElementById('priceUpdates');
    priceUpdates.forEach(update => {
      const div = document.createElement('div');
      div.className = 'glassmorphism p-4';
      div.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-semibold">${update.name}</span>
          <span class="text-gray-400">${update.symbol}</span>
        </div>
        <div class="mt-2">
          <div class="text-xl font-bold">$${update.price.toFixed(2)}</div>
          <div class="${update.change < 0 ? 'text-red-400' : 'text-green-400'}">${update.change}%</div>
        </div>
      `;
      priceUpdatesContainer.appendChild(div);
    });
  
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Portfolio Value',
          data: [60000, 62000, 58000, 61000, 64000, 66000, 70000],
          borderColor: '#FFA500',
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
          borderWidth: 2,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            }
          }
        }
      }
    });

    //Assets Table
    const cryptoData = [
        {
            name: 'USDT',
            fullName: 'TetherUS',
            balance: '897.5',
            holdingNetwork: 'Ethereum',
            averageCost: '$1',
            todaysPnl: '0%',
            coinPrice: '$1',
            logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg'
        },
        {
            name: 'BTC',
            fullName: 'Bitcoin',
            balance: '2',
            holdingNetwork: 'Bitcoin',
            averageCost: '$30,000',
            todaysPnl: '5%',
            coinPrice: '$35,000',
            logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg'
        },
        {
            name: 'ETH',
            fullName: 'Ethereum',
            balance: '10',
            holdingNetwork: 'Ethereum',
            averageCost: '$2,000',
            todaysPnl: '3%',
            coinPrice: '$2,200',
            logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg'
        },
        {
            name: 'BNB',
            fullName: 'Binance Coin',
            balance: '20',
            holdingNetwork: 'Binance Smart Chain',
            averageCost: '$300',
            todaysPnl: '2%',
            coinPrice: '$320',
            logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg'
        },
        {
            name: 'USDC',
            fullName: 'USD Coin',
            balance: '1500',
            holdingNetwork: 'Ethereum',
            averageCost: '$1',
            todaysPnl: '0%',
            coinPrice: '$1',
            logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg'
        },
        {
            name: 'XRP',
            fullName: 'XRP',
            balance: '5000',
            holdingNetwork: 'Ripple',
            averageCost: '$0.5',
            todaysPnl: '1%',
            coinPrice: '$0.52',
            logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'
        },
        {
            name: 'ADA',
            fullName: 'Cardano',
            balance: '8000',
            holdingNetwork: 'Cardano',
            averageCost: '$0.4',
            todaysPnl: '4%',
            coinPrice: '$0.42',
            logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg'
        },
        {
            name: 'SOL',
            fullName: 'Solana',
            balance: '300',
            holdingNetwork: 'Solana',
            averageCost: '$40',
            todaysPnl: '6%',
            coinPrice: '$45',
            logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg'
        },
        {
            name: 'DOGE',
            fullName: 'Dogecoin',
            balance: '10000',
            holdingNetwork: 'Dogecoin',
            averageCost: '$0.1',
            todaysPnl: '5%',
            coinPrice: '$0.11',
            logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg'
        },
        {
            name: 'DOT',
            fullName: 'Polkadot',
            balance: '1000',
            holdingNetwork: 'Polkadot',
            averageCost: '$15',
            todaysPnl: '4%',
            coinPrice: '$16',
            logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg'
        }
    ];
    

    function generateTableRow(data) {
        return `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap flex items-center">
                    <img src="${data.logo}" alt="${data.name}" class="h-8 w-8 rounded-full mr-2">
                    <div>
                        <div class="text-lg font-medium text-gray-900 dark:text-white">${data.name}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">${data.fullName}</div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.balance}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.holdingNetwork}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.averageCost}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-500 dark:text-white">${data.todaysPnl}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-500 dark:text-white">${data.coinPrice}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-500 dark:text-white">
                        <img src="${data.sparkline}" alt="${data.name}-7d-price-graph" class="h-auto w-auto mr-auto">
                    </div>
                </td>
            </tr>
        `;
    }

    function populateTable() {
        const tableBody = document.getElementById('cryptoTableBody');
        const assetTable = document.getElementById('AssetsTable');
        assetTable.classList.remove('hidden');
        tableBody.innerHTML = ''; // Clear the table body before populating
        cryptoData.forEach(data => {
            tableBody.innerHTML += generateTableRow(data);
        });
    }

    document.getElementById('assetsBtnTable').addEventListener('click', populateTable);

  });
  

