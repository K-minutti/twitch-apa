const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.tsx"],
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
};
