import React, { useState } from "react";
import "./Tabs.css";
import Container from "react-bootstrap/esm/Container";
import Realestate from "../../asset/Estate.png";
import Technology from "../../asset/Technology.png";
import Watch from "../../asset/Watch.png";
import Glasses from "../../asset/Glasses.png";
import Cosmetics from "../../asset/Cosmetic.png";
import Food from "../../asset/food.png";
import TabPanelContent from "../Panel Content/TabPanelContent";
import Heading from "../Section Heading/Heading";

const Tabpanel = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabpanel__container">
      <Container>
        <Heading categoryName="Shop By Categories" sectionText="See More" />
        <div className="block-tabs d-flex align-items-center justify-content-between">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <img src={Realestate} alt="" />
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <img src={Technology} alt="" />
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <img src={Watch} alt="" />
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <img src={Glasses} alt="" />
          </div>
          <div
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            <img src={Cosmetics} alt="" />
          </div>
          <div
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            <img src={Food} alt="" />
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h1>Hello World 2</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              reprehenderit, cumque ipsam molestiae provident possimus delectus
              tempora magnam similique aspernatur optio laboriosam aut? Et eum
              reprehenderit commodi odit quam? Repellendus consequuntur dolores
              quam esse alias ex ut velit facere reprehenderit dignissimos
              voluptatem molestiae perferendis, itaque accusantium inventore,
              expedita quasi dolore.
            </p>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <TabPanelContent />
            <TabPanelContent />
            <TabPanelContent />
            <TabPanelContent />
            <TabPanelContent />
            <TabPanelContent />
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h1>Hello World 3</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              reprehenderit, cumque ipsam molestiae provident possimus delectus
              tempora magnam similique aspernatur optio laboriosam aut? Et eum
              reprehenderit commodi odit quam? Repellendus consequuntur dolores
              quam esse alias ex ut velit facere reprehenderit dignissimos
              voluptatem molestiae perferendis, itaque accusantium inventore,
              expedita quasi dolore.
            </p>
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <h1>Hello World 4</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              reprehenderit, cumque ipsam molestiae provident possimus delectus
              tempora magnam similique aspernatur optio laboriosam aut? Et eum
              reprehenderit commodi odit quam? Repellendus consequuntur dolores
              quam esse alias ex ut velit facere reprehenderit dignissimos
              voluptatem molestiae perferendis, itaque accusantium inventore,
              expedita quasi dolore.
            </p>
          </div>
          <div
            className={toggleState === 5 ? "content active-content" : "content"}
          >
            <h1>Hello World 5</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              reprehenderit, cumque ipsam molestiae provident possimus delectus
              tempora magnam similique aspernatur optio laboriosam aut? Et eum
              reprehenderit commodi odit quam? Repellendus consequuntur dolores
              quam esse alias ex ut velit facere reprehenderit dignissimos
              voluptatem molestiae perferendis, itaque accusantium inventore,
              expedita quasi dolore.
            </p>
          </div>
          <div
            className={toggleState === 6 ? "content active-content" : "content"}
          >
            <h1>Hello World 6</h1>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              reprehenderit, cumque ipsam molestiae provident possimus delectus
              tempora magnam similique aspernatur optio laboriosam aut? Et eum
              reprehenderit commodi odit quam? Repellendus consequuntur dolores
              quam esse alias ex ut velit facere reprehenderit dignissimos
              voluptatem molestiae perferendis, itaque accusantium inventore,
              expedita quasi dolore.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tabpanel;
