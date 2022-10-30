const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const { NODE_ENV } = process.env;

// TODO - file-loader 안 쓰는 것 같으면 삭제해야 한다
module.exports = {
  entry: "./src/app.ts",
  mode: NODE_ENV,
  devtool: "inline-source-map",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: path.resolve(__dirname, "src/assets"),
              publicPath: "/static",
              outputPath: "static",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Dotenv(),
    new NodemonPlugin({
      watch: path.resolve("./dist"),
      script: "./dist/app.js",
    }),
  ],
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
};
