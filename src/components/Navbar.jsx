import React, { Component } from "react";
import "../styles/navbar.css";
const _ = require("lodash");
import Upload from "./Upload.js";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <form>
          <button onClick={() => this.props.onChange()}>Home</button>
        </form>
        <Upload />
      </div>
    );
  }
}
