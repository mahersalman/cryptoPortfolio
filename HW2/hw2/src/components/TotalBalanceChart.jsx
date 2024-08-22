import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the required components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function TotalBalanceChart({ tokens, theme }) {
  // Process and filter token data
  const validTokens = tokens.filter(token => token.tokenInfo.price);

  const processedTokens = validTokens.map(token => {
    const decimals = parseInt(token.tokenInfo.decimals, 10);
    const balance = parseFloat(token.balance) / Math.pow(10, decimals);
    return {
      label: token.tokenInfo.symbol || 'Unknown',
      balance: balance,
      price: token.tokenInfo.price.rate,
    };
  });

  const sortedTokens = processedTokens.sort((a, b) => b.balance - a.balance);
  const topTokens = sortedTokens.slice(0, 4);
  const othersBalance = sortedTokens.slice(4).reduce((sum, token) => sum + token.balance, 0);

  // Dynamic colors based on the theme
  const colors = theme === 'dark' ? 
    ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD'] : // Dark mode colors
    ['#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F']; // Light mode colors

  const chartData = {
    labels: [
      ...topTokens.map(token => token.label),
      'Others'
    ],
    datasets: [
      {
        label: 'Balance',
        data: [
          ...topTokens.map(token => token.balance),
          othersBalance
        ],
        backgroundColor: colors.map(color => `${color}99`), // Add transparency
        borderColor: colors,
        borderWidth: 2,
      },
    ],
  };

  const totalBalance = processedTokens.reduce((sum, token) => sum + (token.balance * token.price), 0);
  const othersBalanceInDollars = othersBalance * (sortedTokens[0]?.price || 0);
  const totalBalanceInDollars = totalBalance + othersBalanceInDollars;

  const options = {
    cutout: '60%',
    plugins: {
      datalabels: {
        color: theme === 'dark' ? '#FFFFFF' : '#000000',
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        font: {
          weight: 'bold',
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
      <div className="flex flex-col items-center justify-center p-6 rounded-3xl border-slate-400 dark:border-slate-700 bg-slate-400 dark:bg-gray-900 w-full lg:w-1/3">
        <h3 className="text-lg font-semibold mb-2 text-center">Total Balance:</h3>
        <div className="p-2 rounded-lg">
          <p className="text-2xl font-bold">${totalBalanceInDollars.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center glassmorphism p-6 rounded-3xl border-slate-400 dark:border-slate-700 bg-slate-400 dark:bg-gray-900 w-full lg:w-2/3">
        <h2 className="text-xl font-semibold mb-4 text-center">Portfolio Distribution</h2>
        <div className="w-full h-64">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default TotalBalanceChart;
