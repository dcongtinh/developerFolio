import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import ReactHtmlParser from 'react-html-parser';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}>
                  {skills.icon && <span>{ReactHtmlParser(skills.icon)}</span>}
                </i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
