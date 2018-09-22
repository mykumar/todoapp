import React from "react";

export default class SetupOption extends React.Component {
  render() {
    return (
      <div
        className="setup-option col-lg-3"
        onClick={() => {
          if (this.props.data.name === "Admin") {
            this.props.history.push("./admin");
          } else {
            this.props.history.push("./quiz");
          }
        }}
      >
        <img
          alt="options"
          src={this.props.data.image}
          width="120"
          height="120"
        />
        <div className="setup-option-description">{this.props.data.name}</div>
      </div>
    );
  }
}
