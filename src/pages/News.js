import React from "react";
import Hero from "../components/Hero";
import "../assets/styles/News.scss";
import Pagination from "../components/Pagination";
import { NewsContainer } from "../components/Container";

function News() {
  return (
    <div className="pad">
      <Hero title="News" img="news-news-hero.svg"></Hero>
      <Pagination
        title="News"
        api="/api/news"
        Container={NewsContainer}
      ></Pagination>
    </div>
  );
}

export default News;
