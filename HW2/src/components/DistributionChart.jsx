import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function DistributionChart({ tokens }) {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = echarts.init(chartContainerRef.current);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: ({ data }) => `${data.name}: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.value)}`,
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        align: 'left',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: 'inherit', // Inherit text color based on the applied theme
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
            formatter: '{b}', // Only show the name of the token
            color: 'inherit', // Inherit text color based on the applied theme
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '1.875rem', // 30px
              fontWeight: 'bold',
              color: 'inherit', // Inherit emphasis label color based on the applied theme
            },
          },
          labelLine: {
            show: true,
            lineStyle: {
              color: 'inherit', // Inherit label line color based on the applied theme
            },
          },
          data: tokens.map(token => ({
            value: token.balanceInUsd,
            name: token.symbol,
          })),
        },
      ],
      backgroundColor: 'transparent', // Make background transparent and rely on container styling
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [tokens]);

  return (
    <>
      <div className="flex justify-center items-center font-bold text-2xl mb-4 text-gray-900 dark:text-white">
        Tokens Distribution
      </div>
      <div
        ref={chartContainerRef}
        className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg"
        style={{ height: '80%', width: '100%' }}
      />
    </>
  );
}

export default DistributionChart;
