import React from "react";
import { VideoContainer } from "../components/Container";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";

function VideoGallery() {
  return (
    <div className="pad">
      <Hero title="Video Gallery" img="news-video-hero.svg"></Hero>
      <Pagination
        title="Videos"
        api="/api/video-gallery"
        Container={VideoContainer}
      ></Pagination>
    </div>
  );
}

export default VideoGallery;
