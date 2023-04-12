import React from 'react'
import { useEffect, useState } from 'react';
import './HomePage.scss'
import Weathercard from '../../components/Weathercard/Weathercard';
const HomePage = () => {
    let [weather, setWeather] = useState(); 

    const fetchData = (lat, long) => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=37eae624565d4429a98224757231104&q=${lat},${long}&aqi=no`)
      .then((response) => response.json())
      .then((data) => { setWeather(data) 
      })
      console.log(weather)
    }
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        fetchData(position.coords.latitude, position.coords.longitude);
      });
    }, [])
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Location app</h1>
          {weather && <Weathercard weatherData={weather}/>}
            
       
        </header>
      </div>
    );
}


export default HomePage