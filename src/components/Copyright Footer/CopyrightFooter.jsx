import React from "react";
import "./CopyrightFooter.css";
import { Container } from "react-bootstrap";
import Logo from "../../asset/visa.png";

const CopyrightFooter = () => {
  return (
    <div className="copyright__section">
      <Container>
        <div className="copyright__container">
          <div className="copyright_text">
            <span>Copyright 2020 © ftribe</span>
          </div>
          <div className="copyright__listitem">
            <span>
              Introduce . Partner Incentives . Promotion . Contact . Frequently
              asked Questions
            </span>
          </div>
          <div className="copyright__logo d-flex gap-3">
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CopyrightFooter;
