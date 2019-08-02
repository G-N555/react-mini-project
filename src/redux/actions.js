// const redux = require("redux");

//set initial state
const getallPhotos = totalPhotos => {
  const photosObj = {
    type: "INITIAL_LOADING",
    payload: totalPhotos
  };
  return photosObj;
};

const carouselPhoto = inputForCarousel => {
  const carouselObject = {
    type: "CAROUSEL_PICTURE",
    payload: inputForCarousel
  };
  return carouselObject;
};

//how is reducer being called
const reducer = (state = [], action) => {
  switch (action.type) {
    case "INITIAL_LOADING": {
      console.log("hello from the actions");
      const copiedState = [...state];
      return copiedState.concat(action.payload);
    }
    case "CAROUSEL_PICTURE": {
      console.log("Hello from Carousel");
    }
    default: {
      return state;
    }
  }
};
// export default reducer

export { reducer, getallPhotos, carouselPhoto };
