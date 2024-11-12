import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./PublicationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import ReactHtmlParser from 'react-html-parser';

export default function PublicationCard({paper}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="title">
            {ReactHtmlParser(item)}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-right">
            {paper.schoolName && <h5 className="education-text-paper">{paper.schoolName}</h5>}
            <div className="education-text-details">
              {paper.subHeader && <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {paper.subHeader}
              </h5>}

              {paper.duration && <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {paper.duration}
              </p>}

              {paper.desc && <p className="education-text-desc">{paper.desc}</p>}

              <div className="education-text-desc">
                <ol reversed>
                  <GetDescBullets descBullets={paper.descBullets} />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
