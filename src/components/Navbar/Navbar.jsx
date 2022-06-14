import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Logo from "./pockie.png";
import CartImage from "../../asset/Image.png";
import "./Navbar.css";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div className="navbar__container d-flex justify-content-between align-items-center p-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo__section">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar__right-content d-flex align-items-center">
            <div className="input-group">
              <input type="text" placeholder="What are you looking for?" />
              <div
                onClick={() => setOpenCategory(!openCategory)}
                className="select d-flex justify-content-between align-items-center px-3"
              >
                <span>Category</span>
                <span>
                  <i class="fa-solid fa-angle-up"></i>
                  {openCategory && (
                    <div className="category-select-div">
                      <h5 className="category__main">All products</h5>
                      <h5 className="category__main">Technology</h5>
                      <h6 className="category__sub">Smart Watch</h6>
                      <h6 className="category__sub">Laptop</h6>
                      <p className="category__title">Apple</p>
                      <p className="category__title">DELL</p>
                      <h6 className="category__sub">Desktop</h6>
                      <p className="category__title">Apple</p>
                      <p className="category__title">DELL</p>
                    </div>
                  )}
                </span>
              </div>
            </div>
            <button>Search</button>
            <div className="navbar-icon">
              <i class="fa-regular fa-heart"></i>
              <span onClick={() => setOpenCart(!openCart)}>
                <i class="fa-solid fa-cart-arrow-down"></i>
                {openCart && (
                  <div className="menu-cart">
                    <div className="cart_div">
                      <i class="fa-solid fa-caret-up"></i>
                      <div className="cart-div-1 mb-3 d-flex align-content-between gap-3 justify-content-center">
                        <img src={CartImage} alt="" />
                        <div className="cart-content">
                          <span className="productName">
                            Fashion Glasses Sunny Premium
                          </span>
                          <h6 className="cart-price">$25 </h6>
                          <div className="cart__button__category d-flex align-items-center justify-content-between">
                            <span className="quantity">Qty</span>
                            <span className="input_value">2|</span>
                            <button>Update</button>
                          </div>
                        </div>
                      </div>
                      <div className="cart-div-1 mb-3 d-flex align-content-between gap-3 justify-content-center">
                        <img src={CartImage} alt="" />
                        <div className="cart-content">
                          <span className="productName">
                            Fashion Glasses Sunny Premium
                          </span>
                          <h6 className="cart-price">$25 </h6>
                          <div className="cart__button__category d-flex align-items-center justify-content-between">
                            <span className="quantity">Qty</span>
                            <span className="input_value">2|</span>
                            <button>Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
