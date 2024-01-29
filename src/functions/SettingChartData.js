import { ConvertDate } from "./ConvertDate"
export const SettingChartData = (setChartData, prices1, prices2) => {

  if (prices2) {
    setChartData(
      {
        labels: prices1?.map((TimeInMs) => ConvertDate(TimeInMs[0])),
        datasets: [
          {
          label: 'Crypto 1',
          data: prices1?.map((price) => price[1]),
          borderColor: '#3a80e9',
          backgroundColor: 'rgb(58,128,233,0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: 'Crypto1',
        },
        {
          label: 'Crypto 2',
          data: prices2?.map((price) => price[1]),
          borderColor: '#3a80e9',
          backgroundColor: 'rgb(58,128,233,0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: 'Crypto2',
        }
      ]
        
      }
    )
  } else {
    setChartData(
      {
        labels: prices1?.map((TimeInMs) => ConvertDate(TimeInMs[0])),
        datasets: [{
          label: 'Price Of this Date',
          data: prices1?.map((price) => price[1]),
          borderColor: '#3a80e9',
          backgroundColor: 'rgb(58,128,233,0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: 'Crypto1',
        }]
      }
    )
  }
}