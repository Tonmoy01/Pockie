import React from "react";
import "./Promo.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import Image from "../../asset/Image.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Promo = () => {
  return (
    <div className="promo">
      <Container>
        <Heading categoryName="Promo Product" sectionText="See All" />
        <div className="promo__container d-flex gap-1 justify-content-between">
          <div className="promo-left d-flex justify-content-between">
            <div className="promo__left-1">
              <img src={Image} alt="" />
            </div>
            <div className="promo__left-2 d-flex justify-content-between flex-column ps-5">
              <span className="promo__product_name">
                Apple Macbook Air MWTJ2SA/A Space Grey (2020)
              </span>
              <div className="price d-flex align-items-center">
                <h4 className="pe-4">$1,099 </h4>
                <span>
                  <del>$1193.71</del>
                </span>
              </div>
              <div className="progressbar-label d-flex justify-content-between">
                <span>Sold: 700</span>
                <span>In Stock: 300</span>
              </div>
              <ProgressBar variant="success" now={70} />
              <div className="countdown d-flex justify-content-between">
                <div className="days text-center">
                  <h6>123</h6>
                  <span>Days</span>
                </div>
                :
                <div className="hour text-center">
                  <h6>42</h6>
                  <span>Hour</span>
                </div>
                :
                <div className="min text-center">
                  <h6>00</h6>
                  <span>Min</span>
                </div>
                :
                <div className="sec text-center">
                  <h6>08</h6>
                  <span>Sec</span>
                </div>
              </div>
              <button className="w-100 ms-0">Add to Cart</button>
            </div>
          </div>
          <div className="promo-right d-flex justify-content-between">
            <div className="promo__right-1">
              <img src={Image} alt="" />
            </div>
            <div className="promo__left-2 d-flex justify-content-between flex-column ps-5">
              <span className="promo__product_name">
                Apple Macbook Air MWTJ2SA/A Space Grey (2020)
              </span>
              <div className="price d-flex align-items-center">
                <h4 className="pe-4">$514.51 </h4>
                <span>
                  <del>$539.06 </del>
                </span>
              </div>
              <div className="progressbar-label d-flex justify-content-between">
                <span>Sold: 700</span>
                <span>In Stock: 300</span>
              </div>
              <ProgressBar variant="success" now={70} />
              <div className="countdown d-flex justify-content-between">
                <div className="days text-center">
                  <h6>123</h6>
                  <span>Days</span>
                </div>
                :
                <div className="hour text-center">
                  <h6>42</h6>
                  <span>Hour</span>
                </div>
                :
                <div className="min text-center">
                  <h6>00</h6>
                  <span>Min</span>
                </div>
                :
                <div className="sec text-center">
                  <h6>08</h6>
                  <span>Sec</span>
                </div>
              </div>
              <button className="w-100 ms-0">Add to Cart</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promo;
