import React from "react";
import "./TabPanelContent.css";
import ProductImage from "../../asset/Image.png";

const TabPanelContent = () => {
  return (
    <div className="tabpanel__content">
      <div className="tabpanel__content__single">
        <div className="tabpanel__content__single_image">
          <img src={ProductImage} alt="" />
        </div>
        <div className="tabpanel__details">
          <span className="product__name">
            Apple Macbook Pro 2019 MWP42SA/A
          </span>
          <h5 className="product__price">$2,013.54 </h5>
          <span>by Co., Ltd Minie Li</span>
        </div>
      </div>
    </div>
  );
};

export default TabPanelContent;
