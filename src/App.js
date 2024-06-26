// src/App.js

import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import data from './data/chartData.json';
import './styles/App.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((d) => {
      const date = new Date(d.timestamp);
      if (timeframe === 'daily') return true;
      if (timeframe === 'weekly') return date.getDay() === 1;
      if (timeframe === 'monthly') return date.getDate() === 1;
      return true;
    });
    setFilteredData(filtered);
  }, [timeframe]);

  return (
    <div className="App">
      <h1>Chart App</h1>
      <TimeframeSelector onSelect={setTimeframe} />
      <div className="chart-container">
        <Chart data={filteredData} />
      </div>
    </div>
  );
};

export default App;
