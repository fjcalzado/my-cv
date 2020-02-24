const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const helpers = require("./helpers");

module.exports = (env = {}) => ({
  context: helpers.srcPath,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    mainFields: ["browser", "module", "main"],
  },
  entry: {
    [helpers.bundleName]: ["./app.entrypoint.tsx"],
  },
  output: {
    path: helpers.buildPath,
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      // Generic rule for source code.
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true,
      chunksSortMode: "manual",
      chunks: ["manifest", "vendor", helpers.bundleName],
    }),
    env.report &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "report/report.html",
        generateStatsFile: false,
        // statsFilename: "report/stats.json",
      }),
  ].filter(p => p),
});
