import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: JSON.parse(localStorage.getItem("weather-cities")) || [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCity: (state, action) => {
      const exists = state.cities.find((c) => c === action.payload);
      if (!exists) {
        state.cities.push(action.payload);
        localStorage.setItem("weather-cities", JSON.stringify(state.cities));
      }
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter((c) => c !== action.payload);
      localStorage.setItem("weather-cities", JSON.stringify(state.cities));
    },
    setCities: (state, action) => {
      state.cities = action.payload;
      localStorage.setItem("weather-cities", JSON.stringify(action.payload));
    },
  },
});

export const { addCity, removeCity, setCities } = weatherSlice.actions;
export default weatherSlice.reducer;
