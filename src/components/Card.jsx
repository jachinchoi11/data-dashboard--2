import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import BreweryCharts from './BreweryCharts'


function Card() {
  const[data, setData] = useState([]);
  const[filteredData, setFilteredData] = useState([]);


    useEffect (() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
            const data = await response.json();
            setData(data);
            setFilteredData(data);
            generateChartData(data);
            }
            catch {
            console.log("Error")
            }
        };
        fetchData();
    }, []);


    const searchFilter = (search, typeOfBrewery, state) => {
        const filtered = data.filter((brewery) => brewery.name.toLowerCase().includes(search.toLowerCase())
        ).filter((brewery) => typeOfBrewery === 'all' || brewery.brewery_type === typeOfBrewery)
        .filter((brewery) => state === 'all' || brewery.state === state);
        setFilteredData(filtered);
    };

    return (
        <>
          <div>
            <BreweryCharts></BreweryCharts>
            <SearchBar onSearch={searchFilter} />

            {filteredData.length > 0 ? (
              filteredData.map((brewery) => (
                <div key={brewery.id} className="brewery-card">
                  <h3>{brewery.name}</h3>
                  <Link to={`/brewery/${brewery.id}`}>View Details</Link>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </>
      );
    }
    


export default Card;
