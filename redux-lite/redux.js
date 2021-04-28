class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {
      name: "Joe",
      role: "teacher",
      hairColor: "brown",
      eyeColor: "hazel",
      favoriteMovie: "Avengers End Game"
    };
  }

  getState() {
    return Object.assign({}, this.state);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
  }
}

// let action = {
//       type: "change favorite movie",
//       newMovie: "Zack Snyder's Justice League"
//     }

// const movieReducer = (oldFavMovie = null, action) => {
//   if (action.type === "change favorite movie") {
//     return action.newMovie;
//   } else {
//     return oldFavMovie;
//   }
// }

// let changeEyeColor = {
//     type: "change eye color",
//     newEyeColor: "brown"
// }

// const eyeColorReducer = (oldEyeColor = null, action) => {
//   if (action.type === "change eye color") {
//     return action.newEyeColor;
//   } else {
//     return oldEyeColor;
//   }
// }

const combineReducers = (reducersObj) => {
  return (prevState, action) => {
    const nextState = {};
    Object.keys(reducersObj).forEach( (key) => {
      nextState[key] = reducersObj[key](prevState[key], action);
    });
    return nextState;
  }
}

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch(action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

