import React from "react";
import { useEffect, useState } from "react";
import "./HomePage.scss";
import WeatherContentContainer from "../../containers/WeatherContentContainer/WeatherContentContainer";
import NewsContentContainer from "../../containers/NewsContentContainer/NewsContentContainer";
import TodoList from "../../containers/TodoList/TodoList";
const HomePage = () => {
  const states = ["weather", "news", "todo"];
  let [pageContent, setPageContent] = useState();
  let [weather, setWeather] = useState();
  let [temperatureData, setTemperatureData] = useState();
  let [news, setNews] = useState();
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

  const key = process.env.REACT_APP_API_KEY;
  console.log(key)
  const fetchWeatherData = (lat, long, key) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lat},${long}&days=7&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        getTemperatureData(data.forecast.forecastday[0].hour);
        setCurrentState(states[0]);
      });
  };

  const fetchNewsData = (lat, long) => {
    fetch(
      `https://api.worldnewsapi.com/search-news?api-key=b904a6e78b854db6ba34e709d8236722&location-filter=${lat},${long},10`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
     
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      
      fetchWeatherData(position.coords.latitude, position.coords.longitude, process.env.REACT_APP_API_KEY);
      fetchNewsData(position.coords.latitude, position.coords.longitude);
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
        setPageContent(<NewsContentContainer newsData={news}/>);
        break; 

      case states[2]:
        setPageContent(<TodoList/>);
        break; 
    }
  }, [currentState]);

  const greetingJSX = () => {
    let today = new Date();;
    let hours = today.getHours();
    if (hours < 12){
      return "Good morning"; 
    }
    else if (hours < 17){
      return "Good afternoon"; 
    }
    else if (hours > 17) {
      return "Good evening"; 
    }
  }

  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>{greetingJSX()}!</h1>
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
          <button
            onClick={() => {
              setCurrentState(states[2]);
            }}
            className="homepage__header-btn"
          >
            Todo List
          </button>
        </div>
      </header>
      {pageContent && pageContent}
    </div>
  );
};

export default HomePage;
