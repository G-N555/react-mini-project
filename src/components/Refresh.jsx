import React, { Component } from "react";
import "../styles/navbar.css";
const _ = require("lodash");

export default class RefreshButton extends Component {
  constructor(props) {
    super(props);
  }

  refresh(e) {
    e.preventDefault();
    window.location.reload();
  }

  //add refresh button
  // <button
  //         value="Refresh Page"
  //         onClick={this.refresh}
  //         height="200px"
  //         width="200px"
  //       />
  //       <button type="submit" form="form1" value="Submit">Submit</button>

  render() {
    return (
      <div>
        <button onClick={this.refresh}>Refresh</button>
      </div>
    );
  }
}
