import React from "react";

export default class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselContainerDiv">
        <div>
          <img
            className="carouselSingleImage"
            src={`data:image/png;base64,${this.props.fivePhotos[0]}`}
            alt=""
          />
        </div>
        <div>
          <img
            className="carouselSingleImage"
            src={`data:image/png;base64,${this.props.fivePhotos[1]}`}
            alt=""
          />
        </div>
        <div>
          <img
            className="carouselSingleImage"
            src={`data:image/png;base64,${this.props.fivePhotos[2]}`}
            alt=""
          />
        </div>
      </div>
    );
  }
}
