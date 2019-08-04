import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("allphotos", this.props.allPhotosArrayFromApp);
    return (
      <div className="containerDivForImage">
        <div className="columnContainer">
          {this.props.photos.slice(0, 5).map((data, i) => (
            <img
              id={i}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeToSingle(e.target.id);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.photos.slice(5, 10).map((data, i) => (
            <img
              id={i + 5}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeToSingle(e.target.id);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.photos.slice(10, 15).map((data, i) => (
            <img
              id={i + 10}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeToSingle(e.target.id);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.photos.slice(15, 20).map((data, i) => (
            <img
              id={i + 15}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeToSingle(e.target.id);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.photos.slice(20, 25).map((data, i) => (
            <img
              id={i + 20}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeToSingle(e.target.id);
              }}
            />
          ))}
        </div>
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
    changeToSingle: id => {
      dispatch({
        type: "CHANGE_SINGLE",
        payload: id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
