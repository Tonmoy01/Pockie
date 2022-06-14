import React from "react";
import "./Technology.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import TabPanelContent from "../Panel Content/TabPanelContent";

const Technology = () => {
  return (
    <div className="technology">
      <Container>
        <Heading
          categoryName="Technology"
          sectionText="All Smart Watch Laptop Tablet Desktop Accessories"
        />
        <div className="technology__container">
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
        </div>
      </Container>
    </div>
  );
};

export default Technology;
