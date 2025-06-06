import React from "react";
import "../HotTopics/HotTopics.css";

export default function HotTopics() {
  return (
    <section className="main-topics">
      <div className="hot-topics-header">
        <h2 className="hot-header-title">Hi,Name</h2>
        <p className="hot-topics-subtitle"> Fresh news is already here!</p>
      </div>
      <div className="hot-topics">
        <div className="hot-topics-media">
          <p className="hot-topics-text">
            Massa tortor nibh nulla condimentum imperdiet scelerisque...
            <span className="hot-topics-author">CNN Indonesia</span>
          </p>
        </div>
        <div className="hot-topics-content">
          <p className="hot-topics-paragraph">
            <span className="hot-topics-word">Nisi,</span> sagittis aliquet sit
            rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed
            turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui,
            egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh
            nulla condimentum imperdiet scelerisque...
            <span className="hot-topics-author">CNN Indonesia</span>
          </p>
        </div>
      </div>
    </section>
  );
}
