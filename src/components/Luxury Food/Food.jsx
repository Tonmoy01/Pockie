import React from "react";
import "./Food.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import TabPanelContent from "../Panel Content/TabPanelContent";

const Food = () => {
  return (
    <div className="foods">
      <Container>
        <Heading
          categoryName="Luxury Foods"
          sectionText="All Drinks - Preparation Cereals Drink Resources"
        />
        <div className="foods__container">
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
        </div>
      </Container>
    </div>
  );
};

export default Food;
