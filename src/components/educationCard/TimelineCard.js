import React, {createRef, useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import ReactHtmlParser from "react-html-parser";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: isDark ? "#2296F3" : "rgb(0,0,0,0.025)",
        color: isDark ? "#fff" : "#000"
      }}
      contentArrowStyle={{
        borderRight: "7px solid",
        borderRightColor: isDark ? "#2296F3" : "#868e96"
      }}
      date={school.duration}
      iconStyle={{background: "#2296F3", color: "#868e96"}}
      icon={
        <a href={school.website} target="_blank" rel="noreferrer">
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
            style={{
              position: "relative",
              left: "-18px",
              top: "-18px",
              boxShadow: "0 0.2rem 0.4rem rgba(0, 0, 0, 0.5)"
            }}
          />
        </a>
      }
    >
      <h5 className="education-text-school">
        <a href={school.website} target="_blank" rel="noreferrer">
          {school.schoolName}
        </a>
      </h5>
      <div className="education-text-details">
        <h5
          className="education-text-subHeader"
          style={{color: isDark ? "#fff" : "#000"}}
        >
          {school.subHeader}
        </h5>
        <p className="education-text-desc" style={{fontSize: "19px"}}>
          {ReactHtmlParser(school.desc)}
        </p>
      </div>
    </VerticalTimelineElement>
  );
}
