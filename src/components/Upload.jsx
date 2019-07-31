import React, { Component } from "react";
import "../styles/upload.css";
import _ from "lodash";

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="file-upload">
        <form>
          <input type="file" onChange={this.props.giveUpload} />
          Upload
        </form>
      </div>
    );
  }
}
