import moment from "moment";
import React from "react";
import "../assets/styles/Containers.scss";
import Icon from "./Icon";

function NewsContainer({ data }) {
  return (
    <div className="news-container">
      <div className="news-bottom">
        <Icon name="calendar_today"></Icon>
        <span>{moment(data.date).format("MMMM Do, YYYY")}</span>
        <div className="circle"></div>
        <span className="source">{data.source}</span>
      </div>
      <a className="headline" href={data.url}>
        {data.headline}
      </a>
      <p className="content">
        {data.content?.indexOf(".") !== -1
          ? data.content?.substring(0, data.content?.indexOf("."))
          : data.content}
      </p>
    </div>
  );
}

function PressContainer({ data }) {
  return (
    <div className="news-container press-container">
      <Icon name="newspaper" className={"news-icon"}></Icon>
      <a className="headline" href={data.url}>
        {data.content}
      </a>
      <span className="date">{moment(data.date).format("MMMM Do, YYYY")}</span>
    </div>
  );
}

function VideoContainer({ data }) {
  return (
    <div className="media-container">
      <div class="media">
        <iframe
          class="media-file"
          type="text/html"
          src={`https://${data.video_url}?autoplay=0&showinfo=0&controls=0`}
          frameborder="0"
        ></iframe>
      </div>
      <p>{data.title}</p>
    </div>
  );
}

function GalleryContainer({ data, onClick }) {
  return (
    <div class="pointer media-container image-container" onClick={onClick}>
      <div class="media">
        <img class="media-file front" src={data.cover} />
        <img class="media-file back-1" src={data.images[0]} />
        <img class="media-file back-2" src={data.images[1]} />
      </div>
      <p>{data.name}</p>
      <div class="flex space-between media-bottom">
        <div class="flex">
          <Icon name="web_stories"></Icon>
          <span>{data.images.length} images</span>
        </div>
        <span>{moment(data.date).format("DD-MM-YYYY")}</span>
      </div>
    </div>
  );
}

export { NewsContainer, PressContainer, VideoContainer, GalleryContainer };
