import React from "react";
import { SubHeader } from "../components/Header";
import Hero from "../components/Hero";
import "../assets/styles/AboutMessages.scss";

function AboutMessages() {
  return (
    <div className="pad" id="about-messages">
      <Hero
        title="Messages"
        img="messages.svg"
        desc="A repository of key messages from notable personalities and dignitaries."
      ></Hero>
      <div id="content-container">
        <div id="left">
          <div class="media">
            <iframe
              class="media-file"
              type="text/html"
              src="https://www.youtube.com/embed/Tj_y2N4NkSE?autoplay=0&showinfo=0&controls=0&origin=http://example.com"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <span id="right">
          <SubHeader title="Message from the Chairman" right={true}></SubHeader>
          <p className="quote">
            The transformation of Indian education dates back to it being the
            pioneer in the 800 BCs where the undivided India had global
            institutions, whereas the deterioration began with the ages of
            modernization and industrialization.
          </p>
          <div id="bottom">
            <p> - Prof. Anil D. Sahasrabudhe</p>
            <p> Chairman</p>
          </div>
        </span>
      </div>
    </div>
  );
}

export default AboutMessages;
