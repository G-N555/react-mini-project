import React, { Component } from "react";
import "../styles/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentView: "AllPhotos", photos: [], selectedPhoto: "" };
  }

  // componentDidMount() {}
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Navbar />
        {this.state.currentView == "AllPhotos" ? (
          <AllPhotos />
        ) : (
          <SinglePhoto />
        )}
      </div>
    );
  }
}
