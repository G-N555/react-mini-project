import React, { Component } from "react";
import "../styles/upload.css";
import _ from "lodash";
import { saveObject } from "../utils";
export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.uploadRef = React.createRef();
  }

  upload = file => {
    saveObject(file);
  };

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
            onChange={e => {
              this.upload(e.target.files[0]);
            }}
          />
        </form>
      </div>
    );
  }
}
