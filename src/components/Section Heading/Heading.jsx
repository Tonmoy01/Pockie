import React from "react";
import "./Heading.css";

const Heading = ({ categoryName, sectionText }) => {
  return (
    <div className="section__heading d-flex justify-content-between align-items-center mb-5">
      <div className="section__header__categoryName">
        <h4>{categoryName}</h4>
      </div>
      <div className="section__header__iconBox d-flex">
        <div className="sectionText__box">
          <span>{sectionText}</span>
        </div>
        <div className="section__header__icons">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Heading;
