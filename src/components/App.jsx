import React, { Component } from "react";
import "../styles/styles.css";
import { listObjects, getSingleObject } from "../utils/index.js";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";
import Carousel from "./Carousel";
import { connect } from "react-redux";

//css on margin sides and between
class App extends Component {
  constructor(props) {
    super(props);
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
              this.props.getAllPhotos(this.props.photos.concat(photoData));
              //localStorage["photos1"] = this.state.photos;
              localStorage["time"] = new Date();
            });
          });
        });
      });
    } else {
      const data = localStorage.getItem("photos1").split(",");
      this.props.getAllPhotos(data);
      console.log("Set succeeded");
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Carousel fivePhotos={this.props.photos.slice(10, 15)} />
        {this.props.currentView === true ? <AllPhotos /> : <SinglePhoto />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPHoto: state.selectedPhoto
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPhotos: photos => {
      dispatch({
        type: "ALL_PHOTO",
        payload: photos
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
