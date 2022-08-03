import React, { useCallback, useEffect, useState } from "react";
import Icon from "../components/Icon";
import "../assets/styles/navbar.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const NavData = require("../data/nav.json");

function Navbar() {
  const [showSettings, setShowSettings] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <>
      <div id="primary-nav" className={navOpen ? "nav-open" : ""}>
        <div className="flex  space-between top-header">
          <div className="flex logo-container">
            <Icon src="aicte-logo.png" />
            <p>
              all india council of <br /> technical education
            </p>
          </div>
          <Icon
            name="close"
            className="hide-lg pointer"
            onClick={() => setNavOpen(false)}
          ></Icon>
        </div>
        <div className="nav-content">
          <div className="group">
            <div className="flex space-between search">
              <input type="text" placeholder="Search" />
              <Icon name="search" className="pointer"></Icon>
            </div>
            <div className="flex access-buttons">
              <Button text="Screen Reader" src="screen-reader.svg" />
              <Button
                text="Settings"
                icon="settings"
                className={showSettings ? "rotate-settings" : ""}
                onClick={() => setShowSettings(!showSettings)}
              />
              <div
                className={
                  "settings-menu" + (showSettings ? " show-settings" : "")
                }
              >
                {SettingsMenu()}
              </div>
            </div>
          </div>
          <div className="nav-links">
            <NavMenu
              text="Home"
              src="home.svg"
              menu={false}
              urlMatch=""
              onClick={() => navigate("/")}
            />
            {NavData.map((item) => (
              <NavMenu
                text={item.title}
                icon={item.icon}
                src={item.iconSrc}
                urlMatch={item.title}
                items={item.items}
                closeNav={closeNav}
              />
            ))}
          </div>
          <div className="login">
            <Button text="Login" src="clarity_login-solid.svg" />
          </div>
        </div>
      </div>
      <div id="mobile-nav" className={navOpen ? "show-mobile-nav" : ""}>
        <Icon
          name="menu"
          className="pointer"
          onClick={() => setNavOpen(true)}
        ></Icon>
        <p className="hide-sm">all india council of technical education</p>
        <p className="hide-bg">aicte</p>
      </div>
    </>
  );
}

function NavMenu({
  text,
  icon,
  src,
  menu,
  urlMatch,
  items,
  closeNav,
  onClick,
}) {
  let currentPage = (window.location.pathname + "/").split("/")[1];
  let isActive = currentPage === urlMatch;
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div
      className={"navMenu " + (menuActive ? "menuActive" : "")}
      onClick={() => onClick && onClick()}
    >
      <div
        className={
          `flex  space-between pointer navlink-container ` +
          (isActive ? "nav-active" : "")
        }
        onClick={() => setMenuActive(true)}
      >
        <div className="flex navlink">
          <Icon name={icon} src={src}></Icon>
          <p>{text}</p>
        </div>
        {menu !== false && <Icon name="chevron_right"></Icon>}
      </div>

      {/* //submenu */}
      {menu !== false && (
        <div className="submenu">
          <div className="flex submenu-header">
            <Icon
              name="chevron_left"
              className="pointer"
              onClick={() => setMenuActive(false)}
            />
            <h4>{text}</h4>
          </div>
          <div className="submenu-links">
            {items.map((item) => (
              <Link
                className="link"
                to={item.url}
                onClick={() => {
                  setMenuActive(false);
                  closeNav();
                }}
              >
                <p>{item.name}</p>
                <small>{item.desc}</small>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SettingsMenu() {
  const [mode, setMode] = usePersistState("theme", "light");

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else document.body.classList.remove("dark");

    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <>
      <div className="flex space-between settings-item">
        <p>Theme</p>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="flex space-between settings-item">
        <p>Language</p>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="flex space-between settings-item">
        <p>Font Size</p>
        <div className="flex fonts">
          <p>A-</p>
          <p>A</p>
          <p>A+</p>
        </div>
      </div>
    </>
  );
}

function persistItem(key, value) {
  localStorage.setItem(key, value);
  return value;
}
function usePersistState(key, initialValue) {
  const [state, setState] = useState(
    () => localStorage.getItem(key) || persistItem(key, initialValue)
  );
  const setStateAndPersist = useCallback(
    (newState) => {
      setState(newState);
      return persistItem(key, newState);
    },
    [key, setState]
  );
  return [state, setStateAndPersist];
}

export default Navbar;
