module.exports = {
  mode: "development",
  entry: "./client/index.js",
  module: {
    rules: [{ test: /\.js?$/, loader: "babel-loader", exclude: /node_modules/ }]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  }
};
