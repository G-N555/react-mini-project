import React, { Component } from "react";
import "../styles/upload.css";
import _ from "lodash";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="file-upload">
        <form>
          <button
          // onClick={(file) =>{
          //   this.props.onSubmit(file)
          // }
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}

//there's an input type for files! its conditional on clicking
//capture, save, display
