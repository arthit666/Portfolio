import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import Cert from "../cert/cert";
import { my_project, previous_project, cert } from "../../data";
const ProjectList = () => {
  return (
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Previous Project ...</h1>
        </div>
        <div className="pl-list">
          {previous_project.map((item) => (
            <Project
              key={item.id}
              img={item.img}
              link={item.link}
              name={item.name}
            />
          ))}
        </div>
        <div className="pl-texts">
          <h1 className="pl-title">Example Project ...</h1>
        </div>
        <div className="pl-list">
          {my_project.map((item) => (
            <Project
              key={item.id}
              img={item.img}
              link={item.link}
              name={item.name}
            />
          ))}
        </div>
        <div className="pl-texts">
          <h1 className="pl-title">Certification ...</h1>
        </div>
        <div className="pl-list">
          {cert.map((item) => (
            <Cert
              key={item.id}
              img={item.img}
              link={item.link}
              name={item.name}
            />
          ))}
        </div>
      </div>
  );
};

export default ProjectList;
