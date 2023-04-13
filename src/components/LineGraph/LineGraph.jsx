import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
const LineGraph = ({temperatureData}) => {
    console.log(temperatureData)

    const tempData = [temperatureData[0].temp_c, temperatureData[1].temp_c, temperatureData[2].temp_c, temperatureData[3].temp_c]
  const data = {
    labels: [`Morning ${tempData[0]}`, "Afternoon", "Evening", "Night"],
    datasets: [
      {
        data: tempData,
        borderColor: "#f28c6d",
        pointerBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      datalabels: {
        anchor: "end",
        align: "bottom",
        formatter: Math.round,
        font: {
          weight: "bold",
        },
      },
    },
    
    scales: {
      
      x: {
        grid: {
            offset: true, 

        },
        drawBorder: false, 
        border: {
            display: false, 
          },
      },
      y: {
        min: (Math.min(tempData).round),
        grid: {
          display: false,
          
        },
        ticks: {
          display: false,
        },
        border: {
            display: false, 
          },
      },
      
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
