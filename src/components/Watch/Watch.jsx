import React from "react";
import { Container } from "react-bootstrap";
import TabPanelContent from "../Panel Content/TabPanelContent";
import Heading from "../Section Heading/Heading";
import "./Watch.css";

const Watch = () => {
  return (
    <div className="watch__container">
      <Container>
        <Heading
          categoryName="Watch"
          sectionText="All   Men's watch   Women's Watches   Smart watch"
        />
        <div className="watch__content">
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

export default Watch;
