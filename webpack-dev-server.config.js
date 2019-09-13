const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config");

const htmlPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: "src/index.html"
});

module.exports = {
  entry: "./src/webpack-dev-server.js",
  plugins: [
    ...config[0].plugins,
    htmlPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: config[0].module,
  devServer: {
    hot: true,
    contentBase: __dirname,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  },
  resolve: {
    alias: {
      "remote-component.config.js": path.resolve("./remote-component.config.js")
    }
  }
};
