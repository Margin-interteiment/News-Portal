import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LatestNews.css";
import { useDispatch } from "react-redux";
import { saveArticle } from "../../store/newsSlice.js";

const API_KEY = "261ea329eb164bd1b4830ad09833fe12";

export default function LatestNews({ searchTerm }) {
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
        console.error("Error loading the news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="latest-news">
      <h2 className="latest-news-title">Latest News</h2>
      <div className="latest-news-list">
        {filteredArticles.map((filteredArticle, index) => (
          <div className="latest-news-item" key={index}>
            <img
              className="latest-news-item-image"
              src={filteredArticle.urlToImage}
              alt={filteredArticle.title}
            />
            <h2 className="latest-news-item-title">
              {filteredArticle.title.slice(0, 49) + "..."}
            </h2>

            <p className="latest-news-item-date">
              {new Date(filteredArticle.publishedAt).toLocaleDateString(
                "en-GB"
              )}
            </p>
            <a
              href={filteredArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="latest-news-item-link"
            >
              Read more
            </a>
            <button
              className="latest-news-btn"
              onClick={() => handleSave(filteredArticle)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
