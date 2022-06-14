import React from "react";
import "./Cosmetics.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import TabPanelContent from "../Panel Content/TabPanelContent";
const Cosmetics = () => {
  return (
    <div className="cosmetics">
      <Container>
        <Heading
          categoryName="Cosmetics"
          sectionText="All Lotion Mask Perfume"
        />
        <div className="cosmetics__container">
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
        </div>
      </Container>
    </div>
  );
};

export default Cosmetics;
