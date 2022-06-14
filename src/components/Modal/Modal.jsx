import React from "react";
import "./Modal.css";
import Image from "../../asset/Image.png";

const Modal = () => {
  return (
    <div className="nothing">
      <div className="overlay"></div>
      <div className="modal__content">
        <div className="modal__container">
          <div className="modal__close">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className="modal__left">
            <img className="main__image" src={Image} alt="" />
            <div className="modal__smallImage d-flex align-items-center justify-content-between mt-3">
              <img src={Image} alt="" />
              <img src={Image} alt="" />
              <img src={Image} alt="" />
              <img src={Image} alt="" />
            </div>
          </div>
          <div className="modal__right">
            <div className="modal__right-content">
              <h2 className="product__name">
                Apple iPad Pro 11" (2020) Wifi 128Gb (Silver)- 128Gb/ 11Inch/
                Wifi
              </h2>
              <div className="rating__box">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span className="modal__ratingCount">(832 rates)</span>
              </div>
              <h3 className="modal__price">$884.12 </h3>
              <p>Code: Apple iPad Pro 11" (2020) Wifi 128Gb Silver</p>
              <p>
                Categopry: <span className="highlighted__text">Technology</span>
              </p>
              <p>
                Keyword:{" "}
                <span className="highlighted__text">
                  Apple, Technology, Ipad
                </span>
              </p>
              <p>• Screen: LED-Backlit, 11Inch</p>
              <p>• Chipset/ CPU: Apple A12Z Bionic 2.3Ghz</p>
              <p>• RAM: 128Gb</p>
              <p>• Operating system: iOS 13</p>
              <span className="modal__quantity">Qty</span>
              <div className="modal__orderPlace d-flex align-items-center gap-4">
                <span className="quantity__btn">-</span>
                <div className="quantity__Total">
                  <input type="text" placeholder="02" />
                </div>
                <span className="quantity__btn">+</span>
                <button>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
