import React from "react";
import Header from "../Header/Header";
import "./MainPage.css";
import "../Header/Header.css";
import "../HotTopics/HotTopics.css";
import HotTopics from "../HotTopics/HotTopics";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="main-page">
      <Header setSearchTerm={setSearchTerm} />
      <main className="main-content">
        <HotTopics />
        <LatestNews searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}
