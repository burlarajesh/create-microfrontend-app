const path = require("path");

module.exports = {
    entry: { main: "./src/index.js" },
    mode: "development", // "production" | "development" | "none"
    output: {
        path: path.resolve(__dirname, 'dist'),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "policy.js", // the filename template for entry chunks
        publicPath: "dist/", // string,
        jsonpFunction: 'policyApp'
        // the url to the output directory resolved relative to the HTML page
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["react-hot-loader/babel"]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};