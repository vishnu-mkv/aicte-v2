import React from "react";
import Icon from "./Icon";

function Header({ title, className, src, icon }) {
  return (
    <div
      className={"flex " + (className ? className : "")}
      style={{ marginBlock: "1em" }}
    >
      <Icon src={src} name={icon} />
      <h5 style={{ fontWeight: 700 }}>{title}</h5>
    </div>
  );
}

function SubHeader({ title, className, icon, src, left, right }) {
  if (left) {
    className = "left " + (className ? className : "");
  }

  if (right) {
    className = "right " + (className ? className : "");
  }

  return (
    <div
      className={"flex subheading " + (className ? className : "")}
      style={{ marginBottom: "1em" }}
    >
      <Icon src={src} name={icon} />
      <h6 style={{ fontWeight: 600 }}>{title}</h6>
    </div>
  );
}

function SubHeader2({ title, className, icon, src }) {
  return (
    <div className={"flex" + (className ? className : "")}>
      <Icon src={src} name={icon} />
      <h6 style={{ fontWeight: 600 }}>{title}</h6>
    </div>
  );
}

export default Header;
export { SubHeader, SubHeader2 };
