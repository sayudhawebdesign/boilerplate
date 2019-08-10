const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            title: "Webpack demo",
        }),

        // Ignore node_modules so CPU usage with poll
        // Watching drops significantly
        // new webpack.WatchIgnorePlugin([
        //     path.join(__dirname, "node_modules")
        // ])
    ],
    devServer: {
        // display only errors to reduce the amount of output
        stats: "errors-only",

        // Parse host and port from env to allow customization
        // 
        // If you use Docker, Vagrant or CLoud9, set 
        // host: "0.0.0.0";
        // 
        // 0.0.0.0 is available to all network devices
        // unlike default 'localhost'.

        host: process.env.HOST, // Defaults to localhost
        port: process.env.PORT=1989, // Defaults to 8080

        open: true, // Open the page in browser
        overlay: true,

        // POLLING INSTEAD OF  WATCHING
        // 
        // Delay the rebuild after the first change
        // aggregateTimeout: 300,
        
        // Poll using interval (in ms, accepts boolean too)
        // poll: 1000,
    },

}