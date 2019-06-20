let devProxy = require("./apiProxyConfig/dev.proxy.js");
let apiProxy = require("./apiProxyConfig/api.proxy.js");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: process.env.NODE_ENV == "dev" ? devProxy : apiProxy
};
