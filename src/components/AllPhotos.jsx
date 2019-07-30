import React, { Component } from "react";
import _ from "lodash";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const htmlStringArray = [];
    // this.props.allPhotosArrayFromApp.map(photo => {
    //   getSingleObject(photo.Key).then(data =>
    //     htmlStringArray.push(
    //       <img src={`data:image/png;base64,${data}`} alt="test" />
    //     )
    //   );
    // });

    return (
      <div>
        {this.props.allPhotosArrayFromApp.map(photo => {
          getSingleObject(photo.Key).then(data => (
            <img src={`data:image/png;base64,${data}`} alt="test" />
          ));
        })}
      </div>
    );
  }
}
// <img src={`data:image/png;base64,${data}`} alt="test" />

//  const dataArray = this.props.allPhotosArrayFromApp.map(photo => {
//   getSingleObject(photo.Key).then(data => {
//     console.log(data);
//     return data;
//   });
// });

{
  /* {this.props.allPhotosArrayFromApp.map(photo => {
          getSingleObject(photo.Key).then(data => (
            <img src={`data:image/png;base64,${data}`} alt="test" />
          ));
        })} */
}
{
  /* {htmlStringArray.forEach((htmlTag) => )} */
}
