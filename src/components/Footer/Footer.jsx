import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__container">
          <div className="contact">
            <h5>Contact</h5>
            <ul className="contact__list">
              <li>ftribe Co., Ltd</li>
              <li className="d-flex align-items-center">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                1658 Rosewood Lane <br /> New York city, NY
              </li>
              <li className="d-flex align-items-center">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                212 929 9953
              </li>
              <li className="d-flex align-items-center">
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                admin@ftribe.com
              </li>
            </ul>
          </div>
          <div className="contact">
            <h5>Cooperation - Association</h5>
            <ul className="contact__list">
              <li>Operation Regulation of EC-Exchange</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Selling With ftribe</li>
            </ul>
          </div>
          <div className="customar">
            <h5>Customer Support</h5>
            <ul className="contact__list">
              <li>
                Hotline Customer Service <br />{" "}
                <span className="green__color">212 929 9953</span>
              </li>
              <li>Frequently asked Questions</li>
              <li>Submit Support Request</li>
              <li>Ordering Guide</li>
              <li>Shipping Methods</li>
            </ul>
          </div>
          <div className="mailing">
            <h5>
              <span className="empty-spam"></span>
            </h5>
            <ul className="contact__list">
              <li>Installment Purchase Guide</li>
              <li>Import Policy</li>
              <li>
                Customer Support: <br />{" "}
                <span className="green__color">customer@ftribe.com</span>
              </li>
              <li>
                Security Error Report: <br />
                <span className="green__color">admin@ftribe.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
