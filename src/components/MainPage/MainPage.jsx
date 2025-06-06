import React from "react";
import Header from "../Header/Header";
import "./MainPage.css";
import "../Header/Header.css";
import "../HotTopics/HotTopics.css";
import HotTopics from "../HotTopics/HotTopics";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <HotTopics />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
