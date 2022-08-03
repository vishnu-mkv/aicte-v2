import React from "react";
import { SubHeader } from "../components/Header";
import Hero from "../components/Hero";
import { HomeNews, HomePress } from "./Home";
import "../assets/styles/NewsOverview.scss";

function NewsOverview() {
  return (
    <div className="pad">
      <Hero
        title="News Overview"
        img="news-overview-hero.svg"
        desc="Read the latest news and press releases"
      ></Hero>
      <HomeNews title="In the News" left={true} limit={5} bg={false}></HomeNews>
      <HomePress left={true}></HomePress>
      <div id="media-contact-section" className="bgg">
        <SubHeader title="Media Contact"></SubHeader>
        <div className="media-contact">
          <div className="media-contact-container">
            <h6>Media Cell</h6>
            <p>Ph: 011-29581016</p>
            <p>media_officer@aicte-india.org</p>
          </div>
          <div className="media-contact-container">
            <h6>Dalchand</h6>
            <p>Ph: 011-29581028</p>
            <p>pro@aicte-india.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsOverview;
