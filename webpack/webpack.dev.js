const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const helpers = require("./helpers");

module.exports = (env = {}) =>
  merge(common(env), {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
      contentBase: helpers.buildPath,
      inline: true,
      host: "localhost",
      port: 4300,
      https: true,
      stats: "minimal",
      historyApiFallback: true,
      hot: true,
    },
    optimization: {
      minimize: false,
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  });
