import React from 'react'
import './Windcard.scss'
const Windcard = ({weatherData}) => {
    return (
      <div className="Windcard">
      
        <header className="Windcard__header">
          <img src={weatherData.current.condition.icon} alt="" srcset="" />
            <p>{`Precipitation: ${weatherData.current.precip_mm}ml`}</p>
         
        </header>
        <main className="Windcard__main">
          <section className="Windcard__section-wind">
              <h1 className="Windcard__tempC">{weatherData.current.wind_mph} MPH</h1>
              <p className="Windcard__condition">{weatherData.current.wind_dir}</p>
          </section>
          <section className="Windcard__section-danger">
              
          </section>
        </main>
  
  
      </div>
    );
}

export default Windcard