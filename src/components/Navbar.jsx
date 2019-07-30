import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
const _ = require("lodash");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  uploadFileFromInput(file) {}
  render() {
    return (
      <div className="navbar">
        <form>
          <button onClick={() => this.props.onChange()}>Home</button>
        </form>
        <Upload onSubmit={this.uploadFileFromInput} />
      </div>
    );
  }
}
