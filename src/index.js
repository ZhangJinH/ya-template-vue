/**
 * 入口文件
 */
// import '@babel/polyfill';
import { Vue } from '+/deps/env';
import bootstrap from '+/app';
import './app/index';
import storeGenerator from './app/store';
import sitmapGenerator from './app/sitmap';
// import moment from 'moment';
// console.log('test12', moment());
import store from 'store';
console.log('test13', store);
const App = bootstrap({
  initailStore: storeGenerator(),
  initailSitmap: sitmapGenerator()
});
new Vue({
  el: '#app',
  render: h => h(App)
});
