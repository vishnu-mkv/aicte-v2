import React from "react";
import Icon from "./Icon";
import "../assets/styles/Button.scss";

export function Button({ text, icon, src, onClick, className = "" }) {
  return (
    <div
      className={"flex pointer nav-button " + className}
      onClick={() => onClick()}
    >
      <p>{text}</p>
      <Icon name={icon} src={src}></Icon>
    </div>
  );
}
