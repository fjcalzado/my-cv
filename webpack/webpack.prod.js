const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const helpers = require("./helpers");

module.exports = (env = {}) =>
  merge(common(env), {
    mode: "production",
    devtool: "none",
    output: {
      filename: `[name]-${helpers.versionName}.js`,
    },
    optimization: {
      minimize: true,
    },
    plugins: [new webpack.HashedModuleIdsPlugin()],
  });
