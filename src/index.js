/**
 * 入口文件
 */
import { Vue } from '+/deps/env';
import App from './app';
new Vue({
  el: '#app',
  render: h => h(App)
});
