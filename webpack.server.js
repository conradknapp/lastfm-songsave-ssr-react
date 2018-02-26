module.exports = {
  target: "node",
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [{ test: /\.js?$/, loader: "babel-loader", exclude: /node_modules/ }]
  }
};
