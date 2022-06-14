import React from "react";
import "./CategoryHeader.css";
import Container from "react-bootstrap/esm/Container";

const CategoryHeader = () => {
  return (
    <div className="categoryMenu">
      <Container>
        <div className="categoryMenu__content d-flex justify-content-between align-item-center">
          <div className="div-1 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-list pe-2 text-black"></i>
            <div className="category-select d-flex align-items-center justify-content-center">
              <span className="ps-1 pe-4">Category</span>
              <i class="fa-solid fa-chevron-down text-black"></i>
            </div>
          </div>
          <div className="div-2">
            <span className="pe-3">Home</span>
            <select className="category__select px-3">
              <option>New Items</option>
            </select>
            <span className="ps-3">Promotion</span>
          </div>
          <div className="div-3 d-flex justify-content-center align-items-center">
            <div className="delivery">
              <i class="fa-solid fa-truck"></i>
              <span className="ps-2">Track Your Order</span>
            </div>
            <div className="account ps-4">
              <i class="fa-regular fa-user"></i>
              <span className="ps-2">Sign In/Register</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryHeader;
