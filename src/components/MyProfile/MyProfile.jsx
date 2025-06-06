import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MyProfile() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("saved-articles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setArticles(parsed);
      } catch (error) {
        console.error("Помилка при читані збережених статей:", error);
      }
    }
  }, []);

  return (
    <div className="my-profile">
      <Header />

      <div className="my-profile-content">
        <div className="my-profile-main">
          <h2 className="my-profile-headline">My Profile</h2>
        </div>
      </div>
      <div className="my-profile-articles">
        <ul className="my-articles-list">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <li key={index} className="my-profile-item">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="my-profile-image"
                />
                <h2 className="my-profile-title">
                  {article.title.slice(0, 70) + "..."}
                </h2>
                <p className="my-profile-subtitle">{article.author}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-profile-link"
                >
                  Read more
                </a>
              </li>
            ))
          ) : (
            <li className="my-profile-error">
              You haven't saved anything yet.
            </li>
          )}
        </ul>
        <Footer />
      </div>
    </div>
  );
}
