module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript files
  },
  moduleNameMapper: {
    axios: "axios/dist/axios.min.js",
  },
};
