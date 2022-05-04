import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import { products } from "../../data";
const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Project ...</h1>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
