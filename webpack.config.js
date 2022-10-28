const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./Scripts/main.ts"],
  output: {
    path: path.resolve(__dirname, "./wwwroot/js/"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
        },
        test: /\.ts$/,
        exclude: /node_modules/,
      },
    ],
  },
};
