import React, { Component } from "react";
import "../styles/navbar.css";
import Upload from "./Upload.jsx";
import RefreshButton from "./Refresh.jsx";
import { connect } from "react-redux";
const _ = require("lodash");

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  passValueToParent = () => {};

  refresh(e) {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <div className="navbar">
        <h1 className="title">THIS IS REACT-REDUX</h1>
        <form>
          <button
            type="button"
            onClick={() => {
              this.props.changeView();
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
const mapDispatchToProps = dispatch => {
  return {
    changeView: currentView => {
      dispatch({
        type: "CHANGE_VIEW",
        payload: currentView
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
