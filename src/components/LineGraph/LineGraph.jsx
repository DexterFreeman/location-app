import React from 'react'
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
const LineGraph = () => {
    const data = {
        labels: ["Morning", "Afternoon", "Evening", "Night"],
        datasets: [{
            data: [20, 34, 28, 22],
            borderColor: '#f28c6d',
            pointerBorderWidth: 4,
            tension: 0.5, 

        }]
    };

    const options = {
        plugins: {
            legend: false,

            datalabels: {
                anchor: 'end', 
                align: 'bottom', 
                formatter: Math.round,
                font: {
                weight: 'bold'
            }
            }
        },
        scales: {
            x: {
                grid: {
                    
                }
            },
            y: {
                min: 0,
                grid: {
                    display: false
                },
                ticks: {
                    display: false,
                    
                }
            }
        }
    }
   
  return (
        <Line data={data} options={options}  />
  )
}

export default LineGraph