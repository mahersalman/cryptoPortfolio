import React, { useState, useEffect, useRef } from 'react';
import { AgCharts } from 'ag-charts-react';

function DistributionChart({ tokens }) {
  const chartContainerRef = useRef(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const total = tokens.reduce((sum, token) => sum + token.balanceInUsd, 0);

    const numFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const chartOptions = {
      container: chartContainerRef.current,
      data: tokens,
      title: {
        text: "Token Distribution",
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "symbol",
          angleKey: "balanceInUsd",
          sectorLabelKey: "balanceInUsd",
          calloutLabel: {
            enabled: true,
          },
          sectorLabel: {
            formatter: ({ datum, sectorLabelKey }) => {
              const value = datum[sectorLabelKey];
              return numFormatter.format(value);
            },
          },
          title: {
            text: "USD Balance",
          },
          innerRadiusRatio: 0.7,
          innerLabels: [
            {
              text: numFormatter.format(total),
              fontSize: 24,
              color: 'white', // Adjusted color for the center text
            },
            {
              text: "Total",
              fontSize: 16,
              color: 'gray', // Optional: Change color for secondary text
              spacing: 10,
            },
          ],
          tooltip: {
            renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
              return {
                title,
                content: `${datum[calloutLabelKey]}: ${numFormatter.format(datum[sectorLabelKey])}`,
              };
            },
          },
          sectorSpacing: 5,
        },
      ],
      legend: {
        enabled: true,
        position: 'right',
        maxHeight: 400,
        item: {
          maxWidth: 200,
        },
        paging: {
          enabled: false,
        },
      },
    };

    setOptions(chartOptions);
  }, [tokens]);

  return <AgCharts options={options} />
}

export default DistributionChart;
