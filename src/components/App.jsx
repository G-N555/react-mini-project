import React, { Component } from "react";
import "../styles/styles.css";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "AllPhotos",
      photos: [],
      selectedPhoto: undefined
    };
  }

  componentDidMount() {
    //check for local storage
    listObjects().then(list => {
      list.map(data =>
        getSingleObject(data.Key).then(photoData => {
          localStorage.setItem("photos", photoData);
          this.setState({ photos: this.state.photos.concat(photoData) });
        })
      );
    });
  }

  componentDidUpdate() {
    //localStorage.setItem("photos", this.state.photos);
  }

  changeCurrentViewThroughNavBar = () => {
    this.setState({
      currentView: !this.state.currentView,
      selectedPhoto: this.state.photos[0]
    });
  };

  uploadFileThroughNavBar = event => {
    saveObject(event.target.files[0]);
  };

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Navbar
          changeView={this.changeCurrentViewThroughNavBar}
          upload={this.uploadFileThroughNavBar}
        />
        {this.state.currentView === "AllPhotos" ? (
          <AllPhotos allPhotosArrayFromApp={this.state.photos} />
        ) : (
          <SinglePhoto currentPhoto={this.state.selectedPhoto} />
        )}
      </div>
    );
  }
}
