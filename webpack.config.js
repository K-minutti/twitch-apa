const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: ["babel-polyfill", "./src/client/index.tsx"],
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  optimization: {
    minimize: true,
    removeAvailableModules: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
