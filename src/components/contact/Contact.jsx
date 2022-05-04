import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="ct">
      <div className="ct-texts">
        <h1 className="ct-title">Contact Me</h1>
        <div className="ct-desc">
          <div className="desc-item">
            <i className="Icon fa-solid fa-envelope"></i>
            <p>arthit0ak@gmail.com</p>{" "}
          </div>
          <div className="desc-item">
            <i className="Icon fa-solid fa-mobile-screen"></i>
            <p>082-804-1315</p>{" "}
          </div>
          <div className="desc-item">
            <i className="Icon fa-brands fa-facebook-square"></i>
            <a href="https://web.facebook.com/arthit.ounseam" target="_blank" rel="noreferrer">

            <p>Art'Tith Tic</p>{" "}
            </a>
          </div>
          <div className="desc-item">
            <i class="Icon fa-brands fa-github-square"></i>
            <a href="https://github.com/Arthit666" target="_blank" rel="noreferrer">
              <p>Arthit666</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
