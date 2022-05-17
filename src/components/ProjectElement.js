import React from "react";

export default function ProjectElement(props) {
  return (
    <div className="projectElement">
      <a href={props.item.link} target="_blank" rel="noreferrer">
        <img
          src={`./images/${props.item.coverImg}`}
          alt="project"
          className="card-img"
        />
        <h3 className="projectHeader project-padding">{props.item.title}</h3>
        <p className="project-description">{props.item.shortDescription}</p>
        <p className="project-lang project-padding">{props.item.language}</p>
      </a>
    </div>
  );
}
