import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LatestNews.css";
import { useDispatch } from "react-redux";
import { saveArticle } from "../../store/newsSlice.js";

const API_KEY = "261ea329eb164bd1b4830ad09833fe12";

export default function LatestNews() {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles.slice(3, 9));
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
    <section className="latest-news">
      <h2 className="latest-news-title">Latest News</h2>
      <div className="latest-news-list">
        {articles.map((article, index) => (
          <div className="latest-news-item" key={index}>
            <img
              className="latest-news-item-image"
              src={article.urlToImage}
              alt={article.title}
            />
            <h2 className="latest-news-item-title">
              {article.title.slice(0, 100) + "..."}
            </h2>

            <p className="latest-news-item-date">
              {new Date(article.publishedAt).toLocaleDateString("en-GB")}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="latest-news-item-link"
            >
              Read more
            </a>
            <button
              className="latest-news-btn"
              onClick={() => handleSave(article)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
