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
      <div className="containerImage">
        {this.props.allPhotosArrayFromApp.map(data => (
          <img
            src={`data:image/png;base64,${data}`}
            alt=""
            width="200"
            height="100"
          />
        ))}
      </div>
    );
  }
}
