/*
 * Copyright 2020 Google LLC

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *  https://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CONFIG = {
  mode: "development",

  entry: {
    app: "./src/app.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/styles.css", to: "styles.css" },
        { from: "src/popup.css", to: "popup.css" },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "map.html",
      template: "./src/map.html",
    }),
  ],
  output: {
    path: __dirname + "/public",
    filename: "index.js",
    publicPath: "/",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};

module.exports = CONFIG;