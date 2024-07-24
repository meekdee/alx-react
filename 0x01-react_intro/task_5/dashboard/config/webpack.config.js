module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, '../dist'),
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // Handles .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  