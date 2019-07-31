import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils";
const _ = require("lodash");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  passValueToParent = () => {};

  refresh(e) {
    e.preventDefault();
    window.location.reload();
  }

  //add refresh button
  /*
    <button
            value="Refresh Page"
            onClick={this.refresh}
            height="200px"
            width="200px"
          />
  */

  render() {
    return (
      <div className="navbar">
        <form>
          <h1
            onClick={() => {
              this.props.changeView();
            }}
          >
            Home
          </h1>
        </form>
        <Upload giveUpload={this.props.upload} />
      </div>
    );
  }
}
