import React from "react";
import { connect } from "react-redux";
import { carouselPhoto } from "../redux/actions";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselContainerDiv">
        <div>
          <img
            className="carouselSingleImage"
            src={`data:image/png;base64,${this.props.fivePhotos[0]}`}
            alt=""
            onClick={() => this.props.carouselPhoto}
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

const mapDispatchToProps = dispatch => {
  return {
    carouselPhoto: () => {
      const action = carouselPhoto(this.props.fivePhotos);
      dispatch(action);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Carousel);
