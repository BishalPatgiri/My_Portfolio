import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function Chart() {
      
      const labels = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Redux', 'NodeJS', 'ExpressJS','MongoDB'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Technical Skills',
            data: [80,80,70,70,80,50,60,70],
            backgroundColor: '#64ffda',
            width:"10px"
          },
        ],
      };
  return (
  <>
  <div id="barChart">
  <Bar data={data} />
  </div>
  </>);
}
