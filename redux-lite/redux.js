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