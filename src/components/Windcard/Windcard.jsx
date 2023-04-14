import React from 'react'
import './Windcard.scss'
import InfoCard from '../InfoCard/InfoCard';
const Windcard = ({weatherData}) => {
    return (
      <div className="Windcard">
      
        <header className="Windcard__header">
          <img src={weatherData.current.condition.icon} alt="" srcset="" />
            <p>{`Precipitation: ${weatherData.current.precip_mm}ml`}</p>
         
        </header>
        <main className="Windcard__main">
          <section className="Windcard__section-wind">
            <div>
              <h1 className="Windcard__tempC">Wind speed</h1>
              <p className="Windcard__condition">{weatherData.current.wind_mph} MPH ({weatherData.current.wind_dir})</p>
              </div>
              <div>
              <h1 className="Windcard__cloudcover">
                Cloud coverage
              </h1>
              <p className="Windcard__cloudcover-frequency">
                {`${weatherData.current.cloud} oktas`}
              </p>
              </div>
          </section>
          <section className="Windcard__section-uv">
          <InfoCard isTextDark={false} colour={"#1c2a42"} title={"Ultraviolet"} frequency={`${weatherData.current.uv}UVI`}/>
          </section>
        </main>
  
  
      </div>
    );
}

export default Windcard