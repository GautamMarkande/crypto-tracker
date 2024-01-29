import React from 'react'
import '../LineChart/LineChart.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import ConvertIntoKBM from '../../../functions/ConvertIntoKBM';
function LineChart({ chartData, PriceType, multiAxis}) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false
      }
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    },
    scales: {
      Crypto1: {
        display: true,
        position: 'left',
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (PriceType === 'prices') { return '₹' + value?.toLocaleString(); }
            else {
              return "₹" + ConvertIntoKBM(value)
            }
          }
        }
      },
      Crypto2: {
        display: true,
        position: 'right',
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if (PriceType === 'prices') { return '₹' + value?.toLocaleString(); }
            else {
              return "₹" + ConvertIntoKBM(value)
            }
          }
        }
      },
    }
  };
  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart
