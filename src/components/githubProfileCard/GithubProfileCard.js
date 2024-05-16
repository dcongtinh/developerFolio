import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

import ReactHtmlParser from 'react-html-parser';

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            {prof.bio && <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2>}
            <div className="location-div">
              <span className="desc-prof">
              {emoji('👨‍💻')} {ReactHtmlParser("<b>Dao Cong Tinh (桃公信)</b>")}
              </span>
            </div>
            <div className="location-div">
              <span className="desc-prof">
                {emoji('💡')} {ReactHtmlParser('Advanced Database System Laboratory (<a href="https://sites.google.com/view/nycu-adsl">ADSL</a>) Lab')}
              </span>
            </div>
            <div className="location-div">
              <span className="desc-prof">
                {emoji('📱 🇻🇳 (+84) 762806851,  🇹🇼 (+886) 933274408')}
              </span>
            </div>
            <div className="location-div">
              <span className="desc-prof">
                {emoji('📬 dcongtinh.ee10@nycu.edu.tw')}
              </span>
            </div>
            {prof.location !== null && (
              <div className="location-div">
                <span className="desc-prof">
                  {emoji("📍 Location: ")} {prof.location}
                </span>
              </div>
            )}

            <div className="location-div">
                <span className="desc-prof">
                  {emoji("📌 Country: ")} Can Tho, Vietnam
                </span>
              </div>
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
