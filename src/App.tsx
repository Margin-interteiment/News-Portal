import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AllNews from "./components/AllNews/AllNews";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
