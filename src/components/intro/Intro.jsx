import React from "react";
import "./intro.css";
import Me from "../../img/me.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Arthit Ounseam</h1>
          <div className="i-sup">
            I am
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Developer</div>
                <div className="i-title-item">Maker</div>
                <div className="i-title-item">Designer</div>
                <div className="i-title-item">Engineer</div>
              </div>
            </div>
          </div>
          <p className="i-desc">
            I worked not in the brance,but I aways wanted to develop myselft.and
            I think developers job able to do that Because developers can grow
            based on their diligence to always learn.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
