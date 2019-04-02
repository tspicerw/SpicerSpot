import React from "react";
import selfie from "./spicerSelfie.png";
import switchImg from "./selfieSwitch.jpg";
import "./about.css";

const about = props => (
  <div className="about-wrapper">
    <div className="imageDiv">
      <img src={switchImg} className="bottom" alt="Casual" />
      <img src={selfie} className="top" alt="Prossional" />
    </div>
    <div className="descDiv">
      <h4>
        <p>
          Terrence is a Web Developer, with experience with the .NET stack. His
          background is in Information Systems and Project Management. He is
          driven by his passion to become a Technical Lead by learning the ins
          and outs of full-stack development and coupling that with his strong
          desire to lead. His career as a developer began in Virginia as a
          consultant where he completed several contracts with respectable
          corporations, such as The Nation Center for Missing and Exploited
          Children. Since then he has worked several full-time positions in the
          Philadelphia Area and is currently a Mid-level developer for Opvantek,
          Inc.
        </p>
      </h4>
    </div>
  </div>
);

export default about;
