import React, { Component } from "react";
import "../styles/styles.css";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import Carousel from "./Carousel";
import { connect } from "react-redux";

//css on margin sides and between
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
    localStorage.removeItem("photos1");
    const timeDif =
      new Date(localStorage.getItem("time")).getMinutes() + 5 <
      new Date().getMinutes();
    if (!localStorage.getItem("photos1") || timeDif) {
      //Promise all to get all data in the list first.
      listObjects().then(list => {
        const newResolvedList = listObjects().then(list => {
          return list.slice(0, 50);
        });

        newResolvedList.then(list => {
          list.map(data => {
            getSingleObject(data.Key).then(photoData => {
              console.log("we just set state!");
              this.setState({ photos: this.state.photos.concat(photoData) });
              //localStorage["photos1"] = this.state.photos;
              localStorage["time"] = new Date();
            });
          });
        });

        // const resolvedList = Promise.all(
        //   list.slice(0, 20).map((
        //     data //promise.all
        //   ) => getSingleObject(data.Key))
        // );

        // //resolve the list and get data
        // resolvedList.then(photoData => {
        //   //then outside //resolve all get single object first. Then
        //   this.setState({ photos: this.state.photos.concat(photoData) });
        //   localStorage["photos1"] = this.state.photos;
        //   localStorage["time"] = new Date();
        //   console.log("time", localStorage.getItem("time"));
        // });
      });
    } else {
      const data = localStorage.getItem("photos1").split(",");
      this.setState({ photos: this.state.photos });
      console.log("Set succeeded");
    }
  }
  //send up to parent component which photo was selected.
  //at parent: we set state selected photo.

  //send up index & which containe it comes from

  //pop + send to front;
  changeCurrentViewThroughNavBar = e => {
    e.preventDefault();
    console.log("id", e.target.id);
    this.setState({
      currentView: !this.state.currentView,
      selectedPhoto: this.state.photos[e.target.id]
    });
  };

  uploadFileThroughNavBar = event => {
    console.log("input success");
    saveObject(event.target.files[0]);
    //get last element
    let lastPhoto = this.state.photos.slice(this.state.photos);
    //then set state with last element as beginning
    this.setState({ photos: this.state.photos.pop() });
    //this.setState({photos: this.state.photos. event.target.files[0])})
  };

  render() {
    return (
      <div className="app">
        <Navbar
          changeView={this.changeCurrentViewThroughNavBar}
          upload={this.uploadFileThroughNavBar}
        />
        <Carousel fivePhotos={this.state.photos.slice(10, 15)} />
        {this.state.currentView === true ? (
          <AllPhotos
            changeView={this.changeCurrentViewThroughNavBar}
            allPhotosArrayFromApp={this.state.photos}
          />
        ) : (
          <SinglePhoto
            changeView={this.changeCurrentViewThroughNavBar}
            currentPhoto={this.state.selectedPhoto}
          />
        )}
      </div>
    );
  }
}
