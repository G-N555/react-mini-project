import React from "react";

export default class SinglePhoto extends React.Component {
  render() {
    return (
      <div>
        <img
          src={`data:image/png;base64,${this.props.currentPhoto}`}
          alt=""
          width="100%"
          height="100%"
          onClick={this.props.changeView}
        />
      </div>
    );
  }
}
