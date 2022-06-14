import React from "react";
import "./Services.css";
import { Container } from "react-bootstrap";
import FreeShiping from "../../asset/freeshiping.png";
import Cashback from "../../asset/cashback.png";
import Support from "../../asset/normal.png";

const Services = () => {
  return (
    <div className="services">
      <Container>
        <div className="services__container">
          <img src={FreeShiping} alt="" />
          <img src={Cashback} alt="" />
          <img src={Support} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Services;
