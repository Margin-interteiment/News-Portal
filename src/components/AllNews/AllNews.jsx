import React, { useEffect, useState } from "react";
import "./AllNews.css";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { saveArticle } from "../../store/newsSlice.js";
import axios from "axios";
import Footer from "../Footer/Footer";

const API_KEY = "261ea329eb164bd1b4830ad09833fe12";

export default function AllNews() {
  const [allArticles, setallArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
        );
        setallArticles(response.data.articles.slice(0, 9));
      } catch (error) {
        console.error("Помилка при завантаженні новин:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };

  return (
    <div className="all-news">
      <Header />
      <div className="all-news-main">
        <h2 className="all-news-title">All News</h2>
        <p className="all-news-subtitle">All the latest news just for you!</p>
      </div>
      <ul className="all-news-list">
        {allArticles.map((article, index) => (
          <li className="all-news-item" key={index}>
            <img
              className="all-news-item-image"
              src={article.urlToImage}
              alt={article.title}
            />
            <h2 className="all-news-item-title">
              {article.title.slice(0, 100) + "..."}
            </h2>
            <p className="all-news-item-date">
              {new Date(article.publishedAt).toLocaleDateString("en-GB")}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="all-news-item-link"
            >
              Read more
            </a>
            <button
              className="all-news-btn"
              onClick={() => handleSave(article)}
            >
              Save
            </button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
