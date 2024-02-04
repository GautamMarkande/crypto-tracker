import React from 'react'
import '../LineChart/LineChart.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import ConvertIntoKBM from '../../../functions/ConvertIntoKBM';
function LineChart({ ChartData, PriceType, multiAxis }) {
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
      crypto1: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          callback: function (value, index, ticks) {
            if (PriceType === 'prices') { return '₹' + value?.toLocaleString(); }
            else {
              return "₹" + ConvertIntoKBM(value)
            }
          }
        }
      },
      crypto2: {
        type: 'linear',
        display: multiAxis ? true : false,
        position: 'right',
        ticks: {
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
    <>
      <Line data={ChartData} options={options} />
      {/* {multiAxis&&<Line data={ChartData} options={options} />} */}
    </>
  )
}

export default LineChart
