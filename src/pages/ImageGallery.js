import React, { useState } from "react";
import { GalleryContainer } from "../components/Container";
import Hero from "../components/Hero";
import ImageViewer from "../components/ImageViewer";
import Pagination from "../components/Pagination";

function ImageGallery() {
  const [viewAlbum, setViewAlbum] = useState(null);

  return (
    <div className="pad">
      <Hero
        title="Image Gallery"
        img="news-images-hero.svg"
        desc="Explore pictures from our key, events, workshops, launches and more"
      ></Hero>
      <Pagination
        Container={GalleryContainer}
        api="/api/image-gallery"
        title={"Albums"}
        setCurrentDataItem={setViewAlbum}
      ></Pagination>
      <ImageViewer data={viewAlbum} setData={setViewAlbum} />
    </div>
  );
}

export default ImageGallery;
