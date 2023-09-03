const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", 
  output: {
    filename: "index.js", 
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2", 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  externals: {
    react: "commonjs react", 
    "react-dom": "commonjs react-dom", 
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
