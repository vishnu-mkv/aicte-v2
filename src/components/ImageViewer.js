import React, { useEffect, useState } from "react";
import { SubHeader } from "./Header";
import Icon from "./Icon";
import "../assets/styles/ImageViewer.scss";
import Loading from "./Loading";

function ImageViewer({ data, setData }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (data) {
      setIndex(0);
    }
  }, [data]);

  function changeIndex(i) {
    if (i < 0 || i >= data.images.length) return;
    setIndex(i);
    setLoaded(false);
  }

  function onLoad() {
    setLoaded(true);
  }

  if (!data) return <></>;

  return (
    <div className="popper">
      <div className="overlay" onClick={() => setData(null)}></div>

      <div className="popup">
        <div className="flex space-between viewer-top">
          <SubHeader title={data.name} left={true}></SubHeader>
          <Icon
            className="pointer"
            name="close"
            onClick={() => {
              setData(null);
            }}
          ></Icon>
        </div>
        <div className="flex space-between image-viewer">
          {index > 0 && (
            <Icon
              name="chevron_left"
              onClick={() => changeIndex(index - 1)}
              className="pointer nav_image"
            ></Icon>
          )}

          {!loaded && (
            <div className="image-loader">
              <Loading />
            </div>
          )}
          <div className="image-view">
            <div className="media">
              <img
                className="media-file"
                src={data.images[index]}
                onLoad={onLoad}
              />
            </div>
          </div>

          {index < data.images.length - 1 && (
            <Icon
              name="chevron_right"
              onClick={() => changeIndex(index + 1)}
              className="pointer nav_image"
            ></Icon>
          )}
        </div>
        <p>
          {index + 1} of {data.images.length} images
        </p>
      </div>
    </div>
  );
}

export default ImageViewer;
