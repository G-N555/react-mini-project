import React from "react";

export default class SinglePhoto extends React.Component {
  render() {
    return (
      <div>
        <h1>currentPhoto</h1>
        <img
          src={`data:image/png;base64,${this.props.currentPhoto}`}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
