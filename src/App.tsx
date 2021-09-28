import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import './App.css';
import { addDays } from 'date-fns';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
);

interface AppProps {}

const times = <T extends unknown>(n: number, fn: (i: number) => T) =>
  Array.from({ length: n }).map((_, i) => fn(i));

const NUMBER_CFG = 15;

class Utils {
  static rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static numbers(n: number) {
    return times(n, () => this.rand(0, 100));
  }

  static newDate(days: number) {
    return addDays(new Date(), days);
  }
}

const data = {
  labels: [
    Utils.newDate(0),
    Utils.newDate(1),
    Utils.newDate(2),
    Utils.newDate(3),
    Utils.newDate(4),
    Utils.newDate(5),
    Utils.newDate(6),
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'red',
      borderColor: 'red',
      fill: false,
      data: Utils.numbers(NUMBER_CFG),
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'blue',
      borderColor: 'blue',
      fill: false,
      data: Utils.numbers(NUMBER_CFG),
    },
  ],
};

const options = {
  plugins: {
    title: {
      text: 'Chart.js Time Scale',
      display: true,
    },
  },
  scales: {
    x: {
      type: 'time',
      title: {
        display: true,
        text: 'Date',
      },
    },
    y: {
      title: {
        display: true,
        text: 'value',
      },
    },
  },
} as const;

const config = {
  type: 'line',
  data,
  options,
} as const;

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart>(null);

  useEffect(() => {
    if (canvasRef.current && !chartRef.current) {
      console.log(canvasRef.current);
      (chartRef.current as any) = new Chart(canvasRef.current, config);
    }
  }, [canvasRef.current]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          chartjs-adapter-date-fns + snowpack + react-chartjs-2 reproduction
        </p>
      </header>

      <Line options={options} data={data} />

      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
