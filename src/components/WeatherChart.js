import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './WeatherChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ forecast, unit }) => {
  // Get data for next 24 hours (8 data points, 3-hour intervals)
  const chartData = forecast.list.slice(0, 8);

  const data = {
    labels: chartData.map(item => 
      new Date(item.dt * 1000).toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    ),
    datasets: [
      {
        label: `Temperature (°${unit === 'metric' ? 'C' : 'F'})`,
        data: chartData.map(item => Math.round(item.main.temp)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4
      },
      {
        label: 'Humidity (%)',
        data: chartData.map(item => item.main.humidity),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '24-Hour Temperature & Humidity Trend'
      }
    },
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="weather-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
