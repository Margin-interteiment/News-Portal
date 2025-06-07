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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
        );
        setallArticles(response.data.articles.slice(0, 9));
      } catch (error) {
        console.error("Error loading the news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSave = (article) => {
    dispatch(saveArticle(article));
  };
  const filteredArticles = allArticles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="all-news">
      <Header setSearchTerm={setSearchTerm} />
      <div className="all-news-main">
        <h2 className="all-news-title">All News</h2>
        <p className="all-news-subtitle">All the latest news just for you!</p>
      </div>
      <ul className="all-news-list">
        {filteredArticles.map((filteredArticle, index) => (
          <li className="all-news-item" key={index}>
            <img
              className="all-news-item-image"
              src={filteredArticle.urlToImage}
              alt={filteredArticle.title}
            />
            <h2 className="all-news-item-title">
              {filteredArticle.title.slice(0, 49) + "..."}
            </h2>
            <p className="all-news-item-date">
              {new Date(filteredArticle.publishedAt).toLocaleDateString(
                "en-GB"
              )}
            </p>
            <a
              href={filteredArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="all-news-item-link"
            >
              Read more
            </a>
            <button
              className="all-news-btn"
              onClick={() => handleSave(filteredArticle)}
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
