import React, { Component } from "react";
import _ from "lodash";
import { getSingleObject } from "../utils/index.js";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("allphotos", this.props.allPhotosArrayFromApp);
    return (
      <div className="containerDivForImage">
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(0, 5).map((data, i) => (
            <img
              id={i}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(5, 10).map((data, i) => (
            <img
              id={i + 5}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(10, 15).map((data, i) => (
            <img
              id={i + 10}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(15, 20).map((data, i) => (
            <img
              id={i + 15}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(20, 25).map((data, i) => (
            <img
              id={i + 20}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(25, 30).map((data, i) => (
            <img
              id={i + 25}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        {/* <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(35, 40).map((data, i) => (
            <img
              id={i + 30}
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div>
        <div className="columnContainer">
          {this.props.allPhotosArrayFromApp.slice(45, 50).map((data, i) => (
            <img
              key={i}
              src={`data:image/png;base64,${data}`}
              alt=""
              className="singleImageForAllPhotos"
              onClick={e => {
                this.props.changeView(e);
              }}
            />
          ))}
        </div> */}
      </div>
    );
  }
}

/*


*/

{
  /* 
        
        <div className="containerDivForImage">
        {this.props.allPhotosArrayFromApp.forEach(photo => {
          iterateArray.push(photo);
          if (iterateArray.length === 5) {
            return iterateArray.map((data, i) => (
              <img
                key={i}
                src={`data:image/png;base64,${data}`}
                alt=""
                className="singleImageForAllPhotos"
              />
            ));
          }
        })}
      </div>*/
}
