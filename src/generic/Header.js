import React from "react";
import logo from "../assets/logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="row header">
        <div className="col-lg-12">
          <div className="col-lg-1 logo">
            <div className="logo-new-image">
              <img
                alt="logo"
                className="App-logo"
                src={logo}
                width="70"
                height="57"
              />
            </div>
          </div>
          <div className="col-lg-11 nav-name">
            <div className="header-name">React Todo App</div>
          </div>
        </div>
      </div>
    );
  }
}
