import React from "react";
import "./HotDeal.css";
import { Container } from "react-bootstrap";

const HotDeal = () => {
  return (
    <div className="hotDeal">
      <Container>
        <div className="hotdeal__container">
          <div className="hotdeal__left">
            <div className="div-left-content">
              <span>Hot Deal</span>
              <h3 className="pt-3">TOURS SAFE</h3>
              <h3>TRUE DISCOUNT</h3>
              <button className="mt-4">Order Now</button>
            </div>
          </div>
          <div className="hotdeal__right">
            <div className="div-right-content">
              <span>New Product</span>
              <h3 className="pt-3">EXPERIENCE TECHNOLOGY</h3>
              <h3>RELAX HIGHTLY</h3>
              <button className="mt-4">Order Now</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HotDeal;
