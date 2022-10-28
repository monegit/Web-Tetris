const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./Scripts/Board.js"],
  output: {
    path: path.resolve(__dirname, "./wwwroot/js/"),
    filename: "bundle.js",
  },
  // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
