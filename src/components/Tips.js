import React from "react";
import tipsIcon from "../assets/Helpful_tips_icon.png";
import bettyIcon from "../assets/Payroll_Betty_icon.png";

export default class Tips extends React.Component {
  render() {
    return (
      <div className="tips">
        <div className="tips-image-container">
          <div className="tips-image">
            <img alt="icon" src={tipsIcon} width="55" height="55" />
          </div>
          <div>Helpful Tips</div>
        </div>
        <div className="betty-icon">
          <img alt="icon" src={bettyIcon} width="55" height="55" />
          <div className="betty-text">Payroll Betty</div>
        </div>
        <div className="tips-description">
          <p>
            ...<br />
            Hello...
          </p>
        </div>
      </div>
    );
  }
}
