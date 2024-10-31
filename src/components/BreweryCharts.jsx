import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie } from 'recharts';

function BreweryCharts() {
  const [typeofBar, setType] = useState([]);
  const [stateDistribution, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
        const data = await response.json();
        computeChartData(data); 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const computeChartData = (data) => {
    const typeCounts = {};
    const stateCounts = {};

    data.forEach((brewery) => {
      typeCounts[brewery.brewery_type] = (typeCounts[brewery.brewery_type] || 0) + 1;
      stateCounts[brewery.state_province] = (stateCounts[brewery.state_province] || 0) + 1;
    });

    setType(Object.keys(typeCounts).map(type => ({ name: type, number: typeCounts[type] })));
    setState(Object.keys(stateCounts).map(state => ({ name: state, count: stateCounts[state] })));
  };

  return (
    <div>
      <h2>Breweries by Type</h2>
      <BarChart width = {500} height = {250} data = {typeofBar}>
        <XAxis datakey = "name" />
        <YAxis/>
        <Bar dataKey = "number"/>
        <Tooltip></Tooltip>
      </BarChart>
      <h2>State Distribution of Breweries</h2>
      <PieChart width = {500} height = {250}>
        <Pie
        data = {stateDistribution}
        dataKey="count"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={75}
        />
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
}

export default BreweryCharts;
