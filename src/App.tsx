import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AllNews from "./components/AllNews/AllNews";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import MyProfile from "./components/MyProfile/MyProfile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Header onSearch={setSearchTerm} /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<AllNews />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/weather"
          element={
            <ProtectedRoute>
              <WeatherPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
