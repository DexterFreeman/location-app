import React from "react";
import "./Weathercard.scss";
import InfoCard from "../InfoCard/InfoCard";
const Weathercard = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="Weathercard">
      <header className="Weathercard__header">
        <img src={weatherData.current.condition.icon} alt="" srcset="" />
        <p className="Weathercard__location">
            {`
                ${weatherData.location.name},
                ${weatherData.location.region}
            `}
        </p>
      </header>
      <main className="Weathercard__main">
        <section className="Weathercard__section-temperature">
            <h1 className="Weathercard__tempC">{weatherData.current.temp_c}°C</h1>
            <p className="Weathercard__condition">{weatherData.current.condition.text}</p>
        </section>
        <section className="Weathercard__section-PVH">
            <InfoCard isTextDark={false} colour={"#1c2a42"} title={"Pressure"} frequency={`${weatherData.current.pressure_mb}mb`}/>
            <InfoCard isTextDark={true} colour={"#cae16c"} title={"Visibility"} frequency={`${weatherData.current.vis_km} km` } />
            <InfoCard isTextDark={true} colour={"white"} title={"Humidity"} frequency={`${weatherData.current.humidity}%` } />
        </section>
      </main>

    </div>
  );
};

export default Weathercard;
