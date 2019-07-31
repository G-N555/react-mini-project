import React, { Component } from "react";
import "../styles/styles.css";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
// import { resolve } from "url";
// import { resolve } from "url";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: true,
      photos: [],
      selectedPhoto: ""
    };
  }

  componentDidMount() {
    // localStorage.removeItem("photos1");
    // localStorage.removeItem("photos");
    if (!localStorage.getItem("photos1")) {
      //Promise all to get all data in the list first.
      listObjects().then(list => {
        const resolvedList = Promise.all(
          list.slice(0, 20).map((
            data //promise.all
          ) => getSingleObject(data.Key))
        );
        //resolve the list and get data
        resolvedList.then(photoData => {
          //then outside //resolve all get single object first. Then
          this.setState({ photos: this.state.photos.concat(photoData) });
          console.log("line35", this.state.photos[0]);
          localStorage["photos1"] = this.state.photos;
          //localStorage["time"] = new Date(); //memcache.redis
        });
      });
    } else {
      const data = localStorage.getItem("photos1").split(",");
      this.setState({ photos: data });
      console.log("successssssss!!!!!");
    }
  }

  changeCurrentViewThroughNavBar = () => {
    this.setState({
      currentView: !this.state.currentView,
      selectedPhoto: this.state.photos[0]
    });
  };

  uploadFileThroughNavBar = event => {
    saveObject(event.target.files[0]);
    //this.setState({photos: data.push(e)})
  };

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Navbar
          changeView={this.changeCurrentViewThroughNavBar}
          upload={this.uploadFileThroughNavBar}
        />
        {this.state.currentView === true ? (
          <AllPhotos allPhotosArrayFromApp={this.state.photos} />
        ) : (
          <SinglePhoto currentPhoto={this.state.selectedPhoto} />
        )}
      </div>
    );
  }
}
