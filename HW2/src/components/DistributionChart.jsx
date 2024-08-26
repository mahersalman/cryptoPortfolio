import React, {useState} from "react";
import { AgCharts } from 'ag-charts-react';

function DistributionChart({tokens}){
    const [options, setOptions] = useState({
        data: tokens,
        title: {
          text: "Portfolio Composition",
        },
        series: [
          {
            type: "donut",
            calloutLabelKey: "symbol",
            angleKey: "balanceInUsd",
            innerRadiusRatio: 0.9,
            innerLabels: [
              {
                text: "Total Investment",
                fontWeight: "bold",
              },
              {
                text: "$100,000",
                spacing: 4,
                fontSize: 48,
                color: "green",
              },
            ],
            innerCircle: {
              fill: "#c9fdc9",
            },
          },
        ],
      });

    return (
    <div className='text-blue-50 text-3xl'>
        <h3>Top Tokens by USD Balance:</h3>
        <ul>
            {tokens.map(({ symbol, balanceInUsd }) => (
            <li key={symbol}>
                {symbol}: ${balanceInUsd.toFixed(2)}
            </li>
            ))}
        </ul>
       { /*<AgCharts options={options} />*/}
    </div>
    );
}

export default DistributionChart;

/*
[
    {
        "symbol": "WETH",
        "balanceInUsd": 22721556.118836846
    },
    {
        "symbol": "USDC",
        "balanceInUsd": 17286986.060280558
    },
    {
        "symbol": "WBTC",
        "balanceInUsd": 16909831.50265212
    },
    {
        "symbol": "Other",
        "balanceInUsd": 22337068.833084423
    }
]
*/