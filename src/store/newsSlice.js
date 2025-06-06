import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedArticles: JSON.parse(localStorage.getItem("saved-articles")) || [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveArticle: (state, action) => {
      const exists = state.savedArticles.find(
        (a) => a.title === action.payload.title
      );
      if (!exists) {
        state.savedArticles.push(action.payload);
        localStorage.setItem(
          "saved-articles",
          JSON.stringify(state.savedArticles)
        );
      }
    },
    removeArticle: (state, action) => {
      state.savedArticles = state.savedArticles.filter(
        (a) => a.title !== action.payload.title
      );
      localStorage.setItem(
        "saved-articles",
        JSON.stringify(state.savedArticles)
      );
    },
  },
});

export const { saveArticle, removeArticle } = newsSlice.actions;
export default newsSlice.reducer;
