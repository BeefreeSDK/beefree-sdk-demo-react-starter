module.exports = {
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
