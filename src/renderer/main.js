import 'babel-polyfill';  //让IE支持es6语法,即使这样,vue也仅仅支持IE9+,element2也仅仅支持IE10+
import Vue from 'vue';
import App from './App';

if (process.env.NODE_ENV == 'development') {
  process.env.imgR = 'http://47.99.113.195:3000';
  process.env.BASE_API = 'http://47.99.113.195:3000/api';
} else {
  process.env.imgR = 'http://47.99.113.195:3000';
  process.env.BASE_API = 'http://47.99.113.195:3000/api';
}


import router from './router';
import './assets/font/iconfont.css';    //图标
import iView from 'iview';
import VueLazyload from 'vue-lazyload';   //图片懒加载
import './permission'; // permission control
import './styles/iview-theme.less'; // global css
import './styles/index.scss'; // global css
//moment 将成为全局 this.$moment(xxx).format("YYYY-MM-DD HH:mm:ss")
import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', {value: moment});
//定义一些全局变量,方便获取
import Cookies from 'js-cookie';
Vue.prototype.$Cookies = Cookies;
//定义全局跳转函数
Vue.prototype.goLink = function (url) {
  this.$router.push({
    path: url
  });
};

Vue.use(iView);
Vue.prototype.$Message.config({
  top: 54,
  duration: 3
});
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/imgs/404.png',
  loading: 'static/imgs/404.png',
  attempt: 2, // 如果页面图片加载失败,那么组件会尝试加载第二次,来优化垃圾的图片服务器,
  silent: true //  不打印 BUG
});


if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  template: '<App/>'
}).$mount('#app');
