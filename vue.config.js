// 个人配置webpack文件

const path = require("path");
module.exports = {
  productionSourceMap: false, //打包时不需要.map文件
  outputDir: "./myDist", //设置输出的目录
  publicPath:
    process.env.NODE_ENV === "production" ? "http://www.baidu.com" : "/",
  assetsDir: "assets",
  chainWebpack: (config) => {
    config.resolve.alias.set("_v", path.resolve(__dirname, "src/views"));
  },
  // configWebpack: {

  // },
  devServer: {
    proxy: {
      "/api/chat/sendMsg": {
        target: "http://api.duyiedu.com",
      },
    },
  },
};
