import React from "react";

function Icon({ name, src, className, onClick }) {
  return (
    <>
      {name && (
        <span
          className={
            "material-symbols-outlined icon-light " + (className || "")
          }
          onClick={(e) => {
            onClick && onClick(e);
          }}
        >
          {name}
        </span>
      )}
      {src && <IconSrc src={src} onClick={onClick} className={className} />}
    </>
  );
}

function IconSrc({ src, onClick, className }) {
  return (
    <img
      src={require("../assets/images/" + src)}
      onClick={(e) => {
        onClick && onClick(e);
      }}
      className={className}
    />
  );
}

export default Icon;
