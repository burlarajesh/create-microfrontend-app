const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: ["./ClientApp/src/index.js"]
  },
  devServer: {
    historyApiFallback: true,
},
  mode: "development", // "production" | "development" | "none"
  output: {
    path: path.resolve(__dirname, "./public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "mfe1.js", // the filename template for entry chunks
    //publicPath: "dist/", // string
    jsonpFunction: "mfe1"
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
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    })   
  ]
};
