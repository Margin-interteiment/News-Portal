import React, { useEffect, useState } from "react";
import "./WeatherPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addCity, removeCity } from "../../store/weatherSlice";

const API_KEY = "80f0c09a35b7f16e629856ff01c8df50";

export default function WeatherPage() {
  const cities = useSelector((state) => state.weather.cities);
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState({});
  const [newCity, setNewCity] = useState("");
  const fetchWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData((prev) => ({ ...prev, [city]: res.data }));
    } catch (err) {
      console.error("Місто не знайдено:", city);
    }
  };
  useEffect(() => {
    if (cities.length === 0 && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const city = res.data.name;
        dispatch(addCity(city));
      });
    }
  }, []);

  useEffect(() => {
    cities.forEach((city) => fetchWeather(city));
  }, [cities]);

  const handleAdd = () => {
    if (newCity) {
      dispatch(addCity(newCity));
      setNewCity("");
    }
  };

  const handleRemove = (city) => {
    dispatch(removeCity(city));
  };
  return (
    <div className="weather-page">
      <Header />
      <div className="weather-add">
        <div className="weather-add-text">
          <p className="weather-add-subtitle">
            Here you can always see up-to-date weather information and choose
            the city you need
          </p>
        </div>
        <form className="weather-add-form">
          <input
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            placeholder="Enter city name"
            className="weather-add-input"
            type="text"
            required
          />
          <button className="weather-add-btn" onClick={handleAdd}>
            Add
          </button>
        </form>
      </div>
      <div className="weather-content">
        <h2 className="weather-content-title">Weather in the cities</h2>
        <ul className="weather-list">
          {cities.map((city) => (
            <li key={city} className="weather-list-item">
              <h3 className="weather-list-city">{city}</h3>
              {weatherData[city] ? (
                <div className="weather-list-details">
                  <p className="weather-list-temp">
                    Temperature: {weatherData[city].main.temp}°C
                  </p>
                  <p className="weather-list-description">
                    Description: {weatherData[city].weather[0].description}
                  </p>
                  <p className="weather-list-humidity">
                    Humidity: {weatherData[city].main.humidity}%
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData[city].weather[0].icon}.png`}
                    alt=""
                  />
                </div>
              ) : (
                <p>Loading...</p>
              )}
              <button
                className="weather-list-remove-btn"
                type="button"
                onClick={() => handleRemove(city)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
}
