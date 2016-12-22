const path = require("path");
const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

    entry: {
      app: ["./app/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    plugins: [new extractTextPlugin("../css/style.css", {allChunks: true})],
    module: {

        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "app"),
                loader: "babel-loader",
                exclude: "node_modules/",
                query: {

                    presets: ["react", "es2015", "stage-0"]

                }

            }, {
                test: /\.(css|scss)$/,
                loader: extractTextPlugin.extract("css!sass")
            }, {

                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: "url?limit=100000&name=[name].[ext]"
            }
        ]
    }
}
