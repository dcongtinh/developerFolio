import React from "react";
import "./Publication.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";

export default function Publication({info}) {
  if (info.display) {
    return (
      <div className="education-section" id={info.id}>
        <h1 className="education-heading">{info.sectionName}</h1>
        <div className="education-card-container">
          {info.papers.map((paper, index) => (
            <PublicationCard key={index} paper={paper} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
