import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MyProfile() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("saved-articles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setArticles(parsed);
      } catch (error) {
        console.error("Reminder when reading savings articles:", error);
      }
    }
  }, []);

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="my-profile">
      <Header setSearchTerm={setSearchTerm} />

      <div className="my-profile-main">
        <h2 className="my-profile-headline">My Profile</h2>
      </div>
      <div className="my-profile-articles">
        <h3 className="my-article-title">My saved Articles</h3>
        <ul className="my-articles-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((filteredArticle, index) => (
              <li key={index} className="my-profile-item">
                <img
                  src={filteredArticle.urlToImage}
                  alt={filteredArticle.title}
                  className="my-profile-image"
                />
                <h2 className="my-profile-title">
                  {filteredArticle.title.slice(0, 70) + "..."}
                </h2>
                <p className="my-profile-subtitle">{filteredArticle.author}</p>
                <a
                  href={filteredArticle.url}
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
