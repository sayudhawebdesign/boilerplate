const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            title: "Webpack demo",
        })
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
    },

}