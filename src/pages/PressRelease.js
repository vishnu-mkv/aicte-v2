import React from "react";
import { PressContainer } from "../components/Container";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";

function PressRelease() {
  return (
    <div className="pad press-release-page">
      <Hero title="Press Releases" img="news-press-release.svg"></Hero>
      <Pagination
        title="Press Release"
        api="/api/press-release"
        Container={PressContainer}
      ></Pagination>
    </div>
  );
}

export default PressRelease;
