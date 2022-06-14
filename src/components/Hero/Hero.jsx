import Modal from "../Modal/Modal";
import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const handleModalPopup = () => {
    setModal(!modal);
  };
  return (
    <div className="hero__container" onClick={handleModalPopup}>
      <div class="item1">
        <div className="heading">
          <h6>Asus</h6>
          <h5>Supper Sale</h5>
          <h4>Laptop Gaming</h4>
        </div>
        <div className="button-div">
          <button>Order Now</button>
        </div>
      </div>
      <div class="item2">
        <p>New Product</p>
        <p>HAND WATCH </p>
        <p>ROSSINI</p>
        <button>Order Now</button>
        <div className="item2-icon">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div class="item3 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Big deal
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Black Friday
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Buy 1 Get 1
        </p>
      </div>
      <div class="item4 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Fujiwa
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          ION Alkaline{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Micronutrient <br />
          Supplements
        </p>
      </div>
      <div class="item5 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Wine
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Drunkenness{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Deep Flavor
        </p>
      </div>
      <div class="item6 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Cosmetic
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          MAXIMI{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Sale 50%
        </p>
      </div>
      <div class="item7 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Sunglasses
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Authentic{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Sale off 50%
        </p>
      </div>
      <div class="item8 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Hand Wash
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Clean hands{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Clean bacteria
        </p>
      </div>
      <div class="item9 d-flex justify-content-center flex-column ps-3">
        <p style={{ fontSize: "12px", lineHeight: "18px", fontWeight: "400" }}>
          Fashion
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Nice bag{" "}
        </p>
        <p style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "500" }}>
          Nice style
        </p>
      </div>
      {modal && <Modal />}
    </div>
  );
};

export default Hero;
