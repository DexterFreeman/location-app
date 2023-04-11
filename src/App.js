import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  let [weather, setWeather] = useState(); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    fetch("http://api.weatherapi.com/v1/current.json?key=37eae624565d4429a98224757231104&q=London&aqi=no")
    .then((response) => response.json())
    .then((data) => { setWeather(data)
      console.log(weather)
    })
    
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Location app</h1>
        {weather && weather.current.temp_c}
      </header>
    </div>
  );
}

export default App;
