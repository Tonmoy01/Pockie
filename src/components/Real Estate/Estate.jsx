import React, { useState } from "react";
import "./Estate.css";
import { Container } from "react-bootstrap";
import Heading from "../Section Heading/Heading";
import TabPanelContent from "../Panel Content/TabPanelContent";
import Modal from "../Modal/Modal";

const Estate = () => {
  const [modal, setModal] = useState(false);
  const handleModalPopup = () => {
    setModal(!modal);
  };
  return (
    <div className="estate">
      <Container>
        <Heading
          categoryName="Real Estate"
          sectionText="All House Land House for rent Land for rent Project"
        />
        <div className="estate__container" onClick={handleModalPopup}>
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          <TabPanelContent />
          {modal && <Modal />}
        </div>
      </Container>
    </div>
  );
};

export default Estate;
