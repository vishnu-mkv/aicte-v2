import React from "react";
import Icon from "./Icon";
import "../assets/styles/Hero.scss";

function Hero({ title, img, desc }) {
  return (
    <div>
      <h2 className="page-title">{title}</h2>
      <div className="banner-wrap">
        <div className="media-image">
          <Icon src={img}></Icon>
        </div>
      </div>
      <p className="hero-desc">{desc}</p>
    </div>
  );
}

export default Hero;
