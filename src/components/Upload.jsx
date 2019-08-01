import React, { Component } from "react";
import "../styles/upload.css";
import _ from "lodash";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.uploadRef = React.createRef();
  }

  componentDidMount() {
    console.log("ref", this.uploadRef);
  }
  render() {
    return (
      <div className="file-upload">
        <form>
          <button type="button">
            <label for="input">Upload</label>
          </button>
          <input
            id="input"
            type="file"
            ref={this.uploadRef}
            onChange={this.props.giveUpload}
          />
        </form>
      </div>
    );
  }
}
