const path = require("path");

const rootPath = path.resolve(__dirname, "../");
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);
const bundleName = process.env.npm_package_name;
const versionName = JSON.stringify(process.env.npm_package_version).replace(/"/g, "");

// Input/Project params.
exports.bundleName = bundleName;
exports.versionName = versionName;
exports.srcPath = resolveFromRootPath("src");
exports.srcFaviconPath = resolveFromRootPath("src", "assets", "favicon");
exports.srcFontsPath = resolveFromRootPath("src", "assets", "fonts");

// Output/Build params.
exports.buildPath = resolveFromRootPath("build");
exports.buildFontsPath = "assets/fonts";
