
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BrewerySite() {
  const {params } = useParams(); 
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${params}`);
        const data = await response.json();
        setBrewery(data);
      } catch (error) {
        console.log("Error fetching brewery details:", error);
      }
    };
    fetchBrewery();
  }, [id]);

  if (!brewery) return <p>Loading...</p>;

  return (
    <div>
      <h2>{brewery.name}</h2>
      <h3>Type: {brewery.brewery_type}</h3>
      <h3>Address: {brewery.street}, {brewery.city}, {brewery.state}</h3>
      <h3>Phone: {brewery.phone}</h3>
    </div>
  );
}

export default BrewerySite;
