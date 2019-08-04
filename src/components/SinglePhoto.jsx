import React from "react";
import { connect } from "react-redux";

class SinglePhoto extends React.Component {
  render() {
    return (
      <div>
        <img
          src={`data:image/png;base64,${this.props.selectedPHoto}`}
          alt=""
          width="100%"
          height="100%"
          onClick={() => this.props.changeToAll(!this.props.currentView)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.currentView,
    selectedPHoto: state.selectedPhoto
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeToAll: currentView => {
      dispatch({
        type: "CHANGE_ALL",
        payload: currentView
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePhoto);
