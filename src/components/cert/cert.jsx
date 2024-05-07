import React from "react";
import "./cert.css";
const Cert = ({ img, link, name }) => {
  return (
    <div className="c">
      <div className="c-browser">
        <div className="cc-browser">
          <div className="c-circle"></div>
          <div className="c-circle"></div>
          <div className="c-circle"></div>
        </div>
        <div className="c-name">{name}</div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="c-img" />
      </a>
    </div>
  );
};

export default Cert;
