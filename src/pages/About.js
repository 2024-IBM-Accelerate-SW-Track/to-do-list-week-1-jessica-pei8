import React, { Component } from 'react';
import "./About.css";
import profilepic from "../assets/profilepic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                alt="Profile Pic"
                src={profilepic}
              />
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Jessica Pei</div>
              <div className="brief_description">
                <p>As a Dean’s List student and selected Chancellor’s Scholar in the Campus Honors Program at the University of Illinois Urbana-Champaign studying Computer Science, I am committed to honing my skills as a software engineer. You can explore my professional and personal journey on my LinkedIn profile: <a href="https://www.linkedin.com/in/jessica-pei-522339286/">Click Here!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
