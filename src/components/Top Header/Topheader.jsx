import React from "react";
import "./Topheader.css";
import { Container } from "react-bootstrap";

const Topheader = () => {
  return (
    <div className="main-div">
      <Container>
        <div className="topheader__container d-flex justify-content-between align-items-center text-white">
          <div className="topheader__social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="topheader_list d-flex gap-3">
            <span>Introduce .</span>
            <span>Partner Incentives .</span>
            <span>Promotion .</span>
            <span>Contact .</span>
            <span>Frequently asked questions</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
