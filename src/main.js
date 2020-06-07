// main.js 是主入口文件

import Vue from "vue";
import App from "./App.vue"; //主入口组件
import router from "./router";
import "./assets/styles/reset.css";
import store from "./store";

//生产环境下，是否提示
Vue.config.productionTip = false;

Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  //渲染函数h
  render: (h) => h(App),
}).$mount("#app");
