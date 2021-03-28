import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import LineChartRechart from './LineChartRechart';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0)

  useEffect(() => {
    regenerateData();
  }, []);

  function regenerateData() {
    setNumber(Math.random() * 10)
    console.log(number)
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
      });
    }
    setData(chartData)
  }

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={regenerateData}>Change Data</button>
      <LineChart data={data} width={400} height={300} />
      <LineChartRechart data={data} width={400} height={300} />
    </div>
  );
}

export default App;