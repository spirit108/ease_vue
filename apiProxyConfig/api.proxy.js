module.exports = {
  "/api": {
    target: "http://adv.zhangpeiyue.com", //访问的服务器地址
    changeOrigin: true, //true为开启代理
    pathRewrite: {
      "^/api": "/" //路径的替换规则
    }
  },
  "/api/user": {
    target: "http://user.zhangpeiyue.com", //访问的服务器地址
    changeOrigin: true, //true为开启代理
    pathRewrite: {
      "^/user": "/" //路径的替换规则
    }
  }
};
