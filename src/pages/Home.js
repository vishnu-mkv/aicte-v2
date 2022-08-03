import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.scss";
import { Button } from "../components/Button";
import Header, { SubHeader, SubHeader2 } from "../components/Header";
import Icon from "../components/Icon";
import Loading from "../components/Loading";
import { NewsContainer, PressContainer } from "../components/Container";
import UseFetch from "../hooks/UseFetch";

function Home() {
  return (
    <div id="home-page">
      <Marquee />
      <div className="pad">
        <Carousal />
        <section className="bgg about">
          <div className="welcome">
            <Header title="Welcome to AICTE" />
            <p>
              All India Council for Technical Education (AICTE) was set up in
              November 1945 as a national-level Apex Advisory Body to conduct a
              survey on the facilities available for technical education and to
              promote development in the country in a coordinated and integrated
              manner.
            </p>
            <div className="flex wrap about-buttons">
              <Button text="About AICTE" />
              <Button text="PGDM Student Verification" />
              <Button text="Centralized Support Systems" />
            </div>
          </div>
          <ListView
            title="Announcements"
            icon="campaign"
            url="/api/announcement"
            className="announcements"
          />
          <ListView
            title="Quick Links"
            src="akar-icons_link-chain.svg"
            url="/api/quick-links"
            className="quick-links"
          />
        </section>
        <Stats />
        <HomeNews />
        <HomePress />
        <Bureaus />
        <Schemes />
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="bar">
      <div className="bar_content">
        <p>Important Notice for all Administration, Training and Placement</p>
        <p>Last date to apply for scholariship is August 15, 2022.</p>
      </div>
    </div>
  );
}

function Carousal() {
  // use banner
  const [bannerLoading, banner] = UseFetch("/api/banner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    if (!banner || stopTimer) return;

    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % banner.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banner, currentIndex]);

  function changeSlide(i) {
    setCurrentIndex((parseInt(i) + banner.length) % banner.length);
    setStopTimer(true);
  }

  useEffect(() => {
    let el = carousel.current;
    if (!el) return;
    el.scrollLeft = currentIndex * el.clientWidth;
  }, [currentIndex]);

  if (bannerLoading) return <Loading></Loading>;

  return (
    <div className="carousel-container">
      {/* <Header title="featured" /> */}
      <div
        className="snap-scroll hide-scroller banners-container"
        ref={carousel}
      >
        {banner.map((banner) => (
          <div className="banner">
            <div className="flex space-between banner-header">
              <div className="banner-text">
                <h3>{banner.title}</h3>
                <p>{banner.summary}</p>
              </div>
              <Button text={banner.url_text} icon="trending_flat"></Button>
            </div>
            <div className="banner-image">
              <img
                src={process.env.REACT_APP_SERVER_URL + banner.image_url}
                alt={banner.title}
                crossOrigin="anonymous"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-between controls">
        <div
          className="flex arrow controls-left pointer"
          onClick={() => changeSlide(currentIndex - 1)}
        >
          <Icon name="chevron_left"></Icon>
        </div>
        <div className="flex space-between dots pointer">
          {banner.map((_, index) => (
            <div
              className={
                "circle dot " + (currentIndex === index ? "current-dot" : "")
              }
              onClick={() => {
                changeSlide(index);
              }}
            />
          ))}
        </div>
        <div
          className="flex arrow controls-right pointer"
          onClick={() => changeSlide(currentIndex + 1)}
        >
          <Icon name="chevron_right"></Icon>
        </div>
      </div>
    </div>
  );
}

function ListView({ title, icon, src, className }) {
  // use list
  const [listLoading, data] = UseFetch("/api/quick-links");

  if (listLoading) return <Loading></Loading>;

  return (
    <div className={className}>
      <SubHeader2 icon={icon} src={src} title={title}></SubHeader2>
      <div className="links">
        {data.map((link) => (
          <Link to={link.url} className="link">
            {link.title}
          </Link>
        ))}
      </div>
      <Button text="More" icon="trending_flat"></Button>
    </div>
  );
}

function Stats() {
  return (
    <div id="home-stats">
      <SubHeader title="Our Institutes" className="stat-head"></SubHeader>
      <div className="grid stats">
        <div className="stat-container">
          <Icon src="image64.svg" />
          <div className="stat-info">
            <p className="big-stat">9.6 K</p>
            <p className="stat-what">Institutions</p>
          </div>
        </div>
        <div className="stat-container">
          <Icon src="image65.svg" />
          <div className="stat-info">
            <p className="big-stat">196</p>
            <p className="stat-what">New Institutions</p>
          </div>
        </div>
        <div className="stat-container">
          <Icon src="image66.svg" />
          <div className="stat-info">
            <p className="big-stat">3.0 M</p>
            <p className="stat-what">Total Intake</p>
          </div>
        </div>
        <div className="stat-container">
          <Icon src="image67.svg" />
          <div className="stat-info">
            <p className="big-stat">652 K</p>
            <p className="stat-what">Placement</p>
          </div>
        </div>
      </div>
      <p className="year">In the Academic Year of 2020 - 2021</p>
      <a className="flex underlink" href="/">
        <p>View More on AICTE Dashboard</p>
        <Icon name="trending_flat" />
      </a>
    </div>
  );
}

function HomeNews({ title = "News", limit = 3, bg = true, left = false }) {
  // use news
  const [newsLoading, news] = UseFetch("/api/news");

  if (newsLoading) return <Loading></Loading>;

  return (
    <div className={(bg ? "news-back " : "") + "bgg home-news"}>
      <SubHeader title={title} className="news-head" left={left}></SubHeader>
      <div className="content-container">
        {news.slice(0, limit).map((item) => (
          <NewsContainer data={item}></NewsContainer>
        ))}
      </div>
      <a className="flex underlink" href="/news">
        <p> Read More News </p>
        <Icon name="trending_flat" />
      </a>
    </div>
  );
}

function HomePress({ left }) {
  const [pressLoading, press] = UseFetch("/api/press-release");

  if (pressLoading) return <Loading></Loading>;

  return (
    <div className="home-press">
      <SubHeader
        title="Press Releases"
        className="press-head"
        left={left}
      ></SubHeader>
      <div className="content-container">
        {press.slice(0, 5).map((item) => (
          <PressContainer data={item}></PressContainer>
        ))}
      </div>
      <a className="flex underlink" href="/press-release">
        <p> Read More Press Releases </p>
        <Icon name="trending_flat" />
      </a>
    </div>
  );
}

const bureauesData = [
  {
    name: "Overview",
    desc: "An Overview of Bureaus and Cells.",
    url: "/",
    image: "../assets/images/bureus1.jfif",
  },
  {
    name: "Approval",
    desc: "As defined in the AICTE act 1987, Technical Education means programmes of Education, Research, and training in Engineering and Technology, Architecture, Town Planning, Management, Pharmacy, and Applied Arts and Crafts, and such other programmes or areas as the Central Government may in consultation with the Council, by notification in the official gazette declare.",
    url: "/",
    image: "../assets/images/bureus2.jfif",
  },
  {
    name: "Policy & Academic Planning",
    desc: "Planning and framing of policies related to Academics for strengthening and improving quality of Technical Education",
    url: "/",
    image: "../assets/images/bureus3.jfif",
  },
  {
    name: "Administration",
    desc: "Administration consists of the performance or management of business operations and thus the making or implementing of major decisions. Administration can be defined as the universal process of organizing people and resources efficiently so as to direct activities toward common goals and objectives.",
    url: "/",
    image: "../assets/images/bureus4.jfif",
  },
  {
    name: "Finance",
    desc: "Finance Bureau has been mandated to manage Finances (Funds) efficiently and effectively in such a manner as to accomplish the objectives of the organization by planning, monitoring, organizing, and controlling of the monetary resources of an organization.",
    url: "/",
    image: "../assets/images/bureus5.jfif",
  },
];

function Bureaus() {
  return (
    <div className="bgg bureaus">
      <SubHeader title="Bureaus" className="bureaus-head"></SubHeader>
      <div id="b-scroller" className="flex snap-scroll hide-scroller">
        {bureauesData.map((item, index) => (
          <div
            className="b-slide"
            style={{
              backgroundImage: `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.4181022750897234) 0%,
                rgba(0, 0, 0, 1) 100%
              ), url(${require(`../assets/images/bureus${index + 1}.jfif`)})`,
            }}
          >
            <div className="b-text">
              <div className="b-title">{item.name}</div>
              <div className="b-desc">{item.desc}</div>
              <div className="flex b-lmore">
                <span>Learn More</span>
                <Icon name="trending_flat"></Icon>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Schemes() {
  return (
    <div className="schemes">
      <SubHeader
        title="Initiatives & Schemes"
        className="schemes-head"
      ></SubHeader>
    </div>
  );
}

export default Home;
export { HomeNews, HomePress };
