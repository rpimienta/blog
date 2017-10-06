module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }
        ]
      }
    ]
  }
}