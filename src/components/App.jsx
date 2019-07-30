import React, { Component } from "react";
import "../styles/styles.css";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentView: "AllPhotos", photos: [], selectedPhoto: "" };
  }

  componentDidMount() {
    listObjects().then(data => {
      this.setState({ photos: data });
    });
  }

  changeCurrentViewThroughNavBar(event) {
    event.preventDefault();
    this.setState({ currentView: "AllPhotos" });
  }

  uploadFileThroughNavBar(file) {}

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Navbar onChange={this.changeCurrentViewThroughNavBar} />
        <AllPhotos allPhotosArrayFromApp={this.state.photos} />
        {/* {this.state.currentView === "AllPhotos" ? (
          <AllPhotos allPhotosArrayFromApp={this.state.photos} />
        ) : (
          <SinglePhoto />
        )} */}
      </div>
    );
  }
}
