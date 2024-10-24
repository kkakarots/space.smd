const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 's3d.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'S3d',
    libraryTarget: 'umd',
  },
  // Todo 不需要
  // resolve: {
  //   alias: {
  //     cesium: path.resolve(__dirname, 'libs/Cesium'),
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    // Todo 忽略 Cesium 的 import，目前只找到这种办法
    "../libs/Cesium": 'Cesium',
  }
};
