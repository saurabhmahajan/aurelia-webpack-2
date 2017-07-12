const { AureliaPlugin } = require("aurelia-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "aurelia-bootstrapper",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [".js"],
        modules: ["src", "node_modules"].map( x => path.resolve(x))
    },

    module:{
        rules:[
            { test: /\.js$/, use: "babel-loader" },
            { test: /\.html$/, use: "html-loader" }
        ]
    },

    plugins: [
        new AureliaPlugin({ includeAll: "src"})
    ]
};