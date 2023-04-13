import React from "react";
import { useEffect, useState } from "react";
import "./HomePage.scss";
import WeatherContentContainer from "../../containers/WeatherContentContainer/WeatherContentContainer";
import NewsContentContainer from "../../containers/NewsContentContainer/NewsContentContainer";
const HomePage = () => {
  const states = ["weather", "news"];
  let [pageContent, setPageContent] = useState();
  let [weather, setWeather] = useState();
  let [temperatureData, setTemperatureData] = useState();
  let [currentState, setCurrentState] = useState();

  const getTemperatureData = (data) => {
    setTemperatureData(
      data.filter((obj) => {
        if (
          obj.time.split(" ")[1] === "07:00" ||
          obj.time.split(" ")[1] === "12:00" ||
          obj.time.split(" ")[1] === "18:00" ||
          obj.time.split(" ")[1] === "21:00"
        ) {
          return obj;
        }
      })
    );
  };

  const fetchData = (lat, long) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=37eae624565d4429a98224757231104&q=${lat},${long}&days=3&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        getTemperatureData(data.forecast.forecastday[0].hour);
        setCurrentState(states[0]);
      });
  };
  useEffect(() => {
    console.log("TEST");
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("LAT " + position.coords.latitude);
      console.log("LONG " + position.coords.longitude);
      fetchData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    switch (currentState) {
      case states[0]:
        setPageContent(
          <WeatherContentContainer
            weather={weather}
            temperatureData={temperatureData}
          />
        );
        break;
      case states[1]:
        setPageContent(<NewsContentContainer></NewsContentContainer>);
    }
  }, [currentState]);

  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>Location app</h1>
        <div className="homepage__header-sidebar">
          <button
            onClick={() => {
              setCurrentState(states[0]);
            }}
            className="homepage__header-btn"
          >
            Weather
          </button>
          <button
            onClick={() => {
              setCurrentState(states[1]);
            }}
            className="homepage__header-btn"
          >
            News
          </button>
        </div>
      </header>
      {pageContent && pageContent}
    </div>
  );
};

export default HomePage;
