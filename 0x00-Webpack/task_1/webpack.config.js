const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

// const path = require('path');

// module.exports = {
//   entry: './js/dashboard_main.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//   },
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };
