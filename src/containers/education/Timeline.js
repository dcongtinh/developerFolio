import React from "react";
import "./Education.scss";
import TimelineCard from "../../components/educationCard/TimelineCard";
import {educationInfo} from "../../portfolio";
import {Slide} from "react-reveal";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="timeline">
        <h1 className="education-heading">Timeline</h1>
        <div className="education-card-container">
          <div className="education-card" style={{paddingBottom: "16px"}}>
            <VerticalTimeline lineColor="#868e96">
              {educationInfo.schools.map((school, index) => (
                <TimelineCard key={index} school={school} />
              ))}
              <VerticalTimelineElement
                iconStyle={{background: "#2ecc71", color: "#fff"}}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
          <Slide left duration={2000}>
            <div className="education-card-border"></div>
          </Slide>
        </div>
      </div>
    );
  }
  return null;
}
