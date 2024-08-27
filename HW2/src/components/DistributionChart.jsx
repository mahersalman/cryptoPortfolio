import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function DistributionChart({ tokens }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = echarts.init(chartContainerRef.current);

    const numFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: ({ data }) => `${data.name}: ${numFormatter.format(data.value)}`,
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        align: 'left',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: '#fff', // Legend text color
        },
      },
      series: [
        {
          name: 'USD Balance',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            position: 'outside',
            formatter: ({ name, value }) => `${name}`,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
          },
          data: tokens.map(token => ({
            value: token.balanceInUsd,
            name: token.symbol,
          })),
        },
      ],
      backgroundColor: '#1F2937', // Change this to your desired background color
    };

    chart.setOption(option);

    // Resize chart when window resizes
    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [tokens]);

  return (
    <>
      <div className="flex justify-center items-center font-bold text-2xl mb-4">
        Tokens Distribution
      </div>
      <div
        ref={chartContainerRef}
        style={{ height: '80%', width: '100%' }} // Adjust height as needed
        className="flex-1"
      />
    </>
  );
}

export default DistributionChart;
