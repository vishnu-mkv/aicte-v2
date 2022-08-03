import React from "react";
import Navbar from "./Navbar";

function PageContainer({ ...props }) {
  return (
    <div id="the-page">
      <Navbar />
      <div id="page-content">{props.children}</div>
    </div>
  );
}

export default PageContainer;
