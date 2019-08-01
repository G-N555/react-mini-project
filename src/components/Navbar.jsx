import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import { saveObject } from "../utils";
import RefreshButton from "./Refresh.jsx";
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
          <button type="submit" form="form1" value="Submit">Submit</button>
  */

  render() {
    return (
      <div className="navbar">
        <h1 className="title">HELLO WORLD</h1>
        <form>
          <button
            onClick={e => {
              this.props.changeView(e);
            }}
          >
            Home
          </button>
        </form>
        <Upload giveUpload={this.props.upload} />
        <RefreshButton />
      </div>
    );
  }
}
