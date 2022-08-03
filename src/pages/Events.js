import React from "react";
import Hero from "../components/Hero";
import { SubHeader } from "../components/Header";
import Icon from "../components/Icon";
import "../assets/styles/Events.scss";

function Events() {
  return (
    <div className="pad">
      <Hero
        title="Events"
        img="news-events.svg"
        desc="Explore the details of our upcoming and past events."
      ></Hero>
      <SubHeader left={true} title={"Past Events"}></SubHeader>
      <div className="events">
        <div className="event-container">
          <Icon src="news-events-image1.svg" className="event-image"></Icon>
          <div className="event-detail">
            <h4>Launch of SWAYAM MOOC's platform</h4>
            <div className="event-desc">
              Hon'ble President of India, Hon'ble Shri Pranab Mukherjee attended
              the launch of SWAYAM, 32 SWAYAM Prabha DTH Channels and National
              Academic Depository at the National Convention on Digital Initiat
            </div>
            <div className="flex wrapc event-info">
              <div className="flex">
                <Icon name="calendar_today"></Icon>
                <span>Sunday, July 9, 2017</span>
              </div>
              <div className="flex">
                <Icon name="pin_drop"></Icon>
                <span>New Delhi</span>
              </div>
            </div>
          </div>
        </div>
        <div className="event-container alter">
          <div className="event-detail">
            <h4>AICTE-ECI Chhatra Vishwakarma Awards 2017</h4>
            <div className="event-desc">
              All India Council for Technical Education (AICTE), Ministry of
              Human Resource Development, Govt.
            </div>
            <div className="flex wrap event-info">
              <div className="flex">
                <Icon name="calendar_today"></Icon>
                <span>Tuesday, September 19, 2017</span>
              </div>
              <div className="flex">
                <Icon name="pin_drop"></Icon>
                <span>AICTE HQ, New Delhi</span>
              </div>
            </div>
          </div>
          <Icon src="news-events-image2.svg" className="event-image"></Icon>
        </div>
        <div className="event-container">
          <Icon src="news-events-image3.svg" className="event-image"></Icon>
          <div className="event-detail">
            <h4>Smart India Hackathon 2017</h4>
            <div className="event-desc">
              Shri Prakash Javadekar, hon'ble Union Minister of Human Resources,
              introduces Smart India Hackathon 2017.
            </div>
            <div className="flex wrap event-info">
              <div className="flex">
                <Icon name="calendar_today"></Icon>
                <span>Wednesday, August 17, 2016</span>
              </div>
              <div className="flex">
                <Icon name="pin_drop"></Icon>
                <span>New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
